# InstancesVendorsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createVendorAsync**](#createvendorasync) | **POST** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/vendors | Creates a new Vendor.|
|[**deleteVendorAsync**](#deletevendorasync) | **DELETE** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/vendors/{vendorId} | Deletes a Vendor.|
|[**getVendorByIdAsync**](#getvendorbyidasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/vendors/{vendorId} | Retrieves a Vendor by ID.|
|[**getVendorsAsync**](#getvendorsasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/vendors | Retrieves a list of Vendors.|
|[**syncVendorAsync**](#syncvendorasync) | **POST** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/vendors/{vendorId}/sync | Copies a Vendor from one instance to another/other instance(s).|
|[**updateVendorAsync**](#updatevendorasync) | **PUT** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/vendors/{vendorId} | Updates a Vendor.|

# **createVendorAsync**
> EdfiAdminApiEdfiAdminV1VendorCreatedResponse createVendorAsync()


### Example

```typescript
import {
    InstancesVendorsApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1CreateVendorRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesVendorsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let edfiAdminApiEdfiAdminV1CreateVendorRequest: EdfiAdminApiEdfiAdminV1CreateVendorRequest; // (optional)

const { status, data } = await apiInstance.createVendorAsync(
    tenantId,
    instanceId,
    edfiAdminApiEdfiAdminV1CreateVendorRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1CreateVendorRequest** | **EdfiAdminApiEdfiAdminV1CreateVendorRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1VendorCreatedResponse**

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
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteVendorAsync**
> deleteVendorAsync()


### Example

```typescript
import {
    InstancesVendorsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesVendorsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let vendorId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteVendorAsync(
    tenantId,
    instanceId,
    vendorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **vendorId** | [**number**] |  | defaults to undefined|


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
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getVendorByIdAsync**
> EdfiAdminApiEdfiAdminV1VendorProfileResponse getVendorByIdAsync()


### Example

```typescript
import {
    InstancesVendorsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesVendorsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let vendorId: string; // (default to undefined)

const { status, data } = await apiInstance.getVendorByIdAsync(
    tenantId,
    instanceId,
    vendorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **vendorId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1VendorProfileResponse**

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

# **getVendorsAsync**
> EdfiAdminApiEdfiAdminV1VendorListResponsePaginatedItemsViewModel getVendorsAsync()


### Example

```typescript
import {
    InstancesVendorsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesVendorsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getVendorsAsync(
    tenantId,
    instanceId,
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
| **instanceId** | [**string**] |  | defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**EdfiAdminApiEdfiAdminV1VendorListResponsePaginatedItemsViewModel**

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

# **syncVendorAsync**
> syncVendorAsync()


### Example

```typescript
import {
    InstancesVendorsApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1SyncVendorRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesVendorsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let vendorId: number; // (default to undefined)
let edfiAdminApiEdfiAdminV1SyncVendorRequest: EdfiAdminApiEdfiAdminV1SyncVendorRequest; // (optional)

const { status, data } = await apiInstance.syncVendorAsync(
    tenantId,
    instanceId,
    vendorId,
    edfiAdminApiEdfiAdminV1SyncVendorRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1SyncVendorRequest** | **EdfiAdminApiEdfiAdminV1SyncVendorRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **vendorId** | [**number**] |  | defaults to undefined|


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
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateVendorAsync**
> EdfiAdminApiEdfiAdminV1VendorUpdatedResponse updateVendorAsync()


### Example

```typescript
import {
    InstancesVendorsApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1UpdateVendorRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesVendorsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let vendorId: string; // (default to undefined)
let edfiAdminApiEdfiAdminV1UpdateVendorRequest: EdfiAdminApiEdfiAdminV1UpdateVendorRequest; // (optional)

const { status, data } = await apiInstance.updateVendorAsync(
    tenantId,
    instanceId,
    vendorId,
    edfiAdminApiEdfiAdminV1UpdateVendorRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1UpdateVendorRequest** | **EdfiAdminApiEdfiAdminV1UpdateVendorRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **vendorId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1VendorUpdatedResponse**

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

