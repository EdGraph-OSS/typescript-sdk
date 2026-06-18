# EnvironmentsReportingPeriodsSubmissionsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addReportingPeriodSubmissionMetricsBulkV2**](#addreportingperiodsubmissionmetricsbulkv2) | **POST** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/submissions/{submissionId}/metrics/bulk | Adds Metrics to a Submission in bulk.|
|[**addReportingPeriodSubmissionMetricsV2**](#addreportingperiodsubmissionmetricsv2) | **POST** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/submissions/{submissionId}/metrics | Adds Metrics to a Submission.|
|[**cancelReportingPeriodSubmissionV2**](#cancelreportingperiodsubmissionv2) | **DELETE** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/submissions/{submissionId}/cancel | Cancels a Submission.|
|[**getReportingPeriodSubmissionLatestV2**](#getreportingperiodsubmissionlatestv2) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/submissions/latest | Retrieves the latest Submission of a Reporting Period.|
|[**getReportingPeriodSubmissionLogsV2**](#getreportingperiodsubmissionlogsv2) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/submissions/{submissionId}/logs | Retrieves a list of Submission Logs of a Reporting Period.|
|[**getReportingPeriodSubmissionMetricsV2**](#getreportingperiodsubmissionmetricsv2) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/submissions/{submissionId}/metrics | Retrieves the Metrics of a Submission.|
|[**getReportingPeriodSubmissionV2**](#getreportingperiodsubmissionv2) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/submissions/{submissionId} | Retrieves the Submission of a Reporting Period.|
|[**getStateReportingPeriodSubmissionsV2**](#getstatereportingperiodsubmissionsv2) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/submissions | Retrieves a list of Submissions of a Reporting Period.|
|[**setReportingPeriodSubmissionStatusV2**](#setreportingperiodsubmissionstatusv2) | **PUT** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/submissions/{submissionId}/status | Sets the Status of a Submission.|

# **addReportingPeriodSubmissionMetricsBulkV2**
> EdGraphServicesStateReportingV1SubmissionMetricsAddedBulkResponse addReportingPeriodSubmissionMetricsBulkV2()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsSubmissionsApi,
    Configuration,
    EdGraphServicesStateReportingV1AddSubmissionMetricsBulkRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsSubmissionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let submissionId: string; // (default to undefined)
let edGraphServicesStateReportingV1AddSubmissionMetricsBulkRequest: EdGraphServicesStateReportingV1AddSubmissionMetricsBulkRequest; // (optional)

const { status, data } = await apiInstance.addReportingPeriodSubmissionMetricsBulkV2(
    tenantId,
    environmentId,
    reportingPeriodId,
    submissionId,
    edGraphServicesStateReportingV1AddSubmissionMetricsBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphServicesStateReportingV1AddSubmissionMetricsBulkRequest** | **EdGraphServicesStateReportingV1AddSubmissionMetricsBulkRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1SubmissionMetricsAddedBulkResponse**

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

# **addReportingPeriodSubmissionMetricsV2**
> EdGraphServicesStateReportingV1SubmissionMetricsAddedResponse addReportingPeriodSubmissionMetricsV2()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsSubmissionsApi,
    Configuration,
    EdGraphServicesStateReportingV1AddSubmissionMetricsRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsSubmissionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let submissionId: string; // (default to undefined)
let edGraphServicesStateReportingV1AddSubmissionMetricsRequest: EdGraphServicesStateReportingV1AddSubmissionMetricsRequest; // (optional)

const { status, data } = await apiInstance.addReportingPeriodSubmissionMetricsV2(
    tenantId,
    environmentId,
    reportingPeriodId,
    submissionId,
    edGraphServicesStateReportingV1AddSubmissionMetricsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphServicesStateReportingV1AddSubmissionMetricsRequest** | **EdGraphServicesStateReportingV1AddSubmissionMetricsRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1SubmissionMetricsAddedResponse**

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

# **cancelReportingPeriodSubmissionV2**
> EdGraphServicesStateReportingV1SubmissionCancelledResponse cancelReportingPeriodSubmissionV2()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsSubmissionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsSubmissionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let submissionId: string; // (default to undefined)

const { status, data } = await apiInstance.cancelReportingPeriodSubmissionV2(
    tenantId,
    environmentId,
    reportingPeriodId,
    submissionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1SubmissionCancelledResponse**

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

# **getReportingPeriodSubmissionLatestV2**
> EdGraphServicesStateReportingV1SubmissionProfile getReportingPeriodSubmissionLatestV2()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsSubmissionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsSubmissionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)

const { status, data } = await apiInstance.getReportingPeriodSubmissionLatestV2(
    tenantId,
    environmentId,
    reportingPeriodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1SubmissionProfile**

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

# **getReportingPeriodSubmissionLogsV2**
> EdGraphServicesStateReportingV1PaginatedSubmissionLogs getReportingPeriodSubmissionLogsV2()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsSubmissionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsSubmissionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let submissionId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let filter: string; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getReportingPeriodSubmissionLogsV2(
    tenantId,
    environmentId,
    reportingPeriodId,
    submissionId,
    pageIndex,
    pageSize,
    filter,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to undefined|
| **filter** | [**string**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1PaginatedSubmissionLogs**

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

# **getReportingPeriodSubmissionMetricsV2**
> EdGraphServicesStateReportingV1SubmissionMetricsResponse getReportingPeriodSubmissionMetricsV2()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsSubmissionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsSubmissionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let submissionId: string; // (default to undefined)

const { status, data } = await apiInstance.getReportingPeriodSubmissionMetricsV2(
    tenantId,
    environmentId,
    reportingPeriodId,
    submissionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1SubmissionMetricsResponse**

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

# **getReportingPeriodSubmissionV2**
> EdGraphServicesStateReportingV1SubmissionProfile getReportingPeriodSubmissionV2()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsSubmissionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsSubmissionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let submissionId: string; // (default to undefined)

const { status, data } = await apiInstance.getReportingPeriodSubmissionV2(
    tenantId,
    environmentId,
    reportingPeriodId,
    submissionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1SubmissionProfile**

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

# **getStateReportingPeriodSubmissionsV2**
> EdGraphServicesStateReportingV1PaginatedSubmissions getStateReportingPeriodSubmissionsV2()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsSubmissionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsSubmissionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let filter: string; // (optional) (default to '')
let orderBy: string; // (optional) (default to '')

const { status, data } = await apiInstance.getStateReportingPeriodSubmissionsV2(
    tenantId,
    environmentId,
    reportingPeriodId,
    pageIndex,
    pageSize,
    filter,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **filter** | [**string**] |  | (optional) defaults to ''|
| **orderBy** | [**string**] |  | (optional) defaults to ''|


### Return type

**EdGraphServicesStateReportingV1PaginatedSubmissions**

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

# **setReportingPeriodSubmissionStatusV2**
> EdGraphServicesStateReportingV1SubmissionStatusSetResponse setReportingPeriodSubmissionStatusV2()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsSubmissionsApi,
    Configuration,
    EdGraphServicesStateReportingV1SetSubmissionStatusRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsSubmissionsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let submissionId: string; // (default to undefined)
let edGraphServicesStateReportingV1SetSubmissionStatusRequest: EdGraphServicesStateReportingV1SetSubmissionStatusRequest; // (optional)

const { status, data } = await apiInstance.setReportingPeriodSubmissionStatusV2(
    tenantId,
    environmentId,
    reportingPeriodId,
    submissionId,
    edGraphServicesStateReportingV1SetSubmissionStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphServicesStateReportingV1SetSubmissionStatusRequest** | **EdGraphServicesStateReportingV1SetSubmissionStatusRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1SubmissionStatusSetResponse**

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

