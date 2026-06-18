# InvitationsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteTenantInvitationAsync**](#deletetenantinvitationasync) | **DELETE** /tenants/{tenantId}/invitations/{invitationId} | Deletes an invitation|
|[**getAllTenantInvitationsAsync**](#getalltenantinvitationsasync) | **GET** /tenants/{tenantId}/invitations | Retrieves a list of invitations associated to this tenant|
|[**getTenantInvitationByIdAsync**](#gettenantinvitationbyidasync) | **GET** /tenants/{tenantId}/invitations/{invitationId} | Retrieves a specific invitation|
|[**sendTenantInvitationAsync**](#sendtenantinvitationasync) | **POST** /tenants/{tenantId}/invitations | Creates and sends an invitation to a user|

# **deleteTenantInvitationAsync**
> deleteTenantInvitationAsync()


### Example

```typescript
import {
    InvitationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InvitationsApi(configuration);

let tenantId: string; // (default to undefined)
let invitationId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTenantInvitationAsync(
    tenantId,
    invitationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **invitationId** | [**string**] |  | defaults to undefined|


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

# **getAllTenantInvitationsAsync**
> IdentityApiInvitationV1InvitationListResponsePaginatedItemsViewModel getAllTenantInvitationsAsync()


### Example

```typescript
import {
    InvitationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InvitationsApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllTenantInvitationsAsync(
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

**IdentityApiInvitationV1InvitationListResponsePaginatedItemsViewModel**

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

# **getTenantInvitationByIdAsync**
> IdentityApiInvitationV1InvitationResponse getTenantInvitationByIdAsync()


### Example

```typescript
import {
    InvitationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InvitationsApi(configuration);

let tenantId: string; // (default to undefined)
let invitationId: string; // (default to undefined)

const { status, data } = await apiInstance.getTenantInvitationByIdAsync(
    tenantId,
    invitationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **invitationId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiInvitationV1InvitationResponse**

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

# **sendTenantInvitationAsync**
> IdentityApiInvitationV1InvitationSentResponse sendTenantInvitationAsync()


### Example

```typescript
import {
    InvitationsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsSendInvitationRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InvitationsApi(configuration);

let tenantId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsSendInvitationRequest: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsSendInvitationRequest; // (optional)

const { status, data } = await apiInstance.sendTenantInvitationAsync(
    tenantId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsSendInvitationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsSendInvitationRequest** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsSendInvitationRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiInvitationV1InvitationSentResponse**

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

