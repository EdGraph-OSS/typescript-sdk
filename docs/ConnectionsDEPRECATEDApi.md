# ConnectionsDEPRECATEDApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createStateReportingConnectionV1**](#createstatereportingconnectionv1) | **POST** /tenants/{tenantId}/statereporting/connections | Creates a new Connection.|
|[**deleteStateReportingConnectionV1**](#deletestatereportingconnectionv1) | **DELETE** /tenants/{tenantId}/statereporting/connections/{connectionId} | Deletes a Connection.|
|[**findStateReportingConnectionsV1**](#findstatereportingconnectionsv1) | **GET** /tenants/{tenantId}/statereporting/connections | Retrieves a list of Connections.|
|[**getStateReportingConnectionV1**](#getstatereportingconnectionv1) | **GET** /tenants/{tenantId}/statereporting/connections/{connectionId} | Retrieves a Connection by ID.|
|[**testStateReportingConnectionByIdV1**](#teststatereportingconnectionbyidv1) | **POST** /tenants/{tenantId}/statereporting/connections/{connectionId}/testconnection | Tests a Connection by ID.|
|[**testStateReportingConnectionByTypeV1**](#teststatereportingconnectionbytypev1) | **POST** /tenants/{tenantId}/statereporting/connections/testconnection | Tests a Connection by Type.|
|[**updateStateReportingConnectionV1**](#updatestatereportingconnectionv1) | **PUT** /tenants/{tenantId}/statereporting/connections/{connectionId} | Updates a Connection.|

# **createStateReportingConnectionV1**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionCreatedResponse createStateReportingConnectionV1()


### Example

```typescript
import {
    ConnectionsDEPRECATEDApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsDEPRECATEDApi(configuration);

let tenantId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest: EdGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest; // (optional)

const { status, data } = await apiInstance.createStateReportingConnectionV1(
    tenantId,
    edGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest** | **EdGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


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

# **deleteStateReportingConnectionV1**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionDeletedResponse deleteStateReportingConnectionV1()


### Example

```typescript
import {
    ConnectionsDEPRECATEDApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsDEPRECATEDApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteStateReportingConnectionV1(
    tenantId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
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

# **findStateReportingConnectionsV1**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1PagedConnectionsResponse findStateReportingConnectionsV1()


### Example

```typescript
import {
    ConnectionsDEPRECATEDApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsDEPRECATEDApi(configuration);

let tenantId: string; // (default to undefined)
let instanceType: string; // (optional) (default to undefined)
let connectionType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.findStateReportingConnectionsV1(
    tenantId,
    instanceType,
    connectionType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
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

# **getStateReportingConnectionV1**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionProfileResponse getStateReportingConnectionV1()


### Example

```typescript
import {
    ConnectionsDEPRECATEDApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsDEPRECATEDApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.getStateReportingConnectionV1(
    tenantId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
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

# **testStateReportingConnectionByIdV1**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionResponse testStateReportingConnectionByIdV1()


### Example

```typescript
import {
    ConnectionsDEPRECATEDApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsDEPRECATEDApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.testStateReportingConnectionByIdV1(
    tenantId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
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

# **testStateReportingConnectionByTypeV1**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionResponse testStateReportingConnectionByTypeV1()


### Example

```typescript
import {
    ConnectionsDEPRECATEDApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionByTypeRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsDEPRECATEDApi(configuration);

let tenantId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionByTypeRequest: EdGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionByTypeRequest; // (optional)

const { status, data } = await apiInstance.testStateReportingConnectionByTypeV1(
    tenantId,
    edGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionByTypeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionByTypeRequest** | **EdGraphHttpAggregatorsTenantApiServicesStateReportingV1TestConnectionByTypeRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


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

# **updateStateReportingConnectionV1**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionUpdatedResponse updateStateReportingConnectionV1()


### Example

```typescript
import {
    ConnectionsDEPRECATEDApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiServicesStateReportingV1UpdateConnectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsDEPRECATEDApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiServicesStateReportingV1UpdateConnectionRequest: EdGraphHttpAggregatorsTenantApiServicesStateReportingV1UpdateConnectionRequest; // (optional)

const { status, data } = await apiInstance.updateStateReportingConnectionV1(
    tenantId,
    connectionId,
    edGraphHttpAggregatorsTenantApiServicesStateReportingV1UpdateConnectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiServicesStateReportingV1UpdateConnectionRequest** | **EdGraphHttpAggregatorsTenantApiServicesStateReportingV1UpdateConnectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
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

