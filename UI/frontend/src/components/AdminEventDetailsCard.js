import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

export class AdminEventDetailsCard extends Component {
    render() {
            return (
                <div className="container text-center mt-4">
                    <Card style={{ width: '70rem' }}>
                        <Card.Img variant="top" src={require("../assets/" + this.props.event.image)} />
                        <Card.Body>
                            <Card.Title>{this.props.event.eventName}</Card.Title>
                            <Card.Title>{"Organizer: " + this.props.event.organizerName}</Card.Title>
                            <Card.Text>
                                {"ID: "+ this.props.event.eventId}
                            </Card.Text>
                            <Card.Text>
                                {"Start time: "+ this.props.event.startDateTime}
                            </Card.Text>
                            <Card.Text>
                                {"End time: "+ this.props.event.endDateTime}
                            </Card.Text>
                            <Card.Text>
                                {"Length: "+ this.props.event.numHours + " hours"}
                            </Card.Text>
                            <Card.Text>
                                {"Number of participants: "+ this.props.event.numParticipants}
                            </Card.Text>
                            <Card.Text>
                                {"Status: "+ this.props.event.eventStatus}
                            </Card.Text>
                            <Card.Text>
                                {this.props.event.description}
                            </Card.Text>    
                        </Card.Body>
                    </Card>
                </div>
            )
    }
}



export default AdminEventDetailsCard
