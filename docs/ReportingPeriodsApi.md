# ReportingPeriodsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addReportingPeriodSubmissionMetrics**](#addreportingperiodsubmissionmetrics) | **POST** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/submissions/{submissionId}/metrics | Adds Metrics to a Submission.|
|[**addReportingPeriodSubmissionMetricsBulk**](#addreportingperiodsubmissionmetricsbulk) | **POST** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/submissions/{submissionId}/metrics/bulk | Adds Metrics to a Submission in bulk.|
|[**cancelReportingPeriodSubmission**](#cancelreportingperiodsubmission) | **DELETE** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/submissions/{submissionId}/cancel | Cancels a Submission.|
|[**closeReportingPeriodAsync**](#closereportingperiodasync) | **PUT** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/close | Closes the state of a Reporting Period.|
|[**deleteReportingPeriodRules**](#deletereportingperiodrules) | **DELETE** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/rules | Delete the Reporting Period and Associated Rules|
|[**getReportingPeriodCertificationStatus**](#getreportingperiodcertificationstatus) | **GET** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/certificationstatus | Retrieves the Certification Status of a Reporting Period.|
|[**getReportingPeriodRecords**](#getreportingperiodrecords) | **GET** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/records | Retrieves the Invalid Records of all the Rules within a Reporting Period.|
|[**getReportingPeriodRuleRecords**](#getreportingperiodrulerecords) | **GET** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/rules/{ruleId}/records | Retrieves the Invalid Records of a Rule.|
|[**getReportingPeriodSubmission**](#getreportingperiodsubmission) | **GET** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/submissions/{submissionId} | Retrieves the Submission of a Reporting Period.|
|[**getReportingPeriodSubmissionLatest**](#getreportingperiodsubmissionlatest) | **GET** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/submissions/latest | Retrieves the latest Submission of a Reporting Period.|
|[**getReportingPeriodSubmissionLogs**](#getreportingperiodsubmissionlogs) | **GET** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/submissions/{submissionId}/logs | Retrieves a list of Submission Logs of a Reporting Period.|
|[**getReportingPeriodSubmissionMetrics**](#getreportingperiodsubmissionmetrics) | **GET** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/submissions/{submissionId}/metrics | Retrieves the Metrics of a Submission.|
|[**getReportingPeriodSubmissions**](#getreportingperiodsubmissions) | **GET** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/submissions | Retrieves a list of Submissions of a Reporting Period.|
|[**getReportingPeriodValidationSummary**](#getreportingperiodvalidationsummary) | **GET** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/validationsummary | Retrieves the Validation Summary of a Reporting Period.|
|[**getReportingPeriodValidationSummaryByCategoryId**](#getreportingperiodvalidationsummarybycategoryid) | **GET** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/validationsummary/categories/{categoryId} | Retrieves the Validation Summary of a Reporting Period for a Category.|
|[**getReportingPeriods**](#getreportingperiods) | **GET** /tenants/{tenantId}/statereporting/reportingperiods | Retrieves a list of Reporting Periods.|
|[**postReportingPeriod**](#postreportingperiod) | **POST** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/post | Post a Reporting Period.|
|[**runReportingPeriodValidations**](#runreportingperiodvalidations) | **POST** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/run | Run Reporting Period Validations.|
|[**setReportingPeriodRuleRecordExcludeFromPostFlagBulk**](#setreportingperiodrulerecordexcludefrompostflagbulk) | **PUT** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/rules/{ruleId}/records/excludefrompost | Toggles the \&quot;ExcludeFromPost\&quot; flag of a Rule\&#39;s Invalid Records.|
|[**setReportingPeriodSubmissionStatus**](#setreportingperiodsubmissionstatus) | **PUT** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/submissions/{submissionId}/status | Sets the Status of a Submission.|
|[**toggleReportingPeriodSelection**](#togglereportingperiodselection) | **PUT** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/toggle | Toggles the Selected state of a Reporting Period.|
|[**updateReportingPeriodBulk**](#updatereportingperiodbulk) | **PUT** /tenants/{tenantId}/statereporting/reportingperiods | Updates Reporting Periods in bulk.|

# **addReportingPeriodSubmissionMetrics**
> ValidationsApiReportingPeriodsV1SubmissionMetricsAddedResponse addReportingPeriodSubmissionMetrics()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration,
    ValidationsApiReportingPeriodsV1AddSubmissionMetricsRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let submissionId: string; // (default to undefined)
let validationsApiReportingPeriodsV1AddSubmissionMetricsRequest: ValidationsApiReportingPeriodsV1AddSubmissionMetricsRequest; // (optional)

const { status, data } = await apiInstance.addReportingPeriodSubmissionMetrics(
    tenantId,
    reportingPeriodId,
    submissionId,
    validationsApiReportingPeriodsV1AddSubmissionMetricsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiReportingPeriodsV1AddSubmissionMetricsRequest** | **ValidationsApiReportingPeriodsV1AddSubmissionMetricsRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1SubmissionMetricsAddedResponse**

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

# **addReportingPeriodSubmissionMetricsBulk**
> ValidationsApiReportingPeriodsV1SubmissionMetricsAddedBulkResponse addReportingPeriodSubmissionMetricsBulk()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration,
    ValidationsApiReportingPeriodsV1AddSubmissionMetricsBulkRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let submissionId: string; // (default to undefined)
let validationsApiReportingPeriodsV1AddSubmissionMetricsBulkRequest: ValidationsApiReportingPeriodsV1AddSubmissionMetricsBulkRequest; // (optional)

const { status, data } = await apiInstance.addReportingPeriodSubmissionMetricsBulk(
    tenantId,
    reportingPeriodId,
    submissionId,
    validationsApiReportingPeriodsV1AddSubmissionMetricsBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiReportingPeriodsV1AddSubmissionMetricsBulkRequest** | **ValidationsApiReportingPeriodsV1AddSubmissionMetricsBulkRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1SubmissionMetricsAddedBulkResponse**

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

# **cancelReportingPeriodSubmission**
> ValidationsApiReportingPeriodsV1SubmissionCancelledResponse cancelReportingPeriodSubmission()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let submissionId: string; // (default to undefined)

const { status, data } = await apiInstance.cancelReportingPeriodSubmission(
    tenantId,
    reportingPeriodId,
    submissionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1SubmissionCancelledResponse**

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

# **closeReportingPeriodAsync**
> ValidationsApiReportingPeriodsV1CloseReportingPeriodResponse closeReportingPeriodAsync()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)

const { status, data } = await apiInstance.closeReportingPeriodAsync(
    tenantId,
    reportingPeriodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1CloseReportingPeriodResponse**

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

# **deleteReportingPeriodRules**
> ValidationsApiReportingPeriodsV1DeleteReportingPeriodRulesResponse deleteReportingPeriodRules()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteReportingPeriodRules(
    tenantId,
    reportingPeriodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1DeleteReportingPeriodRulesResponse**

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

# **getReportingPeriodCertificationStatus**
> ValidationsApiReportingPeriodsV1CertificationStatus getReportingPeriodCertificationStatus()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)

const { status, data } = await apiInstance.getReportingPeriodCertificationStatus(
    tenantId,
    reportingPeriodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1CertificationStatus**

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

# **getReportingPeriodRecords**
> ValidationsApiReportingPeriodsV1PaginatedRecords getReportingPeriodRecords()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let excludedFromPost: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.getReportingPeriodRecords(
    tenantId,
    reportingPeriodId,
    pageIndex,
    pageSize,
    excludedFromPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **excludedFromPost** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1PaginatedRecords**

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

# **getReportingPeriodRuleRecords**
> ValidationsApiReportingPeriodsV1PaginatedRuleRecordsV2 getReportingPeriodRuleRecords()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let ruleId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)

const { status, data } = await apiInstance.getReportingPeriodRuleRecords(
    tenantId,
    reportingPeriodId,
    ruleId,
    pageIndex,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **ruleId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|


### Return type

**ValidationsApiReportingPeriodsV1PaginatedRuleRecordsV2**

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

# **getReportingPeriodSubmission**
> ValidationsApiReportingPeriodsV1SubmissionProfile getReportingPeriodSubmission()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let submissionId: string; // (default to undefined)

const { status, data } = await apiInstance.getReportingPeriodSubmission(
    tenantId,
    reportingPeriodId,
    submissionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1SubmissionProfile**

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

# **getReportingPeriodSubmissionLatest**
> ValidationsApiReportingPeriodsV1SubmissionProfile getReportingPeriodSubmissionLatest()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)

const { status, data } = await apiInstance.getReportingPeriodSubmissionLatest(
    tenantId,
    reportingPeriodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1SubmissionProfile**

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

# **getReportingPeriodSubmissionLogs**
> ValidationsApiReportingPeriodsV1PaginatedSubmissions getReportingPeriodSubmissionLogs()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let submissionId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let filter: string; // (optional) (default to '')
let orderBy: string; // (optional) (default to '')

const { status, data } = await apiInstance.getReportingPeriodSubmissionLogs(
    tenantId,
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
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **filter** | [**string**] |  | (optional) defaults to ''|
| **orderBy** | [**string**] |  | (optional) defaults to ''|


### Return type

**ValidationsApiReportingPeriodsV1PaginatedSubmissions**

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

# **getReportingPeriodSubmissionMetrics**
> ValidationsApiReportingPeriodsV1SubmissionMetricsResponse getReportingPeriodSubmissionMetrics()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let submissionId: string; // (default to undefined)

const { status, data } = await apiInstance.getReportingPeriodSubmissionMetrics(
    tenantId,
    reportingPeriodId,
    submissionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1SubmissionMetricsResponse**

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

# **getReportingPeriodSubmissions**
> ValidationsApiReportingPeriodsV1PaginatedSubmissions getReportingPeriodSubmissions()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let filter: string; // (optional) (default to '')
let orderBy: string; // (optional) (default to '')

const { status, data } = await apiInstance.getReportingPeriodSubmissions(
    tenantId,
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
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **filter** | [**string**] |  | (optional) defaults to ''|
| **orderBy** | [**string**] |  | (optional) defaults to ''|


### Return type

**ValidationsApiReportingPeriodsV1PaginatedSubmissions**

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

# **getReportingPeriodValidationSummary**
> ValidationsApiReportingPeriodsV1ValidationSummary getReportingPeriodValidationSummary()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)

const { status, data } = await apiInstance.getReportingPeriodValidationSummary(
    tenantId,
    reportingPeriodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1ValidationSummary**

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

# **getReportingPeriodValidationSummaryByCategoryId**
> ValidationsApiReportingPeriodsV1ValidationSummaryByCategoryId getReportingPeriodValidationSummaryByCategoryId()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let categoryId: string; // (default to undefined)

const { status, data } = await apiInstance.getReportingPeriodValidationSummaryByCategoryId(
    tenantId,
    reportingPeriodId,
    categoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **categoryId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1ValidationSummaryByCategoryId**

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

# **getReportingPeriods**
> ValidationsApiReportingPeriodsV1PaginatedReportingPeriods getReportingPeriods()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let filter: string; // (optional) (default to '')
let orderBy: string; // (optional) (default to '')

const { status, data } = await apiInstance.getReportingPeriods(
    tenantId,
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
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **filter** | [**string**] |  | (optional) defaults to ''|
| **orderBy** | [**string**] |  | (optional) defaults to ''|


### Return type

**ValidationsApiReportingPeriodsV1PaginatedReportingPeriods**

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

# **postReportingPeriod**
> ValidationsApiReportingPeriodsV1PostedResponse postReportingPeriod()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration,
    ValidationsApiReportingPeriodsV1PostRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let validationsApiReportingPeriodsV1PostRequest: ValidationsApiReportingPeriodsV1PostRequest; // (optional)

const { status, data } = await apiInstance.postReportingPeriod(
    tenantId,
    reportingPeriodId,
    validationsApiReportingPeriodsV1PostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiReportingPeriodsV1PostRequest** | **ValidationsApiReportingPeriodsV1PostRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1PostedResponse**

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

# **runReportingPeriodValidations**
> ValidationsApiReportingPeriodsV1RunResponse runReportingPeriodValidations()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let categoryId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.runReportingPeriodValidations(
    tenantId,
    reportingPeriodId,
    categoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **categoryId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1RunResponse**

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

# **setReportingPeriodRuleRecordExcludeFromPostFlagBulk**
> ValidationsApiReportingPeriodsV1RuleRecordPostFlagSetBulkResponse setReportingPeriodRuleRecordExcludeFromPostFlagBulk()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration,
    ValidationsApiReportingPeriodsV1SetRuleRecordPostFlagBulkRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let ruleId: string; // (default to undefined)
let validationsApiReportingPeriodsV1SetRuleRecordPostFlagBulkRequest: ValidationsApiReportingPeriodsV1SetRuleRecordPostFlagBulkRequest; // (optional)

const { status, data } = await apiInstance.setReportingPeriodRuleRecordExcludeFromPostFlagBulk(
    tenantId,
    reportingPeriodId,
    ruleId,
    validationsApiReportingPeriodsV1SetRuleRecordPostFlagBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiReportingPeriodsV1SetRuleRecordPostFlagBulkRequest** | **ValidationsApiReportingPeriodsV1SetRuleRecordPostFlagBulkRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **ruleId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1RuleRecordPostFlagSetBulkResponse**

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

# **setReportingPeriodSubmissionStatus**
> ValidationsApiReportingPeriodsV1SubmissionStatusSetResponse setReportingPeriodSubmissionStatus()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration,
    ValidationsApiReportingPeriodsV1SetSubmissionStatusRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let submissionId: string; // (default to undefined)
let validationsApiReportingPeriodsV1SetSubmissionStatusRequest: ValidationsApiReportingPeriodsV1SetSubmissionStatusRequest; // (optional)

const { status, data } = await apiInstance.setReportingPeriodSubmissionStatus(
    tenantId,
    reportingPeriodId,
    submissionId,
    validationsApiReportingPeriodsV1SetSubmissionStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiReportingPeriodsV1SetSubmissionStatusRequest** | **ValidationsApiReportingPeriodsV1SetSubmissionStatusRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1SubmissionStatusSetResponse**

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

# **toggleReportingPeriodSelection**
> ValidationsApiReportingPeriodsV1ToggledResponse toggleReportingPeriodSelection()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration,
    ValidationsApiReportingPeriodsV1ToggleSelectedRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let validationsApiReportingPeriodsV1ToggleSelectedRequest: ValidationsApiReportingPeriodsV1ToggleSelectedRequest; // (optional)

const { status, data } = await apiInstance.toggleReportingPeriodSelection(
    tenantId,
    reportingPeriodId,
    validationsApiReportingPeriodsV1ToggleSelectedRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiReportingPeriodsV1ToggleSelectedRequest** | **ValidationsApiReportingPeriodsV1ToggleSelectedRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1ToggledResponse**

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

# **updateReportingPeriodBulk**
> ValidationsApiReportingPeriodsV1UpdatedBulkResponse updateReportingPeriodBulk()


### Example

```typescript
import {
    ReportingPeriodsApi,
    Configuration,
    ValidationsApiReportingPeriodsV1UpdateBulkRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let validationsApiReportingPeriodsV1UpdateBulkRequest: ValidationsApiReportingPeriodsV1UpdateBulkRequest; // (optional)

const { status, data } = await apiInstance.updateReportingPeriodBulk(
    tenantId,
    validationsApiReportingPeriodsV1UpdateBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiReportingPeriodsV1UpdateBulkRequest** | **ValidationsApiReportingPeriodsV1UpdateBulkRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiReportingPeriodsV1UpdatedBulkResponse**

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

