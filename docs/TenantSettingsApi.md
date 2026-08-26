# TenantSettingsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTenantSetting**](#createtenantsetting) | **POST** /v2/tenants/{tenantId}/settings | Create a Tenant-scope setting|
|[**deleteTenantSetting**](#deletetenantsetting) | **DELETE** /v2/tenants/{tenantId}/settings/{settingIdOrCode} | Delete the Tenant-scope setting for a key, addressed by SettingType id or Code|
|[**getTenantSetting**](#gettenantsetting) | **GET** /v2/tenants/{tenantId}/settings/{settingIdOrCode} | Get a Tenant-scope setting|
|[**searchTenantSettings**](#searchtenantsettings) | **GET** /v2/tenants/{tenantId}/settings | List Tenant-scope settings|
|[**setTenantSetting**](#settenantsetting) | **PUT** /v2/tenants/{tenantId}/settings | Create or update (upsert) a Tenant-scope setting, addressed by the SettingTypeId in the body|
|[**updateTenantSetting**](#updatetenantsetting) | **PUT** /v2/tenants/{tenantId}/settings/{settingIdOrCode} | Update the Tenant-scope setting for a key, addressed by SettingType id or Code|

# **createTenantSetting**
> SettingsApiTenantSettingsV1CreateTenantSettingResponse createTenantSetting()


### Example

```typescript
import {
    TenantSettingsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV2CreateTenantSettingRequestBody
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV2CreateTenantSettingRequestBody: EdGraphHttpAggregatorsTenantApiControllersV2CreateTenantSettingRequestBody; // (optional)

const { status, data } = await apiInstance.createTenantSetting(
    tenantId,
    edGraphHttpAggregatorsTenantApiControllersV2CreateTenantSettingRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV2CreateTenantSettingRequestBody** | **EdGraphHttpAggregatorsTenantApiControllersV2CreateTenantSettingRequestBody**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**SettingsApiTenantSettingsV1CreateTenantSettingResponse**

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

# **deleteTenantSetting**
> deleteTenantSetting()


### Example

```typescript
import {
    TenantSettingsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV2DeleteTenantSettingRequestBody
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let settingIdOrCode: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV2DeleteTenantSettingRequestBody: EdGraphHttpAggregatorsTenantApiControllersV2DeleteTenantSettingRequestBody; // (optional)

const { status, data } = await apiInstance.deleteTenantSetting(
    tenantId,
    settingIdOrCode,
    edGraphHttpAggregatorsTenantApiControllersV2DeleteTenantSettingRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV2DeleteTenantSettingRequestBody** | **EdGraphHttpAggregatorsTenantApiControllersV2DeleteTenantSettingRequestBody**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
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

# **getTenantSetting**
> SettingsApiTenantSettingsV1TenantSettingMessage getTenantSetting()

Answers with the stored record alone. Effective-value resolution is opt-in: pass  `resolveEffectiveValue=true` to instead receive the value in force at this scope — every  layer above it merged under the setting\'s own value.

### Example

```typescript
import {
    TenantSettingsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let settingIdOrCode: string; // (default to undefined)
let settingTypeId: string; // (optional) (default to undefined)
let provider: string; // (optional) (default to undefined)
let applicationId: string; // (optional) (default to undefined)
let resolveEffectiveValue: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getTenantSetting(
    tenantId,
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
| **tenantId** | [**string**] |  | defaults to undefined|
| **settingIdOrCode** | [**string**] |  | defaults to undefined|
| **settingTypeId** | [**string**] |  | (optional) defaults to undefined|
| **provider** | [**string**] |  | (optional) defaults to undefined|
| **applicationId** | [**string**] |  | (optional) defaults to undefined|
| **resolveEffectiveValue** | [**boolean**] |  | (optional) defaults to false|


### Return type

**SettingsApiTenantSettingsV1TenantSettingMessage**

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

# **searchTenantSettings**
> SettingsApiTenantSettingsV1SearchTenantSettingsResponse searchTenantSettings()


### Example

```typescript
import {
    TenantSettingsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let applicationId: string; // (optional) (default to undefined)
let settingTypeId: string; // (optional) (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.searchTenantSettings(
    tenantId,
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
| **tenantId** | [**string**] |  | defaults to undefined|
| **applicationId** | [**string**] |  | (optional) defaults to undefined|
| **settingTypeId** | [**string**] |  | (optional) defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**SettingsApiTenantSettingsV1SearchTenantSettingsResponse**

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

# **setTenantSetting**
> SettingsApiTenantSettingsV1SetTenantSettingResponse setTenantSetting()


### Example

```typescript
import {
    TenantSettingsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV2SetTenantSettingRequestBody
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV2SetTenantSettingRequestBody: EdGraphHttpAggregatorsTenantApiControllersV2SetTenantSettingRequestBody; // (optional)

const { status, data } = await apiInstance.setTenantSetting(
    tenantId,
    edGraphHttpAggregatorsTenantApiControllersV2SetTenantSettingRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV2SetTenantSettingRequestBody** | **EdGraphHttpAggregatorsTenantApiControllersV2SetTenantSettingRequestBody**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**SettingsApiTenantSettingsV1SetTenantSettingResponse**

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

# **updateTenantSetting**
> updateTenantSetting()


### Example

```typescript
import {
    TenantSettingsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV2UpdateTenantSettingRequestBody
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let settingIdOrCode: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV2UpdateTenantSettingRequestBody: EdGraphHttpAggregatorsTenantApiControllersV2UpdateTenantSettingRequestBody; // (optional)

const { status, data } = await apiInstance.updateTenantSetting(
    tenantId,
    settingIdOrCode,
    edGraphHttpAggregatorsTenantApiControllersV2UpdateTenantSettingRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV2UpdateTenantSettingRequestBody** | **EdGraphHttpAggregatorsTenantApiControllersV2UpdateTenantSettingRequestBody**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
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

