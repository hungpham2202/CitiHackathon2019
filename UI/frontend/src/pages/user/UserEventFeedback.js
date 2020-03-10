import React, { Component } from 'react'
import { Col, Row, Form, Image, Button } from 'react-bootstrap';
import createEvent from "../../assets/createEvent.jpg";

export class UserEventFeedback extends Component {

    handleSubmit() {
        console.log("submitted");
    }

    renderEventFeedback() {
        return (
            <div>
                <h3 className="pb-4 mt-4">Event Feedback </h3>
                <Form md={12}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Event Id:
                        </Form.Label>
                        <Col sm="2">
                        <Form.Control plaintext readOnly defaultValue={this.props.match.params.eventId} />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1" style={{ width: "50vw" }}>
                        <Form.Label>Your Feedback:</Form.Label>
                        <Form.Control as="textarea" rows="3" required/>
                    </Form.Group>
                    <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
                </Form>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <div
                className="pt-4"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px"
                }}
                >
                    <div style={{ justifyContent: "flex-start" }}>
                        <div style={{ width: "50vw" }} className="pb-2 pt-2">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Image src={createEvent} fluid />
                            </div>
                            <Row>
                                {this.renderEventFeedback()}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserEventFeedback