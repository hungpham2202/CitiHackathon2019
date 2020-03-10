import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// import './Login.css'
export class Login extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     view: "login",
    //     errors: {
    //         name: "nbame eroor",
    //         email: "emailerror",
    //         password: "password error",
    //         age: "age error",
    //         firstName: "first name error",
    //         lastName: "last name error",
    //         gender: "error", // all errors have test values. set values to nothing to remove errors
    //         organization: "org error"
    //     }
    // }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  handleSubmit() {
    console.log("submitted");
    setInterval(() => {
      this.props.history.push("/user/events");
    }, 1000);
  }

  render() {
    return (
      <div style={{ backgroundColor: "#EAEBED" }}>
        <div
          className="pt-4 pb-4 container"
          style={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            // height: "80vh"
          }}
        >
          <Row noGutters>
            <h3 className="pb-4">Edit Profile</h3>
            <div style={{  width: "100%" }}>
              <Form className="mt-4">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChange.bind(this)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChange.bind(this)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={this.handleChange.bind(this)}
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    onChange={this.handleChange.bind(this)}
                    placeholder="Enter First Name"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    onChange={this.handleChange.bind(this)}
                    placeholder="Enter Last Name"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Organisation</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    onChange={this.handleChange.bind(this)}
                    placeholder="Enter Your Organisation"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    onChange={this.handleChange.bind(this)}
                    placeholder="Enter Your Age"
                  />
                </Form.Group>

                <Button variant="primary" onClick={this.handleSubmit}>
                  Submit
                </Button>
                <a href="/passwordreset">
                  <h6 className="mt-2">Forgot password?</h6>
                </a>
              </Form>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default Login;
