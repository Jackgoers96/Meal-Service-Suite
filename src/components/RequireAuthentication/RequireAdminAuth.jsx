import React from 'react';
import {Routes, Route,  Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {

  const user = {  // This is just for testing, this must be replaced later with a redux store variable
    id: 1,
    access_level: 1
  };

  if (user.id == true && user.access_level >= 2) {

    console.log(`In RequireAdminAuth:\n valid user.id=${user.id},\n access_level=${user.access_level} \n Accepted! go see that new page!`);
    return (
      children
      );
    }
  else if (user.id == true || user.access_level >= 2) {
    console.warn(`In RequireAdminAuth:\n INVALID user.id=${user.id},\n INVALID access_level=${user.access_level} \n DENIED!`);

    return <Navigate to="/login" />; 
  }
  // it's unclear whether Navigation/Redirection to 
   // login should happen here or on App.js
  else return null;
};

export default RequireAuth;


// --------------------------------------------------------------------------------
// This component does work as is, except there is no way to access user data as of right now.
// First a redux store must be created in order to test this accurately, but tests with hardcoded data work great
// --------------------------------------------------------------------------------