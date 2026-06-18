# ProvidersApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllTenantDataSyncProviders**](#getalltenantdatasyncproviders) | **GET** /tenants/{tenantId}/datasync/providers | Retrieves a list of DataSync providers|
|[**getTenantDataSyncProviderProfileById**](#gettenantdatasyncproviderprofilebyid) | **GET** /tenants/{tenantId}/datasync/providers/{providerId} | Retrieves a specific DataSync provider using its primary key|

# **getAllTenantDataSyncProviders**
> DataSyncApiProviderV1ProviderListResponsePaginatedItemsViewModel getAllTenantDataSyncProviders()


### Example

```typescript
import {
    ProvidersApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ProvidersApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllTenantDataSyncProviders(
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

**DataSyncApiProviderV1ProviderListResponsePaginatedItemsViewModel**

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

# **getTenantDataSyncProviderProfileById**
> DataSyncApiProviderV1ProviderProfileResponse getTenantDataSyncProviderProfileById()


### Example

```typescript
import {
    ProvidersApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ProvidersApi(configuration);

let tenantId: string; // (default to undefined)
let providerId: string; // (default to undefined)

const { status, data } = await apiInstance.getTenantDataSyncProviderProfileById(
    tenantId,
    providerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **providerId** | [**string**] |  | defaults to undefined|


### Return type

**DataSyncApiProviderV1ProviderProfileResponse**

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

