import React, { Component } from 'react';
import { Button, Card, ButtonToolbar } from 'react-bootstrap';
import { applyAuthenticationHeaders } from '../config/config';
import CitibankEventHandler from 'citibank_event_handler';
import { getUserID } from '../localStorage/LocalStorage';

export class EventDetailsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attendees: [],
        };
        this.registerForEvent = this.registerForEvent.bind(this);
        this.withdrawEvent = this.withdrawEvent.bind(this);

        this.retrieveApis = this.retrieveApis.bind(this);
    }
    componentDidMount() {
        this.retrieveApis();
    }

    async registerForEvent() {
        let attendeeApi = applyAuthenticationHeaders(CitibankEventHandler.RegisterApi);
        const data = await new Promise((resolve, reject) =>
            attendeeApi.registerCreate(
                {
                    attendance: true,
                    feedback: 'Coming',
                    event_id: this.props.event.id,
                    participant_id: getUserID(),
                },
                (error, data) => {
                    if (error) reject(error);
                    else resolve(data);
                },
            ),
        );

        alert('Registered successful');
        await this.retrieveApis();
    }

    async withdrawEvent(id) {
        let attendeeApi = applyAuthenticationHeaders(CitibankEventHandler.RegisterApi);
        const data = await new Promise((resolve, reject) =>
            attendeeApi.registerDelete(id, (error, data) => {
                if (error) reject(error);
                else resolve(data);
            }),
        );

        alert('Withdrawn successful');
        await this.retrieveApis();
    }

    async retrieveApis() {
        let attendeeApi = applyAuthenticationHeaders(CitibankEventHandler.RegisterApi);
        const data = await new Promise((resolve, reject) =>
            attendeeApi.registerList((error, data) => {
                if (error) reject(error);
                else resolve(data);
            }),
        );

        console.log(this.state.attendees);
        this.setState({
            extraData: Math.random(),
            attendees: data.filter(item => item.event_id == this.props.event.id),
        });
    }

    render() {
        return (
            <div className="container text-center mt-4">
                <Card style={{ width: '70rem' }}>
                    <Card.Img
                        variant="top"
                        src={require('../assets/' + this.props.event.image)}
                        style={{ justifyContent: 'center', alignItems: 'center' }}
                    />
                    <Card.Body>
                        <Card.Title>{this.props.event.name}</Card.Title>
                        <Card.Text>Description: {this.props.event.description}</Card.Text>
                        <Card.Text>Organized by: {this.props.event.organizer_name}</Card.Text>
                        <Card.Text>Start date time: {this.props.event.start_date_time}</Card.Text>
                        <Card.Text>End date time: {this.props.event.end_date_time}</Card.Text>
                        <Card.Text>Status: {this.props.event.status}</Card.Text>
                        {this.state.attendees.filter(item => item.participant_id == getUserID()).length > 0 ? (
                            <ButtonToolbar style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="success" disabled>
                                    Registered
                                </Button>
                                &nbsp;
                                <Button
                                    variant="danger"
                                    onClick={() => {
                                        console.log(
                                            this.state.attendees.filter(item => item.participant_id == getUserID())[0],
                                        );
                                        this.withdrawEvent(
                                            this.state.attendees.filter(item => item.participant_id == getUserID())[0]
                                                .id,
                                        );
                                    }}
                                >
                                    Withdraw
                                </Button>
                            </ButtonToolbar>
                        ) : (
                            <Button variant="primary" onClick={this.registerForEvent}>
                                Register
                            </Button>
                        )}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default EventDetailsCard;
