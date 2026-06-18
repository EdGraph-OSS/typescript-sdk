# IntegrationProductsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createIntegrationProduct**](#createintegrationproduct) | **POST** /integrations/products | Creates an Integration Product.|
|[**deleteIntegrationProduct**](#deleteintegrationproduct) | **DELETE** /integrations/products/{productId} | Removes an Integration Product.|
|[**getIntegrationProduct**](#getintegrationproduct) | **GET** /integrations/products/{productId} | Gets an Integration Product.|
|[**searchIntegrationProducts**](#searchintegrationproducts) | **GET** /integrations/products | Search Integration Products.|
|[**updateIntegrationProduct**](#updateintegrationproduct) | **PUT** /integrations/products/{productId} | Updates an Integration Product.|

# **createIntegrationProduct**
> TenantApiIntegrationsV1CreateIntegrationProductResponse createIntegrationProduct()


### Example

```typescript
import {
    IntegrationProductsApi,
    Configuration,
    TenantApiIntegrationsV1CreateIntegrationProductRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new IntegrationProductsApi(configuration);

let tenantApiIntegrationsV1CreateIntegrationProductRequest: TenantApiIntegrationsV1CreateIntegrationProductRequest; // (optional)

const { status, data } = await apiInstance.createIntegrationProduct(
    tenantApiIntegrationsV1CreateIntegrationProductRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiIntegrationsV1CreateIntegrationProductRequest** | **TenantApiIntegrationsV1CreateIntegrationProductRequest**|  | |


### Return type

**TenantApiIntegrationsV1CreateIntegrationProductResponse**

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

# **deleteIntegrationProduct**
> TenantApiIntegrationsV1DeleteIntegrationProductResponse deleteIntegrationProduct()


### Example

```typescript
import {
    IntegrationProductsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new IntegrationProductsApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteIntegrationProduct(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiIntegrationsV1DeleteIntegrationProductResponse**

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

# **getIntegrationProduct**
> TenantApiIntegrationsV1GetIntegrationProductResponse getIntegrationProduct()


### Example

```typescript
import {
    IntegrationProductsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new IntegrationProductsApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.getIntegrationProduct(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiIntegrationsV1GetIntegrationProductResponse**

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

# **searchIntegrationProducts**
> TenantApiIntegrationsV1IntegrationProductPaginatedItemsViewModel searchIntegrationProducts()


### Example

```typescript
import {
    IntegrationProductsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new IntegrationProductsApi(configuration);

let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.searchIntegrationProducts(
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

**TenantApiIntegrationsV1IntegrationProductPaginatedItemsViewModel**

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

# **updateIntegrationProduct**
> object updateIntegrationProduct()


### Example

```typescript
import {
    IntegrationProductsApi,
    Configuration,
    TenantApiIntegrationsV1UpdateIntegrationProductRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new IntegrationProductsApi(configuration);

let productId: string; // (default to undefined)
let tenantApiIntegrationsV1UpdateIntegrationProductRequest: TenantApiIntegrationsV1UpdateIntegrationProductRequest; // (optional)

const { status, data } = await apiInstance.updateIntegrationProduct(
    productId,
    tenantApiIntegrationsV1UpdateIntegrationProductRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiIntegrationsV1UpdateIntegrationProductRequest** | **TenantApiIntegrationsV1UpdateIntegrationProductRequest**|  | |
| **productId** | [**string**] |  | defaults to undefined|


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

