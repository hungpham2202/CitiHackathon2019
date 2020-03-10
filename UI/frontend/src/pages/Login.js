import React, { Component } from 'react';
import { Form, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
import './Login.css';
import CitibankAuthenticator from 'citibank_authenticator';
import LocalStorage, { setToken, setUserID, setAdminStatus, getAdminStatus } from '../localStorage/LocalStorage';
import {
    authenticator,
    authenticatorOAuth2,
    authenticateUser,
    applyAuthenticationHeaders,
    AuthenticatorEvents,
} from '../config/config';
import { Link } from 'react-router-dom';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            successful: false,
            view: 'login',
            errors: {
                name: '',
                username: '',
                password: '',
                age: '',
                firstName: '',
                lastName: '',
                gender: '', // all errors have test values. set values to nothing to remove errors
                organization: '',
            },
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    async handleSubmit(e) {
        e.preventDefault();

        this.setState({
            loading: true,
        });
        try {
            authenticatorOAuth2.owner.getToken(this.state.username, this.state);
            const data = await fetch(authenticator.basePath + '/oauth/token', {
                method: 'POST',
                body: new URLSearchParams({
                    grant_type: 'password',
                    scope: 'user_info',
                    username: this.state.username,
                    password: this.state.password,
                }),
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    Authorization: authenticateUser(authenticator.clientId, authenticator.clientSecret),
                }),
            });
            let jwtToken = await data.json();
            setToken(jwtToken);

            let userApi = applyAuthenticationHeaders(CitibankAuthenticator.UserControllerApi);

            let userObject = await new Promise((resolve, reject) =>
                userApi.userUsingGET({}, (error, data, response) => {
                    console.log(data);
                    if (error) {
                        reject(error);
                        alert('Login Failed');
                    } else resolve(data);
                }),
            );
            console.log(userObject);
            console.log('Principal: ', userObject.name);
            console.log('Authorities: ', userObject.authorities[0].authority);

            if (userObject.authorities[0].authority == 'admin') setAdminStatus();

            setUserID(userObject.name);
            AuthenticatorEvents.emit('login');
            if (getAdminStatus()) {
                this.props.history.push('/admin/events');
            } else {
                this.props.history.push('/user/events');
            }
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({
                loading: false,
            });
        }
    }

    renderLoadingScreen() {
        if (this.state.loading) {
            return (
                <div className="loading-screen">
                    <Spinner animation="border" variant="light" />
                </div>
            );
        } else {
            return null;
        }
    }
    componentDidMount() {}

    async handleRegister() {
        this.setState({
            loading: true,
        });
        try {
            let userApi = applyAuthenticationHeaders(CitibankAuthenticator.UserControllerApi);

            let userObject = await new Promise((resolve, reject) =>
                userApi.registerNewUserUsingPOST(
                    {
                        username: this.state.username,
                        password: this.state.password,
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        emailAddress: this.state.emailAddress,
                        gender: this.state.gender, // all errors have test values. set values to nothing to remove errors
                        organisationName: this.state.organisationName,
                        dateOfBirth: this.state.dateOfBirth,
                    },
                    (error, data, response) => {
                        console.log(data);
                        if (error) reject(error);
                        else resolve(data);
                    },
                ),
            );
            this.setState({
                successful: true,
                view: 'login',
            });
        } catch (e) {
            alert(e);
            console.log(e);
        } finally {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        return (
            <div className="login-bg p-4">
                {this.renderLoadingScreen()}
                <div
                    className="container"
                    style={{ backgroundColor: '#EAEBED', boxShadow: '5px #888888', borderRadius: '15px' }}
                >
                    <div className="pt-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ justifyContent: 'center', width: '100vw' }}>
                            <div style={{ width: '60%' }} className="pb-2 pt- 2">
                                <h3 className="pb-4">Welcome to Citi Volunteers</h3>
                                {this.state.view == 'login' ? (
                                    <div style={{ height: '65vh', width: '100%' }}>
                                        <button
                                            className="pt-2 pb-2"
                                            style={{
                                                backgroundColor: 'blue',
                                                border: 'none',
                                                width: '50%',
                                                color: 'white',
                                            }}
                                            onClick={() => this.setState({ view: 'login' })}
                                        >
                                            Login
                                        </button>
                                        <button
                                            className="pt-2 pb-2"
                                            style={{ backgroundColor: 'transparent', border: 'none', width: '50%' }}
                                            onClick={() => this.setState({ view: 'register' })}
                                        >
                                            Register
                                        </button>

                                        {this.state.successful && (
                                            <Alert variant={'success'}>
                                                <Alert.Heading>Successfully Registered</Alert.Heading>Let's sign in now!
                                            </Alert>
                                        )}
                                        <Form className="mt-4" onSubmit={this.handleSubmit}>
                                            <Form.Group>
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="username"
                                                    onChange={this.handleChange.bind(this)}
                                                    placeholder="Enter username"
                                                    isInvalid={this.state.errors.username}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.errors.username}
                                                </Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    onChange={this.handleChange.bind(this)}
                                                    isInvalid={this.state.errors.password}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.errors.password}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                            <Link to="/passwordreset">
                                                <h6 className="mt-2">Forgot password?</h6>
                                            </Link>
                                        </Form>
                                    </div>
                                ) : (
                                    <div>
                                        <button
                                            className="pt-2 pb-2"
                                            style={{ backgroundColor: 'transparent', border: 'none', width: '50%' }}
                                            onClick={() => this.setState({ view: 'login' })}
                                        >
                                            Login
                                        </button>
                                        <button
                                            className="pt-2 pb-2"
                                            style={{
                                                backgroundColor: 'blue',
                                                border: 'none',
                                                width: '50%',
                                                color: 'white',
                                            }}
                                            onClick={() => this.setState({ view: 'register' })}
                                        >
                                            Register
                                        </button>
                                        <Form className="mt-4">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control
                                                    type="name"
                                                    placeholder="Enter username"
                                                    onChange={this.handleChange.bind(this)}
                                                    name="username"
                                                    isInvalid={this.state.errors.name}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.errors.name}
                                                </Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    onChange={this.handleChange.bind(this)}
                                                    name="password"
                                                    isInvalid={this.state.errors.password}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.errors.password}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="emailAddress"
                                                    placeholder="Enter email"
                                                    onChange={this.handleChange.bind(this)}
                                                    isInvalid={this.state.errors.emailAddress}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.errors.emailAddress}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Organization</Form.Label>
                                                <Form.Control
                                                    type="name"
                                                    name="organisationName"
                                                    placeholder="Enter organization"
                                                    onChange={this.handleChange.bind(this)}
                                                    isInvalid={this.state.errors.organisationName}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.errors.organisationName}
                                                </Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control
                                                    type="name"
                                                    placeholder="Enter first name"
                                                    onChange={this.handleChange.bind(this)}
                                                    name="firstName"
                                                    isInvalid={this.state.errors.firstName}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.errors.firstName}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter last name"
                                                    onChange={this.handleChange.bind(this)}
                                                    name="lastName"
                                                    isInvalid={this.state.errors.lastName}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.errors.lastName}
                                                </Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Gender</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    placeholder="Select Gender"
                                                    onChange={this.handleChange.bind(this)}
                                                    name="gender"
                                                    isInvalid={this.state.errors.gender}
                                                >
                                                    {' '}
                                                    <Form.Control.Feedback type="invalid">
                                                        {this.state.errors.gender}
                                                    </Form.Control.Feedback>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Date of Birth</Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    placeholder="Enter Date of Birth"
                                                    onChange={this.handleChange.bind(this)}
                                                    name="dateOfBirth"
                                                    isInvalid={this.state.errors.dateOfBirth}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.errors.dateOfBirth}
                                                </Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="User" />
                                            </Form.Group>

                                            <Button
                                                variant="primary"
                                                disabled={this.state.loading}
                                                onClick={this.handleRegister}
                                            >
                                                Submit
                                            </Button>
                                        </Form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
