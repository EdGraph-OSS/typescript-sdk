# OrganizationsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createOrganizationAsync**](#createorganizationasync) | **POST** /tenants/{tenantId}/organizations | Creates an Organization.|
|[**deleteOrganizationAsync**](#deleteorganizationasync) | **DELETE** /tenants/{tenantId}/organizations/{organizationIdentifier} | Deletes an Organization.|
|[**getOrganizationByIdAsync**](#getorganizationbyidasync) | **GET** /tenants/{tenantId}/organizations/{organizationIdentifier} | Retrieves an Organization by ID.|
|[**getOrganizationsAsync**](#getorganizationsasync) | **GET** /tenants/{tenantId}/organizations | Retrieves a list of Organizations.|
|[**updateOrganizationAsync**](#updateorganizationasync) | **PUT** /tenants/{tenantId}/organizations/{organizationIdentifier} | Updates an Organization.|

# **createOrganizationAsync**
> TenantApiTenantV1OrganizationCreatedResponse createOrganizationAsync()


### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    TenantApiTenantV1CreateOrganizationRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let tenantId: string; // (default to undefined)
let tenantApiTenantV1CreateOrganizationRequest: TenantApiTenantV1CreateOrganizationRequest; // (optional)

const { status, data } = await apiInstance.createOrganizationAsync(
    tenantId,
    tenantApiTenantV1CreateOrganizationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiTenantV1CreateOrganizationRequest** | **TenantApiTenantV1CreateOrganizationRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiTenantV1OrganizationCreatedResponse**

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

# **deleteOrganizationAsync**
> TenantApiTenantV1OrganizationDeletedResponse deleteOrganizationAsync()


### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let tenantId: string; // (default to undefined)
let organizationIdentifier: string; // (default to undefined)

const { status, data } = await apiInstance.deleteOrganizationAsync(
    tenantId,
    organizationIdentifier
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **organizationIdentifier** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiTenantV1OrganizationDeletedResponse**

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

# **getOrganizationByIdAsync**
> TenantApiTenantV1Organization getOrganizationByIdAsync()


### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let tenantId: string; // (default to undefined)
let organizationIdentifier: string; // (default to undefined)

const { status, data } = await apiInstance.getOrganizationByIdAsync(
    tenantId,
    organizationIdentifier
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **organizationIdentifier** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiTenantV1Organization**

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

# **getOrganizationsAsync**
> TenantApiTenantV1GetOrganizationsPaginatedResponse getOrganizationsAsync()


### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getOrganizationsAsync(
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

**TenantApiTenantV1GetOrganizationsPaginatedResponse**

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

# **updateOrganizationAsync**
> TenantApiTenantV1OrganizationUpdatedResponse updateOrganizationAsync()


### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    TenantApiTenantV1UpdateOrganizationRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let tenantId: string; // (default to undefined)
let organizationIdentifier: string; // (default to undefined)
let tenantApiTenantV1UpdateOrganizationRequest: TenantApiTenantV1UpdateOrganizationRequest; // (optional)

const { status, data } = await apiInstance.updateOrganizationAsync(
    tenantId,
    organizationIdentifier,
    tenantApiTenantV1UpdateOrganizationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiTenantV1UpdateOrganizationRequest** | **TenantApiTenantV1UpdateOrganizationRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **organizationIdentifier** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiTenantV1OrganizationUpdatedResponse**

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
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

