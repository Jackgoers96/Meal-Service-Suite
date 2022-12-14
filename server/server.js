const express = require('express');
const bodyParser = require('body-parser');//-----------------------< Temporarily disabled >------------------------//-----------------------< Temporarily disabled >------------------------
// require('dotenv').config();//-----------------------< Temporarily disabled >------------------------

const app = express();

// const sessionMiddleware = require('./modules/session-middleware'); //-----------------------< Temporarily disabled >------------------------
// const passport = require('./strategies/user.strategy'); //-----------------------< Temporarily disabled >------------------------

// Body parser middleware
// app.use(bodyParser.json());//-----------------------< Temporarily disabled >------------------------
// app.use(bodyParser.urlencoded({ extended: true }));//-----------------------< Temporarily disabled >------------------------

// Passport Session Configuration //
// app.use(sessionMiddleware); //-----------------------< Temporarily disabled >------------------------

// start up passport sessions
// app.use(passport.initialize()); //-----------------------< Temporarily disabled >------------------------
// app.use(passport.session()); //-----------------------< Temporarily disabled >------------------------

// // Route includes
const menuItemRouter = require('./routes/menuItem.router');
const priceApiRouter = require('./routes/priceApi.router');
const userRouter = require('./routes/user.router');

/* Routes */
// app.use('/api/menuItem', menuItemRouter); // This route handles menuItem related things.//-----------------------< Temporarily disabled >------------------------
// app.use('/api/priceApi', priceApiRouter); // This route handles priceApi related things.//-----------------------< Temporarily disabled >------------------------
// app.use('/api/user', userRouter); // This route handles user related things.//-----------------------< Temporarily disabled >------------------------

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
console.log(`Listening on port: ${PORT}`);
});