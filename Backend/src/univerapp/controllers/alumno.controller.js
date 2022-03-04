'use strict';

const _ = require('underscore');
const Alumno = require('./../models/alumno.model');


const getAlumnos = async(req, res)=>{
    let pageSize = parseInt(req.query.pageSize) || 0;
    let page = parseInt(req.query.page) || 1;
    let skip = parseInt(pageSize * (page - 1));
    let totalPages;
    let hasNext = false;

    try{
        let count = await Alumno.countDocuments();
        if(pageSize > 0 ) totalPAges = Math.ceil(count / pageSize);
        else totalPages = 1;

        hasNext = (page < totalPages);

        let query = Alumno.find();
        query.limit(parseInt(pageSize));
        query.skip(skip);

        let alumnos = await query.exec();
        let _pageInfo = {
            hasNext: hasNext,
            pages: totalPages
        };

        if(!alumnos && !count) throw { code: 404, message: "No hay Alumnos" };
        if(alumnos.length == 0) throw { code: 204, message: "No hay Alumnos para esta pagina", data: [], pageInfo: _pageInfo };

        let _res = { code: 200, message: "OK", data: alumnos, pageInfo: _pageInfo };

        console.log(_res);
        return res.status(_res.code).json(_res);
    } catch(error){
        if(!error.message) error.message = "ERROR";
        if(!error.code) error.code = 500;

        res.status(error.code).json(error);
        console.log(error);
    };
};

const getAlumno = async(req, res)=>{
    let { _id } = req.params;

    try{
        let alumno = await Alumno.findOne({ _id });

        if(!alumno) throw { code: 204, message: "No existe ese Alumno", data: {} };

        let _res = { code: 200, message: "OK", data: alumno };

        console.log(_res);
        return res.status(_res.code).json(_res);
    } catch(error){
        if(!error.message) error.message = "ERROR";
        if(!error.code) error.code = 500;

        res.status(error.code).json(error);
        console.log(error);
    };
};

const upsertAlumno = async(req, res)=>{
    let { _id } = req.params;
    let body = _.pick({
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        direccion: req.body.direccion
    }, _.identity);

    if(!!body.nombre) body.nombre = body.nombre.toUpperCase();

    try{
        if(_.isUndefined(_id)) id = (await Alumno.countDocuments() + 1);
        let alumno = await Alumno.findOneAndUpdate({ _id }, body, { upsert: true });

        let _res = { code: 200, message: "OK", data: alumno };

        console.log(_res);
        return res.status(_res.code).json(_res);
    } catch(error){
        if(!error.message) error.message = "ERROR";
        if(!error.code) error.code = 500;

        res.status(error.code).json(error);
        console.log(error);
    };
};

module.exports = {
    getAlumnos,
    getAlumno,
    upsertAlumno
};