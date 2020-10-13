// Defining our consts, requiring the express framework, the cors and body-parser nmp packages, plus the routes file. 
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

// We tell the app to use the bodyparser to get any json data received from a post request
// plus the cors function to avoid getting communication dropped from our browser after sending our request
app.use(bodyParser.json()); // support json encoded bodies
app.use(cors());

// We tell our app to which port to listen to
app.listen(8010);

// We configure our app to listen to these requests
routes.configure(app);