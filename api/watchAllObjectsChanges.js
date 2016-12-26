const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        accessToken,
        bucket,
        delimiter,
        maxResults,
        pageToken,
        prefix,
        projection,
        versions,
        id,
        resourceId,
        resourceUri,
        token,
        expiration,
        address,
        params,
        payload
    } = req.body.args;
        
    let required = lib.parseReq({accessToken, bucket});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let qs = lib.clearArgs({
        delimiter,
        maxResults,
        pageToken,
        prefix,
        projection,
        versions
    });

    let body = lib.clearArgs({
        kind: 'api#channel',
        type: 'WEBHOOK',
        id,
        resourceId,
        resourceUri,
        token,
        expiration,
        address,
        params,
        payload
    });

    request({
        qs, 
        json: body,
        method: 'POST',
        uri: `https://www.googleapis.com/storage/v1/b/${bucket}/o/watch`,
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