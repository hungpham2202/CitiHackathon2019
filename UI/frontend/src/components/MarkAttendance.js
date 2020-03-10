import React, { Component } from "react";
import { Row, Col, Table } from "react-bootstrap";
import MarkAttendanceTableItem from "./MarkAttendanceTableItem";

export class RegisteredEvents extends Component {

  renderEvents() {
    const users = 
    [
        {
          userId: 1002,
          userFirstName: "Clark",
          userLastName: "Kent",
          userGender: "Male",
          userDOB: "1918-12-28"
        },
        {
            userId: 1003,
            userFirstName: "Illidan",
            userLastName: "Stormrage",
            userGender: "Male",
            userDOB: "1988-2-18"
        }
    ];

    const EventCards = users.map(user => {
      return <MarkAttendanceTableItem user={user} />;
    });

    return (
      <div>
        <br></br>
        <Table bordered>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Mark Attendance</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
          {EventCards}
          </tbody>
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
              <h3 className="pb-4">Give Admin Rights and Attendance for my event</h3>
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

export default RegisteredEvents;
