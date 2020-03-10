import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import EventCard from '../components/EventCard';
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Login.css'
export class LandingPage extends Component {
    renderEvents() {

        const loggedIn = false;
        const events = [
            {
                id: "1",
                name: "Event 1",
                eventName: "Beach Clean up",
                image: "photo1.jpg",
                description: "26 Sep 2019"
            },
            {
                id: "2",
                name: "Event 2",
                eventName: "Habitat for Humanity",
                image: "photo2.jpg",
                description: "28 Sep 2019"
            },
            {
                id: "3",
                name: "Event 3",
                eventName: "Flag Day",
                image: "photo3.jpg",
                description: "15 Oct 2019"
            },
            {
                id: "3",
                name: "Event 4",
                eventName: "REACH Team Building",
                image: "photo4.jpg",
                description: "19 Oct 2019"
            },
            {
                id: "4",
                name: "Event 4",
                eventName: "Salvation Army Collection",
                image: "photo5.jpg",
                description: "20 Nov 2019"
            }
        ]
        const EventCards = events.map(event => {
            return (
                <Col md={4}>
                    <EventCard event={event} loggedIn={loggedIn} />
                </Col>
            )
        })
        return EventCards
    }

    render() {
        return (
            <div>
                <div className="login-bg-top pb-4">
                    <div className="container">
                        <div style={{ height: "85vh" }}>
                            <h1 style={{ color: "#013B70", paddingTop: "220px" }}>Welcome to
                        <img
                                    src={require('../assets/citi-logo-black.png')}
                                    style={{ height: "50px" }}
                                    className="ml-3 mr-2 mb-4"
                                />
                                Volunteers</h1>
                            <h3 style={{ color: "#013B70" }}>Scroll down to find out more</h3>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <FontAwesomeIcon style={{ color: "white", fontSize: "50", textAlign: "center" }} icon={faArrowCircleDown} />
                        </div>
                    </div>
                </div>
                <div className="container pb-4">
                    <h3 className="pt-4">Starting your volunteer journey with us!</h3>
                    <Row>
                        {this.renderEvents()}
                    </Row>
                </div>
            </div>
        )
    }
}

export default LandingPage
