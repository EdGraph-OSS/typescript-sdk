# ConnectionsByTypeDEPRECATEDApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createOrUpdateStateReportingConnectionByTypeV1**](#createorupdatestatereportingconnectionbytypev1) | **PUT** /tenants/{tenantId}/statereporting/connectionsByType/{connectionType} | Creates or Update a Connection by ConnectionType.|
|[**deleteStateReportingByTypeConnectionV1**](#deletestatereportingbytypeconnectionv1) | **DELETE** /tenants/{tenantId}/statereporting/connectionsByType/{connectionType} | Deletes a Connection by Type|
|[**getStateReportingConnectionByTypeV1**](#getstatereportingconnectionbytypev1) | **GET** /tenants/{tenantId}/statereporting/connectionsByType/{connectionType} | Retrieves a Connection by Type.|

# **createOrUpdateStateReportingConnectionByTypeV1**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionCreatedResponse createOrUpdateStateReportingConnectionByTypeV1()


### Example

```typescript
import {
    ConnectionsByTypeDEPRECATEDApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsByTypeDEPRECATEDApi(configuration);

let tenantId: string; // (default to undefined)
let connectionType: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest: EdGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest; // (optional)

const { status, data } = await apiInstance.createOrUpdateStateReportingConnectionByTypeV1(
    tenantId,
    connectionType,
    edGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest** | **EdGraphHttpAggregatorsTenantApiServicesStateReportingV1CreateConnectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
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

# **deleteStateReportingByTypeConnectionV1**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionDeletedResponse deleteStateReportingByTypeConnectionV1()


### Example

```typescript
import {
    ConnectionsByTypeDEPRECATEDApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsByTypeDEPRECATEDApi(configuration);

let tenantId: string; // (default to undefined)
let connectionType: string; // (default to undefined)

const { status, data } = await apiInstance.deleteStateReportingByTypeConnectionV1(
    tenantId,
    connectionType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
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

# **getStateReportingConnectionByTypeV1**
> EdGraphHttpAggregatorsTenantApiServicesStateReportingV1ConnectionProfileResponse getStateReportingConnectionByTypeV1()


### Example

```typescript
import {
    ConnectionsByTypeDEPRECATEDApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsByTypeDEPRECATEDApi(configuration);

let tenantId: string; // (default to undefined)
let connectionType: string; // (default to undefined)

const { status, data } = await apiInstance.getStateReportingConnectionByTypeV1(
    tenantId,
    connectionType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
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

