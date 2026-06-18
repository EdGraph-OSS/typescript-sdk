# CollectionsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCollection**](#createcollection) | **POST** /tenants/{tenantId}/validations/collections | Creates a Collection.|
|[**createContainer**](#createcontainer) | **POST** /tenants/{tenantId}/validations/collections/{collectionId}/containers | Creates a Container.|
|[**deleteCollection**](#deletecollection) | **DELETE** /tenants/{tenantId}/validations/collections/{collectionId} | Deletes a Collection.|
|[**deleteContainer**](#deletecontainer) | **DELETE** /tenants/{tenantId}/validations/collections/{collectionId}/containers/{containerId} | Deletes a Container.|
|[**getCollectionById**](#getcollectionbyid) | **GET** /tenants/{tenantId}/validations/collections/{collectionId} | Retrieves a Collection by ID.|
|[**getCollectionJson**](#getcollectionjson) | **GET** /tenants/{tenantId}/validations/collections/{collectionId}/export | Retrieves the JSON representation of a Collection. Useful for exporting into other systems.|
|[**getCollections**](#getcollections) | **GET** /tenants/{tenantId}/validations/collections | Retrieves a list of Collections.|
|[**getCollectionsTree**](#getcollectionstree) | **GET** /tenants/{tenantId}/validations/categories/tree | Retrieves a list of Collections.|
|[**getContainerById**](#getcontainerbyid) | **GET** /tenants/{tenantId}/validations/collections/{collectionId}/containers/{containerId} | Retrieves a Container by ID.|
|[**getContainers**](#getcontainers) | **GET** /tenants/{tenantId}/validations/collections/{collectionId}/containers | Retrieves a list of Containers.|
|[**updateCollection**](#updatecollection) | **PUT** /tenants/{tenantId}/validations/collections/{collectionId} | Updates a Collection.|
|[**updateContainer**](#updatecontainer) | **PUT** /tenants/{tenantId}/validations/collections/{collectionId}/containers/{containerId} | Updates a Container.|
|[**uploadCollectionJson**](#uploadcollectionjson) | **POST** /tenants/{tenantId}/validations/collections/import | Uploads a Collection JSON. Useful for importing from another system.|

# **createCollection**
> ValidationsApiCoreV1CreatedResponse createCollection()


### Example

```typescript
import {
    CollectionsApi,
    Configuration,
    ValidationsApiContainersV1CreateCollectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let tenantId: string; // (default to undefined)
let validationsApiContainersV1CreateCollectionRequest: ValidationsApiContainersV1CreateCollectionRequest; // (optional)

const { status, data } = await apiInstance.createCollection(
    tenantId,
    validationsApiContainersV1CreateCollectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiContainersV1CreateCollectionRequest** | **ValidationsApiContainersV1CreateCollectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiCoreV1CreatedResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Forbidden. The request cannot be completed in the current authorization context. Contact your administrator if you believe this operation should be allowed. |  -  |
|**500** | An unhandled error occurred on the server.See the response body for details. |  -  |
|**201** | The resource was created. The location of the resource is available in the Location header of the response. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createContainer**
> ValidationsApiCoreV1CreatedResponse createContainer()


### Example

```typescript
import {
    CollectionsApi,
    Configuration,
    ValidationsApiContainersV1CreateContainerRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let tenantId: string; // (default to undefined)
let collectionId: string; // (default to undefined)
let validationsApiContainersV1CreateContainerRequest: ValidationsApiContainersV1CreateContainerRequest; // (optional)

const { status, data } = await apiInstance.createContainer(
    tenantId,
    collectionId,
    validationsApiContainersV1CreateContainerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiContainersV1CreateContainerRequest** | **ValidationsApiContainersV1CreateContainerRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiCoreV1CreatedResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Forbidden. The request cannot be completed in the current authorization context. Contact your administrator if you believe this operation should be allowed. |  -  |
|**500** | An unhandled error occurred on the server.See the response body for details. |  -  |
|**201** | The resource was created. The location of the resource is available in the Location header of the response. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCollection**
> deleteCollection()


### Example

```typescript
import {
    CollectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let tenantId: string; // (default to undefined)
let collectionId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCollection(
    tenantId,
    collectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Forbidden. The request cannot be completed in the current authorization context. Contact your administrator if you believe this operation should be allowed. |  -  |
|**500** | An unhandled error occurred on the server.See the response body for details. |  -  |
|**204** | The resource was successfully deleted. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteContainer**
> deleteContainer()


### Example

```typescript
import {
    CollectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let tenantId: string; // (default to undefined)
let collectionId: string; // (default to undefined)
let containerId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteContainer(
    tenantId,
    collectionId,
    containerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|
| **containerId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Forbidden. The request cannot be completed in the current authorization context. Contact your administrator if you believe this operation should be allowed. |  -  |
|**500** | An unhandled error occurred on the server.See the response body for details. |  -  |
|**204** | The resource was successfully deleted. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCollectionById**
> ValidationsApiContainersV1ContainerDto getCollectionById()


### Example

```typescript
import {
    CollectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let tenantId: string; // (default to undefined)
let collectionId: string; // (default to undefined)

const { status, data } = await apiInstance.getCollectionById(
    tenantId,
    collectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiContainersV1ContainerDto**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Forbidden. The request cannot be completed in the current authorization context. Contact your administrator if you believe this operation should be allowed. |  -  |
|**500** | An unhandled error occurred on the server.See the response body for details. |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCollectionJson**
> ValidationsApiContainersV1GetJsonResponse getCollectionJson()


### Example

```typescript
import {
    CollectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let tenantId: string; // (default to undefined)
let collectionId: string; // (default to undefined)

const { status, data } = await apiInstance.getCollectionJson(
    tenantId,
    collectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiContainersV1GetJsonResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Forbidden. The request cannot be completed in the current authorization context. Contact your administrator if you believe this operation should be allowed. |  -  |
|**500** | An unhandled error occurred on the server.See the response body for details. |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCollections**
> ValidationsApiContainersV1PaginatedContainers getCollections()


### Example

```typescript
import {
    CollectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let tenantId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let filter: string; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getCollections(
    tenantId,
    pageIndex,
    pageSize,
    filter,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **filter** | [**string**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ValidationsApiContainersV1PaginatedContainers**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Forbidden. The request cannot be completed in the current authorization context. Contact your administrator if you believe this operation should be allowed. |  -  |
|**500** | An unhandled error occurred on the server.See the response body for details. |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCollectionsTree**
> ValidationsApiContainersV1PaginatedCategoryTreeResponse getCollectionsTree()


### Example

```typescript
import {
    CollectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let tenantId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let orderBy: string; // (optional) (default to undefined)
let categoryId: string; // (optional) (default to undefined)
let categoryName: string; // (optional) (default to undefined)
let subCategoryId: string; // (optional) (default to undefined)
let subCategoryName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getCollectionsTree(
    tenantId,
    pageIndex,
    pageSize,
    orderBy,
    categoryId,
    categoryName,
    subCategoryId,
    subCategoryName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **categoryId** | [**string**] |  | (optional) defaults to undefined|
| **categoryName** | [**string**] |  | (optional) defaults to undefined|
| **subCategoryId** | [**string**] |  | (optional) defaults to undefined|
| **subCategoryName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ValidationsApiContainersV1PaginatedCategoryTreeResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Forbidden. The request cannot be completed in the current authorization context. Contact your administrator if you believe this operation should be allowed. |  -  |
|**500** | An unhandled error occurred on the server.See the response body for details. |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getContainerById**
> ValidationsApiContainersV1ContainerDto getContainerById()


### Example

```typescript
import {
    CollectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let tenantId: string; // (default to undefined)
let collectionId: string; // (default to undefined)
let containerId: string; // (default to undefined)

const { status, data } = await apiInstance.getContainerById(
    tenantId,
    collectionId,
    containerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|
| **containerId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiContainersV1ContainerDto**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Forbidden. The request cannot be completed in the current authorization context. Contact your administrator if you believe this operation should be allowed. |  -  |
|**500** | An unhandled error occurred on the server.See the response body for details. |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getContainers**
> ValidationsApiContainersV1PaginatedContainers getContainers()


### Example

```typescript
import {
    CollectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let tenantId: string; // (default to undefined)
let collectionId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let filter: string; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getContainers(
    tenantId,
    collectionId,
    pageIndex,
    pageSize,
    filter,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **filter** | [**string**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ValidationsApiContainersV1PaginatedContainers**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Forbidden. The request cannot be completed in the current authorization context. Contact your administrator if you believe this operation should be allowed. |  -  |
|**500** | An unhandled error occurred on the server.See the response body for details. |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCollection**
> updateCollection()


### Example

```typescript
import {
    CollectionsApi,
    Configuration,
    ValidationsApiContainersV1UpdateCollectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let tenantId: string; // (default to undefined)
let collectionId: string; // (default to undefined)
let validationsApiContainersV1UpdateCollectionRequest: ValidationsApiContainersV1UpdateCollectionRequest; // (optional)

const { status, data } = await apiInstance.updateCollection(
    tenantId,
    collectionId,
    validationsApiContainersV1UpdateCollectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiContainersV1UpdateCollectionRequest** | **ValidationsApiContainersV1UpdateCollectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Forbidden. The request cannot be completed in the current authorization context. Contact your administrator if you believe this operation should be allowed. |  -  |
|**500** | An unhandled error occurred on the server.See the response body for details. |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateContainer**
> updateContainer()


### Example

```typescript
import {
    CollectionsApi,
    Configuration,
    ValidationsApiContainersV1UpdateContainerRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let tenantId: string; // (default to undefined)
let collectionId: string; // (default to undefined)
let containerId: string; // (default to undefined)
let validationsApiContainersV1UpdateContainerRequest: ValidationsApiContainersV1UpdateContainerRequest; // (optional)

const { status, data } = await apiInstance.updateContainer(
    tenantId,
    collectionId,
    containerId,
    validationsApiContainersV1UpdateContainerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiContainersV1UpdateContainerRequest** | **ValidationsApiContainersV1UpdateContainerRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|
| **containerId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Forbidden. The request cannot be completed in the current authorization context. Contact your administrator if you believe this operation should be allowed. |  -  |
|**500** | An unhandled error occurred on the server.See the response body for details. |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadCollectionJson**
> ValidationsApiContainersV1CollectionUploadedResponse uploadCollectionJson()


### Example

```typescript
import {
    CollectionsApi,
    Configuration,
    ValidationsApiContainersV1UploadCollectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let tenantId: string; // (default to undefined)
let validationsApiContainersV1UploadCollectionRequest: ValidationsApiContainersV1UploadCollectionRequest; // (optional)

const { status, data } = await apiInstance.uploadCollectionJson(
    tenantId,
    validationsApiContainersV1UploadCollectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiContainersV1UploadCollectionRequest** | **ValidationsApiContainersV1UploadCollectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiContainersV1CollectionUploadedResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Forbidden. The request cannot be completed in the current authorization context. Contact your administrator if you believe this operation should be allowed. |  -  |
|**500** | An unhandled error occurred on the server.See the response body for details. |  -  |
|**201** | The resource was created. The location of the resource is available in the Location header of the response. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

