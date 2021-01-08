const { Router } = require('express');
const express = require('express');
const router = express.Router();
// Importing the models to use their database functions.
const burger = require('../models/burger');

// Exporting routes for server.js to use.
module.exports = router;