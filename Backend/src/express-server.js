'use strict';

const express = require('express');
const APP = express();

const univerapp_routes = require('./univerapp/routes');

APP.use('/api', univerapp_routes);

module.exports = APP;