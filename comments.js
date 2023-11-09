// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Data
const comments = [
  {
    id: 1,
    username: 'troll',
    comment: 'test comment'
  },
  {
    id: 2,
    username: 'troll2',
    comment: 'test comment 2'
  }
];