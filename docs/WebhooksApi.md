# WebhooksApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWebhookAsync**](#createwebhookasync) | **POST** /tenants/{tenantId}/webhooks | Creates a new Webhook|
|[**deleteWebhookAsync**](#deletewebhookasync) | **DELETE** /tenants/{tenantId}/webhooks/{webhookId} | Removes a webhook.|
|[**getAllWebhookSubscriptionsAsync**](#getallwebhooksubscriptionsasync) | **GET** /tenants/{tenantId}/webhooks/events | |
|[**getAllWebhooksAsync**](#getallwebhooksasync) | **GET** /tenants/{tenantId}/webhooks | Retrieves a list of webhooks.|
|[**getWebhookByIdAsync**](#getwebhookbyidasync) | **GET** /tenants/{tenantId}/webhooks/{webhookId} | Retrieves a webhook by ID.|
|[**requestWebhookReRun**](#requestwebhookrerun) | **POST** /tenants/{tenantId}/webhooks/{webhookId}/dispatches/{dispatchId}/rerun | |
|[**updateWebhookAsync**](#updatewebhookasync) | **PUT** /tenants/{tenantId}/webhooks/{webhookId} | Updates a webhook|

# **createWebhookAsync**
> TenantApiWebhookV1WebhookIdResponse createWebhookAsync()


### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    TenantApiWebhookV1CreateWebhookRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let tenantId: string; // (default to undefined)
let tenantApiWebhookV1CreateWebhookRequest: TenantApiWebhookV1CreateWebhookRequest; // (optional)

const { status, data } = await apiInstance.createWebhookAsync(
    tenantId,
    tenantApiWebhookV1CreateWebhookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiWebhookV1CreateWebhookRequest** | **TenantApiWebhookV1CreateWebhookRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiWebhookV1WebhookIdResponse**

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

# **deleteWebhookAsync**
> TenantApiWebhookV1WebhookIdResponse deleteWebhookAsync()


### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let tenantId: string; // (default to undefined)
let webhookId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteWebhookAsync(
    tenantId,
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **webhookId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiWebhookV1WebhookIdResponse**

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

# **getAllWebhookSubscriptionsAsync**
> TenantApiWebhookV1PaginatedWebhookEventItemsResponse getAllWebhookSubscriptionsAsync()


### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllWebhookSubscriptionsAsync(
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

**TenantApiWebhookV1PaginatedWebhookEventItemsResponse**

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllWebhooksAsync**
> TenantApiWebhookV1PaginatedItemsResponse getAllWebhooksAsync()


### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllWebhooksAsync(
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

**TenantApiWebhookV1PaginatedItemsResponse**

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

# **getWebhookByIdAsync**
> TenantApiWebhookV1WebhookResponse getWebhookByIdAsync()


### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let tenantId: string; // (default to undefined)
let webhookId: string; // (default to undefined)

const { status, data } = await apiInstance.getWebhookByIdAsync(
    tenantId,
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **webhookId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiWebhookV1WebhookResponse**

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

# **requestWebhookReRun**
> TenantApiWebhookV1ReRunRequestedResponse requestWebhookReRun()


### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    TenantApiWebhookV1RequestReRunRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let tenantId: string; // (default to undefined)
let webhookId: string; // (default to undefined)
let dispatchId: string; // (default to undefined)
let tenantApiWebhookV1RequestReRunRequest: TenantApiWebhookV1RequestReRunRequest; // (optional)

const { status, data } = await apiInstance.requestWebhookReRun(
    tenantId,
    webhookId,
    dispatchId,
    tenantApiWebhookV1RequestReRunRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiWebhookV1RequestReRunRequest** | **TenantApiWebhookV1RequestReRunRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **webhookId** | [**string**] |  | defaults to undefined|
| **dispatchId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiWebhookV1ReRunRequestedResponse**

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebhookAsync**
> TenantApiWebhookV1WebhookIdResponse updateWebhookAsync()


### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    TenantApiWebhookV1UpdateWebhookRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let tenantId: string; // (default to undefined)
let webhookId: string; // (default to undefined)
let tenantApiWebhookV1UpdateWebhookRequest: TenantApiWebhookV1UpdateWebhookRequest; // (optional)

const { status, data } = await apiInstance.updateWebhookAsync(
    tenantId,
    webhookId,
    tenantApiWebhookV1UpdateWebhookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantApiWebhookV1UpdateWebhookRequest** | **TenantApiWebhookV1UpdateWebhookRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **webhookId** | [**string**] |  | defaults to undefined|


### Return type

**TenantApiWebhookV1WebhookIdResponse**

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

