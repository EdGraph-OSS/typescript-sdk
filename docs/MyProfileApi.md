# MyProfileApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMyProfile**](#getmyprofile) | **GET** /v2/me | Get the profile of the user that is currently logged in.|
|[**getMyTenant**](#getmytenant) | **GET** /v2/me/tenants/{tenantId} | Get the tenant associated to the user.|
|[**getUserCacheAsync**](#getusercacheasync) | **GET** /me | Retrieves the profile of the user that is currently logged in, including the user\&#39;s preferences and its associated tenants|

# **getMyProfile**
> IdentityApiUserV2UserMeProfile getMyProfile()


### Example

```typescript
import {
    MyProfileApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MyProfileApi(configuration);

const { status, data } = await apiInstance.getMyProfile();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**IdentityApiUserV2UserMeProfile**

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

# **getMyTenant**
> IdentityApiUserV2TenantMeProfile getMyTenant()


### Example

```typescript
import {
    MyProfileApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MyProfileApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.getMyTenant(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV2TenantMeProfile**

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

# **getUserCacheAsync**
> EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserCacheResponse getUserCacheAsync()


### Example

```typescript
import {
    MyProfileApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MyProfileApi(configuration);

let numberOfTenants: number; // (optional) (default to 10)

const { status, data } = await apiInstance.getUserCacheAsync(
    numberOfTenants
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **numberOfTenants** | [**number**] |  | (optional) defaults to 10|


### Return type

**EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserCacheResponse**

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

