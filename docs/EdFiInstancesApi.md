# EdFiInstancesApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllEdFiAdminConnectionsFromAnalyticsAsync**](#getalledfiadminconnectionsfromanalyticsasync) | **GET** /tenants/{tenantId}/analytics/edfiadmin/connections | Retrieves a list of EdFi Admin connections|
|[**getAllEdFiAdminInstancesFromAnalyticsAsync**](#getalledfiadmininstancesfromanalyticsasync) | **GET** /tenants/{tenantId}/analytics/edfiadmin/instances | Retrieves a list of EdFi Admin instances|
|[**getEdFiAdminInstanceByIdFromAnalyticsAsync**](#getedfiadmininstancebyidfromanalyticsasync) | **GET** /tenants/{tenantId}/analytics/edfiadmin/instances/{instanceId} | Retrieves an Ed-Fi Admin instance by ID.|

# **getAllEdFiAdminConnectionsFromAnalyticsAsync**
> AnalyticsApiReportsV1ReportPaginatedItemsResponse getAllEdFiAdminConnectionsFromAnalyticsAsync()


### Example

```typescript
import {
    EdFiInstancesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EdFiInstancesApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllEdFiAdminConnectionsFromAnalyticsAsync(
    tenantId,
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
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**AnalyticsApiReportsV1ReportPaginatedItemsResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Missing the required permissions to access to this tenant/resource |  -  |
|**500** | Oops! Can\&#39;t retrieve the list of EdFi Admin connections right now |  -  |
|**200** | List of EdFi Admin connections |  -  |
|**400** | Tenant has missing/invalid values |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllEdFiAdminInstancesFromAnalyticsAsync**
> AnalyticsApiReportsV1ReportPaginatedItemsResponse getAllEdFiAdminInstancesFromAnalyticsAsync()


### Example

```typescript
import {
    EdFiInstancesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EdFiInstancesApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllEdFiAdminInstancesFromAnalyticsAsync(
    tenantId,
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
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**AnalyticsApiReportsV1ReportPaginatedItemsResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Missing the required permissions to access to this tenant/resource |  -  |
|**500** | Oops! Can\&#39;t retrieve the list of EdFi Admin instances right now |  -  |
|**200** | List of EdFi Admin instances |  -  |
|**400** | Tenant has missing/invalid values |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEdFiAdminInstanceByIdFromAnalyticsAsync**
> EdfiAdminApiEdfiAdminV1Instance getEdFiAdminInstanceByIdFromAnalyticsAsync()


### Example

```typescript
import {
    EdFiInstancesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EdFiInstancesApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)

const { status, data } = await apiInstance.getEdFiAdminInstanceByIdFromAnalyticsAsync(
    tenantId,
    instanceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1Instance**

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

