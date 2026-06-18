# InstancesEducationOrganizationsStateEducationAgenciesApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createStateEducationAgencyAsync**](#createstateeducationagencyasync) | **POST** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/stateeducationagencies | Creates a StateEducationAgency.|
|[**deleteStateEducationAgencyAsync**](#deletestateeducationagencyasync) | **DELETE** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/stateeducationagencies/{stateEducationAgencyId} | Deletes a StateEducationAgency.|
|[**getStateEducationAgencyByIdAsync**](#getstateeducationagencybyidasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/stateeducationagencies/{stateEducationAgencyId} | Retrieves a StateEducationAgency by ID.|
|[**updateStateEducationAgencyAsync**](#updatestateeducationagencyasync) | **PUT** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/years/{year}/stateeducationagencies/{stateEducationAgencyId} | Updates a StateEducationAgency.|

# **createStateEducationAgencyAsync**
> EdfiAdminApiEdfiAdminV1StateEducationAgencyCreatedResponse createStateEducationAgencyAsync()


### Example

```typescript
import {
    InstancesEducationOrganizationsStateEducationAgenciesApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1CreateStateEducationAgencyRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesEducationOrganizationsStateEducationAgenciesApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let edfiAdminApiEdfiAdminV1CreateStateEducationAgencyRequest: EdfiAdminApiEdfiAdminV1CreateStateEducationAgencyRequest; // (optional)

const { status, data } = await apiInstance.createStateEducationAgencyAsync(
    tenantId,
    instanceId,
    year,
    edfiAdminApiEdfiAdminV1CreateStateEducationAgencyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1CreateStateEducationAgencyRequest** | **EdfiAdminApiEdfiAdminV1CreateStateEducationAgencyRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1StateEducationAgencyCreatedResponse**

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

# **deleteStateEducationAgencyAsync**
> deleteStateEducationAgencyAsync()


### Example

```typescript
import {
    InstancesEducationOrganizationsStateEducationAgenciesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesEducationOrganizationsStateEducationAgenciesApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let stateEducationAgencyId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteStateEducationAgencyAsync(
    tenantId,
    instanceId,
    year,
    stateEducationAgencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **stateEducationAgencyId** | [**string**] |  | defaults to undefined|


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

# **getStateEducationAgencyByIdAsync**
> EdfiAdminApiEdfiAdminV1StateEducationAgency getStateEducationAgencyByIdAsync()


### Example

```typescript
import {
    InstancesEducationOrganizationsStateEducationAgenciesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesEducationOrganizationsStateEducationAgenciesApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let stateEducationAgencyId: string; // (default to undefined)

const { status, data } = await apiInstance.getStateEducationAgencyByIdAsync(
    tenantId,
    instanceId,
    year,
    stateEducationAgencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **stateEducationAgencyId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1StateEducationAgency**

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

# **updateStateEducationAgencyAsync**
> updateStateEducationAgencyAsync()


### Example

```typescript
import {
    InstancesEducationOrganizationsStateEducationAgenciesApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1UpdateStateEducationAgencyRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesEducationOrganizationsStateEducationAgenciesApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let year: number; // (default to undefined)
let stateEducationAgencyId: string; // (default to undefined)
let edfiAdminApiEdfiAdminV1UpdateStateEducationAgencyRequest: EdfiAdminApiEdfiAdminV1UpdateStateEducationAgencyRequest; // (optional)

const { status, data } = await apiInstance.updateStateEducationAgencyAsync(
    tenantId,
    instanceId,
    year,
    stateEducationAgencyId,
    edfiAdminApiEdfiAdminV1UpdateStateEducationAgencyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1UpdateStateEducationAgencyRequest** | **EdfiAdminApiEdfiAdminV1UpdateStateEducationAgencyRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **year** | [**number**] |  | defaults to undefined|
| **stateEducationAgencyId** | [**string**] |  | defaults to undefined|


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

