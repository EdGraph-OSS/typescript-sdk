# StaffClassificationsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createStaffClassification**](#createstaffclassification) | **POST** /tenants/{tenantId}/staffclassifications | Creates a StaffClassification.|
|[**deleteStaffClassification**](#deletestaffclassification) | **DELETE** /tenants/{tenantId}/staffclassifications/{staffClassificationId} | Deletes a StaffClassification.|
|[**getStaffClassificationById**](#getstaffclassificationbyid) | **GET** /tenants/{tenantId}/staffclassifications/{staffClassificationId} | Retrieves a StaffClassification by ID.|
|[**getStaffClassifications**](#getstaffclassifications) | **GET** /tenants/{tenantId}/staffclassifications | Retrieves a list of StaffClassifications.|
|[**getStaffClassificationsNamespaces**](#getstaffclassificationsnamespaces) | **GET** /tenants/{tenantId}/staffclassifications/namespaces | Retrieves a list of unique Staff Classification Namespaces.|
|[**updateStaffClassification**](#updatestaffclassification) | **PUT** /tenants/{tenantId}/staffclassifications/{staffClassificationId} | Updates a StaffClassification.|

# **createStaffClassification**
> IdentityApiStaffClassificationV1StaffClassificationCreatedResponse createStaffClassification()


### Example

```typescript
import {
    StaffClassificationsApi,
    Configuration,
    IdentityApiStaffClassificationV1CreateStaffClassificationRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new StaffClassificationsApi(configuration);

let tenantId: string; // (default to undefined)
let identityApiStaffClassificationV1CreateStaffClassificationRequest: IdentityApiStaffClassificationV1CreateStaffClassificationRequest; // (optional)

const { status, data } = await apiInstance.createStaffClassification(
    tenantId,
    identityApiStaffClassificationV1CreateStaffClassificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityApiStaffClassificationV1CreateStaffClassificationRequest** | **IdentityApiStaffClassificationV1CreateStaffClassificationRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiStaffClassificationV1StaffClassificationCreatedResponse**

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

# **deleteStaffClassification**
> IdentityApiStaffClassificationV1StaffClassificationDeletedResponse deleteStaffClassification()


### Example

```typescript
import {
    StaffClassificationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new StaffClassificationsApi(configuration);

let tenantId: string; // (default to undefined)
let staffClassificationId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteStaffClassification(
    tenantId,
    staffClassificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **staffClassificationId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiStaffClassificationV1StaffClassificationDeletedResponse**

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

# **getStaffClassificationById**
> IdentityApiStaffClassificationV1StaffClassificationResponse getStaffClassificationById()


### Example

```typescript
import {
    StaffClassificationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new StaffClassificationsApi(configuration);

let tenantId: string; // (default to undefined)
let staffClassificationId: string; // (default to undefined)

const { status, data } = await apiInstance.getStaffClassificationById(
    tenantId,
    staffClassificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **staffClassificationId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiStaffClassificationV1StaffClassificationResponse**

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

# **getStaffClassifications**
> IdentityApiStaffClassificationV1GetStaffClassificationsResponse getStaffClassifications()


### Example

```typescript
import {
    StaffClassificationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new StaffClassificationsApi(configuration);

let tenantId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getStaffClassifications(
    tenantId,
    pageIndex,
    pageSize,
    orderBy,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**IdentityApiStaffClassificationV1GetStaffClassificationsResponse**

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

# **getStaffClassificationsNamespaces**
> IdentityApiStaffClassificationV1GetStaffClassificationsNamespacesResponse getStaffClassificationsNamespaces()


### Example

```typescript
import {
    StaffClassificationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new StaffClassificationsApi(configuration);

let tenantId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getStaffClassificationsNamespaces(
    tenantId,
    pageIndex,
    pageSize,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**IdentityApiStaffClassificationV1GetStaffClassificationsNamespacesResponse**

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

# **updateStaffClassification**
> IdentityApiStaffClassificationV1StaffClassificationUpdatedResponse updateStaffClassification()


### Example

```typescript
import {
    StaffClassificationsApi,
    Configuration,
    IdentityApiStaffClassificationV1UpdateStaffClassificationRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new StaffClassificationsApi(configuration);

let tenantId: string; // (default to undefined)
let staffClassificationId: string; // (default to undefined)
let identityApiStaffClassificationV1UpdateStaffClassificationRequest: IdentityApiStaffClassificationV1UpdateStaffClassificationRequest; // (optional)

const { status, data } = await apiInstance.updateStaffClassification(
    tenantId,
    staffClassificationId,
    identityApiStaffClassificationV1UpdateStaffClassificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityApiStaffClassificationV1UpdateStaffClassificationRequest** | **IdentityApiStaffClassificationV1UpdateStaffClassificationRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **staffClassificationId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiStaffClassificationV1StaffClassificationUpdatedResponse**

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

