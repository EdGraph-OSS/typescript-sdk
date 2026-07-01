# ApplicationsSettingsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getClientSettingsAsync**](#getclientsettingsasync) | **GET** /tenants/{tenantId}/clients/{clientId}/settings | Retrieves a list of a Tenant\&#39;s ClientSettings.|
|[**getClientSettingsTypesAsync**](#getclientsettingstypesasync) | **GET** /tenants/{tenantId}/clients/{clientId}/settingstypes | Retrieves a list of ClientSettingsTypes.|
|[**setClientSettingsAsync**](#setclientsettingsasync) | **POST** /tenants/{tenantId}/clients/{clientId}/settings | Creates/updates a Tenant\&#39;s ClientSettings.|

# **getClientSettingsAsync**
> TenantApiTenantV1GetAppSettingsResponse getClientSettingsAsync()


### Example

```typescript
import {
    ApplicationsSettingsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ApplicationsSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let clientId: string; // (default to undefined)

const { status, data } = await apiInstance.getClientSettingsAsync(
    tenantId,
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiTenantV1GetAppSettingsResponse**

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

# **getClientSettingsTypesAsync**
> IdentityApiClientSettingsTypeV1GetClientSettingsTypesResponse getClientSettingsTypesAsync()


### Example

```typescript
import {
    ApplicationsSettingsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ApplicationsSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let clientId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getClientSettingsTypesAsync(
    tenantId,
    clientId,
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
| **clientId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**IdentityApiClientSettingsTypeV1GetClientSettingsTypesResponse**

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

# **setClientSettingsAsync**
> TenantApiTenantV1SetAppSettingsResponse setClientSettingsAsync()


### Example

```typescript
import {
    ApplicationsSettingsApi,
    Configuration,
    TenantApiTenantV1SetAppSettingsRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ApplicationsSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let clientId: string; // (default to undefined)
let tenantApiTenantV1SetAppSettingsRequest: TenantApiTenantV1SetAppSettingsRequest; // (optional)

const { status, data } = await apiInstance.setClientSettingsAsync(
    tenantId,
    clientId,
    tenantApiTenantV1SetAppSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiTenantV1SetAppSettingsRequest** | **TenantApiTenantV1SetAppSettingsRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiTenantV1SetAppSettingsResponse**

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

