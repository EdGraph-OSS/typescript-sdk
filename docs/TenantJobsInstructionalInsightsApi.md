# TenantJobsInstructionalInsightsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createInstructionalInsightsSecuritySyncJob**](#createinstructionalinsightssecuritysyncjob) | **POST** /tenants/{tenantId}/jobs/instructionalinsights | Creates an Instructional Insights Security Sync Job for a given tenant|
|[**executeInstructionalInsightsSecuritySyncJob**](#executeinstructionalinsightssecuritysyncjob) | **POST** /tenants/{tenantId}/jobs/instructionalinsights/execute | Executes an Instructional Insights Security Sync Job|
|[**getInstructionalInsightsSecuritySyncJob**](#getinstructionalinsightssecuritysyncjob) | **GET** /tenants/{tenantId}/jobs/instructionalinsights | Retrieves an Instructional Insights Security Sync Job for a given tenant|
|[**searchInstructionalInsightsSecuritySyncJobExecutionLogs**](#searchinstructionalinsightssecuritysyncjobexecutionlogs) | **GET** /tenants/{tenantId}/jobs/instructionalinsights/executions/{executionId}/logs | Searches Instructional Insights Security Sync Job Execution Logs for a given tenant and execution|
|[**searchInstructionalInsightsSecuritySyncJobExecutions**](#searchinstructionalinsightssecuritysyncjobexecutions) | **GET** /tenants/{tenantId}/jobs/instructionalinsights/executions | Searches Instructional Insights Security Sync Job Executions for a given tenant|
|[**updateInstructionalInsightsSecuritySyncJob**](#updateinstructionalinsightssecuritysyncjob) | **PUT** /tenants/{tenantId}/jobs/instructionalinsights | Updates an Instructional Insights Security Sync Job for a given tenant|

# **createInstructionalInsightsSecuritySyncJob**
> IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobCreatedResponse createInstructionalInsightsSecuritySyncJob()


### Example

```typescript
import {
    TenantJobsInstructionalInsightsApi,
    Configuration,
    IdentityApiInstructionalInsightsV1CreateInstructionalInsightsSecuritySyncJobRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantJobsInstructionalInsightsApi(configuration);

let tenantId: string; // (default to undefined)
let identityApiInstructionalInsightsV1CreateInstructionalInsightsSecuritySyncJobRequest: IdentityApiInstructionalInsightsV1CreateInstructionalInsightsSecuritySyncJobRequest; // (optional)

const { status, data } = await apiInstance.createInstructionalInsightsSecuritySyncJob(
    tenantId,
    identityApiInstructionalInsightsV1CreateInstructionalInsightsSecuritySyncJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityApiInstructionalInsightsV1CreateInstructionalInsightsSecuritySyncJobRequest** | **IdentityApiInstructionalInsightsV1CreateInstructionalInsightsSecuritySyncJobRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobCreatedResponse**

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

# **executeInstructionalInsightsSecuritySyncJob**
> IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobExecutedResponse executeInstructionalInsightsSecuritySyncJob()


### Example

```typescript
import {
    TenantJobsInstructionalInsightsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantJobsInstructionalInsightsApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.executeInstructionalInsightsSecuritySyncJob(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobExecutedResponse**

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
|**202** | The job execution was successfully requested. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInstructionalInsightsSecuritySyncJob**
> IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobResponse getInstructionalInsightsSecuritySyncJob()


### Example

```typescript
import {
    TenantJobsInstructionalInsightsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantJobsInstructionalInsightsApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.getInstructionalInsightsSecuritySyncJob(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobResponse**

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

# **searchInstructionalInsightsSecuritySyncJobExecutionLogs**
> IdentityApiInstructionalInsightsV1SearchInstructionalInsightsSecuritySyncJobExecutionLogsResponse searchInstructionalInsightsSecuritySyncJobExecutionLogs()


### Example

```typescript
import {
    TenantJobsInstructionalInsightsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantJobsInstructionalInsightsApi(configuration);

let tenantId: string; // (default to undefined)
let executionId: string; // (default to undefined)
let jobId: string; // (optional) (default to '')
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let orderBy: string; // (optional) (default to '')
let level: string; // (optional) (default to '')
let message: string; // (optional) (default to '')

const { status, data } = await apiInstance.searchInstructionalInsightsSecuritySyncJobExecutionLogs(
    tenantId,
    executionId,
    jobId,
    pageIndex,
    pageSize,
    orderBy,
    level,
    message
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **executionId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | (optional) defaults to ''|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **level** | [**string**] |  | (optional) defaults to ''|
| **message** | [**string**] |  | (optional) defaults to ''|


### Return type

**IdentityApiInstructionalInsightsV1SearchInstructionalInsightsSecuritySyncJobExecutionLogsResponse**

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

# **searchInstructionalInsightsSecuritySyncJobExecutions**
> IdentityApiInstructionalInsightsV1SearchInstructionalInsightsSecuritySyncJobExecutionsResponse searchInstructionalInsightsSecuritySyncJobExecutions()


### Example

```typescript
import {
    TenantJobsInstructionalInsightsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantJobsInstructionalInsightsApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (optional) (default to '')
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.searchInstructionalInsightsSecuritySyncJobExecutions(
    tenantId,
    jobId,
    pageIndex,
    pageSize,
    orderBy,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | (optional) defaults to ''|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**IdentityApiInstructionalInsightsV1SearchInstructionalInsightsSecuritySyncJobExecutionsResponse**

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

# **updateInstructionalInsightsSecuritySyncJob**
> MicrosoftAspNetCoreMvcNoContentResult updateInstructionalInsightsSecuritySyncJob()


### Example

```typescript
import {
    TenantJobsInstructionalInsightsApi,
    Configuration,
    IdentityApiInstructionalInsightsV1UpdateInstructionalInsightsSecuritySyncJobRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantJobsInstructionalInsightsApi(configuration);

let tenantId: string; // (default to undefined)
let identityApiInstructionalInsightsV1UpdateInstructionalInsightsSecuritySyncJobRequest: IdentityApiInstructionalInsightsV1UpdateInstructionalInsightsSecuritySyncJobRequest; // (optional)

const { status, data } = await apiInstance.updateInstructionalInsightsSecuritySyncJob(
    tenantId,
    identityApiInstructionalInsightsV1UpdateInstructionalInsightsSecuritySyncJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityApiInstructionalInsightsV1UpdateInstructionalInsightsSecuritySyncJobRequest** | **IdentityApiInstructionalInsightsV1UpdateInstructionalInsightsSecuritySyncJobRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**MicrosoftAspNetCoreMvcNoContentResult**

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
|**204** | The resource was successfully updated. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

