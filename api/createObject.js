// TODO

const Q       = require('q');
const fs      = require('fs');
const lib     = require('../lib/functions.js');
const path    = require('path');
const spawn   = require('child_process').spawnSync;
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        accessToken,
        bucket,
        file,
        ifGenerationMatch,
        ifGenerationNotMatch,
        ifMetagenerationMatch,
        ifMetagenerationNotMatch,
        name,
        predefinedAcl,
        projection,
        cacheControl,
        contentDisposition,
        contentEncoding,
        contentLanguage,
        crc32c,
        md5Hash,
        storageClass
    } = req.body.args;

    let { 
        acl,
        metadata,
    } = lib.json({
        acl:      req.body.args['acl'],
        metadata: req.body.args['metadata']
    });
        
    let required = lib.parseReq({accessToken, bucket});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let qs = lib.clearArgs({
        uploadType: 'resumable',
        ifGenerationMatch,
        ifGenerationNotMatch,
        ifMetagenerationMatch,
        ifMetagenerationNotMatch,
        name,
        predefinedAcl,
        projection,
    });

    let body = lib.clearArgs({
        acl,
        cacheControl,
        contentDisposition,
        contentEncoding,
        contentLanguage,
        crc32c,
        md5Hash,
        name,
        metadata,
        storageClass
    });

    let resumableUpload = (length, location) => request({
        uri: location,
        method: 'POST',
        headers: {
            'Content-Length': length
        }
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode)) {
            defered.resolve(lib.safeParse(reslut));       
        } else { 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
        }
    });

    let dowload = (location) => {
        let attach = spawn(process.execPath, [require.resolve('../lib/download.js'), file]);

        if(!attach.stderr.toString()) {
            let response = JSON.parse(attach.stdout.toString());
            let length   = response.length;
            var fn       = path.resolve('./lib', response.message);

            if(!response.success)
                throw new RapidError('FILE_UPLOAD');

            fs.createReadStream(fn)
            .pipe(
                resumableUpload(length, location)
            )
            .on('end', () => fs.unlink(fn, () => {}));
        } else {
            // ...
            throw new RapidError('INTERNAL_PACKAGE_ERROR');
        }
    }

    request({
        qs,
        json: body,
        method: 'POST',
        uri: `https://www.googleapis.com/upload/storage/v1/b/${bucket}/o`,
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode)) {
            if(!response.caseless.dict['x-guploader-uploadid']) 
                defered.reject({
                    status_code: 'API_ERROR', 
                    status_msg: 'Upload id is undefined.'
                });
            dowload(response.caseless.dict.location);        
        } else { 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
        }
    });

    return defered.promise;
}