import React, { Component } from "react";

import AdminEventCard from "../../components/AdminEventCard";
import SearchEventBar from "../../components/SearchEventBar";
import DownloadReportCard from "../../components/DownloadReportCard";
import CitibankEventHandler from "citibank_event_handler";
import { applyAuthenticationHeaders } from "../../config/config";
import { Button, Col, Row } from "react-bootstrap";

import "./AdminEvents.css";

export class UserEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      fromDate: "2014-01-01",
      endDate: "2016-01-01"
    };
    this.retrieveAPI = this.retrieveAPI.bind(this);
  }

  componentDidMount() {
    this.retrieveAPI();
  }

  async retrieveAPI() {
    let eventapi = applyAuthenticationHeaders(CitibankEventHandler.EventsApi);
    let eventobject = await new Promise((resolve, reject) =>
      eventapi.eventsList((error, data) => {
        if (error) reject(error);
        else resolve(data);
      })
    );
    this.setState({
      events: eventobject,
      userView: false
    });
    /*constructor(props) {
    super(props);

    this.state = {
      events: [
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
          image: "photo1.jpg"
        },
        {
          eventId: 2,
          eventName: "Beach Cleaning",
          startDateTime: "2017-01-01T10:00:00Z",
          endDateTime: "2017-01-01T13:00:00Z",
          numHours: 3,
          numParticipants: 4,
          organizerName: "NEA",
          categoryId: 2,
          eventStatus: "confirmed",
          image: "photo2.jpg"
        }
      ],
      
    };*/

    this.deleteEvent = this.deleteEvent.bind(this);
  }

  deleteEvent(e) {
    //handle delete events
    const newEvents = this.state.events;
    newEvents.splice(newEvents.indexOf(e.target.value), 1);
    this.setState({
      events: newEvents
    });
  }

  addEvent() {
    alert("Let's add an event!");
  }

  render() {
    if (!this.state.userView) {
      return (
        <div style={{ backgroundColor: "#EAEBED" }} className="pt-4">
          <div
            className="container pt-4 pb-4"
            style={{ backgroundColor: "white", boxShadow: "0px 3px 5px #888" }}
          >
            <h2 className="pt-4 pl-4">Hello, Handsome User</h2>
            <div className="pl-4">
              <SearchEventBar />
            </div>
            <Row>
              {this.state.events.map((event, id) => {
                console.log(event);
                return (
                  <Col md={4} key={id}>
                    <AdminEventCard
                      onDeleteEvent={this.deleteEvent}
                      event={event}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>

          </div>
      );
    } else
      return (
        <div style={{ backgroundColor: "#EAEBED" }}>
          <div className="container">
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "0px 3px 5px #888"
              }}
            >
              <div className="mr-auto p-3">
                <h3>Welcome, admin!</h3>
              </div>

              <SearchEventBar />
            </div>
            <UserEvent />

              <h3
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                  border: "none",
                  color: "black",
                  fontSize: "40px"
                }}
              >
                Admin View!
              </h3>
            </div>
          </div>
      );
  }
}

export default UserEvent;