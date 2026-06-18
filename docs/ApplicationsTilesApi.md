# ApplicationsTilesApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTenantApplicationTilesAsync**](#gettenantapplicationtilesasync) | **GET** /tenants/{tenantId}/applicationtiles | Retrieves a list of applications licensed to the user that is currently logged in the context of this tenant|

# **getTenantApplicationTilesAsync**
> EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesApplicationTilesResponseWithUserApplicationLicense getTenantApplicationTilesAsync()


### Example

```typescript
import {
    ApplicationsTilesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ApplicationsTilesApi(configuration);

let tenantId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 100)
let orderBy: string; // (optional) (default to 'applicationName ASC')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getTenantApplicationTilesAsync(
    tenantId,
    pageIndex,
    pageSize,
    orderBy,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 100|
| **orderBy** | [**string**] |  | (optional) defaults to 'applicationName ASC'|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesApplicationTilesResponseWithUserApplicationLicense**

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

