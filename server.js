// Import Dependencies
const express = require('express');
const cors = require('cors');

// Import JSON files
const projects = require('./data/projects.json');
const about = require('./data/about.json');

// Create the App objects
const app = express();

// Middleware
app.use(cors());

// Home Route for Testing
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Route for retrieving projects
app.get('/projects', (req, res) => {
  // Send projects via JSON
  res.json(projects);
});

// Route for retrieving About info
app.get('/about', (req, res) => {
  // Send about via JSON
  res.json(about);
});

// PORT Variable
const PORT = process.env.PORT || 4000;

// Server Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
