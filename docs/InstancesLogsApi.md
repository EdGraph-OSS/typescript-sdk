# InstancesLogsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getInstanceHttpLogs**](#getinstancehttplogs) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/logs/http | Retrieves HTTP logs for a given instance|

# **getInstanceHttpLogs**
> EdGraphHttpAggregatorsTenantApiServicesEdFiAdminUseCasesInstanceLogPaginatedItemsViewModel getInstanceHttpLogs()


### Example

```typescript
import {
    InstancesLogsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesLogsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let from: number; // (optional) (default to 0)
let to: number; // (optional) (default to 0)
let field: string; // (optional) (default to '')
let order: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getInstanceHttpLogs(
    tenantId,
    instanceId,
    year,
    pageSize,
    pageIndex,
    from,
    to,
    field,
    order
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
| **from** | [**number**] |  | (optional) defaults to 0|
| **to** | [**number**] |  | (optional) defaults to 0|
| **field** | [**string**] |  | (optional) defaults to ''|
| **order** | [**boolean**] |  | (optional) defaults to false|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesEdFiAdminUseCasesInstanceLogPaginatedItemsViewModel**

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

