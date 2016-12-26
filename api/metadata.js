module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'GoogleCloudStorage',
        "tagline": "GoogleCloudStorage API Package",
        "keywords": ["API", "data", "database", "google", "storage"],
        "description": "Store and retrieve any amount of data anytime.",
        'image': 'http://logo.clearbit.com/google.com',
        'repo': 'https://github.com/RapidSoftwareSolutions/Marketplace-GoogleCloudStorage-Package',
        'accounts': {
            'domain': 'cloud.google.com',
            'credentials': [
                'accessToken'
            ]
        },
        'blocks': [{
            "name":"deleteBucket",
            "description": "Permanently deletes an empty bucket. ",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "ifMetagenerationMatch",
                    type: "Number",
                    info: "If set, only deletes the bucket if its metageneration matches this value.",
                    required: false
                },
                {
                    name: "ifMetagenerationNotMatch",
                    type: "Number",
                    info: "If set, only deletes the bucket if its metageneration does not match this value.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getSingleBucket",
            "description": "Returns metadata for the specified bucket.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "ifMetagenerationMatch",
                    type: "Number",
                    info: "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.",
                    required: false
                },
                {
                    name: "ifMetagenerationNotMatch",
                    type: "Number",
                    info: "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.",
                    required: false
                },
                {
                    name: "projection",
                    type: "String",
                    info: "Set of properties to return. Defaults to `noAcl`. Acceptable values are: `full`: Include all properties.`noAcl`: Omit owner, acl and defaultObjectAcl properties.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getBucketIamPolicy",
            "description": "Returns an IAM policy for the specified bucket.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"createBucket",
            "description": "Creates a new bucket.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "project",
                    type: "String",
                    info: "A valid API project identifier.",
                    required: true
                },
                {
                    name: "predefinedAcl",
                    type: "String",
                    info: "Apply a predefined set of access controls to this bucket. ",
                    required: false
                },
                {
                    name: "predefinedDefaultObjectAcl",
                    type: "String",
                    info: "Apply a predefined set of default object access controls to this bucket. ",
                    required: false
                },
                {
                    name: "projection",
                    type: "String",
                    info: "Set of properties to return. Defaults to `noAcl`. Acceptable values are: `full`: Include all properties.`noAcl`: Omit owner, acl and defaultObjectAcl properties.",
                    required: false
                },
                {
                    name: "name",
                    type: "String",
                    info: "The name of the bucket.",
                    required: true
                },
                {
                    name: "acl",
                    type: "JSON",
                    info: "JSON Array of Objects. Access controls on the bucket. ",
                    required: false
                },
                {
                    name: "cors",
                    type: "JSON",
                    info: "JSON Array of Objects. The bucket's Cross-Origin Resource Sharing (CORS) configuration. ",
                    required: false
                },
                {
                    name: "defaultObjectAcl",
                    type: "JSON",
                    info: "JSON Array of Objects. Default access controls to apply to new objects when no ACL is provided. ",
                    required: false
                },
                {
                    name: "lifecycle",
                    type: "String",
                    info: "JSON Objects. The bucket's lifecycle configuration. ",
                    required: false
                },
                {
                    name: "location",
                    type: "String",
                    info: "The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to `US`.",
                    required: false
                },
                {
                    name: "logBucket",
                    type: "String",
                    info: "The destination bucket where the current bucket's logs should be placed.",
                    required: false
                },
                {
                    name: "logObjectPrefix",
                    type: "String",
                    info: "A prefix for log object names.",
                    required: false
                },
                {
                    name: "storageClass",
                    type: "String",
                    info: "The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see storage classes. ",
                    required: false
                },
                {
                    name: "enableVersioning",
                    type: "Boolean",
                    info: "While set to true, versioning is fully enabled for this bucket.",
                    required: false
                },
                {
                    name: "websiteMainPageSuffix",
                    type: "String",
                    info: "If the requested object path is missing, the service will ensure the path has a trailing '/', append this suffix, and attempt to retrieve the resulting object. This allows the creation of index.html objects to represent directory pages. ",
                    required: false
                },
                {
                    name: "websiteNotFoundPage",
                    type: "String",
                    info: "If the requested object path is missing, and any mainPageSuffix object is missing, if applicable, the service will return the named object from this bucket as the content for a 404 Not Found result.   ",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getBuckets",
            "description": "Retrieves a list of buckets for a given project.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "project",
                    type: "String",
                    info: "A valid API project identifier.",
                    required: true
                },
                {
                    name: "maxResults",
                    type: "String",
                    info: "Maximum number of buckets to return.",
                    required: false
                },
                {
                    name: "pageToken",
                    type: "String",
                    info: "A previously-returned page token representing part of the larger set of results to view. ",
                    required: false
                },
                {
                    name: "prefix",
                    type: "String",
                    info: "Filter results to buckets whose names begin with this prefix.",
                    required: false
                },
                {
                    name: "projection",
                    type: "String",
                    info: "Set of properties to return. Defaults to `noAcl`. Acceptable values are: `full`: Include all properties.`noAcl`: Omit owner, acl and defaultObjectAcl properties.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"updateBucketIamPolicy",
            "description": "Updates an IAM policy for the specified bucket. ",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "resourceId",
                    type: "String",
                    info: "The ID of the resource to which this policy belongs. Will be of the form buckets/bucket for buckets, and buckets/bucket/objects/object for objects. A specific generation may be specified by appending #generationNumber to the end of the object name, e.g. buckets/my-bucket/objects/data.txt#17. The current generation can be denoted with #0. This field is ignored on input.",
                    required: false
                },
                {
                    name: "bindings",
                    type: "JSON",
                    info: "JSON Array of Objects. An association between a role, which comes with a set of permissions, and members who may assume that role. ",
                    required: false
                },
                {
                    name: "etag",
                    type: "String",
                    info: "HTTP 1.1 Entity tag for the policy.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"testBucketIamPermissions",
            "description": "Tests a set of permissions on the given bucket to see which, if any, are held by the caller.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "permissions",
                    type: "String",
                    info: "Permissions to test.",
                    required: true
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"updateBucket",
            "description": "Updates a new bucket.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "The name of the bucket.",
                    required: true
                },
                {
                    name: "ifMetagenerationMatch",
                    type: "Number",
                    info: "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.",
                    required: false
                },
                {
                    name: "ifMetagenerationNotMatch",
                    type: "Number",
                    info: "Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.",
                    required: false
                },
                {
                    name: "predefinedAcl",
                    type: "String",
                    info: "Apply a predefined set of access controls to this bucket. ",
                    required: false
                },
                {
                    name: "predefinedDefaultObjectAcl",
                    type: "String",
                    info: "Apply a predefined set of default object access controls to this bucket. ",
                    required: false
                },
                {
                    name: "projection",
                    type: "String",
                    info: "Set of properties to return. Defaults to `noAcl`. Acceptable values are: `full`: Include all properties.`noAcl`: Omit owner, acl and defaultObjectAcl properties.",
                    required: false
                },
                {
                    name: "acl",
                    type: "JSON",
                    info: "JSON Array of Objects. Access controls on the bucket. ",
                    required: false
                },
                {
                    name: "cors",
                    type: "JSON",
                    info: "JSON Array of Objects. The bucket's Cross-Origin Resource Sharing (CORS) configuration. ",
                    required: false
                },
                {
                    name: "defaultObjectAcl",
                    type: "JSON",
                    info: "JSON Array of Objects. Default access controls to apply to new objects when no ACL is provided. ",
                    required: false
                },
                {
                    name: "lifecycle",
                    type: "JSON",
                    info: "JSON Array of Objects. The bucket's lifecycle configuration. ",
                    required: false
                },
                {
                    name: "location",
                    type: "String",
                    info: "The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to `US`.",
                    required: false
                },
                {
                    name: "logBucket",
                    type: "String",
                    info: "The destination bucket where the current bucket's logs should be placed.",
                    required: false
                },
                {
                    name: "logObjectPrefix",
                    type: "String",
                    info: "A prefix for log object names.",
                    required: false
                },
                {
                    name: "storageClass",
                    type: "String",
                    info: "The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see storage classes. ",
                    required: false
                },
                {
                    name: "enableVersioning",
                    type: "Boolean",
                    info: "While set to true, versioning is fully enabled for this bucket.",
                    required: false
                },
                {
                    name: "websiteMainPageSuffix",
                    type: "String",
                    info: "If the requested object path is missing, the service will ensure the path has a trailing '/', append this suffix, and attempt to retrieve the resulting object. This allows the creation of index.html objects to represent directory pages. ",
                    required: false
                },
                {
                    name: "websiteNotFoundPage",
                    type: "String",
                    info: "If the requested object path is missing, and any mainPageSuffix object is missing, if applicable, the service will return the named object from this bucket as the content for a 404 Not Found result.   ",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"stopObjectChangeNotifications",
            "description": "Stop receiving object change notifications through this channel.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "id",
                    type: "String",
                    info: "A UUID or similar unique string that identifies this channel.",
                    required: false
                },
                {
                    name: "resourceId",
                    type: "String",
                    info: "An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.   ",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"deleteDefaultObjectAclEntry",
            "description": "Permanently deletes the default object ACL entry for the specified entity on the specified bucket. ",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "entity",
                    type: "String",
                    info: "The entity holding the permission. Can be user-`userId`, user-`emailAddress`, group-`groupId`, group-`emailAddress`, allUsers, or allAuthenticatedUsers.",
                    required: true
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getDefaultObjectAclEntry",
            "description": "Returns the default object ACL entry for the specified entity on the specified bucket. ",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: false
                },
                {
                    name: "entity",
                    type: "String",
                    info: "The entity holding the permission. Can be user-`userId`, user-`emailAddress`, group-`groupId`, group-`emailAddress`, allUsers, or allAuthenticatedUsers.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"createDefaultObjectAclEntry",
            "description": "Creates a new default object ACL entry on the specified bucket.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "entity",
                    type: "String",
                    info: "The entity holding the permission, in one of the following forms: user-`userId`, user-`email`, group-`groupId`, group-`email`, domain-`domain`, project-`team-projectId`, allUsers, allAuthenticatedUsers. ",
                    required: true
                },
                {
                    name: "role",
                    type: "String",
                    info: "The access permission for the entity. Acceptable values are: `OWNER`, `READER`.",
                    required: true
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getDefaultObjectAllAclEntries",
            "description": "Retrieves default object ACL entries on the specified bucket. ",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "ifMetagenerationMatch",
                    type: "Number",
                    info: "If present, only return default ACL listing if the bucket's current metageneration matches this value.",
                    required: false
                },
                {
                    name: "ifMetagenerationNotMatch",
                    type: "Number",
                    info: "If present, only return default ACL listing if the bucket's current metageneration does not match the given value.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"updateDefaultObjectAclEntry",
            "description": "Updates a default object ACL entry on the specified bucket.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "entity",
                    type: "String",
                    info: "The entity holding the permission, in one of the following forms: user-`userId`, user-`email`, group-`groupId`, group-`email`, domain-`domain`, project-`team-projectId`, allUsers, allAuthenticatedUsers. ",
                    required: true
                },
                {
                    name: "role",
                    type: "String",
                    info: "The access permission for the entity. Acceptable values are: OWNER, READER",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"deleteObjectAclEntry",
            "description": "Permanently deletes the ACL entry for the specified entity on the specified object. ",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "entity",
                    type: "String",
                    info: "The entity holding the permission, in one of the following forms: user-`userId`, user-`email`, group-`groupId`, group-`email`, domain-`domain`, project-`team-projectId`, allUsers, allAuthenticatedUsers. ",
                    required: true
                },
                {
                    name: "object",
                    type: "String",
                    info: "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.",
                    required: true
                },
                {
                    name: "generation",
                    type: "String",
                    info: "If present, selects a specific revision of this object (as opposed to the latest version, the default).",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getObjectAclEntry",
            "description": "Returns the ACL entry for the specified entity on the specified object. ",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "entity",
                    type: "String",
                    info: "The entity holding the permission, in one of the following forms: user-`userId`, user-`email`, group-`groupId`, group-`email`, domain-`domain`, project-`team-projectId`, allUsers, allAuthenticatedUsers. ",
                    required: true
                },
                {
                    name: "object",
                    type: "String",
                    info: "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.",
                    required: true
                },
                {
                    name: "generation",
                    type: "String",
                    info: "If present, selects a specific revision of this object (as opposed to the latest version, the default).",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"createObjectAclEntry",
            "description": "Creates a new ACL entry on the specified object.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "entity",
                    type: "String",
                    info: "The entity holding the permission, in one of the following forms: user-`userId`, user-`email`, group-`groupId`, group-`email`, domain-`domain`, project-`team-projectId`, allUsers, allAuthenticatedUsers. ",
                    required: true
                },
                {
                    name: "role",
                    type: "String",
                    info: "The access permission for the entity. Acceptable values are: `OWNER`, `READER`.",
                    required: true
                },
                {
                    name: "object",
                    type: "String",
                    info: "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.",
                    required: true
                },
                {
                    name: "generation",
                    type: "String",
                    info: "If present, selects a specific revision of this object (as opposed to the latest version, the default).",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getObjectAllAclEntries",
            "description": "Retrieves ACL entries on the specified object.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "object",
                    type: "String",
                    info: "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.",
                    required: true
                },
                {
                    name: "generation",
                    type: "String",
                    info: "If present, selects a specific revision of this object (as opposed to the latest version, the default).",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"updateObjectAclEntry",
            "description": "Updates an ACL entry on the specified object.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "entity",
                    type: "String",
                    info: "The entity holding the permission, in one of the following forms: user-`userId`, user-`email`, group-`groupId`, group-`email`, domain-`domain`, project-`team-projectId`, allUsers, allAuthenticatedUsers. ",
                    required: true
                },
                {
                    name: "role",
                    type: "String",
                    info: "The access permission for the entity. Acceptable values are: `OWNER`, `READER`.",
                    required: true
                },
                {
                    name: "object",
                    type: "String",
                    info: "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.",
                    required: true
                },
                {
                    name: "generation",
                    type: "String",
                    info: "If present, selects a specific revision of this object (as opposed to the latest version, the default).",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"composeObjects",
            "description": "Concatenates a list of existing objects into a new object in the same bucket. ",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "destinationBucket",
                    type: "String",
                    info: "Name of the bucket in which to store the new object.",
                    required: true
                },
                {
                    name: "destinationObject",
                    type: "String",
                    info: "Name of the new object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.",
                    required: true
                },
                {
                    name: "destinationPredefinedAcl",
                    type: "String",
                    info: "Apply a predefined set of access controls to the destination object. ",
                    required: true
                },
                {
                    name: "ifGenerationMatch",
                    type: "String",
                    info: "Makes the operation conditional on whether the object's current generation matches the given value.",
                    required: false
                },
                {
                    name: "ifMetagenerationMatch",
                    type: "String",
                    info: "Makes the operation conditional on whether the object's current metageneration matches the given value.",
                    required: false
                },
                {
                    name: "destination",
                    type: "JSON",
                    info: "Properties of the resulting object. ",
                    required: false
                },
                {
                    name: "sourceObjects",
                    type: "JSON",
                    info: "The list of source objects that will be concatenated into a single object.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"copyObject",
            "description": "Copies a source object to a destination object. Optionally overrides metadata. ",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "destinationBucket",
                    type: "String",
                    info: "Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.",
                    required: true
                },
                {
                    name: "destinationObject",
                    type: "String",
                    info: "Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.",
                    required: true
                },
                {
                    name: "sourceBucket",
                    type: "String",
                    info: "Name of the bucket in which to find the source object.",
                    required: true
                },
                {
                    name: "sourceObject",
                    type: "String",
                    info: "Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.",
                    required: true
                },
                {
                    name: "destinationPredefinedAcl",
                    type: "String",
                    info: "Apply a predefined set of access controls to the destination object. ",
                    required: false
                },
                {
                    name: "ifGenerationMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the destination object's current generation matches the given value.",
                    required: false
                },
                {
                    name: "ifGenerationNotMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the destination object's current generation does not match the given value.",
                    required: false
                },
                {
                    name: "ifMetagenerationMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the destination object's current metageneration matches the given value.",
                    required: false
                },
                {
                    name: "ifMetagenerationNotMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the destination object's current metageneration does not match the given value.",
                    required: false
                },
                {
                    name: "ifSourceGenerationMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the source object's generation matches the given value.",
                    required: false
                },
                {
                    name: "ifSourceGenerationNotMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the source object's generation does not match the given value.",
                    required: false
                },
                {
                    name: "ifSourceMetagenerationMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the source object's current metageneration matches the given value.",
                    required: false
                },
                {
                    name: "ifSourceMetagenerationNotMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the source object's current metageneration does not match the given value.",
                    required: false
                },
                {
                    name: "projection",
                    type: "String",
                    info: "Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. Acceptable values are: `full`: Include all properties; `noAcl`: Omit the owner, acl property",
                    required: false
                },
                {
                    name: "sourceGeneration",
                    type: "Number",
                    info: "If present, selects a specific revision of the source object (as opposed to the latest version, the default).",
                    required: false
                },
                {
                    name: "objectResource",
                    type: "JSON",
                    info: "An object resource. ",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"deleteObject",
            "description": "Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used. ",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of the bucket in which the object resides.",
                    required: true
                },
                {
                    name: "object",
                    type: "String",
                    info: "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.",
                    required: true
                },
                {
                    name: "generation",
                    type: "Number",
                    info: "If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).",
                    required: false
                },
                {
                    name: "ifGenerationMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current generation matches the given value.",
                    required: false
                },
                {
                    name: "ifGenerationNotMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current generation does not match the given value.",
                    required: false
                },
                {
                    name: "ifMetagenerationMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current metageneration matches the given value.",
                    required: false
                },
                {
                    name: "ifMetagenerationNotMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current metageneration does not match the given value.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getSingleObject",
            "description": "Retrieves an object or its metadata.",
            "args":[
                                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of the bucket in which the object resides.",
                    required: true
                },
                {
                    name: "object",
                    type: "String",
                    info: "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.",
                    required: true
                },
                {
                    name: "generation",
                    type: "Number",
                    info: "If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).",
                    required: false
                },
                {
                    name: "ifGenerationMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current generation matches the given value.",
                    required: false
                },
                {
                    name: "ifGenerationNotMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current generation does not match the given value.",
                    required: false
                },
                {
                    name: "ifMetagenerationMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current metageneration matches the given value.",
                    required: false
                },
                {
                    name: "ifMetagenerationNotMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current metageneration does not match the given value.",
                    required: false
                },
                {
                    name: "projection",
                    type: "String",
                    info: "Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. Acceptable values are: `full`: Include all properties; `noAcl`: Omit the owner, acl property",
                    required: false
                },
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getObjectIamPolicy",
            "description": "Returns an IAM policy for the specified object.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of the bucket in which the object resides.",
                    required: true
                },
                {
                    name: "object",
                    type: "String",
                    info: "Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.",
                    required: true
                },
                {
                    name: "generation",
                    type: "String",
                    info: "If present, selects a specific revision of this object (as opposed to the latest version, the default).",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"createObject",
            "description": "Stores a new object and metadata. For tips on uploading to Google Cloud Storage, see best practices. ",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.",
                    required: true
                },
                {
                    name: "file",
                    type: "File",
                    info: "File to upload",
                    required: true
                },
                {
                    name: "contentEncoding",
                    type: "File",
                    info: "If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property.",
                    required: false
                },
                {
                    name: "ifGenerationMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current generation matches the given value.",
                    required: false
                },
                {
                    name: "ifGenerationNotMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current generation does not match the given value.",
                    required: false
                },
                {
                    name: "ifMetagenerationMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current metageneration matches the given value.",
                    required: false
                },
                {
                    name: "ifMetagenerationNotMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current metageneration does not match the given value.",
                    required: false
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name of the object.",
                    required: false
                },
                {
                    name: "predefinedAcl",
                    type: "String",
                    info: "Apply a predefined set of access controls to this object. ",
                    required: false
                },
                {
                    name: "projection",
                    type: "String",
                    info: "Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. Acceptable values are: `full`: Include all properties; `noAcl`: Omit the owner, acl property",
                    required: false
                },
                {
                    name: "acl",
                    type: "JSON",
                    info: "Access controls on the object.",
                    required: false
                },
                {
                    name: "cacheControl",
                    type: "String",
                    info: "Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.",
                    required: false
                },
                {
                    name: "contentDisposition",
                    type: "String",
                    info: "Content-Disposition of the object data.",
                    required: false
                },
                {
                    name: "contentEncoding",
                    type: "String",
                    info: "Content-Encoding of the object data.",
                    required: false
                },
                {
                    name: "contentLanguage",
                    type: "String",
                    info: "Content-Language of the object data.",
                    required: false
                },
                {
                    name: "crc32c",
                    type: "String",
                    info: " CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum.",
                    required: false
                },
                {
                    name: "md5Hash",
                    type: "String",
                    info: "MD5 hash of the data; encoded using base64.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "User-provided metadata, in key/value pairs.",
                    required: false
                },
                {
                    name: "storageClass",
                    type: "String",
                    info: "Storage class of the object.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getObjects",
            "description": "Retrieves a list of objects matching the criteria. ",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of the bucket in which to look for objects.",
                    required: true
                },
                {
                    name: "delimiter",
                    type: "String",
                    info: "Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.",
                    required: false
                },
                {
                    name: "maxResults",
                    type: "String",
                    info: "Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested. The default value of this parameter is 1,000 items.",
                    required: false
                },
                {
                    name: "pageToken",
                    type: "String",
                    info: "A previously-returned page token representing part of the larger set of results to view. ",
                    required: false
                },
                {
                    name: "prefix",
                    type: "String",
                    info: "Filter results to objects whose names begin with this prefix.",
                    required: false
                },
                {
                    name: "projection",
                    type: "String",
                    info: "Set of properties to return. Defaults to `noAcl`. Acceptable values are: `full`: Include all properties. `noAcl`: Omit the owner, acl property.",
                    required: false
                },
                {
                    name: "versions",
                    type: "String",
                    info: "If true, lists all versions of an object as distinct results. The default is false.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"rewriteObject",
            "description": "Rewrites a source object to a destination object. Optionally overrides metadata.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "destinationBucket",
                    type: "String",
                    info: "Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.",
                    required: true
                },
                {
                    name: "destinationObject",
                    type: "String",
                    info: "Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if anню",
                    required: true
                },
                {
                    name: "sourceBucket",
                    type: "String",
                    info: "Name of the bucket in which to find the source object.",
                    required: true
                },
                {
                    name: "sourceObject",
                    type: "String",
                    info: "Name of the source object.",
                    required: true
                },
                {
                    name: "destinationPredefinedAcl",
                    type: "String",
                    info: "Apply a predefined set of access controls to the destination object. ",
                    required: false
                },
                {
                    name: "ifGenerationMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the destination object's current generation matches the given value.",
                    required: false
                },
                {
                    name: "ifGenerationNotMatch",
                    type: "String",
                    info: "Makes the operation conditional on whether the destination object's current generation does not match the given value.",
                    required: false
                },
                {
                    name: "ifMetagenerationMatch",
                    type: "String",
                    info: "Makes the operation conditional on whether the destination object's current metageneration matches the given value.",
                    required: false
                },
                {
                    name: "ifMetagenerationNotMatch",
                    type: "String",
                    info: "Makes the operation conditional on whether the destination object's current metageneration does not match the given value.",
                    required: false
                },
                {
                    name: "ifSourceGenerationMatch",
                    type: "String",
                    info: "Makes the operation conditional on whether the source object's generation matches the given value.",
                    required: false
                },
                {
                    name: "ifSourceGenerationNotMatch",
                    type: "String",
                    info: "Makes the operation conditional on whether the source object's generation does not match the given value.",
                    required: false
                },
                {
                    name: "ifSourceMetagenerationMatch",
                    type: "String",
                    info: "Makes the operation conditional on whether the source object's current metageneration matches the given value.",
                    required: false
                },
                {
                    name: "ifSourceMetagenerationNotMatch",
                    type: "String",
                    info: "Makes the operation conditional on whether the source object's current metageneration does not match the given value.",
                    required: false
                },
                {
                    name: "maxBytesRewrittenPerCall",
                    type: "String",
                    info: "The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.",
                    required: false
                },
                {
                    name: "projection",
                    type: "String",
                    info: "Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. Acceptable values are: `full`: Include all properties; `noAcl`: Omit the owner, acl property",
                    required: false
                },
                {
                    name: "rewriteToken",
                    type: "String",
                    info: "Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.",
                    required: false
                },
                {
                    name: "sourceGeneration",
                    type: "String",
                    info: "If present, selects a specific revision of the source object (as opposed to the latest version, the default).",
                    required: false
                },
                {
                    name: "objectResource",
                    type: "JSON",
                    info: "If present, selects a specific revision of the source object (as opposed to the latest version, the default).",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"updateObjectIamPolicy",
            "description": "Updates an IAM policy for the specified object.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of the bucket in which the object resides.",
                    required: false
                },
                {
                    name: "object",
                    type: "String",
                    info: "Name of the object.",
                    required: false
                },
                {
                    name: "generation",
                    type: "String",
                    info: "If present, selects a specific revision of this object (as opposed to the latest version, the default).",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"testObjectIamPermissions",
            "description": "Tests a set of permissions on the given object to see which, if any, are held by the caller. ",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of the bucket in which the object resides.",
                    required: false
                },
                {
                    name: "object",
                    type: "String",
                    info: "Name of the object.",
                    required: false
                },
                {
                    name: "permissions",
                    type: "String",
                    info: "Permissions to test.",
                    required: false
                },
                {
                    name: "generation",
                    type: "String",
                    info: "If present, selects a specific revision of this object (as opposed to the latest version, the default).",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"updateObject",
            "description": "Updates an object's metadata.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of the bucket in which the object resides.",
                    required: true
                },
                {
                    name: "object",
                    type: "String",
                    info: "Name of the object.",
                    required: true
                },
                {
                    name: "generation",
                    type: "Number",
                    info: "If present, selects a specific revision of this object (as opposed to the latest version, the default).",
                    required: false
                },
                {
                    name: "ifGenerationMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current generation matches the given value.",
                    required: false
                },
                {
                    name: "ifGenerationNotMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current generation does not match the given value.",
                    required: false
                },
                {
                    name: "ifMetagenerationMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current metageneration matches the given value.",
                    required: false
                },
                {
                    name: "ifMetagenerationNotMatch",
                    type: "Number",
                    info: "Makes the operation conditional on whether the object's current metageneration does not match the given value.",
                    required: false
                },
                {
                    name: "predefinedAcl",
                    type: "Number",
                    info: "Apply a predefined set of access controls to this object. ",
                    required: false
                },
                {
                    name: "projection",
                    type: "Number",
                    info: "Set of properties to return. Defaults to full. Acceptable values are: `full`: Include all properties; `noAcl`: Omit the owner, acl property.",
                    required: false
                },
                {
                    name: "acl",
                    type: "JSON",
                    info: "Access controls on the object. ",
                    required: false
                },
                {
                    name: "cacheControl",
                    type: "String",
                    info: "Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, `max-age=3600`.",
                    required: false
                },
                {
                    name: "contentDisposition",
                    type: "String",
                    info: "Content-Disposition of the object data. ",
                    required: false
                },
                {
                    name: "contentEncoding",
                    type: "String",
                    info: "Content-Encoding of the object data. ",
                    required: false
                },
                {
                    name: "contentLanguage",
                    type: "String",
                    info: "Content-Language of the object data. ",
                    required: false
                },
                {
                    name: "contentType",
                    type: "String",
                    info: "Content-Type of the object data. If contentType is not specified, object downloads will be served as application/octet-stream. ",
                    required: false
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "User-provided metadata, in key/value pairs.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"watchAllObjectsChanges",
            "description": "Watch for changes on all objects in a bucket.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of the bucket in which to look for objects.",
                    required: true
                },
                {
                    name: "delimiter",
                    type: "String",
                    info: "Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.",
                    required: false
                },
                {
                    name: "maxResults",
                    type: "Number",
                    info: "Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested. The default value of this parameter is 1,000 items.",
                    required: false
                },
                {
                    name: "pageToken",
                    type: "String",
                    info: "A previously-returned page token representing part of the larger set of results to view.",
                    required: false
                },
                {
                    name: "prefix",
                    type: "String",
                    info: "Filter results to objects whose names begin with this prefix.",
                    required: false
                },
                {
                    name: "projection",
                    type: "String",
                    info: "Set of properties to return. Defaults to full. Acceptable values are: `full`: Include all properties; `noAcl`: Omit the owner, acl property.",
                    required: false
                },
                {
                    name: "versions",
                    type: "String",
                    info: "If true, lists all versions of an object as distinct results. The default is false.",
                    required: false
                },
                {
                    name: "id",
                    type: "String",
                    info: "A UUID or similar unique string that identifies this channel.",
                    required: false
                },
                {
                    name: "resourceId",
                    type: "String",
                    info: "An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.",
                    required: false
                },
                {
                    name: "resourceUri",
                    type: "String",
                    info: "A version-specific identifier for the watched resource.",
                    required: false
                },
                {
                    name: "token",
                    type: "String",
                    info: "An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.",
                    required: false
                },
                {
                    name: "expiration",
                    type: "String",
                    info: "Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.",
                    required: false
                },
                /*{
                    name: "type",
                    type: "String",
                    info: "",
                    required: false
                }, WEBHOOK*/
                {
                    name: "address",
                    type: "String",
                    info: "The address where notifications are delivered for this channel.",
                    required: false
                },
                {
                    name: "params",
                    type: "JSON",
                    info: "Additional parameters controlling delivery channel behavior. Optional.",
                    required: false
                },
                {
                    name: "payload",
                    type: "Boolean",
                    info: "A Boolean value to indicate whether payload is wanted. Optional.",   
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"deleteBucketAclEntry",
            "description": "Permanently deletes the ACL entry for the specified entity on the specified bucket.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "entity",
                    type: "String",
                    info: "The entity holding the permission. Can be user-`userId`, user-`emailAddress`, group-`groupId`, group-`emailAddress`, allUsers, or allAuthenticatedUsers.",
                    required: true
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getBucketAclEntry",
            "description": "Returns the ACL entry for the specified entity on the specified bucket.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "entity",
                    type: "String",
                    info: "The entity holding the permission. Can be user-`userId`, user-`emailAddress`, group-`groupId`, group-`emailAddress`, allUsers, or allAuthenticatedUsers.",
                    required: true
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"createBucketAclEntry",
            "description": "Creates a new ACL entry on the specified bucket.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "entity",
                    type: "String",
                    info: "The entity holding the permission. Can be user-`userId`, user-`emailAddress`, group-`groupId`, group-`emailAddress`, allUsers, or allAuthenticatedUsers. ",
                    required: true
                },
                {
                    name: "role",
                    type: "String",
                    info: "The access permission for the entity. Acceptable values are: `OWNER`, `READER`, `WRITER`",
                    required: true
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getBucketAllAclEntries",
            "description": "Retrieves ACL entries on a specified bucket.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"updateBucketAclEntry",
            "description": "Updates an ACL entry on the specified bucket.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "bucket",
                    type: "String",
                    info: "Name of a bucket.",
                    required: true
                },
                {
                    name: "entity",
                    type: "String",
                    info: "The entity holding the permission. Can be user-`userId`, user-`emailAddress`, group-`groupId`, group-`emailAddress`, allUsers, or allAuthenticatedUsers. ",
                    required: true
                },
                {
                    name: "role",
                    type: "String",
                    info: "The access permission for the entity. Acceptable values are: `OWNER`, `READER`, `WRITER`.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }]
    })
};
