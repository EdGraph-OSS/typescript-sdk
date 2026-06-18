# SubscriptionsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTenantSubscriptionAsync**](#createtenantsubscriptionasync) | **POST** /tenants/{tenantId}/subscriptions | Creates a new subscription|
|[**getAllTenantSubscriptionApplications**](#getalltenantsubscriptionapplications) | **GET** /tenants/{tenantId}/subscriptions/applications | Retrieves a list of applications available for subscription.|
|[**getAllTenantSubscriptionsAsync**](#getalltenantsubscriptionsasync) | **GET** /tenants/{tenantId}/subscriptions | Retrieves a list of subscriptions associated to this tenant|
|[**getTenantSubscriptionProfileByIdAsync**](#gettenantsubscriptionprofilebyidasync) | **GET** /tenants/{tenantId}/subscriptions/{subscriptionId} | Retrieves a subscription|
|[**updateTenantSubscriptionAsync**](#updatetenantsubscriptionasync) | **PUT** /tenants/{tenantId}/subscriptions/{subscriptionId} | Updates a subscription|

# **createTenantSubscriptionAsync**
> TenantApiTenantV1SubscriptionCreatedResponse createTenantSubscriptionAsync()


### Example

```typescript
import {
    SubscriptionsApi,
    Configuration,
    TenantApiTenantV1CreateSubscriptionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new SubscriptionsApi(configuration);

let tenantId: string; // (default to undefined)
let tenantApiTenantV1CreateSubscriptionRequest: TenantApiTenantV1CreateSubscriptionRequest; // (optional)

const { status, data } = await apiInstance.createTenantSubscriptionAsync(
    tenantId,
    tenantApiTenantV1CreateSubscriptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiTenantV1CreateSubscriptionRequest** | **TenantApiTenantV1CreateSubscriptionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiTenantV1SubscriptionCreatedResponse**

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

# **getAllTenantSubscriptionApplications**
> ApplicationApiApplicationV1PaginatedItemsResponse getAllTenantSubscriptionApplications()


### Example

```typescript
import {
    SubscriptionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new SubscriptionsApi(configuration);

let tenantId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let orderBy: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getAllTenantSubscriptionApplications(
    tenantId,
    pageIndex,
    pageSize,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApplicationApiApplicationV1PaginatedItemsResponse**

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

# **getAllTenantSubscriptionsAsync**
> EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesSubscriptionListResponseDtoPaginatedItemsViewModel getAllTenantSubscriptionsAsync()


### Example

```typescript
import {
    SubscriptionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new SubscriptionsApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllTenantSubscriptionsAsync(
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

**EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesSubscriptionListResponseDtoPaginatedItemsViewModel**

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

# **getTenantSubscriptionProfileByIdAsync**
> EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesSubscriptionProfileResponseDto getTenantSubscriptionProfileByIdAsync()


### Example

```typescript
import {
    SubscriptionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new SubscriptionsApi(configuration);

let tenantId: string; // (default to undefined)
let subscriptionId: string; // (default to undefined)

const { status, data } = await apiInstance.getTenantSubscriptionProfileByIdAsync(
    tenantId,
    subscriptionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **subscriptionId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesSubscriptionProfileResponseDto**

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

# **updateTenantSubscriptionAsync**
> TenantApiTenantV1SubscriptionUpdatedResponse updateTenantSubscriptionAsync()


### Example

```typescript
import {
    SubscriptionsApi,
    Configuration,
    TenantApiTenantV1UpdateSubscriptionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new SubscriptionsApi(configuration);

let tenantId: string; // (default to undefined)
let subscriptionId: string; // (default to undefined)
let tenantApiTenantV1UpdateSubscriptionRequest: TenantApiTenantV1UpdateSubscriptionRequest; // (optional)

const { status, data } = await apiInstance.updateTenantSubscriptionAsync(
    tenantId,
    subscriptionId,
    tenantApiTenantV1UpdateSubscriptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiTenantV1UpdateSubscriptionRequest** | **TenantApiTenantV1UpdateSubscriptionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **subscriptionId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiTenantV1SubscriptionUpdatedResponse**

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

