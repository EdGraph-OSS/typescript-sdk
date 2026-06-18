# InstancesEducationOrganizationsEducationServiceCentersApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createEducationServiceCenterAsync**](#createeducationservicecenterasync) | **POST** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/educationservicecenters | Creates an EducationServiceCenter.|
|[**deleteEducationServiceCenterAsync**](#deleteeducationservicecenterasync) | **DELETE** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/educationservicecenters/{educationServiceCenterId} | Deletes an EducationServiceCenter.|
|[**getEducationServiceCenterByIdAsync**](#geteducationservicecenterbyidasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/educationservicecenters/{educationServiceCenterId} | Retrieves an EducationServiceCenter by ID.|
|[**updateEducationServiceCenterAsync**](#updateeducationservicecenterasync) | **PUT** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/educationservicecenters/{educationServiceCenterId} | Updates an EducationServiceCenter.|

# **createEducationServiceCenterAsync**
> EdfiAdminApiEdfiAdminV1EducationServiceCenterCreatedResponse createEducationServiceCenterAsync()


### Example

```typescript
import {
    InstancesEducationOrganizationsEducationServiceCentersApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1CreateEducationServiceCenterRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesEducationOrganizationsEducationServiceCentersApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let edfiAdminApiEdfiAdminV1CreateEducationServiceCenterRequest: EdfiAdminApiEdfiAdminV1CreateEducationServiceCenterRequest; // (optional)

const { status, data } = await apiInstance.createEducationServiceCenterAsync(
    tenantId,
    instanceId,
    year,
    edfiAdminApiEdfiAdminV1CreateEducationServiceCenterRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1CreateEducationServiceCenterRequest** | **EdfiAdminApiEdfiAdminV1CreateEducationServiceCenterRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1EducationServiceCenterCreatedResponse**

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

# **deleteEducationServiceCenterAsync**
> deleteEducationServiceCenterAsync()


### Example

```typescript
import {
    InstancesEducationOrganizationsEducationServiceCentersApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesEducationOrganizationsEducationServiceCentersApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let educationServiceCenterId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteEducationServiceCenterAsync(
    tenantId,
    instanceId,
    year,
    educationServiceCenterId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **educationServiceCenterId** | [**string**] |  | defaults to undefined|


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

# **getEducationServiceCenterByIdAsync**
> EdfiAdminApiEdfiAdminV1EducationServiceCenter getEducationServiceCenterByIdAsync()


### Example

```typescript
import {
    InstancesEducationOrganizationsEducationServiceCentersApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesEducationOrganizationsEducationServiceCentersApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let educationServiceCenterId: string; // (default to undefined)

const { status, data } = await apiInstance.getEducationServiceCenterByIdAsync(
    tenantId,
    instanceId,
    year,
    educationServiceCenterId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **educationServiceCenterId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1EducationServiceCenter**

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

# **updateEducationServiceCenterAsync**
> updateEducationServiceCenterAsync()


### Example

```typescript
import {
    InstancesEducationOrganizationsEducationServiceCentersApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1UpdateEducationServiceCenterRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesEducationOrganizationsEducationServiceCentersApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let educationServiceCenterId: string; // (default to undefined)
let edfiAdminApiEdfiAdminV1UpdateEducationServiceCenterRequest: EdfiAdminApiEdfiAdminV1UpdateEducationServiceCenterRequest; // (optional)

const { status, data } = await apiInstance.updateEducationServiceCenterAsync(
    tenantId,
    instanceId,
    year,
    educationServiceCenterId,
    edfiAdminApiEdfiAdminV1UpdateEducationServiceCenterRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1UpdateEducationServiceCenterRequest** | **EdfiAdminApiEdfiAdminV1UpdateEducationServiceCenterRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **educationServiceCenterId** | [**string**] |  | defaults to undefined|


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

