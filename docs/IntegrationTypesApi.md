# IntegrationTypesApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createIntegrationType**](#createintegrationtype) | **POST** /integrations/types | Creates an Integration Type.|
|[**deleteIntegrationType**](#deleteintegrationtype) | **DELETE** /integrations/types/{typeId} | Removes an Integration Type.|
|[**getIntegrationType**](#getintegrationtype) | **GET** /integrations/types/{typeId} | Gets an Integration Type.|
|[**searchIntegrationTypes**](#searchintegrationtypes) | **GET** /integrations/types | Search Integration Types.|
|[**updateIntegrationType**](#updateintegrationtype) | **PUT** /integrations/types/{typeId} | Updates an Integration Type.|

# **createIntegrationType**
> TenantApiIntegrationsV1CreateIntegrationTypeResponse createIntegrationType()


### Example

```typescript
import {
    IntegrationTypesApi,
    Configuration,
    TenantApiIntegrationsV1CreateIntegrationTypeRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new IntegrationTypesApi(configuration);

let tenantApiIntegrationsV1CreateIntegrationTypeRequest: TenantApiIntegrationsV1CreateIntegrationTypeRequest; // (optional)

const { status, data } = await apiInstance.createIntegrationType(
    tenantApiIntegrationsV1CreateIntegrationTypeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiIntegrationsV1CreateIntegrationTypeRequest** | **TenantApiIntegrationsV1CreateIntegrationTypeRequest**|  | |


### Return type

**TenantApiIntegrationsV1CreateIntegrationTypeResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Server Error |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteIntegrationType**
> TenantApiIntegrationsV1DeleteIntegrationTypeResponse deleteIntegrationType()


### Example

```typescript
import {
    IntegrationTypesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new IntegrationTypesApi(configuration);

let typeId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteIntegrationType(
    typeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **typeId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiIntegrationsV1DeleteIntegrationTypeResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Server Error |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIntegrationType**
> TenantApiIntegrationsV1GetIntegrationTypeResponse getIntegrationType()


### Example

```typescript
import {
    IntegrationTypesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new IntegrationTypesApi(configuration);

let typeId: string; // (default to undefined)

const { status, data } = await apiInstance.getIntegrationType(
    typeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **typeId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiIntegrationsV1GetIntegrationTypeResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Server Error |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchIntegrationTypes**
> TenantApiIntegrationsV1IntegrationTypePaginatedItemsViewModel searchIntegrationTypes()


### Example

```typescript
import {
    IntegrationTypesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new IntegrationTypesApi(configuration);

let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.searchIntegrationTypes(
    pageSize,
    pageIndex,
    orderBy,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**TenantApiIntegrationsV1IntegrationTypePaginatedItemsViewModel**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Server Error |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateIntegrationType**
> object updateIntegrationType()


### Example

```typescript
import {
    IntegrationTypesApi,
    Configuration,
    TenantApiIntegrationsV1UpdateIntegrationTypeRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new IntegrationTypesApi(configuration);

let typeId: string; // (default to undefined)
let tenantApiIntegrationsV1UpdateIntegrationTypeRequest: TenantApiIntegrationsV1UpdateIntegrationTypeRequest; // (optional)

const { status, data } = await apiInstance.updateIntegrationType(
    typeId,
    tenantApiIntegrationsV1UpdateIntegrationTypeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiIntegrationsV1UpdateIntegrationTypeRequest** | **TenantApiIntegrationsV1UpdateIntegrationTypeRequest**|  | |
| **typeId** | [**string**] |  | defaults to undefined|


### Return type

**object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Server Error |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

