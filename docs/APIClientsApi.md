# APIClientsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTenantApiClientAsync**](#createtenantapiclientasync) | **POST** /tenants/{tenantId}/apiclients | Creates a new OpenId API Client|
|[**deleteTenantApiClientAsync**](#deletetenantapiclientasync) | **DELETE** /tenants/{tenantId}/apiclients/{clientId} | Deletes an OpenId API Client|
|[**getAllTenantApiClientsAsync**](#getalltenantapiclientsasync) | **GET** /tenants/{tenantId}/apiclients | Retrieves a list of OpenId API Clients associated to this tenant|
|[**getTenantApiClientByIdAsync**](#gettenantapiclientbyidasync) | **GET** /tenants/{tenantId}/apiclients/{clientId} | Retrieves an OpenId API Client|
|[**regenerateTenantApiClientSecretAsync**](#regeneratetenantapiclientsecretasync) | **PUT** /tenants/{tenantId}/apiclients/{clientId}/regeneratesecret | Regenerates an OpenId API Client\&#39;s secret|
|[**updateTenantApiClientAsync**](#updatetenantapiclientasync) | **PUT** /tenants/{tenantId}/apiclients/{clientId} | Updates an OpenId API Client|

# **createTenantApiClientAsync**
> IdentityApiApiClientV1ApiClientCreatedResponse createTenantApiClientAsync()


### Example

```typescript
import {
    APIClientsApi,
    Configuration,
    IdentityApiApiClientV1CreateApiClientRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new APIClientsApi(configuration);

let tenantId: string; // (default to undefined)
let identityApiApiClientV1CreateApiClientRequest: IdentityApiApiClientV1CreateApiClientRequest; // (optional)

const { status, data } = await apiInstance.createTenantApiClientAsync(
    tenantId,
    identityApiApiClientV1CreateApiClientRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityApiApiClientV1CreateApiClientRequest** | **IdentityApiApiClientV1CreateApiClientRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiApiClientV1ApiClientCreatedResponse**

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

# **deleteTenantApiClientAsync**
> deleteTenantApiClientAsync()


### Example

```typescript
import {
    APIClientsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new APIClientsApi(configuration);

let tenantId: string; // (default to undefined)
let clientId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTenantApiClientAsync(
    tenantId,
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|


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

# **getAllTenantApiClientsAsync**
> IdentityApiApiClientV1ApiClientPaginatedItemsResponsePaginatedItemsViewModel getAllTenantApiClientsAsync()


### Example

```typescript
import {
    APIClientsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new APIClientsApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllTenantApiClientsAsync(
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

**IdentityApiApiClientV1ApiClientPaginatedItemsResponsePaginatedItemsViewModel**

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

# **getTenantApiClientByIdAsync**
> IdentityApiApiClientV1ApiClientProfileResponse getTenantApiClientByIdAsync()


### Example

```typescript
import {
    APIClientsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new APIClientsApi(configuration);

let tenantId: string; // (default to undefined)
let clientId: string; // (default to undefined)

const { status, data } = await apiInstance.getTenantApiClientByIdAsync(
    tenantId,
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiApiClientV1ApiClientProfileResponse**

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

# **regenerateTenantApiClientSecretAsync**
> IdentityApiApiClientV1ApiClientSecretRegeneratedResponse regenerateTenantApiClientSecretAsync()


### Example

```typescript
import {
    APIClientsApi,
    Configuration,
    IdentityApiApiClientV1RegenerateApiClientSecretRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new APIClientsApi(configuration);

let tenantId: string; // (default to undefined)
let clientId: string; // (default to undefined)
let identityApiApiClientV1RegenerateApiClientSecretRequest: IdentityApiApiClientV1RegenerateApiClientSecretRequest; // (optional)

const { status, data } = await apiInstance.regenerateTenantApiClientSecretAsync(
    tenantId,
    clientId,
    identityApiApiClientV1RegenerateApiClientSecretRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityApiApiClientV1RegenerateApiClientSecretRequest** | **IdentityApiApiClientV1RegenerateApiClientSecretRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiApiClientV1ApiClientSecretRegeneratedResponse**

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

# **updateTenantApiClientAsync**
> IdentityApiApiClientV1ApiClientUpdatedResponse updateTenantApiClientAsync()


### Example

```typescript
import {
    APIClientsApi,
    Configuration,
    IdentityApiApiClientV1UpdateApiClientRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new APIClientsApi(configuration);

let tenantId: string; // (default to undefined)
let clientId: string; // (default to undefined)
let identityApiApiClientV1UpdateApiClientRequest: IdentityApiApiClientV1UpdateApiClientRequest; // (optional)

const { status, data } = await apiInstance.updateTenantApiClientAsync(
    tenantId,
    clientId,
    identityApiApiClientV1UpdateApiClientRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityApiApiClientV1UpdateApiClientRequest** | **IdentityApiApiClientV1UpdateApiClientRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiApiClientV1ApiClientUpdatedResponse**

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

