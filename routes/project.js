'use strict';
const express = require('express');
const router = express.Router();

const { data } = require('../data/projectData.json');
const { projects } = data;

router.get('/:index', (req, res)=>{
    //getting the params from the url
    const {index} = req.params;
    //passing the request paramiters to project.pug file
    res.render('project', projects[index] );
});




module.exports = router;