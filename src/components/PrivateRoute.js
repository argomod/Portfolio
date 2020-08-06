// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import store from 'store';


function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                store.get('loggedIn') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute