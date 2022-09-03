const rejectUnauthenticated = (req, res, next) => {  
  // The next parameter is what allows this function to
  // move on to the next step so long as the user passes the conditional statement below.

  // check if logged in
  if (req.isAuthenticated()) {
    // They were authenticated! User may do the next thing
    // Note! They may not be Authorized to do all things
    next();
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
};

module.exports = { rejectUnauthenticated };