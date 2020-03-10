import React, { Component } from "react";
import { Form, Button, ButtonToolbar, Row, Col, Table, Figure } from "react-bootstrap";
import EventTable from "../../components/EventTable";
import CitibankAuthenticator from 'citibank_authenticator';
import CitibankReporting from 'citibank_reporting';
import {
  applyAuthenticationHeaders,
} from '../../config/config';
import { getUserID } from "../../localStorage/LocalStorage";

export class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {
        // username: 1,
        // accountType: "Volunteer",
        // emailAddress: "xxxxx@citibank.com",
        // firstName: "Citi",
        // lastName: "Volunteers",
        // dateOfBirth: "03-08-1997",
        // organisationName: "Citibank"
      },
      fromTime: null,
      toTime: null,
      errors: {
        fromTime: "",
        toTime: ""
      }
    };
    this.retrieveAuthenticatorAPI = this.retrieveAuthenticatorAPI.bind(this);
  }

  componentDidMount() {
    this.retrieveAuthenticatorAPI();
    this.retrieveEventHandlerAPI();
  }

  async retrieveAuthenticatorAPI() {
    let userApi = applyAuthenticationHeaders(CitibankAuthenticator.UserControllerApi);

    let userObject = await new Promise((resolve, reject) =>
        userApi.findUserByIdUsingGET(getUserID(), (error, data) => {
            if (error) reject(error);
            else resolve(data);
        }),
    );

    this.setState({
      userProfile: userObject,
    })
  }

  async retrieveEventHandlerAPI() {
    let eventApi = applyAuthenticationHeaders(CitibankReporting.DefaultApi);

    let eventHistory = await new Promise((resolve, reject) =>
      eventApi.getUserHistoricalApi(7, {}, (error, data) => {
        if (error) reject(error);
        else resolve(data);
      }),
    );

    console.log(eventHistory);
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
          eventStatus: "confirmed"
        },
        {
          eventId: 1005,
          eventName: "Walk the Talk, Walk the Dogs",
          startDateTime: "2019-08-02T01:00:00Z",
          endDateTime: "2019-08-02T04:00:00Z",
          numHours: 3,
          organizerName: "SPCA",
          categoryId: 1,
          eventStatus: "closed"
        }
      ]
    };

    const EventCards = events.events.map(event => {
      return <EventTable event={event} />;
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
              <th>Feedback</th>
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
      <div style={{ backgroundColor: "#EAEBED" }}>
        <div
          className="pt-4 pb-4 container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            // height: "80vh"
          }}
        >
          <Row noGutters>
            <Col md={4}>
              <div style={{ width: "90%", backgroundColor: "#fff", paddingTop: "50px", paddingBottom: "50px", paddingLeft: "10px", boxShadow: "0px  3px  8px #888" }} >
                <div className="pb-4">
                  <h3 className="pb-4">Your Profile </h3>
                  <h3>{this.state.userProfile.firstName + " " + this.state.userProfile.lastName}</h3>
                  <h5>{"Username: " + this.state.userProfile.username}</h5>
                  <h5>{"Date of Birth: " + this.state.userProfile.dateOfBirth}</h5>
                  <h5>{"Account Type: " + this.state.userProfile.accountType}</h5>
                  <h5>{"Email: " + this.state.userProfile.emailAddress}</h5>
                  <h5>{"Organization: " + this.state.userProfile.organisationName}</h5>
                </div>
                <ButtonToolbar>
                  <Button variant="success">Edit</Button>
                  &nbsp;
                  <Button variant="danger">Delete</Button>
                </ButtonToolbar>

              </div>
            </Col>
            <Col md={8}>
              <div style={{ boxShadow: "0px  3px  8px #888", paddingLeft: "40px", paddingRight: "40px", paddingTop: "50px", backgroundColor: "white" }}>
                <div style={{ width: "60%" }} className="pb-2 pt- 2">
                  <h3 className="pb-4">Past Volunteer Events</h3>
                </div>
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
            </Col>
          </Row>


        </div>

      </div>
    );
  }
}

export default UserProfile;
