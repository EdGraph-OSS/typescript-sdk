# InstanceResourcesCountApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllInstanceResourcesCountAsync**](#getallinstanceresourcescountasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/applications/{applicationId}/apiclients/{apiClientId}/resourcescount | Retrieves a paginated list of Instance Resources Count|
|[**getAllInstanceResourcesCountJson**](#getallinstanceresourcescountjson) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/applications/{applicationId}/apiclients/{apiClientId}/resourcescount/export | Retrieves the JSON representation of Instance Resources Count. Useful for exporting into other systems.|

# **getAllInstanceResourcesCountAsync**
> EdfiAdminApiEdfiAdminV1InstanceResourcesCountListResponsePaginatedItemsViewModel getAllInstanceResourcesCountAsync()


### Example

```typescript
import {
    InstanceResourcesCountApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstanceResourcesCountApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let applicationId: number; // (default to undefined)
let apiClientId: number; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllInstanceResourcesCountAsync(
    tenantId,
    instanceId,
    year,
    applicationId,
    apiClientId,
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
| **applicationId** | [**number**] |  | defaults to undefined|
| **apiClientId** | [**number**] |  | defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**EdfiAdminApiEdfiAdminV1InstanceResourcesCountListResponsePaginatedItemsViewModel**

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

# **getAllInstanceResourcesCountJson**
> EdfiAdminApiEdfiAdminV1InstanceResourcesCountJsonResponse getAllInstanceResourcesCountJson()


### Example

```typescript
import {
    InstanceResourcesCountApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstanceResourcesCountApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let applicationId: number; // (default to undefined)
let apiClientId: number; // (default to undefined)
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllInstanceResourcesCountJson(
    tenantId,
    instanceId,
    year,
    applicationId,
    apiClientId,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **applicationId** | [**number**] |  | defaults to undefined|
| **apiClientId** | [**number**] |  | defaults to undefined|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**EdfiAdminApiEdfiAdminV1InstanceResourcesCountJsonResponse**

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

