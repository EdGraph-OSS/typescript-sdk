# TenantJobsDSLApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createDslJob**](#createdsljob) | **POST** /tenants/{tenantId}/jobs/dsl | Creates a DSL Sync Job for a given tenant|
|[**executeDslJob**](#executedsljob) | **PUT** /tenants/{tenantId}/jobs/dsl/{jobId}/execute | Executes a DSL Sync Job for a given tenant|
|[**getDslJob**](#getdsljob) | **GET** /tenants/{tenantId}/jobs/dsl/{jobId} | Retrieves a DSL jobs profile for a given tenant|
|[**updateDslJob**](#updatedsljob) | **PUT** /tenants/{tenantId}/jobs/dsl/{jobId} | Updates a DSL Sync Job for a given tenant|

# **createDslJob**
> DataSyncApiDslV1JobCreatedResponse createDslJob()


### Example

```typescript
import {
    TenantJobsDSLApi,
    Configuration,
    DataSyncApiDslV1CreateJobRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantJobsDSLApi(configuration);

let tenantId: string; // (default to undefined)
let dataSyncApiDslV1CreateJobRequest: DataSyncApiDslV1CreateJobRequest; // (optional)

const { status, data } = await apiInstance.createDslJob(
    tenantId,
    dataSyncApiDslV1CreateJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dataSyncApiDslV1CreateJobRequest** | **DataSyncApiDslV1CreateJobRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**DataSyncApiDslV1JobCreatedResponse**

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

# **executeDslJob**
> DataSyncApiDslV1DslJobExecutedResponse executeDslJob()


### Example

```typescript
import {
    TenantJobsDSLApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantJobsDSLApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)

const { status, data } = await apiInstance.executeDslJob(
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

**DataSyncApiDslV1DslJobExecutedResponse**

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

# **getDslJob**
> DataSyncApiDslV1DslProfile getDslJob()


### Example

```typescript
import {
    TenantJobsDSLApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantJobsDSLApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)

const { status, data } = await apiInstance.getDslJob(
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

**DataSyncApiDslV1DslProfile**

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

# **updateDslJob**
> object updateDslJob()


### Example

```typescript
import {
    TenantJobsDSLApi,
    Configuration,
    DataSyncApiDslV1UpdateJobRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantJobsDSLApi(configuration);

let tenantId: string; // (default to undefined)
let jobId: string; // (default to undefined)
let dataSyncApiDslV1UpdateJobRequest: DataSyncApiDslV1UpdateJobRequest; // (optional)

const { status, data } = await apiInstance.updateDslJob(
    tenantId,
    jobId,
    dataSyncApiDslV1UpdateJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dataSyncApiDslV1UpdateJobRequest** | **DataSyncApiDslV1UpdateJobRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|


### Return type

**object**

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
|**204** | The resource was successfully updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

