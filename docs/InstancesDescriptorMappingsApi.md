# InstancesDescriptorMappingsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createDescriptorMapping**](#createdescriptormapping) | **POST** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/descriptorMappings | Creates a Descriptor Mapping.|
|[**deleteDescriptorMapping**](#deletedescriptormapping) | **DELETE** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/descriptorMappings/{descriptorMappingId} | Deletes a Descriptor Mapping.|
|[**exportDescriptorMappings**](#exportdescriptormappings) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/descriptorMappings/export | Exports all Descriptor Mappings as a JSON file.|
|[**getDescriptorMappingById**](#getdescriptormappingbyid) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/descriptorMappings/{descriptorMappingId} | Retrieves a Descriptor Mapping by ID.|
|[**getDescriptorMappings**](#getdescriptormappings) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/descriptorMappings | Retrieves a list of Descriptors Mappings.|
|[**importDescriptorMappings**](#importdescriptormappings) | **POST** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/descriptorMappings/import | Imports Descriptor Mappings from a JSON file.|
|[**updateDescriptorMapping**](#updatedescriptormapping) | **PUT** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/descriptorMappings/{descriptorMappingId} | Updates a Descriptor Mapping.|

# **createDescriptorMapping**
> EdfiAdminApiEdfiAdminV1DescriptorMappingCreatedResponse createDescriptorMapping()


### Example

```typescript
import {
    InstancesDescriptorMappingsApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1CreateDescriptorMappingRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesDescriptorMappingsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let edfiAdminApiEdfiAdminV1CreateDescriptorMappingRequest: EdfiAdminApiEdfiAdminV1CreateDescriptorMappingRequest; // (optional)

const { status, data } = await apiInstance.createDescriptorMapping(
    tenantId,
    instanceId,
    year,
    edfiAdminApiEdfiAdminV1CreateDescriptorMappingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1CreateDescriptorMappingRequest** | **EdfiAdminApiEdfiAdminV1CreateDescriptorMappingRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1DescriptorMappingCreatedResponse**

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

# **deleteDescriptorMapping**
> deleteDescriptorMapping()


### Example

```typescript
import {
    InstancesDescriptorMappingsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesDescriptorMappingsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let descriptorMappingId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteDescriptorMapping(
    tenantId,
    instanceId,
    year,
    descriptorMappingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **descriptorMappingId** | [**string**] |  | defaults to undefined|


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

# **exportDescriptorMappings**
> exportDescriptorMappings()


### Example

```typescript
import {
    InstancesDescriptorMappingsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesDescriptorMappingsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let namespace: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.exportDescriptorMappings(
    tenantId,
    instanceId,
    year,
    namespace
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **namespace** | [**string**] |  | (optional) defaults to undefined|


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
|**200** | The descriptor mappings were successfully exported. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDescriptorMappingById**
> EdfiAdminApiEdfiAdminV1DescriptorMapping getDescriptorMappingById()


### Example

```typescript
import {
    InstancesDescriptorMappingsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesDescriptorMappingsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let descriptorMappingId: string; // (default to undefined)

const { status, data } = await apiInstance.getDescriptorMappingById(
    tenantId,
    instanceId,
    year,
    descriptorMappingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **descriptorMappingId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1DescriptorMapping**

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

# **getDescriptorMappings**
> EdfiAdminApiEdfiAdminV1DescriptorMappingsPaginatedItemsResponse getDescriptorMappings()


### Example

```typescript
import {
    InstancesDescriptorMappingsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesDescriptorMappingsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let namespace: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getDescriptorMappings(
    tenantId,
    instanceId,
    year,
    pageSize,
    pageIndex,
    namespace
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **namespace** | [**string**] |  | (optional) defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1DescriptorMappingsPaginatedItemsResponse**

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

# **importDescriptorMappings**
> importDescriptorMappings()


### Example

```typescript
import {
    InstancesDescriptorMappingsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesDescriptorMappingsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.importDescriptorMappings(
    tenantId,
    instanceId,
    year,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid. The operation may succeed once authentication has been successfully completed. |  -  |
|**403** | Forbidden. The request cannot be completed in the current authorization context. Contact your administrator if you believe this operation should be allowed. |  -  |
|**500** | An unhandled error occurred on the server.See the response body for details. |  -  |
|**200** | The descriptor mappings were successfully imported. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateDescriptorMapping**
> EdfiAdminApiEdfiAdminV1DescriptorMappingUpdatedResponse updateDescriptorMapping()


### Example

```typescript
import {
    InstancesDescriptorMappingsApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1UpdateDescriptorMappingRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesDescriptorMappingsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let descriptorMappingId: string; // (default to undefined)
let edfiAdminApiEdfiAdminV1UpdateDescriptorMappingRequest: EdfiAdminApiEdfiAdminV1UpdateDescriptorMappingRequest; // (optional)

const { status, data } = await apiInstance.updateDescriptorMapping(
    tenantId,
    instanceId,
    year,
    descriptorMappingId,
    edfiAdminApiEdfiAdminV1UpdateDescriptorMappingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1UpdateDescriptorMappingRequest** | **EdfiAdminApiEdfiAdminV1UpdateDescriptorMappingRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **descriptorMappingId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1DescriptorMappingUpdatedResponse**

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

