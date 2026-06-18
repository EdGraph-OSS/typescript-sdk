# TenantsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTenantByIdAsync**](#gettenantbyidasync) | **GET** /tenants/{tenantId} | Retrieves the profile of a specific tenant|
|[**updateTenantAsync**](#updatetenantasync) | **PUT** /tenants/{tenantId} | Updates a tenant\&#39;s profile|

# **getTenantByIdAsync**
> TenantApiTenantV1TenantProfileResponse getTenantByIdAsync()


### Example

```typescript
import {
    TenantsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantsApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.getTenantByIdAsync(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiTenantV1TenantProfileResponse**

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
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTenantAsync**
> TenantApiTenantV1TenantUpdatedResponse updateTenantAsync()

Note: Only the tenant\'s Identity Providers can be updated at this time

### Example

```typescript
import {
    TenantsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsTenantsUpdateTenantRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantsApi(configuration);

let tenantId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsTenantsUpdateTenantRequest: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsTenantsUpdateTenantRequest; // (optional)

const { status, data } = await apiInstance.updateTenantAsync(
    tenantId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsTenantsUpdateTenantRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsTenantsUpdateTenantRequest** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsTenantsUpdateTenantRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiTenantV1TenantUpdatedResponse**

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

