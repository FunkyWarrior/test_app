import React from "react";
import {Route, Redirect} from "react-router-dom";

export const PrivateRoute = ({component: Component, protectedRoute, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                const token = localStorage.getItem("userKey");
                if (protectedRoute) {
                    if (!token) {
                        return <Redirect to="/auth"/>;
                    }
                } else if (token && props.location.pathname === '/auth') {
                    return <Redirect to='/'/>
                }
                return <Component {...props} />;
            }}
        />
    )
};