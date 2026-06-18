# EnvironmentsConnectionsByTypeApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createOrUpdateStateReportingConnectionByType**](#createorupdatestatereportingconnectionbytype) | **PUT** /tenants/{tenantId}/statereporting/environments/{environmentId}/connectionsByType/{connectionType} | Creates or Update a Connection by ConnectionType.|
|[**deleteStateReportingByTypeConnection**](#deletestatereportingbytypeconnection) | **DELETE** /tenants/{tenantId}/statereporting/environments/{environmentId}/connectionsByType/{connectionType} | Deletes a Connection by Type|
|[**getStateReportingConnectionByType**](#getstatereportingconnectionbytype) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/connectionsByType/{connectionType} | Retrieves a Connection by Type.|

# **createOrUpdateStateReportingConnectionByType**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionCreatedResponse createOrUpdateStateReportingConnectionByType()


### Example

```typescript
import {
    EnvironmentsConnectionsByTypeApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsConnectionsByTypeApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let connectionType: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest: EdGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest; // (optional)

const { status, data } = await apiInstance.createOrUpdateStateReportingConnectionByType(
    tenantId,
    environmentId,
    connectionType,
    edGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest** | **EdGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **connectionType** | [**string**] |  | defaults to undefined|


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

# **deleteStateReportingByTypeConnection**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionDeletedResponse deleteStateReportingByTypeConnection()


### Example

```typescript
import {
    EnvironmentsConnectionsByTypeApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsConnectionsByTypeApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let connectionType: string; // (default to undefined)

const { status, data } = await apiInstance.deleteStateReportingByTypeConnection(
    tenantId,
    environmentId,
    connectionType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **connectionType** | [**string**] |  | defaults to undefined|


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

# **getStateReportingConnectionByType**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionProfileResponse getStateReportingConnectionByType()


### Example

```typescript
import {
    EnvironmentsConnectionsByTypeApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsConnectionsByTypeApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let connectionType: string; // (default to undefined)

const { status, data } = await apiInstance.getStateReportingConnectionByType(
    tenantId,
    environmentId,
    connectionType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **connectionType** | [**string**] |  | defaults to undefined|


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

