import React, { Component } from "react";
import { Form, Button, ButtonToolbar, Row, Col, Table, Figure } from "react-bootstrap";
import RegisteredEventsTable from "../../components/RegisteredEventsTable";

export class RegisteredEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromTime: null,
      toTime: null,
      errors: {
        fromTime: "",
        toTime: ""
      }
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  handleSubmit() {
    console.log("submitted");
  }

  renderEvents() {
    const events = {
      numEvents: 2,
      totalHours: 5,
      fromDate: "2018-12-25",
      toDate: "2019-08-07",
      events: [
        {
          eventId: 1002,
          eventName: "Dog Shelter Cleaning",
          startDateTime: "2018-12-28T10:00:00Z",
          endDateTime: "2018-12-28T12:00:00Z",
          numHours: 2,
          organizerName: "SPCA",
          categoryId: 1,
          eventStatus: "confirmed",
          emailSubscriptionStatus: true,
        },
        {
          eventId: 1005,
          eventName: "Walk the Talk, Walk the Dogs",
          startDateTime: "2019-08-02T01:00:00Z",
          endDateTime: "2019-08-02T04:00:00Z",
          numHours: 3,
          organizerName: "SPCA",
          categoryId: 1,
          eventStatus: "closed",
          emailSubscriptionStatus: false,
        }
      ]
    };

    const EventCards = events.events.map(event => {
      return <RegisteredEventsTable event={event} />;
    });

    return (
      <div>
        <br></br>
        <Table bordered>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Organisation</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Number of hours</th>
              <th>Email Subscription Choice</th>
            </tr>
          </thead>
          <tbody>{EventCards}</tbody>
        </Table>
        <br></br>
        <h3 className="pb-4">Total hours: {events.totalHours} </h3>
        <h3 className="pb-4">Total events: {events.numEvents}</h3>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div
          className="pt-4"
          style={{
            borderRadius: "5px"
          }}
        >
            <div style={{ width: "60%" }} className="pb-2 pt- 2">
              <h3 className="pb-4">My Upcoming Volunteer Events</h3>
            </div>
        </div>

        <div className="container mb-4">
          <Row>
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
            <Col
              md={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button onClick={this.handleSubmit.bind(this)}>Search</Button>
            </Col>
          </Row>
          <Row>{this.renderEvents()}</Row>
        </div>
      </div>
    );
  }
}

export default RegisteredEvents;
