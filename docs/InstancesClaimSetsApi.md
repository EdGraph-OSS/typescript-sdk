# InstancesClaimSetsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createClaimSetAsync**](#createclaimsetasync) | **POST** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/claimsets | Creates a ClaimSet.|
|[**deleteClaimSetAsync**](#deleteclaimsetasync) | **DELETE** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/claimsets/{claimSetId} | Deletes a ClaimSet.|
|[**getClaimSetByIdAsync**](#getclaimsetbyidasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/claimsets/{claimSetId} | Retrieves a ClaimSet by ID.|
|[**getClaimSetsAsync**](#getclaimsetsasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/claimsets | Retrieves a list of ClaimSets.|
|[**getResourceClaimsGridAsync**](#getresourceclaimsgridasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/claimsets/{claimSetId}/resourceclaims | Retrieves a grid of Resource Claims.|
|[**syncClaimSetAsync**](#syncclaimsetasync) | **POST** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/claimsets/{claimSetId}/sync | Copies a Claim Set from one instance to another/other instance(s)|
|[**updateClaimSetAsync**](#updateclaimsetasync) | **PUT** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/claimsets/{claimSetId} | Updates a ClaimSet.|

# **createClaimSetAsync**
> EdfiAdminApiEdfiAdminV1SaveClaimSetResponse createClaimSetAsync()


### Example

```typescript
import {
    InstancesClaimSetsApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1SaveClaimSetRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesClaimSetsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let edfiAdminApiEdfiAdminV1SaveClaimSetRequest: EdfiAdminApiEdfiAdminV1SaveClaimSetRequest; // (optional)

const { status, data } = await apiInstance.createClaimSetAsync(
    tenantId,
    instanceId,
    edfiAdminApiEdfiAdminV1SaveClaimSetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1SaveClaimSetRequest** | **EdfiAdminApiEdfiAdminV1SaveClaimSetRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1SaveClaimSetResponse**

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

# **deleteClaimSetAsync**
> deleteClaimSetAsync()


### Example

```typescript
import {
    InstancesClaimSetsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesClaimSetsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let claimSetId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteClaimSetAsync(
    tenantId,
    instanceId,
    claimSetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **claimSetId** | [**number**] |  | defaults to undefined|


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

# **getClaimSetByIdAsync**
> EdfiAdminApiEdfiAdminV1ClaimSet getClaimSetByIdAsync()


### Example

```typescript
import {
    InstancesClaimSetsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesClaimSetsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let claimSetId: number; // (default to undefined)

const { status, data } = await apiInstance.getClaimSetByIdAsync(
    tenantId,
    instanceId,
    claimSetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **claimSetId** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1ClaimSet**

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

# **getClaimSetsAsync**
> EdfiAdminApiEdfiAdminV1ClaimSetPaginatedItemsViewModel getClaimSetsAsync()


### Example

```typescript
import {
    InstancesClaimSetsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesClaimSetsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getClaimSetsAsync(
    tenantId,
    instanceId,
    pageSize,
    pageIndex,
    orderBy,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**EdfiAdminApiEdfiAdminV1ClaimSetPaginatedItemsViewModel**

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

# **getResourceClaimsGridAsync**
> EdfiAdminApiEdfiAdminV1GetResourceClaimsGridResponse getResourceClaimsGridAsync()


### Example

```typescript
import {
    InstancesClaimSetsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesClaimSetsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let claimSetId: number; // (default to undefined)

const { status, data } = await apiInstance.getResourceClaimsGridAsync(
    tenantId,
    instanceId,
    claimSetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **claimSetId** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1GetResourceClaimsGridResponse**

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

# **syncClaimSetAsync**
> syncClaimSetAsync()


### Example

```typescript
import {
    InstancesClaimSetsApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1SyncClaimSetRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesClaimSetsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let claimSetId: number; // (default to undefined)
let edfiAdminApiEdfiAdminV1SyncClaimSetRequest: EdfiAdminApiEdfiAdminV1SyncClaimSetRequest; // (optional)

const { status, data } = await apiInstance.syncClaimSetAsync(
    tenantId,
    instanceId,
    claimSetId,
    edfiAdminApiEdfiAdminV1SyncClaimSetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1SyncClaimSetRequest** | **EdfiAdminApiEdfiAdminV1SyncClaimSetRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **claimSetId** | [**number**] |  | defaults to undefined|


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

# **updateClaimSetAsync**
> EdfiAdminApiEdfiAdminV1SaveClaimSetResponse updateClaimSetAsync()


### Example

```typescript
import {
    InstancesClaimSetsApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1SaveClaimSetRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesClaimSetsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let claimSetId: number; // (default to undefined)
let edfiAdminApiEdfiAdminV1SaveClaimSetRequest: EdfiAdminApiEdfiAdminV1SaveClaimSetRequest; // (optional)

const { status, data } = await apiInstance.updateClaimSetAsync(
    tenantId,
    instanceId,
    claimSetId,
    edfiAdminApiEdfiAdminV1SaveClaimSetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1SaveClaimSetRequest** | **EdfiAdminApiEdfiAdminV1SaveClaimSetRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **claimSetId** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1SaveClaimSetResponse**

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

