import React, { Component } from 'react'
import AdminEventDetailsCard from '../../components/AdminEventDetailsCard';
import { Col, Row } from 'react-bootstrap';
import EventUserFeedback from '../../components/EventUserFeedback';

export class AdminEventDetails extends Component {
    renderEventDetails() {
        // Get register status of the user
        const details =
        {
            eventId: 1,
            eventName: "Dog Shelter Cleaning",
            startDateTime: "2015-01-01T10:00:00Z",
            endDateTime: "2015-01-01T12:00:00Z",
            numHours: 2,
            numParticipants: 4,
            organizerName: "SPCA",
            categoryId: 1,
            eventStatus: "closed",
            image: "photo1.jpg",
            description: "c"
        }
        return (
            <Col md={4}>
                <AdminEventDetailsCard event={details} />
            </Col> 
        )
    }

    render() {
        return (
            <div className="container mb-4">
                <Row>
                    {this.renderEventDetails()}
                </Row>

            <div className="container mb-4">
                <Row>
                    <Col md={2} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>

                </Col>
                </Row>
                <EventUserFeedback/>
            </div>
            </div>
        )
    }
}

export default AdminEventDetails