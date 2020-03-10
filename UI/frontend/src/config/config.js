import ClientOAuth2 from 'client-oauth2';

import CitibankAuthenticator from 'citibank_authenticator';
import CitibankEventHandler from 'citibank_event_handler';
import CitibankReporting from 'citibank_reporting';
import CitibankCommunicator from 'citibank_communicator';
import { getToken } from '../localStorage/LocalStorage';
import EventEmitter from 'events';

export const authenticator = {
    basePath: 'http://authenticator-team1.xmpknwihw4.ap-southeast-1.elasticbeanstalk.com',
    // basePath: 'http://localhost:5000',
    clientId: 'test_client_123',
    clientSecret: 'test_client_password_123',
};

export const authenticatorOAuth2 = new ClientOAuth2({
    clientId: 'test_client_123',
    clientSecret: 'test_client_password_123',
    accessTokenUri: authenticator.basePath + '/oauth/token',
    authorizationUri: authenticator.basePath + '/oauth/authorize',
    redirectUri: 'http://example.com/auth/github/callback',
    scopes: ['user_info'],
});

export function authenticateUser(user, password) {
    var token = user + ':' + password;

    // Should i be encoding this value????? does it matter???
    // Base64 Encoding -> btoa
    var hash = btoa(token);

    return 'Basic ' + hash;
}

export const applyAuthenticationHeaders = apiHeader => {
    let a = new apiHeader();
    a.apiClient.defaultHeaders = {
        Authorization: 'Bearer ' + getToken().access_token,
    };

    return a;
};

export const AuthenticatorEvents = new EventEmitter();
