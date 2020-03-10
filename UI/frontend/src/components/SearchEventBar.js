import React, { Component } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

export class SearchEventBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fromTime: null,
            toTime: null,
            errors: {
                fromTime: "",
                toTime: ""
            }
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    handleSubmit() {
        console.log("submitted")
    }

    render() {
        return (
            <Form>
                <Row className="pl-2 pr-2">
                    <Col md={2}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Event name" />
                    </Col>
                    <Col md={2}>
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Event category" />
                    </Col>
                    <Col md={3}>
                        <Form.Group style={{ flex: 1 }} className="pr-2 pl-2">
                            <Form.Label>From Time</Form.Label>
                            <Form.Control
                                name="fromTime"
                                type="date"
                                placeholder="From Time"
                                isInvalid={this.state.errors.fromTime}
                                onChange={this.handleChange.bind(this)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {this.state.errors.fromTime}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group style={{ flex: 1 }} className="pr-2 pl-2">
                            <Form.Label>To Time</Form.Label>
                            <Form.Control
                                name="toTime"
                                type="date"
                                placeholder="To Time"
                                isInvalid={this.state.errors.toTime}
                                onChange={this.handleChange.bind(this)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {this.state.errors.toTime}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button
                            onClick={this.handleSubmit.bind(this)}
                        >Search</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}



export default SearchEventBar
