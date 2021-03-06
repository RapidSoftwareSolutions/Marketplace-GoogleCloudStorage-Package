[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/GoogleCloudStorage/functions?utm_source=RapidAPIGitHub_GoogleCloudFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# GoogleCloudStorage Package
Store and retrieve any amount of data anytime.
* Domain: cloud.google.com
* Credentials: apiKey, apiSecret

## How to get `apiKey`:
 0. [Go to the projects page](https://console.cloud.google.com/iam-admin/projects)
 1. Select or create a Cloud Platform Console project.
 2. [Enable billing](https://support.google.com/cloud/answer/6293499#enable-billing) for your project.
 3. Click ***Continue*** to enable the Translate API and any related services.
 4. On the ***Credentials*** page, get an ***API key*** (select Browser key when prompted). _Note: If you have an existing API key, you can use that key._


## Custom datatypes:
 |Datatype|Description|Example
 |--------|-----------|----------
 |Datepicker|String which includes date and time|```2016-05-28 00:00:00```
 |Map|String which includes latitude and longitude coma separated|```50.37, 26.56```
 |List|Simple array|```["123", "sample"]```
 |Select|String with predefined values|```sample```
 |Array|Array of objects|```[{"Second name":"123","Age":"12","Photo":"sdf","Draft":"sdfsdf"},{"name":"adi","Second name":"bla","Age":"4","Photo":"asfserwe","Draft":"sdfsdf"}] ```

 ## GoogleCloudStorage.getAccessToken
 Generate access token

 | Field                | Type       | Description
 |----------------------|------------|----------
 | apiKey          | credentials| Google Cloud apiKey
 | apiSecret          | credentials| Google Cloud apiSecret
 | code          | String| Code provided by user
 | redirectUrl          | String| Redirect URL for your application

## GoogleCloudStorage.deleteBucket
Permanently deletes an empty bucket.

| Field                   | Type       | Description
|-------------------------|------------|----------
| accessToken             | credentials| Google Cloud Access Token
| bucket                  | String     | Name of a bucket.
| ifMetagenerationMatch   | Number     | If set, only deletes the bucket if its metageneration matches this value.
| ifMetagenerationNotMatch| Number     | If set, only deletes the bucket if its metageneration does not match this value.

## GoogleCloudStorage.getSingleBucket
Returns metadata for the specified bucket.

| Field                   | Type       | Description
|-------------------------|------------|----------
| accessToken             | credentials| Google Cloud Access Token
| bucket                  | String     | Name of a bucket.
| ifMetagenerationMatch   | Number     | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
| ifMetagenerationNotMatch| Number     | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
| projection              | Select     | Set of properties to return. Defaults to `noAcl`. Acceptable values are: `full`: Include all properties.`noAcl`: Omit owner, acl and defaultObjectAcl properties.

## GoogleCloudStorage.getBucketIamPolicy
Returns an IAM policy for the specified bucket.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.

## GoogleCloudStorage.createBucket
Creates a new bucket.

| Field                     | Type       | Description
|---------------------------|------------|----------
| accessToken               | credentials| Google Cloud Access Token
| project                   | String     | A valid API project identifier.
| predefinedAcl             | String     | Apply a predefined set of access controls to this bucket.
| predefinedDefaultObjectAcl| String     | Apply a predefined set of default object access controls to this bucket.
| projection                | Select     | Set of properties to return. Defaults to `noAcl`. Acceptable values are: `full`: Include all properties.`noAcl`: Omit owner, acl and defaultObjectAcl properties.
| name                      | String     | The name of the bucket.
| acl                       | JSON       | JSON Array of Objects. Access controls on the bucket.
| cors                      | JSON       | JSON Array of Objects. The bucket's Cross-Origin Resource Sharing (CORS) configuration.
| defaultObjectAcl          | JSON       | JSON Array of Objects. Default access controls to apply to new objects when no ACL is provided.
| lifecycle                 | String     | JSON Objects. The bucket's lifecycle configuration.
| location                  | String     | The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to `US`.
| logBucket                 | String     | The destination bucket where the current bucket's logs should be placed.
| logObjectPrefix           | String     | A prefix for log object names.
| storageClass              | String     | The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see storage classes.
| enableVersioning          | Boolean    | While set to true, versioning is fully enabled for this bucket.
| websiteMainPageSuffix     | String     | If the requested object path is missing, the service will ensure the path has a trailing '/', append this suffix, and attempt to retrieve the resulting object. This allows the creation of index.html objects to represent directory pages.
| websiteNotFoundPage       | String     | If the requested object path is missing, and any mainPageSuffix object is missing, if applicable, the service will return the named object from this bucket as the content for a 404 Not Found result.

## GoogleCloudStorage.getBuckets
Retrieves a list of buckets for a given project.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| project    | String     | A valid API project identifier.
| maxResults | Number     | Maximum number of buckets to return.
| pageToken  | String     | A previously-returned page token representing part of the larger set of results to view.
| prefix     | String     | Filter results to buckets whose names begin with this prefix.
| projection | Select     | Set of properties to return. Defaults to `noAcl`. Acceptable values are: `full`: Include all properties.`noAcl`: Omit owner, acl and defaultObjectAcl properties.

## GoogleCloudStorage.updateBucketIamPolicy
Updates an IAM policy for the specified bucket.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.
| resourceId | String     | The ID of the resource to which this policy belongs. Will be of the form buckets/bucket for buckets, and buckets/bucket/objects/object for objects. A specific generation may be specified by appending #generationNumber to the end of the object name, e.g. buckets/my-bucket/objects/data.txt#17. The current generation can be denoted with #0. This field is ignored on input.
| bindings   | JSON       | JSON Array of Objects. An association between a role, which comes with a set of permissions, and members who may assume that role.
| etag       | String     | HTTP 1.1 Entity tag for the policy.

## GoogleCloudStorage.testBucketIamPermissions
Tests a set of permissions on the given bucket to see which, if any, are held by the caller.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.
| permissions| String     | Permissions to test.

## GoogleCloudStorage.updateBucket
Updates a new bucket.

| Field                     | Type       | Description
|---------------------------|------------|----------
| accessToken               | credentials| Google Cloud Access Token
| bucket                    | String     | The name of the bucket.
| ifMetagenerationMatch     | Number     | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
| ifMetagenerationNotMatch  | Number     | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
| predefinedAcl             | String     | Apply a predefined set of access controls to this bucket.
| predefinedDefaultObjectAcl| String     | Apply a predefined set of default object access controls to this bucket.
| projection                | Select     | Set of properties to return. Defaults to `noAcl`. Acceptable values are: `full`: Include all properties.`noAcl`: Omit owner, acl and defaultObjectAcl properties.
| acl                       | JSON       | JSON Array of Objects. Access controls on the bucket.
| cors                      | JSON       | JSON Array of Objects. The bucket's Cross-Origin Resource Sharing (CORS) configuration.
| defaultObjectAcl          | JSON       | JSON Array of Objects. Default access controls to apply to new objects when no ACL is provided.
| lifecycle                 | JSON       | JSON Array of Objects. The bucket's lifecycle configuration.
| location                  | String     | The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to `US`.
| logBucket                 | String     | The destination bucket where the current bucket's logs should be placed.
| logObjectPrefix           | String     | A prefix for log object names.
| storageClass              | String     | The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see storage classes.
| enableVersioning          | Boolean    | While set to true, versioning is fully enabled for this bucket.
| websiteMainPageSuffix     | String     | If the requested object path is missing, the service will ensure the path has a trailing '/', append this suffix, and attempt to retrieve the resulting object. This allows the creation of index.html objects to represent directory pages.
| websiteNotFoundPage       | String     | If the requested object path is missing, and any mainPageSuffix object is missing, if applicable, the service will return the named object from this bucket as the content for a 404 Not Found result.

## GoogleCloudStorage.getDefaultObjectAclEntry
Returns the default object ACL entry for the specified entity on the specified bucket.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.
| entity     | String     | The entity holding the permission. Can be user-`userId`, user-`emailAddress`, group-`groupId`, group-`emailAddress`, allUsers, or allAuthenticatedUsers.

## GoogleCloudStorage.createDefaultObjectAclEntry
Creates a new default object ACL entry on the specified bucket.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.
| entity     | String     | The entity holding the permission, in one of the following forms: user-`userId`, user-`email`, group-`groupId`, group-`email`, domain-`domain`, project-`team-projectId`, allUsers, allAuthenticatedUsers.
| role       | Select     | The access permission for the entity. Acceptable values are: `OWNER`, `READER`.

## GoogleCloudStorage.getDefaultObjectAllAclEntries
Retrieves default object ACL entries on the specified bucket.

| Field                   | Type       | Description
|-------------------------|------------|----------
| accessToken             | credentials| Google Cloud Access Token
| bucket                  | String     | Name of a bucket.
| ifMetagenerationMatch   | Number     | If present, only return default ACL listing if the bucket's current metageneration matches this value.
| ifMetagenerationNotMatch| Number     | If present, only return default ACL listing if the bucket's current metageneration does not match the given value.

## GoogleCloudStorage.updateDefaultObjectAclEntry
Updates a default object ACL entry on the specified bucket.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.
| entity     | String     | The entity holding the permission, in one of the following forms: user-`userId`, user-`email`, group-`groupId`, group-`email`, domain-`domain`, project-`team-projectId`, allUsers, allAuthenticatedUsers.
| role       | Select     | The access permission for the entity. Acceptable values are: OWNER, READER

## GoogleCloudStorage.deleteObjectAclEntry
Permanently deletes the ACL entry for the specified entity on the specified object.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.
| entity     | String     | The entity holding the permission, in one of the following forms: user-`userId`, user-`email`, group-`groupId`, group-`email`, domain-`domain`, project-`team-projectId`, allUsers, allAuthenticatedUsers.
| object     | String     | Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
| generation | String     | If present, selects a specific revision of this object (as opposed to the latest version, the default).

## GoogleCloudStorage.getObjectAclEntry
Returns the ACL entry for the specified entity on the specified object.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.
| entity     | String     | The entity holding the permission, in one of the following forms: user-`userId`, user-`email`, group-`groupId`, group-`email`, domain-`domain`, project-`team-projectId`, allUsers, allAuthenticatedUsers.
| object     | String     | Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
| generation | String     | If present, selects a specific revision of this object (as opposed to the latest version, the default).

## GoogleCloudStorage.createObjectAclEntry
Creates a new ACL entry on the specified object.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.
| entity     | String     | The entity holding the permission, in one of the following forms: user-`userId`, user-`email`, group-`groupId`, group-`email`, domain-`domain`, project-`team-projectId`, allUsers, allAuthenticatedUsers.
| role       | Select     | The access permission for the entity. Acceptable values are: `OWNER`, `READER`.
| object     | String     | Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
| generation | String     | If present, selects a specific revision of this object (as opposed to the latest version, the default).

## GoogleCloudStorage.getObjectAllAclEntries
Retrieves ACL entries on the specified object.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.
| object     | String     | Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
| generation | String     | If present, selects a specific revision of this object (as opposed to the latest version, the default).

## GoogleCloudStorage.updateObjectAclEntry
Updates an ACL entry on the specified object.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.
| entity     | String     | The entity holding the permission, in one of the following forms: user-`userId`, user-`email`, group-`groupId`, group-`email`, domain-`domain`, project-`team-projectId`, allUsers, allAuthenticatedUsers.
| role       | Select     | The access permission for the entity. Acceptable values are: `OWNER`, `READER`.
| object     | String     | Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
| generation | String     | If present, selects a specific revision of this object (as opposed to the latest version, the default).

## GoogleCloudStorage.composeObjects
Concatenates a list of existing objects into a new object in the same bucket.

| Field                   | Type       | Description
|-------------------------|------------|----------
| accessToken             | credentials| Google Cloud Access Token
| destinationBucket       | String     | Name of the bucket in which to store the new object.
| destinationObject       | String     | Name of the new object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
| destinationPredefinedAcl| String     | Apply a predefined set of access controls to the destination object.
| ifGenerationMatch       | String     | Makes the operation conditional on whether the object's current generation matches the given value.
| ifMetagenerationMatch   | String     | Makes the operation conditional on whether the object's current metageneration matches the given value.
| destination             | JSON       | Properties of the resulting object.
| sourceObjects           | JSON       | The list of source objects that will be concatenated into a single object.

## GoogleCloudStorage.copyObject
Copies a source object to a destination object. Optionally overrides metadata.

| Field                         | Type       | Description
|-------------------------------|------------|----------
| accessToken                   | credentials| Google Cloud Access Token
| destinationBucket             | String     | Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
| destinationObject             | String     | Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
| sourceBucket                  | String     | Name of the bucket in which to find the source object.
| sourceObject                  | String     | Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
| destinationPredefinedAcl      | String     | Apply a predefined set of access controls to the destination object.
| ifGenerationMatch             | Number     | Makes the operation conditional on whether the destination object's current generation matches the given value.
| ifGenerationNotMatch          | Number     | Makes the operation conditional on whether the destination object's current generation does not match the given value.
| ifMetagenerationMatch         | Number     | Makes the operation conditional on whether the destination object's current metageneration matches the given value.
| ifMetagenerationNotMatch      | Number     | Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
| ifSourceGenerationMatch       | Number     | Makes the operation conditional on whether the source object's generation matches the given value.
| ifSourceGenerationNotMatch    | Number     | Makes the operation conditional on whether the source object's generation does not match the given value.
| ifSourceMetagenerationMatch   | Number     | Makes the operation conditional on whether the source object's current metageneration matches the given value.
| ifSourceMetagenerationNotMatch| Number     | Makes the operation conditional on whether the source object's current metageneration does not match the given value.
| projection                    | Select     | Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. Acceptable values are: `full`: Include all properties; `noAcl`: Omit the owner, acl property
| sourceGeneration              | Number     | If present, selects a specific revision of the source object (as opposed to the latest version, the default).
| objectResource                | JSON       | An object resource.

## GoogleCloudStorage.deleteObject
Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.

| Field                   | Type       | Description
|-------------------------|------------|----------
| accessToken             | credentials| Google Cloud Access Token
| bucket                  | String     | Name of the bucket in which the object resides.
| object                  | String     | Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
| generation              | Number     | If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
| ifGenerationMatch       | Number     | Makes the operation conditional on whether the object's current generation matches the given value.
| ifGenerationNotMatch    | Number     | Makes the operation conditional on whether the object's current generation does not match the given value.
| ifMetagenerationMatch   | Number     | Makes the operation conditional on whether the object's current metageneration matches the given value.
| ifMetagenerationNotMatch| Number     | Makes the operation conditional on whether the object's current metageneration does not match the given value.

## GoogleCloudStorage.getSingleObject
Retrieves an object or its metadata.

| Field                   | Type       | Description
|-------------------------|------------|----------
| accessToken             | credentials| Google Cloud Access Token
| bucket                  | String     | Name of the bucket in which the object resides.
| object                  | String     | Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
| generation              | Number     | If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
| ifGenerationMatch       | Number     | Makes the operation conditional on whether the object's current generation matches the given value.
| ifGenerationNotMatch    | Number     | Makes the operation conditional on whether the object's current generation does not match the given value.
| ifMetagenerationMatch   | Number     | Makes the operation conditional on whether the object's current metageneration matches the given value.
| ifMetagenerationNotMatch| Number     | Makes the operation conditional on whether the object's current metageneration does not match the given value.
| projection              | Select     | Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. Acceptable values are: `full`: Include all properties; `noAcl`: Omit the owner, acl property

## GoogleCloudStorage.getObjectIamPolicy
Returns an IAM policy for the specified object.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of the bucket in which the object resides.
| object     | String     | Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
| generation | String     | If present, selects a specific revision of this object (as opposed to the latest version, the default).

## GoogleCloudStorage.createObject
Stores a new object and metadata. For tips on uploading to Google Cloud Storage, see best practices.

| Field                   | Type       | Description
|-------------------------|------------|----------
| accessToken             | credentials| Google Cloud Access Token
| bucket                  | String     | Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
| file                    | File       | File to upload
| contentEncoding         | File       | If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property.
| ifGenerationMatch       | Number     | Makes the operation conditional on whether the object's current generation matches the given value.
| ifGenerationNotMatch    | Number     | Makes the operation conditional on whether the object's current generation does not match the given value.
| ifMetagenerationMatch   | Number     | Makes the operation conditional on whether the object's current metageneration matches the given value.
| ifMetagenerationNotMatch| Number     | Makes the operation conditional on whether the object's current metageneration does not match the given value.
| name                    | String     | Name of the object.
| predefinedAcl           | String     | Apply a predefined set of access controls to this object.
| projection              | Select     | Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. Acceptable values are: `full`: Include all properties; `noAcl`: Omit the owner, acl property
| acl                     | JSON       | Access controls on the object.
| cacheControl            | String     | Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.
| contentDisposition      | String     | Content-Disposition of the object data.
| contentEncoding         | String     | Content-Encoding of the object data.
| contentLanguage         | String     | Content-Language of the object data.
| crc32c                  | String     |  CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum.
| md5Hash                 | String     | MD5 hash of the data; encoded using base64.
| metadata                | JSON       | User-provided metadata, in key/value pairs.
| storageClass            | String     | Storage class of the object.

## GoogleCloudStorage.getObjects
Retrieves a list of objects matching the criteria.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of the bucket in which to look for objects.
| delimiter  | String     | Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
| maxResults | Number     | Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested. The default value of this parameter is 1,000 items.
| pageToken  | String     | A previously-returned page token representing part of the larger set of results to view.
| prefix     | String     | Filter results to objects whose names begin with this prefix.
| projection | Select     | Set of properties to return. Defaults to `noAcl`. Acceptable values are: `full`: Include all properties. `noAcl`: Omit the owner, acl property.
| versions   | String     | If true, lists all versions of an object as distinct results. The default is false.

## GoogleCloudStorage.rewriteObject
Rewrites a source object to a destination object. Optionally overrides metadata.

| Field                         | Type       | Description
|-------------------------------|------------|----------
| accessToken                   | credentials| Google Cloud Access Token
| destinationBucket             | String     | Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
| destinationObject             | String     | Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any
| sourceBucket                  | String     | Name of the bucket in which to find the source object.
| sourceObject                  | String     | Name of the source object.
| destinationPredefinedAcl      | String     | Apply a predefined set of access controls to the destination object.
| ifGenerationMatch             | Number     | Makes the operation conditional on whether the destination object's current generation matches the given value.
| ifGenerationNotMatch          | Number     | Makes the operation conditional on whether the destination object's current generation does not match the given value.
| ifMetagenerationMatch         | Number     | Makes the operation conditional on whether the destination object's current metageneration matches the given value.
| ifMetagenerationNotMatch      | Number     | Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
| ifSourceGenerationMatch       | Number     | Makes the operation conditional on whether the source object's generation matches the given value.
| ifSourceGenerationNotMatch    | Number     | Makes the operation conditional on whether the source object's generation does not match the given value.
| ifSourceMetagenerationMatch   | Number     | Makes the operation conditional on whether the source object's current metageneration matches the given value.
| ifSourceMetagenerationNotMatch| Number     | Makes the operation conditional on whether the source object's current metageneration does not match the given value.
| maxBytesRewrittenPerCall      | Number     | The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.
| projection                    | Select     | Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. Acceptable values are: `full`: Include all properties; `noAcl`: Omit the owner, acl property
| rewriteToken                  | String     | Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.
| sourceGeneration              | String     | If present, selects a specific revision of the source object (as opposed to the latest version, the default).
| objectResource                | JSON       | If present, selects a specific revision of the source object (as opposed to the latest version, the default).

## GoogleCloudStorage.updateObjectIamPolicy
Updates an IAM policy for the specified object.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of the bucket in which the object resides.
| object     | String     | Name of the object.
| generation | String     | If present, selects a specific revision of this object (as opposed to the latest version, the default).

## GoogleCloudStorage.testObjectIamPermissions
Tests a set of permissions on the given object to see which, if any, are held by the caller.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of the bucket in which the object resides.
| object     | String     | Name of the object.
| permissions| String     | Permissions to test.
| generation | String     | If present, selects a specific revision of this object (as opposed to the latest version, the default).

## GoogleCloudStorage.updateObject
Updates an object's metadata.

| Field                   | Type       | Description
|-------------------------|------------|----------
| accessToken             | credentials| Google Cloud Access Token
| bucket                  | String     | Name of the bucket in which the object resides.
| object                  | String     | Name of the object.
| generation              | Number     | If present, selects a specific revision of this object (as opposed to the latest version, the default).
| ifGenerationMatch       | Number     | Makes the operation conditional on whether the object's current generation matches the given value.
| ifGenerationNotMatch    | Number     | Makes the operation conditional on whether the object's current generation does not match the given value.
| ifMetagenerationMatch   | Number     | Makes the operation conditional on whether the object's current metageneration matches the given value.
| ifMetagenerationNotMatch| Number     | Makes the operation conditional on whether the object's current metageneration does not match the given value.
| predefinedAcl           | Number     | Apply a predefined set of access controls to this object.
| projection              | Select     | Set of properties to return. Defaults to full. Acceptable values are: `full`: Include all properties; `noAcl`: Omit the owner, acl property.
| acl                     | JSON       | Access controls on the object.
| cacheControl            | String     | Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, `max-age=3600`.
| contentDisposition      | String     | Content-Disposition of the object data.
| contentEncoding         | String     | Content-Encoding of the object data.
| contentLanguage         | String     | Content-Language of the object data.
| contentType             | String     | Content-Type of the object data. If contentType is not specified, object downloads will be served as application/octet-stream.
| metadata                | JSON       | User-provided metadata, in key/value pairs.

## GoogleCloudStorage.deleteBucketAclEntry
Permanently deletes the ACL entry for the specified entity on the specified bucket.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.
| entity     | String     | The entity holding the permission. Can be user-`userId`, user-`emailAddress`, group-`groupId`, group-`emailAddress`, allUsers, or allAuthenticatedUsers.

## GoogleCloudStorage.getBucketAclEntry
Returns the ACL entry for the specified entity on the specified bucket.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.
| entity     | String     | The entity holding the permission. Can be user-`userId`, user-`emailAddress`, group-`groupId`, group-`emailAddress`, allUsers, or allAuthenticatedUsers.

## GoogleCloudStorage.createBucketAclEntry
Creates a new ACL entry on the specified bucket.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.
| entity     | String     | The entity holding the permission. Can be user-`userId`, user-`emailAddress`, group-`groupId`, group-`emailAddress`, allUsers, or allAuthenticatedUsers.
| role       | Select     | The access permission for the entity. Acceptable values are: `OWNER`, `READER`

## GoogleCloudStorage.getBucketAllAclEntries
Retrieves ACL entries on a specified bucket.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.

## GoogleCloudStorage.updateBucketAclEntry
Updates an ACL entry on the specified bucket.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Google Cloud Access Token
| bucket     | String     | Name of a bucket.
| entity     | String     | The entity holding the permission. Can be user-`userId`, user-`emailAddress`, group-`groupId`, group-`emailAddress`, allUsers, or allAuthenticatedUsers.
| role       | Select     | The access permission for the entity. Acceptable values are: `OWNER`, `READER`.
