import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
const PublicRoute = ({ isAuthenticaded, component: Component, ...rest }) => {
  return (
    // <Route
    //   {...rest}
    //   component={(props) =>
    //     !isAuthenticaded ? <Component {...props} /> : <Redirect to="/" />
    //   }
    // />
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticaded ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

PublicRoute.propTypes = {
  isAuthenticaded: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
