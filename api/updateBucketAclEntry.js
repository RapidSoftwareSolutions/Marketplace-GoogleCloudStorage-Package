const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        accessToken,
        bucket,
        entity,
        role
    } = req.body.args;
        
    let required = lib.parseReq({accessToken, bucket, entity});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let body = lib.clearArgs({role: role.toUpperCase()}); 

    request({
        json: body,
        uri: `https://www.googleapis.com/storage/v1/b/${bucket}/acl/${entity}`,
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