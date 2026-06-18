# UsersEducationOrganizationsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addUserEducationOrganization**](#addusereducationorganization) | **POST** /tenants/{tenantId}/users/{userId}/educationorganizations | Adds an Education Organization to a user.|
|[**getUserEducationOrganizations**](#getusereducationorganizations) | **GET** /tenants/{tenantId}/users/{userId}/educationorganizations | Gets the Education Organizations of a user.|
|[**removeUserEducationOrganization**](#removeusereducationorganization) | **DELETE** /tenants/{tenantId}/users/{userId}/educationorganizations/{educationOrganizationId} | Removes an Education Organization from a user.|
|[**updateUserEducationOrganization**](#updateusereducationorganization) | **PUT** /tenants/{tenantId}/users/{userId}/educationorganizations/{educationOrganizationId} | Updates the Education Organization of a user.|

# **addUserEducationOrganization**
> IdentityApiUserV1EducationOrganizationAddedResponse addUserEducationOrganization()


### Example

```typescript
import {
    UsersEducationOrganizationsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsEducationOrganizationsAddEducationOrganizationRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersEducationOrganizationsApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsEducationOrganizationsAddEducationOrganizationRequest: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsEducationOrganizationsAddEducationOrganizationRequest; // (optional)

const { status, data } = await apiInstance.addUserEducationOrganization(
    tenantId,
    userId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsEducationOrganizationsAddEducationOrganizationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsEducationOrganizationsAddEducationOrganizationRequest** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsEducationOrganizationsAddEducationOrganizationRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1EducationOrganizationAddedResponse**

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

# **getUserEducationOrganizations**
> IdentityApiUserV1EducationOrganizationPaginatedItemsResponse getUserEducationOrganizations()


### Example

```typescript
import {
    UsersEducationOrganizationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersEducationOrganizationsApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getUserEducationOrganizations(
    tenantId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1EducationOrganizationPaginatedItemsResponse**

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

# **removeUserEducationOrganization**
> IdentityApiUserV1EducationOrganizationRemovedResponse removeUserEducationOrganization()


### Example

```typescript
import {
    UsersEducationOrganizationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersEducationOrganizationsApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let educationOrganizationId: number; // (default to undefined)

const { status, data } = await apiInstance.removeUserEducationOrganization(
    tenantId,
    userId,
    educationOrganizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|
| **educationOrganizationId** | [**number**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1EducationOrganizationRemovedResponse**

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

# **updateUserEducationOrganization**
> IdentityApiUserV1EducationOrganizationUpdatedResponse updateUserEducationOrganization()


### Example

```typescript
import {
    UsersEducationOrganizationsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsEducationOrganizationsUpdateEducationOrganizationRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersEducationOrganizationsApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let educationOrganizationId: number; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsEducationOrganizationsUpdateEducationOrganizationRequest: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsEducationOrganizationsUpdateEducationOrganizationRequest; // (optional)

const { status, data } = await apiInstance.updateUserEducationOrganization(
    tenantId,
    userId,
    educationOrganizationId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsEducationOrganizationsUpdateEducationOrganizationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsEducationOrganizationsUpdateEducationOrganizationRequest** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsEducationOrganizationsUpdateEducationOrganizationRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|
| **educationOrganizationId** | [**number**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1EducationOrganizationUpdatedResponse**

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

