# InstancesClientsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createClient**](#createclient) | **POST** /tenants/{tenantId}/oneroster/instances/{instanceId}/clients | Creates a new client|
|[**deleteClient**](#deleteclient) | **DELETE** /tenants/{tenantId}/oneroster/instances/{instanceId}/clients/{clientId} | Deletes a client by Id|
|[**getClientById**](#getclientbyid) | **GET** /tenants/{tenantId}/oneroster/instances/{instanceId}/clients/{clientId} | Retrieves a client by Id|
|[**getPagedClients**](#getpagedclients) | **GET** /tenants/{tenantId}/oneroster/instances/{instanceId}/clients | Retrieves a list of clients for a given instance|
|[**updateClient**](#updateclient) | **PUT** /tenants/{tenantId}/oneroster/instances/{instanceId}/clients/{clientId} | Updates a client by Id|

# **createClient**
> IMSAdminApiV1ClientsClientCreatedResponse createClient()


### Example

```typescript
import {
    InstancesClientsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsOneRosterCreateClientRequestDto
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesClientsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsOneRosterCreateClientRequestDto: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsOneRosterCreateClientRequestDto; // (optional)

const { status, data } = await apiInstance.createClient(
    tenantId,
    instanceId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsOneRosterCreateClientRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsOneRosterCreateClientRequestDto** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsOneRosterCreateClientRequestDto**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|


### Return type

**IMSAdminApiV1ClientsClientCreatedResponse**

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

# **deleteClient**
> IMSAdminApiV1ClientsClientDeletedResponse deleteClient()


### Example

```typescript
import {
    InstancesClientsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesClientsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let clientId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteClient(
    tenantId,
    instanceId,
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**IMSAdminApiV1ClientsClientDeletedResponse**

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

# **getClientById**
> IMSAdminApiV1ClientsClientProfileResponse getClientById()


### Example

```typescript
import {
    InstancesClientsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesClientsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let clientId: string; // (default to undefined)

const { status, data } = await apiInstance.getClientById(
    tenantId,
    instanceId,
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**IMSAdminApiV1ClientsClientProfileResponse**

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

# **getPagedClients**
> IMSAdminApiV1ClientsPaginatedItemsResponse getPagedClients()


### Example

```typescript
import {
    InstancesClientsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesClientsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getPagedClients(
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

**IMSAdminApiV1ClientsPaginatedItemsResponse**

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

# **updateClient**
> IMSAdminApiV1ClientsClientUpdatedResponse updateClient()


### Example

```typescript
import {
    InstancesClientsApi,
    Configuration,
    IMSAdminApiV1ClientsUpdateClientRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesClientsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let clientId: string; // (default to undefined)
let iMSAdminApiV1ClientsUpdateClientRequest: IMSAdminApiV1ClientsUpdateClientRequest; // (optional)

const { status, data } = await apiInstance.updateClient(
    tenantId,
    instanceId,
    clientId,
    iMSAdminApiV1ClientsUpdateClientRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **iMSAdminApiV1ClientsUpdateClientRequest** | **IMSAdminApiV1ClientsUpdateClientRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**IMSAdminApiV1ClientsClientUpdatedResponse**

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

