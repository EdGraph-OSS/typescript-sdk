# ClientSettingsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createClientSetting**](#createclientsetting) | **POST** /v2/tenants/{tenantId}/clients/{clientId}/settings | Create a Client-scope setting|
|[**deleteClientSetting**](#deleteclientsetting) | **DELETE** /v2/tenants/{tenantId}/clients/{clientId}/settings/{settingIdOrCode} | Delete the Client-scope setting for a key, addressed by SettingType id or Code|
|[**getClientSetting**](#getclientsetting) | **GET** /v2/tenants/{tenantId}/clients/{clientId}/settings/{settingIdOrCode} | Get a Client-scope setting|
|[**searchClientSettings**](#searchclientsettings) | **GET** /v2/tenants/{tenantId}/clients/{clientId}/settings | List Client-scope settings|
|[**setClientSetting**](#setclientsetting) | **PUT** /v2/tenants/{tenantId}/clients/{clientId}/settings | Create or update (upsert) a Client-scope setting, addressed by the SettingTypeId in the body|
|[**updateClientSetting**](#updateclientsetting) | **PUT** /v2/tenants/{tenantId}/clients/{clientId}/settings/{settingIdOrCode} | Update the Client-scope setting for a key, addressed by SettingType id or Code|

# **createClientSetting**
> SettingsApiClientSettingsV1CreateClientSettingResponse createClientSetting()


### Example

```typescript
import {
    ClientSettingsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV2CreateClientSettingRequestBody
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ClientSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let clientId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV2CreateClientSettingRequestBody: EdGraphHttpAggregatorsTenantApiControllersV2CreateClientSettingRequestBody; // (optional)

const { status, data } = await apiInstance.createClientSetting(
    tenantId,
    clientId,
    edGraphHttpAggregatorsTenantApiControllersV2CreateClientSettingRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV2CreateClientSettingRequestBody** | **EdGraphHttpAggregatorsTenantApiControllersV2CreateClientSettingRequestBody**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**SettingsApiClientSettingsV1CreateClientSettingResponse**

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

# **deleteClientSetting**
> deleteClientSetting()


### Example

```typescript
import {
    ClientSettingsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV2DeleteClientSettingRequestBody
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ClientSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let clientId: string; // (default to undefined)
let settingIdOrCode: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV2DeleteClientSettingRequestBody: EdGraphHttpAggregatorsTenantApiControllersV2DeleteClientSettingRequestBody; // (optional)

const { status, data } = await apiInstance.deleteClientSetting(
    tenantId,
    clientId,
    settingIdOrCode,
    edGraphHttpAggregatorsTenantApiControllersV2DeleteClientSettingRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV2DeleteClientSettingRequestBody** | **EdGraphHttpAggregatorsTenantApiControllersV2DeleteClientSettingRequestBody**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|
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

# **getClientSetting**
> SettingsApiClientSettingsV1ClientSettingMessage getClientSetting()

Answers with the stored record alone. Effective-value resolution is opt-in: pass  `resolveEffectiveValue=true` to instead receive the value in force at this scope — every  layer above it merged under the setting\'s own value.

### Example

```typescript
import {
    ClientSettingsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ClientSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let clientId: string; // (default to undefined)
let settingIdOrCode: string; // (default to undefined)
let settingTypeId: string; // (optional) (default to undefined)
let provider: string; // (optional) (default to undefined)
let applicationId: string; // (optional) (default to undefined)
let resolveEffectiveValue: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getClientSetting(
    tenantId,
    clientId,
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
| **clientId** | [**string**] |  | defaults to undefined|
| **settingIdOrCode** | [**string**] |  | defaults to undefined|
| **settingTypeId** | [**string**] |  | (optional) defaults to undefined|
| **provider** | [**string**] |  | (optional) defaults to undefined|
| **applicationId** | [**string**] |  | (optional) defaults to undefined|
| **resolveEffectiveValue** | [**boolean**] |  | (optional) defaults to false|


### Return type

**SettingsApiClientSettingsV1ClientSettingMessage**

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

# **searchClientSettings**
> SettingsApiClientSettingsV1SearchClientSettingsResponse searchClientSettings()


### Example

```typescript
import {
    ClientSettingsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ClientSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let clientId: string; // (default to undefined)
let applicationId: string; // (optional) (default to undefined)
let settingTypeId: string; // (optional) (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.searchClientSettings(
    tenantId,
    clientId,
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
| **clientId** | [**string**] |  | defaults to undefined|
| **applicationId** | [**string**] |  | (optional) defaults to undefined|
| **settingTypeId** | [**string**] |  | (optional) defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**SettingsApiClientSettingsV1SearchClientSettingsResponse**

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

# **setClientSetting**
> SettingsApiClientSettingsV1SetClientSettingResponse setClientSetting()


### Example

```typescript
import {
    ClientSettingsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV2SetClientSettingRequestBody
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ClientSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let clientId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV2SetClientSettingRequestBody: EdGraphHttpAggregatorsTenantApiControllersV2SetClientSettingRequestBody; // (optional)

const { status, data } = await apiInstance.setClientSetting(
    tenantId,
    clientId,
    edGraphHttpAggregatorsTenantApiControllersV2SetClientSettingRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV2SetClientSettingRequestBody** | **EdGraphHttpAggregatorsTenantApiControllersV2SetClientSettingRequestBody**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**SettingsApiClientSettingsV1SetClientSettingResponse**

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

# **updateClientSetting**
> updateClientSetting()


### Example

```typescript
import {
    ClientSettingsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV2UpdateClientSettingRequestBody
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ClientSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let clientId: string; // (default to undefined)
let settingIdOrCode: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV2UpdateClientSettingRequestBody: EdGraphHttpAggregatorsTenantApiControllersV2UpdateClientSettingRequestBody; // (optional)

const { status, data } = await apiInstance.updateClientSetting(
    tenantId,
    clientId,
    settingIdOrCode,
    edGraphHttpAggregatorsTenantApiControllersV2UpdateClientSettingRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV2UpdateClientSettingRequestBody** | **EdGraphHttpAggregatorsTenantApiControllersV2UpdateClientSettingRequestBody**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|
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

