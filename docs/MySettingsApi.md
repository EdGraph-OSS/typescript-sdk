# MySettingsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createMySetting**](#createmysetting) | **POST** /me/settings | Create a User-scope setting|
|[**deleteMySetting**](#deletemysetting) | **DELETE** /me/settings/{settingIdOrCode} | Delete the User-scope setting for a key, addressed by SettingType id or Code|
|[**getMySetting**](#getmysetting) | **GET** /me/settings/{settingIdOrCode} | Get a User-scope setting|
|[**searchMySettings**](#searchmysettings) | **GET** /me/settings | List User-scope settings|
|[**setMySetting**](#setmysetting) | **PUT** /me/settings | Create or update (upsert) a User-scope setting, addressed by the SettingTypeId in the body|
|[**updateMySetting**](#updatemysetting) | **PUT** /me/settings/{settingIdOrCode} | Update the User-scope setting for a key, addressed by SettingType id or Code|

# **createMySetting**
> SettingsApiUserSettingsV1CreateUserSettingResponse createMySetting()


### Example

```typescript
import {
    MySettingsApi,
    Configuration,
    EdGraphPlatformHttpAggregatorsTenantApiControllersV1CreateMySettingRequestBody
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MySettingsApi(configuration);

let edGraphPlatformHttpAggregatorsTenantApiControllersV1CreateMySettingRequestBody: EdGraphPlatformHttpAggregatorsTenantApiControllersV1CreateMySettingRequestBody; // (optional)

const { status, data } = await apiInstance.createMySetting(
    edGraphPlatformHttpAggregatorsTenantApiControllersV1CreateMySettingRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphPlatformHttpAggregatorsTenantApiControllersV1CreateMySettingRequestBody** | **EdGraphPlatformHttpAggregatorsTenantApiControllersV1CreateMySettingRequestBody**|  | |


### Return type

**SettingsApiUserSettingsV1CreateUserSettingResponse**

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
|**201** | Created |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMySetting**
> deleteMySetting()


### Example

```typescript
import {
    MySettingsApi,
    Configuration,
    EdGraphPlatformHttpAggregatorsTenantApiControllersV1DeleteMySettingRequestBody
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MySettingsApi(configuration);

let settingIdOrCode: string; // (default to undefined)
let edGraphPlatformHttpAggregatorsTenantApiControllersV1DeleteMySettingRequestBody: EdGraphPlatformHttpAggregatorsTenantApiControllersV1DeleteMySettingRequestBody; // (optional)

const { status, data } = await apiInstance.deleteMySetting(
    settingIdOrCode,
    edGraphPlatformHttpAggregatorsTenantApiControllersV1DeleteMySettingRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphPlatformHttpAggregatorsTenantApiControllersV1DeleteMySettingRequestBody** | **EdGraphPlatformHttpAggregatorsTenantApiControllersV1DeleteMySettingRequestBody**|  | |
| **settingIdOrCode** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

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
|**204** | No Content |  -  |
|**404** | Not Found |  -  |
|**422** | Client Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMySetting**
> SettingsApiUserSettingsV1UserSettingMessage getMySetting()

Answers with the stored record alone. Effective-value resolution is opt-in: pass  `resolveEffectiveValue=true` to instead receive the value in force at this scope — every  layer above it merged under the setting\'s own value.

### Example

```typescript
import {
    MySettingsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MySettingsApi(configuration);

let settingIdOrCode: string; // (default to undefined)
let settingTypeId: string; // (optional) (default to undefined)
let provider: string; // (optional) (default to undefined)
let applicationId: string; // (optional) (default to undefined)
let resolveEffectiveValue: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getMySetting(
    settingIdOrCode,
    settingTypeId,
    provider,
    applicationId,
    resolveEffectiveValue
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settingIdOrCode** | [**string**] |  | defaults to undefined|
| **settingTypeId** | [**string**] |  | (optional) defaults to undefined|
| **provider** | [**string**] |  | (optional) defaults to undefined|
| **applicationId** | [**string**] |  | (optional) defaults to undefined|
| **resolveEffectiveValue** | [**boolean**] |  | (optional) defaults to false|


### Return type

**SettingsApiUserSettingsV1UserSettingMessage**

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
|**200** | Success |  -  |
|**404** | Not Found |  -  |
|**422** | Client Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchMySettings**
> SettingsApiUserSettingsV1SearchUserSettingsResponse searchMySettings()


### Example

```typescript
import {
    MySettingsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MySettingsApi(configuration);

let applicationId: string; // (optional) (default to undefined)
let settingTypeId: string; // (optional) (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.searchMySettings(
    applicationId,
    settingTypeId,
    pageIndex,
    pageSize,
    orderBy,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationId** | [**string**] |  | (optional) defaults to undefined|
| **settingTypeId** | [**string**] |  | (optional) defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**SettingsApiUserSettingsV1SearchUserSettingsResponse**

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setMySetting**
> SettingsApiUserSettingsV1SetUserSettingResponse setMySetting()


### Example

```typescript
import {
    MySettingsApi,
    Configuration,
    EdGraphPlatformHttpAggregatorsTenantApiControllersV1SetMySettingRequestBody
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MySettingsApi(configuration);

let edGraphPlatformHttpAggregatorsTenantApiControllersV1SetMySettingRequestBody: EdGraphPlatformHttpAggregatorsTenantApiControllersV1SetMySettingRequestBody; // (optional)

const { status, data } = await apiInstance.setMySetting(
    edGraphPlatformHttpAggregatorsTenantApiControllersV1SetMySettingRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphPlatformHttpAggregatorsTenantApiControllersV1SetMySettingRequestBody** | **EdGraphPlatformHttpAggregatorsTenantApiControllersV1SetMySettingRequestBody**|  | |


### Return type

**SettingsApiUserSettingsV1SetUserSettingResponse**

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMySetting**
> updateMySetting()


### Example

```typescript
import {
    MySettingsApi,
    Configuration,
    EdGraphPlatformHttpAggregatorsTenantApiControllersV1UpdateMySettingRequestBody
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MySettingsApi(configuration);

let settingIdOrCode: string; // (default to undefined)
let edGraphPlatformHttpAggregatorsTenantApiControllersV1UpdateMySettingRequestBody: EdGraphPlatformHttpAggregatorsTenantApiControllersV1UpdateMySettingRequestBody; // (optional)

const { status, data } = await apiInstance.updateMySetting(
    settingIdOrCode,
    edGraphPlatformHttpAggregatorsTenantApiControllersV1UpdateMySettingRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphPlatformHttpAggregatorsTenantApiControllersV1UpdateMySettingRequestBody** | **EdGraphPlatformHttpAggregatorsTenantApiControllersV1UpdateMySettingRequestBody**|  | |
| **settingIdOrCode** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

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
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**404** | Not Found |  -  |
|**422** | Client Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

