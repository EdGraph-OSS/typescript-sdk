# ConnectionsEdFiApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTenantDataSyncConnectionEdFiDistricts**](#gettenantdatasyncconnectionedfidistricts) | **GET** /tenants/{tenantId}/datasync/connections/{connectionId}/edfi/districts | Retrieves a list of districts from an Ed-Fi API using the DataSync connection metadata|
|[**getTenantDataSyncConnectionEdFiEducationOrganizationIdDescriptors**](#gettenantdatasyncconnectionedfieducationorganizationiddescriptors) | **GET** /tenants/{tenantId}/datasync/connections/{connectionId}/edfi/educationorganizationidentificationsystemdescriptors | Retrieves a list of education organization identification system descriptors from an Ed-Fi API using the DataSync connection metadata|
|[**getTenantDataSyncConnectionEdFiSchoolYears**](#gettenantdatasyncconnectionedfischoolyears) | **GET** /tenants/{tenantId}/datasync/connections/{connectionId}/edfi/schoolyears | Retrieves a list of school years from an Ed-Fi API using the DataSync connection metadata|
|[**getTenantDataSyncConnectionEdFiStaffIdDescriptors**](#gettenantdatasyncconnectionedfistaffiddescriptors) | **GET** /tenants/{tenantId}/datasync/connections/{connectionId}/edfi/staffidentificationsystemdescriptors | Retrieves a list of staff identification system descriptors from an Ed-Fi API using the DataSync connection metadata|
|[**getTenantDataSyncConnectionEdFiStudentIdDescriptors**](#gettenantdatasyncconnectionedfistudentiddescriptors) | **GET** /tenants/{tenantId}/datasync/connections/{connectionId}/edfi/studentidentificationsystemdescriptors | Retrieves a list of student identification system descriptors from an Ed-Fi API using the DataSync connection metadata|
|[**getTenantDataSyncConnectionEdFiTermDescriptors**](#gettenantdatasyncconnectionedfitermdescriptors) | **GET** /tenants/{tenantId}/datasync/connections/{connectionId}/edfi/termdescriptors | Retrieves a list of term descriptors from an Ed-Fi API using the DataSync connection metadata|

# **getTenantDataSyncConnectionEdFiDistricts**
> Array<EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesConnectionEdFiResponse> getTenantDataSyncConnectionEdFiDistricts()


### Example

```typescript
import {
    ConnectionsEdFiApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsEdFiApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.getTenantDataSyncConnectionEdFiDistricts(
    tenantId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**Array<EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesConnectionEdFiResponse>**

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

# **getTenantDataSyncConnectionEdFiEducationOrganizationIdDescriptors**
> Array<EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesConnectionEdFiResponse> getTenantDataSyncConnectionEdFiEducationOrganizationIdDescriptors()


### Example

```typescript
import {
    ConnectionsEdFiApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsEdFiApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.getTenantDataSyncConnectionEdFiEducationOrganizationIdDescriptors(
    tenantId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**Array<EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesConnectionEdFiResponse>**

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

# **getTenantDataSyncConnectionEdFiSchoolYears**
> Array<EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesConnectionEdFiResponse> getTenantDataSyncConnectionEdFiSchoolYears()


### Example

```typescript
import {
    ConnectionsEdFiApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsEdFiApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.getTenantDataSyncConnectionEdFiSchoolYears(
    tenantId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**Array<EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesConnectionEdFiResponse>**

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

# **getTenantDataSyncConnectionEdFiStaffIdDescriptors**
> Array<EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesConnectionEdFiResponse> getTenantDataSyncConnectionEdFiStaffIdDescriptors()


### Example

```typescript
import {
    ConnectionsEdFiApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsEdFiApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.getTenantDataSyncConnectionEdFiStaffIdDescriptors(
    tenantId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**Array<EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesConnectionEdFiResponse>**

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

# **getTenantDataSyncConnectionEdFiStudentIdDescriptors**
> Array<EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesConnectionEdFiResponse> getTenantDataSyncConnectionEdFiStudentIdDescriptors()


### Example

```typescript
import {
    ConnectionsEdFiApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsEdFiApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.getTenantDataSyncConnectionEdFiStudentIdDescriptors(
    tenantId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**Array<EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesConnectionEdFiResponse>**

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

# **getTenantDataSyncConnectionEdFiTermDescriptors**
> Array<EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesConnectionEdFiResponse> getTenantDataSyncConnectionEdFiTermDescriptors()


### Example

```typescript
import {
    ConnectionsEdFiApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsEdFiApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.getTenantDataSyncConnectionEdFiTermDescriptors(
    tenantId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**Array<EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesConnectionEdFiResponse>**

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

