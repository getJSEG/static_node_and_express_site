'use strict';
const express = require('express');
const router = express.Router();


const { data } = require('../data/projectData.json');
const { projects } = data;

router.get('/', (req, res) => {
    //passing the dataobjects to index.pug file
   res.render('index', {projects});
});


module.exports = router;