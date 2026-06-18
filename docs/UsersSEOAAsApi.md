# UsersSEOAAsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addUserSEOAA**](#adduserseoaa) | **POST** /v2/tenants/{tenantId}/users/{userId}/seoaas | Add User SEOAAs|
|[**deleteUserSEOAA**](#deleteuserseoaa) | **DELETE** /v2/tenants/{tenantId}/users/{userId}/seoaas/{seoaaId} | Delete User SEOAAs|
|[**searchUserSEOAA**](#searchuserseoaa) | **GET** /v2/tenants/{tenantId}/users/{userId}/seoaas | Search User SEOAAs|
|[**updateUserSEOAA**](#updateuserseoaa) | **PUT** /v2/tenants/{tenantId}/users/{userId}/seoaas/{seoaaId} | Update User SEOAAs|

# **addUserSEOAA**
> IdentityApiUserV1SEOAAAddedResponse addUserSEOAA()


### Example

```typescript
import {
    UsersSEOAAsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV2RequestsAddSeoaaRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersSEOAAsApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV2RequestsAddSeoaaRequest: EdGraphHttpAggregatorsTenantApiControllersV2RequestsAddSeoaaRequest; // (optional)

const { status, data } = await apiInstance.addUserSEOAA(
    tenantId,
    userId,
    edGraphHttpAggregatorsTenantApiControllersV2RequestsAddSeoaaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV2RequestsAddSeoaaRequest** | **EdGraphHttpAggregatorsTenantApiControllersV2RequestsAddSeoaaRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1SEOAAAddedResponse**

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

# **deleteUserSEOAA**
> IdentityApiUserV1SEOAAUpdatedResponse deleteUserSEOAA()


### Example

```typescript
import {
    UsersSEOAAsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersSEOAAsApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let seoaaId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteUserSEOAA(
    tenantId,
    userId,
    seoaaId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|
| **seoaaId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1SEOAAUpdatedResponse**

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

# **searchUserSEOAA**
> IdentityApiUserV1GetSEOAAsResponse searchUserSEOAA()


### Example

```typescript
import {
    UsersSEOAAsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersSEOAAsApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.searchUserSEOAA(
    tenantId,
    userId,
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
| **userId** | [**string**] |  | defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**IdentityApiUserV1GetSEOAAsResponse**

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

# **updateUserSEOAA**
> IdentityApiUserV1SEOAAUpdatedResponse updateUserSEOAA()


### Example

```typescript
import {
    UsersSEOAAsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV2RequestsUpdateSeoaaRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersSEOAAsApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let seoaaId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV2RequestsUpdateSeoaaRequest: EdGraphHttpAggregatorsTenantApiControllersV2RequestsUpdateSeoaaRequest; // (optional)

const { status, data } = await apiInstance.updateUserSEOAA(
    tenantId,
    userId,
    seoaaId,
    edGraphHttpAggregatorsTenantApiControllersV2RequestsUpdateSeoaaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV2RequestsUpdateSeoaaRequest** | **EdGraphHttpAggregatorsTenantApiControllersV2RequestsUpdateSeoaaRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|
| **seoaaId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1SEOAAUpdatedResponse**

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

