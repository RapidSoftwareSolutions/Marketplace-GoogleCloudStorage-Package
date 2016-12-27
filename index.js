"use strict";

global.PACKAGE_NAME = "GoogleCloudStorage";
global.RapidError = function(code, fields) {

    let messages = {
        'FILE_UPLOAD':            'Error with file upload. Please, call support.',
        'REQUIRED_FIELDS':        'Please, check and fill in required fields.',
        'JSON_VALIDATION':        'Syntax error. Incorrect input JSON. Please, check fields with JSON input.',
        'INTERNAL_PACKAGE_ERROR': 'Something went wrong inside the package. Please, call support.'
    }

    this.status_code = code;
    this.status_msg  = messages[code];

    if(/REQUIRED/.test(code))
        this.fields  = fields || [];
}

RapidError.prototype = Object.create(Error.prototype);
RapidError.prototype.constructor = RapidError;

const express  = require('express'),
    bodyParser = require('body-parser'),
    lib        = require('./lib/functions.js'),
    _          = lib.callback;

const PORT     = process.env.PORT || 8080;
const API      = lib.init();
const app      = express();

app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));
app.all(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);

for(let route in API) {
    app.post(`/api/${PACKAGE_NAME}/${route}`, _(function* (req, res) {
        let response;
        let request;
        let r  = {
            callback     : "",
            contextWrites: {}
        };

        try {
            response              = yield API[route](req, res);
            r.callback            = 'success';
            r.contextWrites['to'] = response;
        } catch(e) {
            r.callback            = 'error';
            r.contextWrites['to'] = e.status_code ? e : { status_code: 'API_ERROR', status_msg: e };
        }

        res.status(200).send(r);
    }));
}

process.on(`uncaughtException`, console.error);

app.listen(PORT);
module.exports = app;
