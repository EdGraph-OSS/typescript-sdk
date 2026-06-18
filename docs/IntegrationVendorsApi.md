# IntegrationVendorsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createIntegrationVendor**](#createintegrationvendor) | **POST** /integrations/vendors | Creates an Integration Vendor.|
|[**deleteIntegrationVendor**](#deleteintegrationvendor) | **DELETE** /integrations/vendors/{vendorId} | Removes an Integration Vendor.|
|[**getIntegrationVendor**](#getintegrationvendor) | **GET** /integrations/vendors/{vendorId} | Gets an Integration Vendor.|
|[**searchIntegrationVendors**](#searchintegrationvendors) | **GET** /integrations/vendors | Search Integration Vendors.|
|[**updateIntegrationVendor**](#updateintegrationvendor) | **PUT** /integrations/vendors/{vendorId} | Updates an Integration Vendor.|

# **createIntegrationVendor**
> TenantApiIntegrationsV1CreateIntegrationVendorResponse createIntegrationVendor()


### Example

```typescript
import {
    IntegrationVendorsApi,
    Configuration,
    TenantApiIntegrationsV1CreateIntegrationVendorRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new IntegrationVendorsApi(configuration);

let tenantApiIntegrationsV1CreateIntegrationVendorRequest: TenantApiIntegrationsV1CreateIntegrationVendorRequest; // (optional)

const { status, data } = await apiInstance.createIntegrationVendor(
    tenantApiIntegrationsV1CreateIntegrationVendorRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiIntegrationsV1CreateIntegrationVendorRequest** | **TenantApiIntegrationsV1CreateIntegrationVendorRequest**|  | |


### Return type

**TenantApiIntegrationsV1CreateIntegrationVendorResponse**

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

# **deleteIntegrationVendor**
> TenantApiIntegrationsV1DeleteIntegrationVendorResponse deleteIntegrationVendor()


### Example

```typescript
import {
    IntegrationVendorsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new IntegrationVendorsApi(configuration);

let vendorId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteIntegrationVendor(
    vendorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vendorId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiIntegrationsV1DeleteIntegrationVendorResponse**

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

# **getIntegrationVendor**
> TenantApiIntegrationsV1GetIntegrationVendorResponse getIntegrationVendor()


### Example

```typescript
import {
    IntegrationVendorsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new IntegrationVendorsApi(configuration);

let vendorId: string; // (default to undefined)

const { status, data } = await apiInstance.getIntegrationVendor(
    vendorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vendorId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiIntegrationsV1GetIntegrationVendorResponse**

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

# **searchIntegrationVendors**
> TenantApiIntegrationsV1IntegrationVendorPaginatedItemsViewModel searchIntegrationVendors()


### Example

```typescript
import {
    IntegrationVendorsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new IntegrationVendorsApi(configuration);

let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.searchIntegrationVendors(
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

**TenantApiIntegrationsV1IntegrationVendorPaginatedItemsViewModel**

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

# **updateIntegrationVendor**
> object updateIntegrationVendor()


### Example

```typescript
import {
    IntegrationVendorsApi,
    Configuration,
    TenantApiIntegrationsV1UpdateIntegrationVendorRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new IntegrationVendorsApi(configuration);

let vendorId: string; // (default to undefined)
let tenantApiIntegrationsV1UpdateIntegrationVendorRequest: TenantApiIntegrationsV1UpdateIntegrationVendorRequest; // (optional)

const { status, data } = await apiInstance.updateIntegrationVendor(
    vendorId,
    tenantApiIntegrationsV1UpdateIntegrationVendorRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiIntegrationsV1UpdateIntegrationVendorRequest** | **TenantApiIntegrationsV1UpdateIntegrationVendorRequest**|  | |
| **vendorId** | [**string**] |  | defaults to undefined|


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

