import React, { Component } from 'react';
import { Form, Button, Spinner, Alert } from 'react-bootstrap';
import CitibankAuthenticator from 'citibank_authenticator';

import { applyAuthenticationHeaders } from '../config/config';
import { getUserID } from '../localStorage/LocalStorage';
export class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            userID: '',
            loading: false,
            errors: {
                username: '',
                email: '',
                userID: '',
            },
            successful: false,
        };
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    async handleSubmit() {
        this.setState({ loading: true });

        let passwordAPI = applyAuthenticationHeaders(CitibankAuthenticator.UserControllerApi);

        this.setState({
            loading: true,
            errors: {},
        });
        try {
            let userObject = await new Promise((resolve, reject) =>
                passwordAPI.resetPasswordUsingGET(
                    this.state.email,
                    this.state.userID,
                    this.state.username,
                    (error, data, response) => {
                        console.log(data);
                        if (error) reject(error);
                        else resolve(data);
                    },
                ),
            );
            this.setState({
                successful: true,
            });
        } catch (e) {
            console.log(e);
            this.setState({
                errors: {
                    username: 'Could not find username.',
                    email: 'Could not find email.',
                    userID: 'Could not find userID.',
                },
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    }

    renderLoading() {
        if (this.state.loading) {
            return (
                <div className="loading-screen">
                    <Spinner animation="border" variant="light" />
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderLoading()}
                <div className="container" style={{ height: '80vh' }}>
                    <h3 className="pt-4 ">Reset my password</h3>
                    {this.state.successful && (
                        <Alert variant={'success'}>
                            <Alert.Heading>Successfully Reset Password</Alert.Heading>Look out for our email in your
                            inbox for more information!
                        </Alert>
                    )}

                    <Form className="pt-4 pb-4">
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter Username"
                                name="username"
                                onChange={this.handleChange.bind(this)}
                                isInvalid={this.state.errors.username}
                            />
                            <Form.Control.Feedback type="invalid">{this.state.errors.username}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                onChange={this.handleChange.bind(this)}
                                isInvalid={this.state.errors.email}
                            />
                            <Form.Control.Feedback type="invalid">{this.state.errors.email}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>User ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter UserID"
                                name="userID"
                                onChange={this.handleChange.bind(this)}
                                isInvalid={this.state.errors.userID}
                            />
                            <Form.Control.Feedback type="invalid">{this.state.errors.userID}</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" disabled={this.state.loading} onClick={this.handleSubmit.bind(this)}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;
