/* Empty JS object to act as endpoint for all routes */
projectData = {};

// Express 
const express = require('express');
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors
const cors = require('cors');
app.use(cors());

/*  the  project folder */
app.use(express.static('website'));


// Callback function to complete GET '/allData'
app.get('/allData', (request, response)=> {
  response.send(projectData);});


// Callback function to complete POST '/addData'
app.post('/addData', (request, response)=> {
 projectData = {...request.body};
 response.send();});


// run the server 
const port = 8000;
const server = app.listen(port, listening);
function listening(){console.log(`running on localhost: ${port}`);};
