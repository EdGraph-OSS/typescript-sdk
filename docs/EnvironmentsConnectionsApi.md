# EnvironmentsConnectionsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createStateReportingConnection**](#createstatereportingconnection) | **POST** /tenants/{tenantId}/statereporting/environments/{environmentId}/connections | Creates a new Connection.|
|[**deleteStateReportingConnection**](#deletestatereportingconnection) | **DELETE** /tenants/{tenantId}/statereporting/environments/{environmentId}/connections/{connectionId} | Deletes a Connection.|
|[**findStateReportingConnections**](#findstatereportingconnections) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/connections | Retrieves a list of Connections.|
|[**getStateReportingConnection**](#getstatereportingconnection) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/connections/{connectionId} | Retrieves a Connection by ID.|
|[**testStateReportingConnectionById**](#teststatereportingconnectionbyid) | **POST** /tenants/{tenantId}/statereporting/environments/{environmentId}/connections/{connectionId}/testconnection | Tests a Connection by ID.|
|[**testStateReportingConnectionByType**](#teststatereportingconnectionbytype) | **POST** /tenants/{tenantId}/statereporting/environments/{environmentId}/connections/testconnection | Tests a Connection by Type.|
|[**updateStateReportingConnection**](#updatestatereportingconnection) | **PUT** /tenants/{tenantId}/statereporting/environments/{environmentId}/connections/{connectionId} | Updates a Connection.|

# **createStateReportingConnection**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionCreatedResponse createStateReportingConnection()


### Example

```typescript
import {
    EnvironmentsConnectionsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest: EdGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest; // (optional)

const { status, data } = await apiInstance.createStateReportingConnection(
    tenantId,
    environmentId,
    edGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest** | **EdGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionCreatedResponse**

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
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**201** | The resource was created. The location of the resource is available in the Location header of the response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteStateReportingConnection**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionDeletedResponse deleteStateReportingConnection()


### Example

```typescript
import {
    EnvironmentsConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteStateReportingConnection(
    tenantId,
    environmentId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionDeletedResponse**

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
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findStateReportingConnections**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1PagedConnectionsResponse findStateReportingConnections()


### Example

```typescript
import {
    EnvironmentsConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let instanceType: string; // (optional) (default to undefined)
let connectionType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.findStateReportingConnections(
    tenantId,
    environmentId,
    instanceType,
    connectionType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **instanceType** | [**string**] |  | (optional) defaults to undefined|
| **connectionType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesStateReportingV1PagedConnectionsResponse**

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

# **getStateReportingConnection**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionProfileResponse getStateReportingConnection()


### Example

```typescript
import {
    EnvironmentsConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.getStateReportingConnection(
    tenantId,
    environmentId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionProfileResponse**

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

# **testStateReportingConnectionById**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionResponse testStateReportingConnectionById()


### Example

```typescript
import {
    EnvironmentsConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.testStateReportingConnectionById(
    tenantId,
    environmentId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionResponse**

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
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testStateReportingConnectionByType**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionResponse testStateReportingConnectionByType()


### Example

```typescript
import {
    EnvironmentsConnectionsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionByTypeRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionByTypeRequest: EdGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionByTypeRequest; // (optional)

const { status, data } = await apiInstance.testStateReportingConnectionByType(
    tenantId,
    environmentId,
    edGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionByTypeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionByTypeRequest** | **EdGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionByTypeRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionResponse**

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
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateStateReportingConnection**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionUpdatedResponse updateStateReportingConnection()


### Example

```typescript
import {
    EnvironmentsConnectionsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiServicesStateReportingV1UpdateConnectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let connectionId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiServicesStateReportingV1UpdateConnectionRequest: EdGraphHttpAggregatorsTenantApiServicesStateReportingV1UpdateConnectionRequest; // (optional)

const { status, data } = await apiInstance.updateStateReportingConnection(
    tenantId,
    environmentId,
    connectionId,
    edGraphHttpAggregatorsTenantApiServicesStateReportingV1UpdateConnectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiServicesStateReportingV1UpdateConnectionRequest** | **EdGraphHttpAggregatorsTenantApiServicesStateReportingV1UpdateConnectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionUpdatedResponse**

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
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

