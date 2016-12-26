const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        accessToken,
        project,
        maxResults,
        pageToken,
        prefix,
        projection
    } = req.body.args;
        
    let required = lib.parseReq({accessToken, project});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let params = lib.clearArgs({
        project,
        maxResults,
        pageToken,
        prefix,
        projection
    });

    request({
        uri: 'https://www.googleapis.com/storage/v1/b',
        method: 'GET',
        qs: params,
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))  
            defered.resolve(lib.safeParse(reslut));
        else 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
    });

    return defered.promise;
}