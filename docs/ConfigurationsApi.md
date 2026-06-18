# ConfigurationsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAnalyticsConfigurationAsync**](#createanalyticsconfigurationasync) | **POST** /tenants/{tenantId}/analytics/configurations | Creates a new configuration.|
|[**deleteAnalyticsConfigurationAsync**](#deleteanalyticsconfigurationasync) | **DELETE** /tenants/{tenantId}/analytics/configurations/{configurationId} | Deletes a configuration.|
|[**getAllAnalyticsConfigurationsAsync**](#getallanalyticsconfigurationsasync) | **GET** /tenants/{tenantId}/analytics/configurations | Retrieves all configurations.|
|[**getAnalyticsConfigurationByIdAsync**](#getanalyticsconfigurationbyidasync) | **GET** /tenants/{tenantId}/analytics/configurations/{configurationId} | Retrieves a configuration by ID.|
|[**getAnalyticsConfigurationByTenantIdAsync**](#getanalyticsconfigurationbytenantidasync) | **GET** /tenants/{tenantId}/analytics/configurations/default | Retrieves current default configuration.|
|[**hasValidAnalyticsConfigurationAsync**](#hasvalidanalyticsconfigurationasync) | **GET** /tenants/{tenantId}/analytics/configurations/default/valid | Verifies if current default configuration has required values for correct functionality.|
|[**updateAnalyticsConfigurationAsync**](#updateanalyticsconfigurationasync) | **PUT** /tenants/{tenantId}/analytics/configurations/{configurationId} | Updates a configuration.|
|[**validateAADTokenAsync**](#validateaadtokenasync) | **POST** /tenants/{tenantId}/analytics/configurations/azure/testconnection | Verifies if AAD token generation is possible with user provided values.|

# **createAnalyticsConfigurationAsync**
> AnalyticsApiConfigurationsV1AnalyticsConfiguration createAnalyticsConfigurationAsync()


### Example

```typescript
import {
    ConfigurationsApi,
    Configuration,
    AnalyticsApiConfigurationsV1CreateConfigurationRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationsApi(configuration);

let tenantId: string; // (default to undefined)
let workspaceName: string; // (default to undefined)
let analyticsApiConfigurationsV1CreateConfigurationRequest: AnalyticsApiConfigurationsV1CreateConfigurationRequest; // (optional)

const { status, data } = await apiInstance.createAnalyticsConfigurationAsync(
    tenantId,
    workspaceName,
    analyticsApiConfigurationsV1CreateConfigurationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **analyticsApiConfigurationsV1CreateConfigurationRequest** | **AnalyticsApiConfigurationsV1CreateConfigurationRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **workspaceName** | [**string**] |  | defaults to undefined|


### Return type

**AnalyticsApiConfigurationsV1AnalyticsConfiguration**

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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAnalyticsConfigurationAsync**
> deleteAnalyticsConfigurationAsync()


### Example

```typescript
import {
    ConfigurationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationsApi(configuration);

let tenantId: string; // (default to undefined)
let configurationId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAnalyticsConfigurationAsync(
    tenantId,
    configurationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **configurationId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllAnalyticsConfigurationsAsync**
> AnalyticsApiConfigurationsV1AnalyticsConfigurationPaginatedItemsViewModel getAllAnalyticsConfigurationsAsync()


### Example

```typescript
import {
    ConfigurationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationsApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllAnalyticsConfigurationsAsync(
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

**AnalyticsApiConfigurationsV1AnalyticsConfigurationPaginatedItemsViewModel**

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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAnalyticsConfigurationByIdAsync**
> AnalyticsApiConfigurationsV1AnalyticsConfiguration getAnalyticsConfigurationByIdAsync()


### Example

```typescript
import {
    ConfigurationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationsApi(configuration);

let tenantId: string; // (default to undefined)
let configurationId: string; // (default to undefined)

const { status, data } = await apiInstance.getAnalyticsConfigurationByIdAsync(
    tenantId,
    configurationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **configurationId** | [**string**] |  | defaults to undefined|


### Return type

**AnalyticsApiConfigurationsV1AnalyticsConfiguration**

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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAnalyticsConfigurationByTenantIdAsync**
> AnalyticsApiConfigurationsV1AnalyticsConfiguration getAnalyticsConfigurationByTenantIdAsync()


### Example

```typescript
import {
    ConfigurationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationsApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.getAnalyticsConfigurationByTenantIdAsync(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**AnalyticsApiConfigurationsV1AnalyticsConfiguration**

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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hasValidAnalyticsConfigurationAsync**
> AnalyticsApiConfigurationsV1HasValidConfigurationResponse hasValidAnalyticsConfigurationAsync()


### Example

```typescript
import {
    ConfigurationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationsApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.hasValidAnalyticsConfigurationAsync(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**AnalyticsApiConfigurationsV1HasValidConfigurationResponse**

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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAnalyticsConfigurationAsync**
> AnalyticsApiConfigurationsV1ConfigurationResponse updateAnalyticsConfigurationAsync()


### Example

```typescript
import {
    ConfigurationsApi,
    Configuration,
    AnalyticsApiConfigurationsV1UpdateConfigurationRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationsApi(configuration);

let tenantId: string; // (default to undefined)
let configurationId: string; // (default to undefined)
let analyticsApiConfigurationsV1UpdateConfigurationRequest: AnalyticsApiConfigurationsV1UpdateConfigurationRequest; // (optional)

const { status, data } = await apiInstance.updateAnalyticsConfigurationAsync(
    tenantId,
    configurationId,
    analyticsApiConfigurationsV1UpdateConfigurationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **analyticsApiConfigurationsV1UpdateConfigurationRequest** | **AnalyticsApiConfigurationsV1UpdateConfigurationRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **configurationId** | [**string**] |  | defaults to undefined|


### Return type

**AnalyticsApiConfigurationsV1ConfigurationResponse**

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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateAADTokenAsync**
> AnalyticsApiConfigurationsV1TestConnectionResponse validateAADTokenAsync()


### Example

```typescript
import {
    ConfigurationsApi,
    Configuration,
    AnalyticsApiConfigurationsV1AnalyticsAzureAd
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationsApi(configuration);

let tenantId: string; // (default to undefined)
let analyticsApiConfigurationsV1AnalyticsAzureAd: AnalyticsApiConfigurationsV1AnalyticsAzureAd; // (optional)

const { status, data } = await apiInstance.validateAADTokenAsync(
    tenantId,
    analyticsApiConfigurationsV1AnalyticsAzureAd
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **analyticsApiConfigurationsV1AnalyticsAzureAd** | **AnalyticsApiConfigurationsV1AnalyticsAzureAd**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**AnalyticsApiConfigurationsV1TestConnectionResponse**

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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

