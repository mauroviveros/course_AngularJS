'use strict';

const express = require('express');

const AlumnoCtrl = require('../controllers/alumno.controller');

const API = express.Router();

API.get('/alumnos', AlumnoCtrl.getAlumnos);
API.get('/alumnos/:_id', AlumnoCtrl.getAlumno);

API.post('/alumnos/:_id', AlumnoCtrl.upsertAlumno);