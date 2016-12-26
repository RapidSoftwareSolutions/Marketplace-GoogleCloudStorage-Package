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
        ifMetagenerationNotMatch,
        predefinedAcl,
        predefinedDefaultObjectAcl,
        projection,
        location,
        logBucket,
        logObjectPrefix,
        storageClass,
        enableVersioning,
        websiteMainPageSuffix,
        websiteNotFoundPage
    } = req.body.args;

    let { 
        acl,
        cors,
        lifecycle,
        defaultObjectAcl
    } = lib.json({
        acl:              req.body.args['acl'], 
        cors:             req.body.args['cors'], 
        lifecycle:        req.body.args['lifecycle'],
        defaultObjectAcl: req.body.args['defaultObjectAcl']
    });
        
    let required = lib.parseReq({accessToken, bucket});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let qs = lib.clearArgs({
        ifMetagenerationMatch,
        ifMetagenerationNotMatch,
        predefinedAcl,
        predefinedDefaultObjectAcl,
        projection
    });

    let body = lib.clearArgs({
        acl,
        cors,
        defaultObjectAcl,
        lifecycle,
        storageClass,
        website: { mainPageSuffix: websiteMainPageSuffix, notFoundPage: websiteNotFoundPage},
        logging: { logBucket, logObjectPrefix },
        versioning: { enabled: enableVersioning }
    });

    request({
        qs,
        json: body,
        method: 'PUT',
        uri: 'https://www.googleapis.com/storage/v1/b/' + bucket,
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