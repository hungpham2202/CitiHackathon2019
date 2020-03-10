import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Navbar, NavDropdown, Nav, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../App.css';
import {
    clearToken,
    getToken,
    getUserID,
    getAdminStatus,
    setUserID,
    clearAdminStatus,
} from '../localStorage/LocalStorage';
import CitibankAuthenticator from 'citibank_authenticator';
import { applyAuthenticationHeaders, AuthenticatorEvents } from '../config/config';
import { runInThisContext } from 'vm';

export class CustomNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: getUserID() > 0,
            admin: getAdminStatus(),
        };
        this.getUserAPI = this.getUserAPI.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    async getUserAPI() {
        console.log('getUserAPI', getUserID());
        if (getUserID() === undefined) {
            this.setState({
                loggedIn: false,
                admin: false,
            });
            return;
        }

        var api = applyAuthenticationHeaders(CitibankAuthenticator.UserControllerApi);

        let data = await new Promise((resolve, reject) => {
            api.findUserByIdUsingGET(getUserID(), (error, data) => {
                if (error) reject(error);
                else resolve(data);
            });
        });

        this.setState({
            loggedIn: getUserID() > 0,
            admin: getAdminStatus() === true,
        });
    }
    componentDidMount() {
        AuthenticatorEvents.addListener('login', this.getUserAPI);
    }

    componentWillUnmount() {
        AuthenticatorEvents.removeListener('login', this.getUserAPI);
    }

    renderLinks() {
        const token = getToken();
        if (token && this.state.admin) {
            return (
                <div className="mr-auto pl-4 pt-2">
                    <Link
                        className="pl-4 pr-4"
                        to="/admin/events"
                        style={{ color: 'white', backgroundColor: 'transparent', border: 'none' }}
                    >
                        My Events
                    </Link>
                    <Link
                        className="pl-4 pr-4"
                        to="/data/dashboard"
                        style={{ color: 'white', backgroundColor: 'transparent', border: 'none' }}
                    >
                        My Dashboard
                    </Link>
                </div>
            );
        } else if (token && !this.state.admin) {
            return (
                <div className="mr-auto pl-4 pt-2">
                    <Link
                        className="pl-4 pr-4"
                        to="/user/events"
                        style={{ color: 'white', backgroundColor: 'transparent', border: 'none' }}
                    >
                        My Events
                    </Link>
                    <Link
                        className="pl-4 pr-4"
                        to="/user/profile"
                        style={{ color: 'white', backgroundColor: 'transparent', border: 'none' }}
                    >
                        My Profile
                    </Link>
                </div>
            );
        } else {
            return null;
        }
    }

    handleLogout() {
        this.setState({
            loggedIn: false,
            admin: false,
        });
        clearAdminStatus();
        setUserID(undefined);

        this.props.history.push('/login');
    }

    renderButton() {
        if (this.state.loggedIn) {
            return (
                <Link
                    onClick={this.handleLogout}
                    style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }}
                    to="/"
                >
                    Logout
                </Link>
            );
        } else {
            return (
                <Link to="/login" style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }}>
                    Login
                </Link>
            );
        }
    }
    render() {
        return (
            <div>
                <Navbar className="navbar-gradient">
                    <div className="container">
                        <a
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                textDecoration: 'none',
                            }}
                            href="/"
                        >
                            <img src={require('../assets/citi-logo.png')} style={{ height: '6vh' }} />
                            <h3 style={{ color: 'white', paddingTop: 10, paddingLeft: 5 }}>Volunteers</h3>
                        </a>
                        {this.renderLinks()}
                        <div>
                            {this.renderButton()}
                            <FontAwesomeIcon icon={faSignInAlt} style={{ color: 'white' }} />
                        </div>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(CustomNavbar);
