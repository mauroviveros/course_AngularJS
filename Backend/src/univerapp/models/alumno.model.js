'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlumnoSchema = Schema({
    _id: Number,
    nombre: String,
    telefono: String,
    direccion: String
}, { collection: 'alumnos' });

module.exports = mongoose.model('Alumno', AlumnoSchema);