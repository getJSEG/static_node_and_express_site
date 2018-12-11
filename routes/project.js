'use strict';
const express = require('express');
const router = express.Router();

router.get('/:name', (req, res)=>{
    
    res.render('project')
});
module.exports = router;