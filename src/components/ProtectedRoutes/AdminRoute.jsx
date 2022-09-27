import React from 'react';
import { Route} from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import {useSelector} from 'react-redux';

function ProtectedRoute({ component, children, ...props }) {
  const user = useSelector((store) => store.user);

  // Component may be passed in as a "component" prop,
  // or as a child component.
  const ProtectedComponent = component || (() => children);

  // We return a Route component that gets added to our list of routes
  return (
    <Route
      // all props like 'exact' and 'path' that were passed in
      // are now passed along to the 'Route' Component
      {...props}
    >
    {(user.id && user.access_level >= 2) ?
      // If the user is logged in, and the access level is >= 2, show the protected component
        <ProtectedComponent />
        :
        // Otherwise, redirect to the Loginpage
        <LoginPage />
      }
    </Route>

  );
}

export default ProtectedRoute;