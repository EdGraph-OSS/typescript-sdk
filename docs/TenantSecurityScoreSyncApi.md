# TenantSecurityScoreSyncApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSecurityScoreSyncJob**](#createsecurityscoresyncjob) | **POST** /tenants/{tenantId}/jobs/securityscore | Creates an Security Score Sync Job for a given tenant|
|[**executeSecurityScoreSyncJob**](#executesecurityscoresyncjob) | **POST** /tenants/{tenantId}/jobs/securityscore/execute | Executes an Security Score Sync Job|
|[**getSecurityScoreSyncJob**](#getsecurityscoresyncjob) | **GET** /tenants/{tenantId}/jobs/securityscore | Retrieves a Security Score Sync Job for a given tenant|
|[**getSecurityScoreSyncJobExecution**](#getsecurityscoresyncjobexecution) | **GET** /tenants/{tenantId}/jobs/securityscore/{jobId}/executions/{jobExecutionId} | Retrieves a Security Score Sync Job Execution for a given tenant|
|[**updateSecurityScoreSyncJob**](#updatesecurityscoresyncjob) | **PUT** /tenants/{tenantId}/jobs/securityscore | Updates a Security Score Sync for a given tenant|

# **createSecurityScoreSyncJob**
> EdGraphHttpAggregatorsTenantApiServicesSecurityScoreSyncJobCreatedResult createSecurityScoreSyncJob()


### Example

```typescript
import {
    TenantSecurityScoreSyncApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiServicesSecurityScoreSyncCreateSecurityScoreSyncJobRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantSecurityScoreSyncApi(configuration);

let tenantId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiServicesSecurityScoreSyncCreateSecurityScoreSyncJobRequest: EdGraphHttpAggregatorsTenantApiServicesSecurityScoreSyncCreateSecurityScoreSyncJobRequest; // (optional)

const { status, data } = await apiInstance.createSecurityScoreSyncJob(
    tenantId,
    edGraphHttpAggregatorsTenantApiServicesSecurityScoreSyncCreateSecurityScoreSyncJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiServicesSecurityScoreSyncCreateSecurityScoreSyncJobRequest** | **EdGraphHttpAggregatorsTenantApiServicesSecurityScoreSyncCreateSecurityScoreSyncJobRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesSecurityScoreSyncJobCreatedResult**

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

# **executeSecurityScoreSyncJob**
> executeSecurityScoreSyncJob()


### Example

```typescript
import {
    TenantSecurityScoreSyncApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantSecurityScoreSyncApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.executeSecurityScoreSyncJob(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


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
|**202** | Accepted |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSecurityScoreSyncJob**
> DataSyncApiSecurityScoreSyncV1SecurityScoreSyncProfile getSecurityScoreSyncJob()


### Example

```typescript
import {
    TenantSecurityScoreSyncApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantSecurityScoreSyncApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.getSecurityScoreSyncJob(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**DataSyncApiSecurityScoreSyncV1SecurityScoreSyncProfile**

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

# **getSecurityScoreSyncJobExecution**
> DataSyncApiSecurityScoreSyncV1SecurityScoreSyncExecutionProfile getSecurityScoreSyncJobExecution()


### Example

```typescript
import {
    TenantSecurityScoreSyncApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantSecurityScoreSyncApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let jobExecutionId: string; // (default to undefined)

const { status, data } = await apiInstance.getSecurityScoreSyncJobExecution(
    tenantId,
    jobId,
    jobExecutionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|
| **jobExecutionId** | [**string**] |  | defaults to undefined|


### Return type

**DataSyncApiSecurityScoreSyncV1SecurityScoreSyncExecutionProfile**

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

# **updateSecurityScoreSyncJob**
> updateSecurityScoreSyncJob()


### Example

```typescript
import {
    TenantSecurityScoreSyncApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiServicesSecurityScoreSyncUpdateSecurityScoreSyncJobRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantSecurityScoreSyncApi(configuration);

let tenantId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiServicesSecurityScoreSyncUpdateSecurityScoreSyncJobRequest: EdGraphHttpAggregatorsTenantApiServicesSecurityScoreSyncUpdateSecurityScoreSyncJobRequest; // (optional)

const { status, data } = await apiInstance.updateSecurityScoreSyncJob(
    tenantId,
    edGraphHttpAggregatorsTenantApiServicesSecurityScoreSyncUpdateSecurityScoreSyncJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiServicesSecurityScoreSyncUpdateSecurityScoreSyncJobRequest** | **EdGraphHttpAggregatorsTenantApiServicesSecurityScoreSyncUpdateSecurityScoreSyncJobRequest**|  | |
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
|**204** | No Content |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

