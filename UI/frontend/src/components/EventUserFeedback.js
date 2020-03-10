import React, { Component } from "react";
import { Row, Col, Table } from "react-bootstrap";
import EventUserFeedbackTableItem from "./EventUserFeedbackTableItem";

export class EventUserFeedback extends Component {

  renderEvents() {
    const users = 
    [
        {
          userId: 1002,
          feedbackId: 1,
          eventId: 22,
          userFeedback: "This event is really really good. "
        },
        {
            userId: 1003,
            feedbackId: 1,
            eventId: 22,
            userFeedback: "This event sucksssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
        }
    ];

    const EventCards = users.map(user => {
      return <EventUserFeedbackTableItem user={user} />;
    });

    return (
      <div>
        <br></br>
        <Table bordered>
          <thead>
            <tr>
              <th>Feedback ID</th>
              <th>User ID</th>
              <th>Event ID</th> 
              <th>Feedback</th>         
            </tr>
          </thead>
          <tbody>{EventCards}</tbody>
        </Table>
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
              <h3 className="pb-4">User Feedback</h3>
            </div>
        </div>

        <div className="container mb-4">
          <Row>
            <Col
              md={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>

            </Col>
          </Row>
          <Row>{this.renderEvents()}</Row>
        </div>
      </div>
    );
  }
}

export default EventUserFeedback;
