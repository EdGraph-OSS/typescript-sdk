# MyPreferencesApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getUserPreferences**](#getuserpreferences) | **GET** /me/preferences | Retrieves the user\&#39;s preferences.|
|[**preference**](#preference) | **GET** /me/preferences/{code} | Retrieves a user\&#39;s preference by code.|
|[**updateUserPreferenceAsync**](#updateuserpreferenceasync) | **POST** /me/preferences | Creates or update a user\&#39;s preference.|

# **getUserPreferences**
> IdentityApiUserV1GetUserPreferencesResponse getUserPreferences()


### Example

```typescript
import {
    MyPreferencesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MyPreferencesApi(configuration);

let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let orderBy: string; // (optional) (default to undefined)
let filter: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getUserPreferences(
    pageIndex,
    pageSize,
    orderBy,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **filter** | [**string**] |  | (optional) defaults to undefined|


### Return type

**IdentityApiUserV1GetUserPreferencesResponse**

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

# **preference**
> EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserCacheResponse preference()


### Example

```typescript
import {
    MyPreferencesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MyPreferencesApi(configuration);

let code: string; // (default to undefined)

const { status, data } = await apiInstance.preference(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] |  | defaults to undefined|


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

# **updateUserPreferenceAsync**
> IdentityApiUserV1UserPreferenceUpdatedResponse updateUserPreferenceAsync()


### Example

```typescript
import {
    MyPreferencesApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsUpdateUserPreferenceRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MyPreferencesApi(configuration);

let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsUpdateUserPreferenceRequest: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsUpdateUserPreferenceRequest; // (optional)

const { status, data } = await apiInstance.updateUserPreferenceAsync(
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsUpdateUserPreferenceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsUpdateUserPreferenceRequest** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsUpdateUserPreferenceRequest**|  | |


### Return type

**IdentityApiUserV1UserPreferenceUpdatedResponse**

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

