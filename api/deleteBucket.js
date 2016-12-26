const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        accessToken,
        bucket,
        ifMetagenerationMatch,
        ifMetagenerationNotMatch
    } = req.body.args;
        
    let required = lib.parseReq({accessToken, bucket});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let params = lib.clearArgs({
        ifMetagenerationMatch,
        ifMetagenerationNotMatch
    }, true);

    request({
        uri: 'https://www.googleapis.com/storage/v1/b/' + bucket,
        method: 'DELETE',
        qs: params,
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))  
            defered.resolve({
                status_code: 'SUCCESS', 
                status_msg:  'Bucket deleted.'
            });
        else 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
    });

    return defered.promise;
}