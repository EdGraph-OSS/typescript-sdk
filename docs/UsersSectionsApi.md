# UsersSectionsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addUserSection**](#addusersection) | **POST** /tenants/{tenantId}/users/{userId}/sections | Adds a Section to a user.|
|[**addUserSectionBulk**](#addusersectionbulk) | **POST** /tenants/{tenantId}/users/{userId}/sections/bulk | Adds Sections to a user in bulk.|
|[**getUserSections**](#getusersections) | **GET** /tenants/{tenantId}/users/{userId}/sections | Gets the Sections of a user.|
|[**removeUserSection**](#removeusersection) | **DELETE** /tenants/{tenantId}/users/{userId}/sections/{userSectionId} | Removes a Section from a user.|
|[**removeUserSectionBulk**](#removeusersectionbulk) | **DELETE** /tenants/{tenantId}/users/{userId}/sections/bulk | Removes Sections from a user in bulk.|
|[**updateUserSection**](#updateusersection) | **PUT** /tenants/{tenantId}/users/{userId}/sections/{userSectionId} | Updates the Section of a user.|
|[**updateUserSectionBulk**](#updateusersectionbulk) | **PUT** /tenants/{tenantId}/users/{userId}/sections/bulk | Updates the Section of a user in bulk.|

# **addUserSection**
> IdentityApiUserV1SectionAddedResponse addUserSection()


### Example

```typescript
import {
    UsersSectionsApi,
    Configuration,
    IdentityApiUserV1AddSectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersSectionsApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let identityApiUserV1AddSectionRequest: IdentityApiUserV1AddSectionRequest; // (optional)

const { status, data } = await apiInstance.addUserSection(
    tenantId,
    userId,
    identityApiUserV1AddSectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityApiUserV1AddSectionRequest** | **IdentityApiUserV1AddSectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1SectionAddedResponse**

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

# **addUserSectionBulk**
> IdentityApiUserV1SectionAddedBulkResponse addUserSectionBulk()


### Example

```typescript
import {
    UsersSectionsApi,
    Configuration,
    IdentityApiUserV1AddSectionBulkRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersSectionsApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let identityApiUserV1AddSectionBulkRequest: IdentityApiUserV1AddSectionBulkRequest; // (optional)

const { status, data } = await apiInstance.addUserSectionBulk(
    tenantId,
    userId,
    identityApiUserV1AddSectionBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityApiUserV1AddSectionBulkRequest** | **IdentityApiUserV1AddSectionBulkRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1SectionAddedBulkResponse**

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

# **getUserSections**
> IdentityApiUserV1GetSectionsResponse getUserSections()


### Example

```typescript
import {
    UsersSectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersSectionsApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getUserSections(
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

**IdentityApiUserV1GetSectionsResponse**

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

# **removeUserSection**
> IdentityApiUserV1SectionRemovedResponse removeUserSection()


### Example

```typescript
import {
    UsersSectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersSectionsApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let userSectionId: string; // (default to undefined)

const { status, data } = await apiInstance.removeUserSection(
    tenantId,
    userId,
    userSectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|
| **userSectionId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1SectionRemovedResponse**

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

# **removeUserSectionBulk**
> IdentityApiUserV1SectionRemovedBulkResponse removeUserSectionBulk()


### Example

```typescript
import {
    UsersSectionsApi,
    Configuration,
    IdentityApiUserV1RemoveSectionBulkRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersSectionsApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let identityApiUserV1RemoveSectionBulkRequest: IdentityApiUserV1RemoveSectionBulkRequest; // (optional)

const { status, data } = await apiInstance.removeUserSectionBulk(
    tenantId,
    userId,
    identityApiUserV1RemoveSectionBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityApiUserV1RemoveSectionBulkRequest** | **IdentityApiUserV1RemoveSectionBulkRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1SectionRemovedBulkResponse**

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

# **updateUserSection**
> IdentityApiUserV1SectionUpdatedResponse updateUserSection()


### Example

```typescript
import {
    UsersSectionsApi,
    Configuration,
    IdentityApiUserV1UpdateSectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersSectionsApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let userSectionId: string; // (default to undefined)
let identityApiUserV1UpdateSectionRequest: IdentityApiUserV1UpdateSectionRequest; // (optional)

const { status, data } = await apiInstance.updateUserSection(
    tenantId,
    userId,
    userSectionId,
    identityApiUserV1UpdateSectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityApiUserV1UpdateSectionRequest** | **IdentityApiUserV1UpdateSectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|
| **userSectionId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1SectionUpdatedResponse**

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

# **updateUserSectionBulk**
> IdentityApiUserV1SectionUpdatedBulkResponse updateUserSectionBulk()


### Example

```typescript
import {
    UsersSectionsApi,
    Configuration,
    IdentityApiUserV1UpdateSectionBulkRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersSectionsApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let identityApiUserV1UpdateSectionBulkRequest: IdentityApiUserV1UpdateSectionBulkRequest; // (optional)

const { status, data } = await apiInstance.updateUserSectionBulk(
    tenantId,
    userId,
    identityApiUserV1UpdateSectionBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityApiUserV1UpdateSectionBulkRequest** | **IdentityApiUserV1UpdateSectionBulkRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1SectionUpdatedBulkResponse**

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

