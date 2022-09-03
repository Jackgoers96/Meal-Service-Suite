const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// // Route includes
const menuItemRouter = require('./routes/menuItem.router');
const priceApiRouter = require('./routes/priceApi.router');
const userRouter = require('./routes/user.router');

/* Routes */
app.use('/api/menuItem', menuItemRouter); // This route handles menuItem related things.
app.use('/api/priceApi', priceApiRouter); // This route handles priceApi related things.
app.use('/api/user', userRouter); // This route handles user related things.

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
console.log(`Listening on port: ${PORT}`);
});