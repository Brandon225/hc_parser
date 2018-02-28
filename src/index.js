'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const xmlParser = require('express-xml-bodyparser');
// const logger = require('morgan');
const routes = require('./routes');

const app = express();

// parse incoming requests
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(xmlParser());
app.use('/api', routes);

// Allow API to be used by browser
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE');
        return res.status(200).json({});
    }
    next();
});

// // catch 404 and forward to error handler
app.use(function (req, res, next) {
    console.log(`File not found!! req? ${req.baseUrl}`);
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
});

// error handler
// define as the last app.use callback
// Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

// listen on port 3000
app.listen(3333, function () {
    console.log('Express app listening on port 3333');
});


