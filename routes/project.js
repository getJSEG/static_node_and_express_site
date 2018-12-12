'use strict';
const express = require('express');
const router = express.Router();

const { data } = require('../data/projectData.json');
const { projects } = data;

router.get('/:index', (req, res)=>{
    const {index} = req.params;
    
    res.render('project', projects[index] );
});




module.exports = router;