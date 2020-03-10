import React, { Component } from "react";

import AdminEventCard from "../../components/AdminEventCard";
import SearchEventBar from "../../components/SearchEventBar";
import DownloadReportCard from "../../components/DownloadReportCard";
import UserEvent from "../../pages/user/UserEvent";
import CitibankEventHandler from "citibank_event_handler";
import { applyAuthenticationHeaders } from "../../config/config";
import { Button, Col, Row } from "react-bootstrap";

import "./AdminEvents.css";

export class AdminEvents extends Component {
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
    this.switchView = this.switchView.bind(this);
  }

  async deleteEvent(event, id) {
    let deleteEventAPI = applyAuthenticationHeaders(CitibankEventHandler.EventsApi);

    let result = await new Promise((resolve, reject) =>
      deleteEventAPI.eventsDelete(id, (error, data) => {
          if (error) reject(error);
          else resolve(data);
      }),
    );

    console.log(result);
  }

  addEvent() {
    alert("Let's add an event!");
  }

  switchView() {
    let nextView = !this.state.userView;
    this.setState({
      userView: nextView
    });
  }

  render() {
    if (!this.state.userView) {
      return (
        <div style={{ backgroundColor: "#EAEBED" }} className="pt-4">
          <div
            className="container pt-4 pb-4"
            style={{ backgroundColor: "white", boxShadow: "0px 3px 5px #888" }}
          >
            <h2 className="pt-4 pl-4">Hello, admin!</h2>
            <div className="pl-4">
              <SearchEventBar />
              <Button style={{ border: "none" }} href="/admin/events/add">
                Add new event
              </Button>
            </div>
            <Row>
              {this.state.events.map((event, id) => {
                console.log(event);
                return (
                  <Col md={4} key={id}>
                    <AdminEventCard
                      onDeleteEvent={(e) => {
                        this.deleteEvent(e, id)
                      }}
                      event={event}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
          <DownloadReportCard />

          <div
            className="container pb-4"
            onClick={this.switchView}
            style={{
              boxShadow: "0px 3px 5px #888",
              backgroundColor: "white",
              cursor: "pointer"
            }}
          >
            <h3
              style={{
                marginTop: "50px",
                textAlign: "center",
                border: "none",
                color: "black",
                fontSize: "40px"
              }}
            >
              Volunteer View!
            </h3>
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
            <div
              className="container pb-4"
              onClick={this.switchView}
              style={{
                boxShadow: "0px 3px 5px #888",
                backgroundColor: "white",
                cursor: "pointer"
              }}
            >
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
        </div>
      );
  }
}

export default AdminEvents;
