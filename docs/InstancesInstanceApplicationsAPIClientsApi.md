# InstancesInstanceApplicationsAPIClientsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createInstanceApiClient**](#createinstanceapiclient) | **POST** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/instanceapplications/{applicationId}/apiclients | Creates an Instance ApiClient|
|[**deleteInstanceApiClient**](#deleteinstanceapiclient) | **DELETE** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/instanceapplications/{applicationId}/apiclients/{apiClientId} | Deletes an Instance ApiClient|
|[**getInstanceApiClientById**](#getinstanceapiclientbyid) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/instanceapplications/{applicationId}/apiclients/{apiClientId} | Retrieves an Instance ApiClient by ID.|
|[**getInstanceApiClients**](#getinstanceapiclients) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/instanceapplications/{applicationId}/apiclients | Retrieves a paginated list of Instance ApiClients|
|[**updateInstanceApiClient**](#updateinstanceapiclient) | **PUT** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/instanceapplications/{applicationId}/apiclients/{apiClientId} | Updates an Instance Application ApiClient|

# **createInstanceApiClient**
> EdfiAdminApiEdfiAdminV1InstanceApiClientCreatedResponse createInstanceApiClient()


### Example

```typescript
import {
    InstancesInstanceApplicationsAPIClientsApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1CreateInstanceApiClientRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesInstanceApplicationsAPIClientsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let applicationId: string; // (default to undefined)
let edfiAdminApiEdfiAdminV1CreateInstanceApiClientRequest: EdfiAdminApiEdfiAdminV1CreateInstanceApiClientRequest; // (optional)

const { status, data } = await apiInstance.createInstanceApiClient(
    tenantId,
    instanceId,
    applicationId,
    edfiAdminApiEdfiAdminV1CreateInstanceApiClientRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1CreateInstanceApiClientRequest** | **EdfiAdminApiEdfiAdminV1CreateInstanceApiClientRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **applicationId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1InstanceApiClientCreatedResponse**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteInstanceApiClient**
> deleteInstanceApiClient()


### Example

```typescript
import {
    InstancesInstanceApplicationsAPIClientsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesInstanceApplicationsAPIClientsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let applicationId: string; // (default to undefined)
let apiClientId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteInstanceApiClient(
    tenantId,
    instanceId,
    applicationId,
    apiClientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **applicationId** | [**string**] |  | defaults to undefined|
| **apiClientId** | [**string**] |  | defaults to undefined|


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

# **getInstanceApiClientById**
> EdfiAdminApiEdfiAdminV1InstanceApiClientProfileResponse getInstanceApiClientById()


### Example

```typescript
import {
    InstancesInstanceApplicationsAPIClientsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesInstanceApplicationsAPIClientsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let applicationId: string; // (default to undefined)
let apiClientId: string; // (default to undefined)

const { status, data } = await apiInstance.getInstanceApiClientById(
    tenantId,
    instanceId,
    applicationId,
    apiClientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **applicationId** | [**string**] |  | defaults to undefined|
| **apiClientId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1InstanceApiClientProfileResponse**

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

# **getInstanceApiClients**
> EdfiAdminApiEdfiAdminV1InstanceApiClientListResponsePaginatedItemsViewModel getInstanceApiClients()


### Example

```typescript
import {
    InstancesInstanceApplicationsAPIClientsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesInstanceApplicationsAPIClientsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let applicationId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getInstanceApiClients(
    tenantId,
    instanceId,
    applicationId,
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
| **applicationId** | [**string**] |  | defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**EdfiAdminApiEdfiAdminV1InstanceApiClientListResponsePaginatedItemsViewModel**

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

# **updateInstanceApiClient**
> EdfiAdminApiEdfiAdminV1InstanceApiClientUpdatedResponse updateInstanceApiClient()


### Example

```typescript
import {
    InstancesInstanceApplicationsAPIClientsApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1UpdateInstanceApiClientRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesInstanceApplicationsAPIClientsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let applicationId: string; // (default to undefined)
let apiClientId: string; // (default to undefined)
let edfiAdminApiEdfiAdminV1UpdateInstanceApiClientRequest: EdfiAdminApiEdfiAdminV1UpdateInstanceApiClientRequest; // (optional)

const { status, data } = await apiInstance.updateInstanceApiClient(
    tenantId,
    instanceId,
    applicationId,
    apiClientId,
    edfiAdminApiEdfiAdminV1UpdateInstanceApiClientRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1UpdateInstanceApiClientRequest** | **EdfiAdminApiEdfiAdminV1UpdateInstanceApiClientRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **applicationId** | [**string**] |  | defaults to undefined|
| **apiClientId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1InstanceApiClientUpdatedResponse**

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

