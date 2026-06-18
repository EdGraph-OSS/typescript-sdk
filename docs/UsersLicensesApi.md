# UsersLicensesApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assignLicenseTenantUserAsync**](#assignlicensetenantuserasync) | **PUT** /tenants/{tenantId}/users/{userId}/licenses/assign | Assigns a license to a user in the context of a specific tenant|
|[**assignLicenseTenantUserBulkAsync**](#assignlicensetenantuserbulkasync) | **PUT** /tenants/{tenantId}/users/{userId}/licenses/assignbulk | Assigns one or more licenses to a user in the context of a specific tenant|
|[**getAllTenantUserApplicationLicensesAsync**](#getalltenantuserapplicationlicensesasync) | **GET** /tenants/{tenantId}/users/{userId}/licenses | Retrieves a list of user licenses in the context of a specific tenant|
|[**revokeLicenseTenantUserAsync**](#revokelicensetenantuserasync) | **PUT** /tenants/{tenantId}/users/{userId}/licenses/revoke | Revokes a license from a user in the context of a specific tenant|
|[**revokeLicenseTenantUserBulkAsync**](#revokelicensetenantuserbulkasync) | **PUT** /tenants/{tenantId}/users/{userId}/licenses/revokebulk | Revokes one or more licenses from a user in the context of a specific tenant|

# **assignLicenseTenantUserAsync**
> IdentityApiUserV1LicenseAssignedResponse assignLicenseTenantUserAsync()


### Example

```typescript
import {
    UsersLicensesApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesAssignLicenseRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersLicensesApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesAssignLicenseRequest: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesAssignLicenseRequest; // (optional)

const { status, data } = await apiInstance.assignLicenseTenantUserAsync(
    tenantId,
    userId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesAssignLicenseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesAssignLicenseRequest** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesAssignLicenseRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1LicenseAssignedResponse**

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

# **assignLicenseTenantUserBulkAsync**
> IdentityApiUserV1LicenseAssignedBulkResponse assignLicenseTenantUserBulkAsync()


### Example

```typescript
import {
    UsersLicensesApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesAssignLicenseBulkRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersLicensesApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesAssignLicenseBulkRequest: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesAssignLicenseBulkRequest; // (optional)

const { status, data } = await apiInstance.assignLicenseTenantUserBulkAsync(
    tenantId,
    userId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesAssignLicenseBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesAssignLicenseBulkRequest** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesAssignLicenseBulkRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1LicenseAssignedBulkResponse**

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

# **getAllTenantUserApplicationLicensesAsync**
> EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserLicensePaginatedItemsViewModel getAllTenantUserApplicationLicensesAsync()


### Example

```typescript
import {
    UsersLicensesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersLicensesApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllTenantUserApplicationLicensesAsync(
    tenantId,
    userId,
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
| **userId** | [**string**] |  | defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserLicensePaginatedItemsViewModel**

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

# **revokeLicenseTenantUserAsync**
> IdentityApiUserV1LicenseRevokedResponse revokeLicenseTenantUserAsync()


### Example

```typescript
import {
    UsersLicensesApi,
    Configuration,
    IdentityApiUserV1RevokeLicenseRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersLicensesApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let identityApiUserV1RevokeLicenseRequest: IdentityApiUserV1RevokeLicenseRequest; // (optional)

const { status, data } = await apiInstance.revokeLicenseTenantUserAsync(
    tenantId,
    userId,
    identityApiUserV1RevokeLicenseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityApiUserV1RevokeLicenseRequest** | **IdentityApiUserV1RevokeLicenseRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1LicenseRevokedResponse**

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

# **revokeLicenseTenantUserBulkAsync**
> IdentityApiUserV1LicenseRevokedBulkResponse revokeLicenseTenantUserBulkAsync()


### Example

```typescript
import {
    UsersLicensesApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesRevokeLicenseBulkRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new UsersLicensesApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesRevokeLicenseBulkRequest: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesRevokeLicenseBulkRequest; // (optional)

const { status, data } = await apiInstance.revokeLicenseTenantUserBulkAsync(
    tenantId,
    userId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesRevokeLicenseBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesRevokeLicenseBulkRequest** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesRevokeLicenseBulkRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1LicenseRevokedBulkResponse**

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

