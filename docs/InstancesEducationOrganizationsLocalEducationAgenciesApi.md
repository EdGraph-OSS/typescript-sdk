# InstancesEducationOrganizationsLocalEducationAgenciesApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createLocalEducationAgencyAsync**](#createlocaleducationagencyasync) | **POST** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/localeducationagencies | Creates a LocalEducationAgency.|
|[**deleteLocalEducationAgencyAsync**](#deletelocaleducationagencyasync) | **DELETE** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/localeducationagencies/{localEducationAgencyId} | Deletes a LocalEducationAgency.|
|[**getLocalEducationAgencyByIdAsync**](#getlocaleducationagencybyidasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/localeducationagencies/{localEducationAgencyId} | Retrieves a LocalEducationAgency by ID.|
|[**getlLocalEducationAgenciesAsync**](#getllocaleducationagenciesasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/localeducationagencies | Retrieves a list of LocalEducationAgencies.|
|[**syncLocalEducationAgencyAsync**](#synclocaleducationagencyasync) | **POST** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/localeducationagencies/{localEducationAgencyId}/sync | Copies a LocalEducationAgency from one instance to another/other instance(s).|
|[**updateLocalEducationAgencyAsync**](#updatelocaleducationagencyasync) | **PUT** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/localeducationagencies/{localEducationAgencyId} | Updates a LocalEducationAgency.|

# **createLocalEducationAgencyAsync**
> EdfiAdminApiEdfiAdminV1LocalEducationAgencyCreatedResponse createLocalEducationAgencyAsync()


### Example

```typescript
import {
    InstancesEducationOrganizationsLocalEducationAgenciesApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1CreateLocalEducationAgencyRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesEducationOrganizationsLocalEducationAgenciesApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let edfiAdminApiEdfiAdminV1CreateLocalEducationAgencyRequest: EdfiAdminApiEdfiAdminV1CreateLocalEducationAgencyRequest; // (optional)

const { status, data } = await apiInstance.createLocalEducationAgencyAsync(
    tenantId,
    instanceId,
    year,
    edfiAdminApiEdfiAdminV1CreateLocalEducationAgencyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1CreateLocalEducationAgencyRequest** | **EdfiAdminApiEdfiAdminV1CreateLocalEducationAgencyRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1LocalEducationAgencyCreatedResponse**

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
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteLocalEducationAgencyAsync**
> deleteLocalEducationAgencyAsync()


### Example

```typescript
import {
    InstancesEducationOrganizationsLocalEducationAgenciesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesEducationOrganizationsLocalEducationAgenciesApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let localEducationAgencyId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteLocalEducationAgencyAsync(
    tenantId,
    instanceId,
    year,
    localEducationAgencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **localEducationAgencyId** | [**string**] |  | defaults to undefined|


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

# **getLocalEducationAgencyByIdAsync**
> EdfiAdminApiEdfiAdminV1GetLocalEducationAgencyProfileResponse getLocalEducationAgencyByIdAsync()


### Example

```typescript
import {
    InstancesEducationOrganizationsLocalEducationAgenciesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesEducationOrganizationsLocalEducationAgenciesApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let localEducationAgencyId: string; // (default to undefined)

const { status, data } = await apiInstance.getLocalEducationAgencyByIdAsync(
    tenantId,
    instanceId,
    year,
    localEducationAgencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **localEducationAgencyId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1GetLocalEducationAgencyProfileResponse**

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

# **getlLocalEducationAgenciesAsync**
> EdfiAdminApiEdfiAdminV1LocalEducationAgencyTableViewResponsePaginatedItemsViewModel getlLocalEducationAgenciesAsync()


### Example

```typescript
import {
    InstancesEducationOrganizationsLocalEducationAgenciesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesEducationOrganizationsLocalEducationAgenciesApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getlLocalEducationAgenciesAsync(
    tenantId,
    instanceId,
    year,
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
| **year** | [**number**] |  | defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**EdfiAdminApiEdfiAdminV1LocalEducationAgencyTableViewResponsePaginatedItemsViewModel**

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

# **syncLocalEducationAgencyAsync**
> EdfiAdminApiEdfiAdminV1SyncResponse syncLocalEducationAgencyAsync()


### Example

```typescript
import {
    InstancesEducationOrganizationsLocalEducationAgenciesApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1SyncLocalEducationAgencyRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesEducationOrganizationsLocalEducationAgenciesApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let localEducationAgencyId: number; // (default to undefined)
let edfiAdminApiEdfiAdminV1SyncLocalEducationAgencyRequest: EdfiAdminApiEdfiAdminV1SyncLocalEducationAgencyRequest; // (optional)

const { status, data } = await apiInstance.syncLocalEducationAgencyAsync(
    tenantId,
    instanceId,
    year,
    localEducationAgencyId,
    edfiAdminApiEdfiAdminV1SyncLocalEducationAgencyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1SyncLocalEducationAgencyRequest** | **EdfiAdminApiEdfiAdminV1SyncLocalEducationAgencyRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **localEducationAgencyId** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1SyncResponse**

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

# **updateLocalEducationAgencyAsync**
> updateLocalEducationAgencyAsync()


### Example

```typescript
import {
    InstancesEducationOrganizationsLocalEducationAgenciesApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1UpdateLocalEducationAgencyRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesEducationOrganizationsLocalEducationAgenciesApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let localEducationAgencyId: string; // (default to undefined)
let edfiAdminApiEdfiAdminV1UpdateLocalEducationAgencyRequest: EdfiAdminApiEdfiAdminV1UpdateLocalEducationAgencyRequest; // (optional)

const { status, data } = await apiInstance.updateLocalEducationAgencyAsync(
    tenantId,
    instanceId,
    year,
    localEducationAgencyId,
    edfiAdminApiEdfiAdminV1UpdateLocalEducationAgencyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1UpdateLocalEducationAgencyRequest** | **EdfiAdminApiEdfiAdminV1UpdateLocalEducationAgencyRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **localEducationAgencyId** | [**string**] |  | defaults to undefined|


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

