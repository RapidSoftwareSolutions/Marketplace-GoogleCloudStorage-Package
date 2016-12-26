const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        accessToken,
        bucket,
        resourceId,
        etag
    } = req.body.args;

    let { bindings } = lib.json({
        bindings: req.body.args['bindings']
    });
        
    let required = lib.parseReq({accessToken, bucket});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let params = lib.clearArgs({
        resourceId,
        bindings,
        etag,
        kind: 'storage#policy'
    });

    request({
        uri: `https://www.googleapis.com/storage/v1/b/${bucket}/iam`,
        method: 'PUT',
        body: params,
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