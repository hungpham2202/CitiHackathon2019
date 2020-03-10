import React, { Component } from 'react'
import EventDetailsCard from '../../components/EventDetailsCard';
import { Col, Row } from 'react-bootstrap';

export class UserEventDetails extends Component {
    renderEventDetails() {
        // Get register status of the user
        const registered = true
        const details =
        {
            id: 1,
            name: "Event 1",
            image: "photo1.jpg",
            description: "Description",
            registered: registered,
        }
        return (
            <Col md={4}>
                <EventDetailsCard event={details} />
            </Col> 
        )
    }

    render() {
        return (
            <div className="container mb-4">
                <Row>
                    {this.renderEventDetails()}
                </Row>
            </div>
        )
    }
}

export default UserEventDetails