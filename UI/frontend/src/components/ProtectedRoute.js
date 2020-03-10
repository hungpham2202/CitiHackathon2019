import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../localStorage/LocalStorage';

export default function ProtectedRoute({ component: Component, ...rest }) {
    console.log('Trigger protected route...');
    let login = getToken();
    return (
        <Route
            {...rest}
            render={props =>
                true ? ( // TODO: remove !
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/',
                            }}
                        />
                    )
            }
        />
    );
}
