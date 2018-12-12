'use strict'
const express = require('express');
const app = express();
const port = 3000;

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoute = require('./routes');
const projectRoute = require('./routes/project');

app.use(mainRoute);
app.use('/project', projectRoute);

//Routes
app.get('/about', (req, res) => {
    res.render('about');
});

//app.use((req, res, next)=>{
//    const error = new Error('Not Found');
//    error.status = 404;
//    next(notFound);
//});
//
//app.use((err, req, res, next) => {
//    res.locals.error = err;
//    res.status(err.status);
//    res.render('error', err);
//});

//Port
app.listen(port);
