# ValidationResultsAPIApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**findResultsApiJobRunRecordsAsync**](#findresultsapijobrunrecordsasync) | **GET** /tenants/{tenantId}/validations/results-api/jobs/{jobId}/runs/{runId}/records | Retrieves a list of Job Run Records from the Validation Results API.|
|[**findResultsApiJobRunRuleRecordsAsync**](#findresultsapijobrunrulerecordsasync) | **GET** /tenants/{tenantId}/validations/results-api/jobs/{jobId}/runs/{runId}/rules/{ruleId}/records | Retrieves a list of Job Run Rule Records from the Validation Results API.|
|[**findResultsApiJobRunRulesAsync**](#findresultsapijobrunrulesasync) | **GET** /tenants/{tenantId}/validations/results-api/jobs/{jobId}/runs/{runId}/rules | Retrieves a list of Job Run Rules from the Validation Results API.|
|[**findResultsApiJobRunsAsync**](#findresultsapijobrunsasync) | **GET** /tenants/{tenantId}/validations/results-api/jobs/{jobId}/runs | Retrieves a list of Job Runs from the Validation Results API.|
|[**findResultsApiJobsAsync**](#findresultsapijobsasync) | **GET** /tenants/{tenantId}/validations/results-api/jobs | Retrieves a list of Jobs from the Validation Results API.|
|[**findResultsApiRuleSummaries**](#findresultsapirulesummaries) | **GET** /tenants/{tenantId}/validations/results-api/jobs/{jobId}/runs/{runId}/rules/summary | Retrieves a list Rule Summaries from the Validation Results API.|
|[**findResultsApiRulesAsync**](#findresultsapirulesasync) | **GET** /tenants/{tenantId}/validations/results-api/rules | Retrieves a list of Rules from Validation Results API.|
|[**getLatestJobRunAsync**](#getlatestjobrunasync) | **GET** /tenants/{tenantId}/validations/results-api/jobs/{jobId}/runs/latest | Retrieves the latest Job Run from the Validation Results API.|
|[**getResultsApiJobById**](#getresultsapijobbyid) | **GET** /tenants/{tenantId}/validations/results-api/jobs/{jobId} | Retrieves a Job by ID from the Validation Results API.|
|[**getResultsApiJobRunByIdAsync**](#getresultsapijobrunbyidasync) | **GET** /tenants/{tenantId}/validations/results-api/jobs/{jobId}/runs/{runId} | Retrieves a Job Run by ID from the Validation Results API.|
|[**getResultsApiJobRunRuleByIdAsync**](#getresultsapijobrunrulebyidasync) | **GET** /tenants/{tenantId}/validations/results-api/jobs/{jobId}/runs/{runId}/rules/{ruleId} | Retrieves a Job Run Rule by ID from the Validation Results API.|
|[**getResultsApiRuleByIdAsync**](#getresultsapirulebyidasync) | **GET** /tenants/{tenantId}/validations/results-api/rules/{ruleId} | Retrieves a Rule by ID from the Validation Results API.|
|[**getResultsApiRuleSummary**](#getresultsapirulesummary) | **GET** /tenants/{tenantId}/validations/results-api/jobs/{jobId}/runs/{runId}/rules/{ruleId}/summary | Get Rule Summary by ID from the Validation Results API.|

# **findResultsApiJobRunRecordsAsync**
> Array<EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRecordsRecordDto> findResultsApiJobRunRecordsAsync()


### Example

```typescript
import {
    ValidationResultsAPIApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ValidationResultsAPIApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let runId: string; // (default to undefined)
let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 25)

const { status, data } = await apiInstance.findResultsApiJobRunRecordsAsync(
    tenantId,
    jobId,
    runId,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|
| **runId** | [**string**] |  | defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 25|


### Return type

**Array<EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRecordsRecordDto>**

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

# **findResultsApiJobRunRuleRecordsAsync**
> Array<EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRecordsRecordDto> findResultsApiJobRunRuleRecordsAsync()


### Example

```typescript
import {
    ValidationResultsAPIApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ValidationResultsAPIApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let runId: string; // (default to undefined)
let ruleId: string; // (default to undefined)
let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 25)

const { status, data } = await apiInstance.findResultsApiJobRunRuleRecordsAsync(
    tenantId,
    jobId,
    runId,
    ruleId,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|
| **runId** | [**string**] |  | defaults to undefined|
| **ruleId** | [**string**] |  | defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 25|


### Return type

**Array<EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRecordsRecordDto>**

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

# **findResultsApiJobRunRulesAsync**
> Array<EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRulesRuleDto> findResultsApiJobRunRulesAsync()


### Example

```typescript
import {
    ValidationResultsAPIApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ValidationResultsAPIApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let runId: string; // (default to undefined)
let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 25)

const { status, data } = await apiInstance.findResultsApiJobRunRulesAsync(
    tenantId,
    jobId,
    runId,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|
| **runId** | [**string**] |  | defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 25|


### Return type

**Array<EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRulesRuleDto>**

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

# **findResultsApiJobRunsAsync**
> Array<EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRunsRunDto> findResultsApiJobRunsAsync()


### Example

```typescript
import {
    ValidationResultsAPIApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ValidationResultsAPIApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 25)

const { status, data } = await apiInstance.findResultsApiJobRunsAsync(
    tenantId,
    jobId,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 25|


### Return type

**Array<EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRunsRunDto>**

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

# **findResultsApiJobsAsync**
> Array<EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiJobsJobDto> findResultsApiJobsAsync()


### Example

```typescript
import {
    ValidationResultsAPIApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ValidationResultsAPIApi(configuration);

let tenantId: string; // (default to undefined)
let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 25)

const { status, data } = await apiInstance.findResultsApiJobsAsync(
    tenantId,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 25|


### Return type

**Array<EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiJobsJobDto>**

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

# **findResultsApiRuleSummaries**
> Array<ValidationsApiResultsV1RuleSummary> findResultsApiRuleSummaries()


### Example

```typescript
import {
    ValidationResultsAPIApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ValidationResultsAPIApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let runId: string; // (default to undefined)
let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 25)

const { status, data } = await apiInstance.findResultsApiRuleSummaries(
    tenantId,
    jobId,
    runId,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|
| **runId** | [**string**] |  | defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 25|


### Return type

**Array<ValidationsApiResultsV1RuleSummary>**

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

# **findResultsApiRulesAsync**
> Array<EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRulesRuleDto> findResultsApiRulesAsync()


### Example

```typescript
import {
    ValidationResultsAPIApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ValidationResultsAPIApi(configuration);

let tenantId: string; // (default to undefined)
let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 25)

const { status, data } = await apiInstance.findResultsApiRulesAsync(
    tenantId,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 25|


### Return type

**Array<EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRulesRuleDto>**

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

# **getLatestJobRunAsync**
> EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRunsRunDto getLatestJobRunAsync()


### Example

```typescript
import {
    ValidationResultsAPIApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ValidationResultsAPIApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)

const { status, data } = await apiInstance.getLatestJobRunAsync(
    tenantId,
    jobId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRunsRunDto**

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

# **getResultsApiJobById**
> EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiJobsJobDto getResultsApiJobById()


### Example

```typescript
import {
    ValidationResultsAPIApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ValidationResultsAPIApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)

const { status, data } = await apiInstance.getResultsApiJobById(
    tenantId,
    jobId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiJobsJobDto**

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

# **getResultsApiJobRunByIdAsync**
> EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRunsRunDto getResultsApiJobRunByIdAsync()


### Example

```typescript
import {
    ValidationResultsAPIApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ValidationResultsAPIApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let runId: string; // (default to undefined)

const { status, data } = await apiInstance.getResultsApiJobRunByIdAsync(
    tenantId,
    jobId,
    runId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|
| **runId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRunsRunDto**

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

# **getResultsApiJobRunRuleByIdAsync**
> EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRulesRuleDto getResultsApiJobRunRuleByIdAsync()


### Example

```typescript
import {
    ValidationResultsAPIApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ValidationResultsAPIApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let runId: string; // (default to undefined)
let ruleId: string; // (default to undefined)

const { status, data } = await apiInstance.getResultsApiJobRunRuleByIdAsync(
    tenantId,
    jobId,
    runId,
    ruleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|
| **runId** | [**string**] |  | defaults to undefined|
| **ruleId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRulesRuleDto**

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

# **getResultsApiRuleByIdAsync**
> EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRulesRuleDto getResultsApiRuleByIdAsync()


### Example

```typescript
import {
    ValidationResultsAPIApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ValidationResultsAPIApi(configuration);

let tenantId: string; // (default to undefined)
let ruleId: string; // (default to undefined)

const { status, data } = await apiInstance.getResultsApiRuleByIdAsync(
    tenantId,
    ruleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **ruleId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesValidationResultsApiRulesRuleDto**

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

# **getResultsApiRuleSummary**
> ValidationsApiResultsV1RuleSummary getResultsApiRuleSummary()


### Example

```typescript
import {
    ValidationResultsAPIApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ValidationResultsAPIApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let runId: string; // (default to undefined)
let ruleId: string; // (default to undefined)

const { status, data } = await apiInstance.getResultsApiRuleSummary(
    tenantId,
    jobId,
    runId,
    ruleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|
| **runId** | [**string**] |  | defaults to undefined|
| **ruleId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiResultsV1RuleSummary**

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

