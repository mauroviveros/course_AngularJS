'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const APP = express();

const univerapp_routes = require('./univerapp/routes');

APP.use(bodyParser.urlencoded({ extended: false }))
APP.use(bodyParser.json())

APP.use(function (req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

APP.use('/api', univerapp_routes);

module.exports = APP;