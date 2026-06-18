# MyTenantsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getUserTenants**](#getusertenants) | **GET** /me/tenants | Retrieves the Tenants of the User that is currently logged in.|
|[**searchMyLicenses**](#searchmylicenses) | **GET** /v2/me/tenants/{tenantId}/licenses | Search the user\&#39;s licenses.|
|[**searchMyTenants**](#searchmytenants) | **GET** /v2/me/tenants | Searches tenants associated to the user.|

# **getUserTenants**
> IdentityApiUserV1UserTenantProfilePaginatedItemsViewModel getUserTenants()


### Example

```typescript
import {
    MyTenantsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MyTenantsApi(configuration);

let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let filter: string; // (optional) (default to '')
let orderBy: string; // (optional) (default to '')

const { status, data } = await apiInstance.getUserTenants(
    pageIndex,
    pageSize,
    filter,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **filter** | [**string**] |  | (optional) defaults to ''|
| **orderBy** | [**string**] |  | (optional) defaults to ''|


### Return type

**IdentityApiUserV1UserTenantProfilePaginatedItemsViewModel**

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

# **searchMyLicenses**
> IdentityApiUserV2UserMeTenantsResponsePaginatedItemsViewModel searchMyLicenses()


### Example

```typescript
import {
    MyTenantsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MyTenantsApi(configuration);

let tenantId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let filter: string; // (optional) (default to '')
let orderBy: string; // (optional) (default to '')

const { status, data } = await apiInstance.searchMyLicenses(
    tenantId,
    pageIndex,
    pageSize,
    filter,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **filter** | [**string**] |  | (optional) defaults to ''|
| **orderBy** | [**string**] |  | (optional) defaults to ''|


### Return type

**IdentityApiUserV2UserMeTenantsResponsePaginatedItemsViewModel**

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

# **searchMyTenants**
> IdentityApiUserV2UserMeTenantsResponsePaginatedItemsViewModel searchMyTenants()


### Example

```typescript
import {
    MyTenantsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MyTenantsApi(configuration);

let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let filter: string; // (optional) (default to '')
let orderBy: string; // (optional) (default to '')

const { status, data } = await apiInstance.searchMyTenants(
    pageIndex,
    pageSize,
    filter,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **filter** | [**string**] |  | (optional) defaults to ''|
| **orderBy** | [**string**] |  | (optional) defaults to ''|


### Return type

**IdentityApiUserV2UserMeTenantsResponsePaginatedItemsViewModel**

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

