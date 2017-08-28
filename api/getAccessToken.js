const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let {
        apiKey,
        apiSecret,
        grant_type='authorization_code',
        code,
        redirectUrl
    } = req.body.args;


    if(!apiKey || !apiSecret || !code ||!redirectUrl) {
        throw new RapidError('REQUIRED_FIELDS_OR', ['apiKey', 'apiSecret', 'code', 'redirectUrl']);
    }

    let params = lib.clearArgs({
        document: {
            client_id: apiKey,
            client_secret: apiSecret,
            code: code,
            redirect_uri: redirectUrl,
            grant_type: grant_type
        }
    }, true);

    request({
        uri: 'https://www.googleapis.com/oauth2/v4/token?grant_type=authorization_code&client_id='+apiKey+'&client_secret='+apiSecret+'&code='+code+'&redirect_uri='+redirectUrl,
        method: 'POST',
        body: JSON.stringify(params)
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))
            defered.resolve(lib.safeParse(reslut));
        else
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
    });

    return defered.promise;
}
