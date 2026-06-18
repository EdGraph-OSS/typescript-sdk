# DomainsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTenantDomainAsync**](#createtenantdomainasync) | **POST** /tenants/{tenantId}/domains | Creates a new domain|
|[**deleteTenantDomainAsync**](#deletetenantdomainasync) | **DELETE** /tenants/{tenantId}/domains/{domainName} | Deletes a user|
|[**getAllTenantDomainsAsync**](#getalltenantdomainsasync) | **GET** /tenants/{tenantId}/domains | Retrieves a list of domains associated to this tenant|
|[**getTenantDomainProfileByNameAsync**](#gettenantdomainprofilebynameasync) | **GET** /tenants/{tenantId}/domains/{domainName} | Retrieves a domain|
|[**updateTenantDomainAsync**](#updatetenantdomainasync) | **PUT** /tenants/{tenantId}/domains/{domainName} | Updates a domain|
|[**verifyTenantDomainAsync**](#verifytenantdomainasync) | **PUT** /tenants/{tenantId}/domains/{domainName}/verify | Verify a  tenant\&#39;s domain|

# **createTenantDomainAsync**
> TenantApiTenantV1DomainCreatedResponse createTenantDomainAsync()


### Example

```typescript
import {
    DomainsApi,
    Configuration,
    TenantApiTenantV1CreateDomainRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let tenantId: string; // (default to undefined)
let tenantApiTenantV1CreateDomainRequest: TenantApiTenantV1CreateDomainRequest; // (optional)

const { status, data } = await apiInstance.createTenantDomainAsync(
    tenantId,
    tenantApiTenantV1CreateDomainRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiTenantV1CreateDomainRequest** | **TenantApiTenantV1CreateDomainRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiTenantV1DomainCreatedResponse**

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
|**201** | The resource was created. The location of the resource is available in the Location header of the response. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTenantDomainAsync**
> deleteTenantDomainAsync()


### Example

```typescript
import {
    DomainsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let tenantId: string; // (default to undefined)
let domainName: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTenantDomainAsync(
    tenantId,
    domainName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **domainName** | [**string**] |  | defaults to undefined|


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
|**204** | The resource was successfully deleted. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllTenantDomainsAsync**
> EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesDomainListResponseDtoPaginatedItemsViewModel getAllTenantDomainsAsync()


### Example

```typescript
import {
    DomainsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllTenantDomainsAsync(
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

**EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesDomainListResponseDtoPaginatedItemsViewModel**

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
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenantDomainProfileByNameAsync**
> TenantApiTenantV1DomainProfileResponse getTenantDomainProfileByNameAsync()


### Example

```typescript
import {
    DomainsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let tenantId: string; // (default to undefined)
let domainName: string; // (default to undefined)

const { status, data } = await apiInstance.getTenantDomainProfileByNameAsync(
    tenantId,
    domainName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **domainName** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiTenantV1DomainProfileResponse**

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
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTenantDomainAsync**
> TenantApiTenantV1DomainUpdatedResponse updateTenantDomainAsync()


### Example

```typescript
import {
    DomainsApi,
    Configuration,
    TenantApiTenantV1UpdateDomainRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let tenantId: string; // (default to undefined)
let domainName: string; // (default to undefined)
let tenantApiTenantV1UpdateDomainRequest: TenantApiTenantV1UpdateDomainRequest; // (optional)

const { status, data } = await apiInstance.updateTenantDomainAsync(
    tenantId,
    domainName,
    tenantApiTenantV1UpdateDomainRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiTenantV1UpdateDomainRequest** | **TenantApiTenantV1UpdateDomainRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **domainName** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiTenantV1DomainUpdatedResponse**

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

# **verifyTenantDomainAsync**
> TenantApiTenantV1DomainVerifiedResponse verifyTenantDomainAsync()


### Example

```typescript
import {
    DomainsApi,
    Configuration,
    TenantApiTenantV1VerifyDomainRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let tenantId: string; // (default to undefined)
let domainName: string; // (default to undefined)
let tenantApiTenantV1VerifyDomainRequest: TenantApiTenantV1VerifyDomainRequest; // (optional)

const { status, data } = await apiInstance.verifyTenantDomainAsync(
    tenantId,
    domainName,
    tenantApiTenantV1VerifyDomainRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiTenantV1VerifyDomainRequest** | **TenantApiTenantV1VerifyDomainRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **domainName** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiTenantV1DomainVerifiedResponse**

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

