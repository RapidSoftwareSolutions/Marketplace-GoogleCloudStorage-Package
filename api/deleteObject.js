const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        accessToken,
        bucket,
        object,
        generation,
        ifGenerationMatch,
        ifGenerationNotMatch,
        ifMetagenerationMatch,
        ifMetagenerationNotMatch
    } = req.body.args;
        
    let required = lib.parseReq({bucket, object});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let qs = lib.clearArgs({
        generation,
        ifGenerationMatch,
        ifGenerationNotMatch,
        ifMetagenerationMatch,
        ifMetagenerationNotMatch
    });

    request({
        qs,
        method: 'DELETE',
        uri: `https://www.googleapis.com/storage/v1/b/${bucket}/o/${object}`,
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))  
            defered.resolve({
                status_code: 'SUCCESS', 
                status_msg:  'Successful deleted.'
            });
        else 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
    });

    return defered.promise;
}