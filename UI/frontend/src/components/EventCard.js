import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import { getToken } from '../localStorage/LocalStorage';
export class EventCard extends Component {
    render() {
        let token = getToken();

        return (
            <div className="container text-center mt-4">
                <Card style={{}}>
                    <Card.Img variant="top" src={'https://source.unsplash.com/random/600x300?' + this.props.event.id} />
                    <Card.Body>
                        <Card.Title>{this.props.event.name}</Card.Title>
                        <Card.Text>{this.props.event.description}</Card.Text>
                        <Card.Text>Organized by: {this.props.event.organizer_name}</Card.Text>
                        <Card.Text>Status: {this.props.event.event_status}</Card.Text>

                        {token ? (
                            <Button variant="primary" href={'/user/events/' + this.props.event.id}>
                                See More
                            </Button>
                        ) : (
                            <Button variant="primary" href={'/login'}>
                                Login to register
                            </Button>
                        )}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default withRouter(EventCard);
