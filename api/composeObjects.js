const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        accessToken,
        destinationBucket,
        destinationObject,
        destinationPredefinedAcl,
        ifGenerationMatch,
        ifMetagenerationMatch
    } = req.body.args;

    let { 
        destination,
        sourceObjects
    } = lib.json({
        destination:   req.body.args['destination'], 
        sourceObjects: req.body.args['sourceObjects']
    });
        
    let required = lib.parseReq({accessToken, destinationBucket, destinationObject});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let qs = lib.clearArgs({
        destinationPredefinedAcl,
        ifGenerationMatch,
        ifMetagenerationMatch
    });

    let body = lib.clearArgs({
        destination,
        sourceObjects,
        kind: 'storage#composeRequest'
    });

    request({
        qs,
        json: body,
        method: 'POST',
        uri: `https://www.googleapis.com/storage/v1/b/${destinationBucket}/o/${destinationObject}/compose`,
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