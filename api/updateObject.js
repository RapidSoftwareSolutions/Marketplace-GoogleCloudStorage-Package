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
        ifMetagenerationNotMatch,
        predefinedAcl,
        projection,
        cacheControl,
        contentDisposition,
        contentEncoding,
        contentLanguage,
        contentType,
    } = req.body.args;

    let { acl, metadata } = lib.json({
        acl:      req.body.args['acl'],
        metadata: req.body.args['metadata']
    });
        
    let required = lib.parseReq({accessToken, bucket, object});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let qs = lib.clearArgs({
        generation,
        ifGenerationMatch,
        ifGenerationNotMatch,
        ifMetagenerationMatch,
        ifMetagenerationNotMatch,
        predefinedAcl,
        projection
    });

    let body = lib.clearArgs({
        acl,
        cacheControl,
        contentDisposition,
        contentEncoding,
        contentLanguage,
        contentType,
        metadata
    });

    request({
        qs, 
        json: body,
        uri: `https://www.googleapis.com/storage/v1/b/${bucket}/o/${object}`,
        method: 'PUT',
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