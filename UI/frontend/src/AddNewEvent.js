import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Form, Col, Row, Button, Image } from "react-bootstrap";
import createEvent from "./assets/createEvent.jpg";

// need to check if the user has entered the details

export class AddNewEvent extends Component {
  constructor() {
    super();
    this.state = {
      eventName: null,
      startDateTime: null,
      endDateTime: null,
      minParicipants: "",
      maxParticipants: "",
      organiserName: "", //Need to retrieve organiser info for now put example
      description: null,
      categoryId: null, //Need to decide which number represent which id
      eventStatus: true, //true means the event is open
      errors: {
        startDateTime: "",
        endDateTime: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    const {
      eventName,
      startDateTime,
      endDateTime,
      organiserName,
      description,
      categoryId
    } = this.state;
    {eventName === null
      ? alert("Event Name is empty")
      : console.log("Okay")}
    {(startDateTime === null)
    ? alert("Start Date is empty")
    : console.log("Okay")}
    {(endDateTime === null)
      ? alert("End Date is empty")
      : console.log("Okay")}
    { (organiserName === null)
    ? alert("Your organisation is not register")
    : console.log("Okay")} 
    {(description === null)
    ? alert("Event description is empty")
    : console.log("Okay")}
    {(categoryId === null)
    ? alert("Please indicate a category ID for your event")
    : console.log("Okay");}
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
              <Form>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src={createEvent} fluid />
                </div>

                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control
                    name="eventName"
                    value={this.state.eventName}
                    onChange={this.handleChange}
                    placeholder="Give your event an eye-catching name!"
                  />
                </Form.Group>

                <Row>
                  <Col md={4}>
                    <Form.Label>Start Date & Time</Form.Label>
                    <Form.Control
                      name="startDateTime"
                      type="datetime-local"
                      value={this.state.startDateTime}
                      isInvalid={this.state.errors.startDateTime}
                      onChange={this.handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.startDateTime}
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={4}>
                    <Form.Label>End Date & Time</Form.Label>
                    <Form.Control
                      name="endDateTime"
                      type="datetime-local"
                      value={this.state.endDateTime}
                      isInvalid={this.state.errors.endDateTime}
                      onChange={this.handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.endDateTime}
                    </Form.Control.Feedback>
                  </Col>
                </Row>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>
                    The minimum number of volunteers your event requires
                  </Form.Label>
                  <Form.Control
                    name="minParticipants"
                    size="sm"
                    type="number"
                    placeholder="Optional"
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>
                    The maximum number of volunteers your event can take
                  </Form.Label>
                  <Form.Control
                    name="maxParticipants"
                    size="sm"
                    type="number"
                    placeholder="Optional"
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>
                    Please state which category your event is under
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="categoryId"
                    type="number"
                    onChange={this.handleChange}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description of the Event</Form.Label>
                  <Form.Control
                    name="description"
                    size="sm"
                    type="text"
                    placeholder="Attract more people to join by giving an interesting & fun description of your event!"
                    as="textarea"
                    rows="8"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form>
              <Button
                variant="primary"
                type="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewEvent;
