# CapacitiesApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assignMyGroupToCapacity**](#assignmygrouptocapacity) | **POST** /tenants/{tenantId}/analytics/capacities | Assigns the specified group to the specified capacity.|
|[**getAllAnalyticsPowerBiCapacities**](#getallanalyticspowerbicapacities) | **GET** /tenants/{tenantId}/analytics/capacities | Retrieves a list of capacities in Power Bi that the user has access to.|
|[**resumeCapacityAsync**](#resumecapacityasync) | **POST** /tenants/{tenantId}/analytics/capacities/resume | Resumes currently suspended capacity|
|[**suspendCapacityAsync**](#suspendcapacityasync) | **POST** /tenants/{tenantId}/analytics/capacities/suspend | Suspends currently active capacity|

# **assignMyGroupToCapacity**
> assignMyGroupToCapacity()


### Example

```typescript
import {
    CapacitiesApi,
    Configuration,
    AnalyticsApiCapacitiesV1AssignCapacityRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CapacitiesApi(configuration);

let tenantId: string; // (default to undefined)
let analyticsApiCapacitiesV1AssignCapacityRequest: AnalyticsApiCapacitiesV1AssignCapacityRequest; // (optional)

const { status, data } = await apiInstance.assignMyGroupToCapacity(
    tenantId,
    analyticsApiCapacitiesV1AssignCapacityRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **analyticsApiCapacitiesV1AssignCapacityRequest** | **AnalyticsApiCapacitiesV1AssignCapacityRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllAnalyticsPowerBiCapacities**
> AnalyticsApiCapacitiesV1CapacityResponse getAllAnalyticsPowerBiCapacities()


### Example

```typescript
import {
    CapacitiesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CapacitiesApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.getAllAnalyticsPowerBiCapacities(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**AnalyticsApiCapacitiesV1CapacityResponse**

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

# **resumeCapacityAsync**
> resumeCapacityAsync()


### Example

```typescript
import {
    CapacitiesApi,
    Configuration,
    AnalyticsApiCapacitiesV1ResumeCapacityRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CapacitiesApi(configuration);

let tenantId: string; // (default to undefined)
let analyticsApiCapacitiesV1ResumeCapacityRequest: AnalyticsApiCapacitiesV1ResumeCapacityRequest; // (optional)

const { status, data } = await apiInstance.resumeCapacityAsync(
    tenantId,
    analyticsApiCapacitiesV1ResumeCapacityRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **analyticsApiCapacitiesV1ResumeCapacityRequest** | **AnalyticsApiCapacitiesV1ResumeCapacityRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **suspendCapacityAsync**
> suspendCapacityAsync()


### Example

```typescript
import {
    CapacitiesApi,
    Configuration,
    AnalyticsApiCapacitiesV1SuspendCapacityRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CapacitiesApi(configuration);

let tenantId: string; // (default to undefined)
let analyticsApiCapacitiesV1SuspendCapacityRequest: AnalyticsApiCapacitiesV1SuspendCapacityRequest; // (optional)

const { status, data } = await apiInstance.suspendCapacityAsync(
    tenantId,
    analyticsApiCapacitiesV1SuspendCapacityRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **analyticsApiCapacitiesV1SuspendCapacityRequest** | **AnalyticsApiCapacitiesV1SuspendCapacityRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

