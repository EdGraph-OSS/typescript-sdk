# JobsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activateTenantDataSyncJob**](#activatetenantdatasyncjob) | **POST** /tenants/{tenantId}/datasync/jobs/{jobId}/activate | Activate a DataSync job matching the primary key|
|[**cancelJob**](#canceljob) | **POST** /tenants/{tenantId}/validations/jobs/{jobId}/cancel | Requests a Job cancellation.|
|[**cancelTenantDataSyncJob**](#canceltenantdatasyncjob) | **POST** /tenants/{tenantId}/datasync/jobs/{jobId}/cancel | Cancel a DataSync job matching the primary key|
|[**createJob**](#createjob) | **POST** /tenants/{tenantId}/validations/jobs | Creates a Job.|
|[**createTenantDataSyncJob**](#createtenantdatasyncjob) | **POST** /tenants/{tenantId}/datasync/jobs | Creates a new DataSync job|
|[**deactivateTenantDataSyncJob**](#deactivatetenantdatasyncjob) | **POST** /tenants/{tenantId}/datasync/jobs/{jobId}/deactivate | Deactivate a DataSync job matching the primary key|
|[**deleteJob**](#deletejob) | **DELETE** /tenants/{tenantId}/validations/jobs/{jobId} | Deletes a Job.|
|[**deleteTenantDataSyncJob**](#deletetenantdatasyncjob) | **DELETE** /tenants/{tenantId}/datasync/jobs/{jobId} | Delete a DataSync job matching the primary key|
|[**executeJob**](#executejob) | **POST** /tenants/{tenantId}/validations/jobs/{jobId}/execute | Requests a Job execution.|
|[**executeTenantDataSyncJob**](#executetenantdatasyncjob) | **POST** /tenants/{tenantId}/datasync/jobs/{jobId}/execute | Execute a DataSync job matching the primary key|
|[**getAllTenantDataSyncJobs**](#getalltenantdatasyncjobs) | **GET** /tenants/{tenantId}/datasync/jobs | Retrieves a list of DataSync Jobs|
|[**getJobById**](#getjobbyid) | **GET** /tenants/{tenantId}/validations/jobs/{jobId} | Retrieves a Job by ID.|
|[**getJobs**](#getjobs) | **GET** /tenants/{tenantId}/validations/jobs | Retrieves a list of Jobs.|
|[**getTenantDataSyncJobProfileById**](#gettenantdatasyncjobprofilebyid) | **GET** /tenants/{tenantId}/datasync/jobs/{jobId} | Retrieves a specific DataSync job using its primary key|
|[**restartJobSchedule**](#restartjobschedule) | **POST** /tenants/{tenantId}/validations/jobs/{jobId}/restart | Requests a Job schedule restart.|
|[**updateJob**](#updatejob) | **PUT** /tenants/{tenantId}/validations/jobs/{jobId} | Updates a Job.|
|[**updateTenantDataSyncJob**](#updatetenantdatasyncjob) | **PUT** /tenants/{tenantId}/datasync/jobs/{jobId} | Updates a DataSync job matching the primary key|

# **activateTenantDataSyncJob**
> activateTenantDataSyncJob()


### Example

```typescript
import {
    JobsApi,
    Configuration,
    DataSyncApiJobV1ActivateJobRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let dataSyncApiJobV1ActivateJobRequest: DataSyncApiJobV1ActivateJobRequest; // (optional)

const { status, data } = await apiInstance.activateTenantDataSyncJob(
    tenantId,
    jobId,
    dataSyncApiJobV1ActivateJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dataSyncApiJobV1ActivateJobRequest** | **DataSyncApiJobV1ActivateJobRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|


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
|**202** | The request has been accepted for processing, but the processing is not yet complete. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancelJob**
> object cancelJob()


### Example

```typescript
import {
    JobsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)

const { status, data } = await apiInstance.cancelJob(
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

**object**

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

# **cancelTenantDataSyncJob**
> cancelTenantDataSyncJob()


### Example

```typescript
import {
    JobsApi,
    Configuration,
    DataSyncApiJobV1CancelJobRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let dataSyncApiJobV1CancelJobRequest: DataSyncApiJobV1CancelJobRequest; // (optional)

const { status, data } = await apiInstance.cancelTenantDataSyncJob(
    tenantId,
    jobId,
    dataSyncApiJobV1CancelJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dataSyncApiJobV1CancelJobRequest** | **DataSyncApiJobV1CancelJobRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|


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
|**202** | The request has been accepted for processing, but the processing is not yet complete. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createJob**
> ValidationsApiCoreV1CreatedResponse createJob()


### Example

```typescript
import {
    JobsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsValidationsCreateValidationJobRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsValidationsCreateValidationJobRequest: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsValidationsCreateValidationJobRequest; // (optional)

const { status, data } = await apiInstance.createJob(
    tenantId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsValidationsCreateValidationJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsValidationsCreateValidationJobRequest** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsValidationsCreateValidationJobRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiCoreV1CreatedResponse**

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
|**201** | The resource was created. The location of the resource is available in the Location header of the response. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTenantDataSyncJob**
> createTenantDataSyncJob()


### Example

```typescript
import {
    JobsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsCreateJobRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsCreateJobRequest: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsCreateJobRequest; // (optional)

const { status, data } = await apiInstance.createTenantDataSyncJob(
    tenantId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsCreateJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsCreateJobRequest** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsCreateJobRequest**|  | |
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
|**201** | The resource was created. The location of the resource is available in the Location header of the response. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivateTenantDataSyncJob**
> deactivateTenantDataSyncJob()


### Example

```typescript
import {
    JobsApi,
    Configuration,
    DataSyncApiJobV1DeactivateJobRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let dataSyncApiJobV1DeactivateJobRequest: DataSyncApiJobV1DeactivateJobRequest; // (optional)

const { status, data } = await apiInstance.deactivateTenantDataSyncJob(
    tenantId,
    jobId,
    dataSyncApiJobV1DeactivateJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dataSyncApiJobV1DeactivateJobRequest** | **DataSyncApiJobV1DeactivateJobRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|


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
|**202** | The request has been accepted for processing, but the processing is not yet complete. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteJob**
> deleteJob()


### Example

```typescript
import {
    JobsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteJob(
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
|**204** | The resource was successfully deleted. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTenantDataSyncJob**
> deleteTenantDataSyncJob()


### Example

```typescript
import {
    JobsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTenantDataSyncJob(
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
|**204** | The resource was successfully deleted. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **executeJob**
> object executeJob()


### Example

```typescript
import {
    JobsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)

const { status, data } = await apiInstance.executeJob(
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

**object**

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

# **executeTenantDataSyncJob**
> executeTenantDataSyncJob()


### Example

```typescript
import {
    JobsApi,
    Configuration,
    DataSyncApiJobV1ExecuteJobRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let dataSyncApiJobV1ExecuteJobRequest: DataSyncApiJobV1ExecuteJobRequest; // (optional)

const { status, data } = await apiInstance.executeTenantDataSyncJob(
    tenantId,
    jobId,
    dataSyncApiJobV1ExecuteJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dataSyncApiJobV1ExecuteJobRequest** | **DataSyncApiJobV1ExecuteJobRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|


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
|**202** | The request has been accepted for processing, but the processing is not yet complete. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllTenantDataSyncJobs**
> DataSyncApiJobV1JobListResponsePaginatedItemsViewModel getAllTenantDataSyncJobs()


### Example

```typescript
import {
    JobsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllTenantDataSyncJobs(
    tenantId,
    pageSize,
    pageIndex,
    orderBy,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**DataSyncApiJobV1JobListResponsePaginatedItemsViewModel**

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

# **getJobById**
> ValidationsApiJobsV1JobProfileResponse getJobById()


### Example

```typescript
import {
    JobsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)

const { status, data } = await apiInstance.getJobById(
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

**ValidationsApiJobsV1JobProfileResponse**

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

# **getJobs**
> ValidationsApiJobsV1PaginatedItemsResponse getJobs()


### Example

```typescript
import {
    JobsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let filter: string; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getJobs(
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
| **filter** | [**string**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ValidationsApiJobsV1PaginatedItemsResponse**

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

# **getTenantDataSyncJobProfileById**
> DataSyncApiJobV1JobProfileResponse getTenantDataSyncJobProfileById()


### Example

```typescript
import {
    JobsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)

const { status, data } = await apiInstance.getTenantDataSyncJobProfileById(
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

**DataSyncApiJobV1JobProfileResponse**

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

# **restartJobSchedule**
> restartJobSchedule()


### Example

```typescript
import {
    JobsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)

const { status, data } = await apiInstance.restartJobSchedule(
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
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateJob**
> updateJob()


### Example

```typescript
import {
    JobsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsUpdateValidationJobRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsUpdateValidationJobRequest: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsUpdateValidationJobRequest; // (optional)

const { status, data } = await apiInstance.updateJob(
    tenantId,
    jobId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsUpdateValidationJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsUpdateValidationJobRequest** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsUpdateValidationJobRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|


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
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTenantDataSyncJob**
> updateTenantDataSyncJob()


### Example

```typescript
import {
    JobsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsUpdateJobRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsUpdateJobRequest: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsUpdateJobRequest; // (optional)

const { status, data } = await apiInstance.updateTenantDataSyncJob(
    tenantId,
    jobId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsUpdateJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsUpdateJobRequest** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsUpdateJobRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|


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
|**202** | The request has been accepted for processing, but the processing is not yet complete. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

