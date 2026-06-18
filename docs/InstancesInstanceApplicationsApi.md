# InstancesInstanceApplicationsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createInstanceApplication**](#createinstanceapplication) | **POST** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/instanceapplications | Creates an Instance Application|
|[**deleteInstanceApplication**](#deleteinstanceapplication) | **DELETE** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/instanceapplications/{applicationId} | Deletes an Instance Application|
|[**getInstanceApplicationById**](#getinstanceapplicationbyid) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/instanceapplications/{applicationId} | Retrieves an Instance Application by ID.|
|[**getInstanceApplications**](#getinstanceapplications) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/instanceapplications | Retrieves a paginated list of Instance applications|
|[**updateInstanceApplication**](#updateinstanceapplication) | **PUT** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/instanceapplications/{applicationId} | Updates an Instance Application|

# **createInstanceApplication**
> EdfiAdminApiEdfiAdminV1InstanceApplicationCreatedResponse createInstanceApplication()


### Example

```typescript
import {
    InstancesInstanceApplicationsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiServicesInstanceApplicationsUseCasesCreateTenantInstanceApplicationRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesInstanceApplicationsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiServicesInstanceApplicationsUseCasesCreateTenantInstanceApplicationRequest: EdGraphHttpAggregatorsTenantApiServicesInstanceApplicationsUseCasesCreateTenantInstanceApplicationRequest; // (optional)

const { status, data } = await apiInstance.createInstanceApplication(
    tenantId,
    instanceId,
    edGraphHttpAggregatorsTenantApiServicesInstanceApplicationsUseCasesCreateTenantInstanceApplicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiServicesInstanceApplicationsUseCasesCreateTenantInstanceApplicationRequest** | **EdGraphHttpAggregatorsTenantApiServicesInstanceApplicationsUseCasesCreateTenantInstanceApplicationRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1InstanceApplicationCreatedResponse**

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

# **deleteInstanceApplication**
> deleteInstanceApplication()


### Example

```typescript
import {
    InstancesInstanceApplicationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesInstanceApplicationsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let applicationId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteInstanceApplication(
    tenantId,
    instanceId,
    applicationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **applicationId** | [**string**] |  | defaults to undefined|


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

# **getInstanceApplicationById**
> EdfiAdminApiEdfiAdminV1InstanceApplicationProfileResponse getInstanceApplicationById()


### Example

```typescript
import {
    InstancesInstanceApplicationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesInstanceApplicationsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let applicationId: string; // (default to undefined)

const { status, data } = await apiInstance.getInstanceApplicationById(
    tenantId,
    instanceId,
    applicationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **applicationId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1InstanceApplicationProfileResponse**

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

# **getInstanceApplications**
> EdfiAdminApiEdfiAdminV1InstanceApplicationsListResponsePaginatedItemsViewModel getInstanceApplications()


### Example

```typescript
import {
    InstancesInstanceApplicationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesInstanceApplicationsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getInstanceApplications(
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

**EdfiAdminApiEdfiAdminV1InstanceApplicationsListResponsePaginatedItemsViewModel**

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

# **updateInstanceApplication**
> EdfiAdminApiEdfiAdminV1InstanceApplicationUpdatedResponse updateInstanceApplication()


### Example

```typescript
import {
    InstancesInstanceApplicationsApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1UpdateInstanceApplicationRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesInstanceApplicationsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let applicationId: string; // (default to undefined)
let edfiAdminApiEdfiAdminV1UpdateInstanceApplicationRequest: EdfiAdminApiEdfiAdminV1UpdateInstanceApplicationRequest; // (optional)

const { status, data } = await apiInstance.updateInstanceApplication(
    tenantId,
    instanceId,
    applicationId,
    edfiAdminApiEdfiAdminV1UpdateInstanceApplicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1UpdateInstanceApplicationRequest** | **EdfiAdminApiEdfiAdminV1UpdateInstanceApplicationRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **applicationId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1InstanceApplicationUpdatedResponse**

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

