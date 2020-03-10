import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../App.css";
import { Form, Col, Row, Button, Image } from "react-bootstrap";
import createEvent from "../assets/createEvent.jpg";

// need to check if the user has entered the details

export class EditPrevEvent extends Component {
  constructor() {
    super();
    this.state = {
      backend_data: [],
      eventName: "",
      startDateTime: "",
      endDateTime: "",
      minParicipants: "",
      maxParticipants: "",
      organiserName: "Example Organise", //Need to retrieve organiser info for now put example
      description: "",
      categoryId: "", //Need to decide which number represent which id
      categoryList: [],
      eventStatus: true, //true means the event is open
      errors: {
        startDateTime: "",
        endDateTime: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  // componentWillMount() {
  //   axios
  //     .get("http://192.168.8.103:8000/events/")
  //     .then((data) => {
  //       this.setState({ contacts: data })
  //     })
  //     .catch(console.log)
  //   }

  handleEnter(event) {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    // console.log('hu');
    // let something = this.state.categoryList;
    // something = something.push(value);
    this.setState({
      categoryList: [...this.state.categoryList, value]
    });
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
    if (
      eventName === "" ||
      startDateTime === "" ||
      endDateTime === "" ||
      organiserName === "" ||
      description === "" ||
      categoryId === ""
    ) {
      alert("Please fill up all the required fills");
    } else {
      console.log("Send the info to the database");
    }
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
                    type="text"
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
                    value={this.state.minParticipants}
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
                    value={this.state.maxParticipants}
                    placeholder="Optional"
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group
                  controlId="formGridState"
                  // onSubmit={this.handleEnter}
                >
                  <Form.Label>
                    Please state which category your event is under
                  </Form.Label>

                  <p
                    style={{
                      display: this.state.categoryList ? "block" : "none"
                    }}
                  >
                    Chosen Categories:
                    {this.state.categoryList.map(catId => {
                      return (
                        <div key={catId.name}>
                          <dd>{catId}</dd>
                          <dt>{catId.name}</dt>
                        </div>
                      );
                    })}
                  </p>
                  <div style={{ display: "flex" }}>
                    <Form.Control
                      name="categoryId"
                      value={this.state.categoryId}
                      size="sm"
                      type="number"
                      placeholder="1: Elderlies, 2: Teaching .."
                      onChange={this.handleChange}
                    />
                    <Button
                      name="categoryId"
                      value={this.state.categoryId}
                      style={{ marginLeft: 5 }}
                      variant="secondary"
                      size="sm"
                      // type="submit"
                      onClick={this.handleEnter}
                    >
                      Enter
                    </Button>
                  </div>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description of the Event</Form.Label>
                  <Form.Control
                    name="description"
                    size="sm"
                    value={this.state.description}
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

              {/* {this.state.description}
              {this.state.startDateTime}
              {this.state.endDateTime}
              {this.state.eventName} */}

              {/* {this.state.categoryList} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPrevEvent;
