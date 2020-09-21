import React from 'react';
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {

  React.useEffect(() => {
    props.setSigninFormState(true);
  }, []);

  return (
    <Route >
      {
        () => props.loggedIn === true ? <Component {...props} /> : <Redirect to="./signin"/>
      }
    </Route>
  )
};

export default ProtectedRoute;
