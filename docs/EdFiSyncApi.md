# EdFiSyncApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createEdFiSync**](#createedfisync) | **POST** /tenants/{tenantId}/jobs/edfisync | Creates an Ed-Fi Sync Job for a given tenant|
|[**executeEdFiSyncJob**](#executeedfisyncjob) | **PUT** /tenants/{tenantId}/jobs/edfisync/execute | Executes an Ed-Fi Sync Job|
|[**getEdFiSyncData**](#getedfisyncdata) | **GET** /tenants/{tenantId}/jobs/edfisync | Retrieves Ed-Fi Sync Connection Data for a given tenant|
|[**updateEdFiSync**](#updateedfisync) | **PUT** /tenants/{tenantId}/jobs/edfisync | Updates an Ed-Fi Sync for a given tenant|

# **createEdFiSync**
> EdGraphHttpAggregatorsTenantApiServicesEdFiRosterSyncJobCreatedResult createEdFiSync()


### Example

```typescript
import {
    EdFiSyncApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiServicesEdFiRosterSyncCreateEdFiRosterSyncJobRequestDto
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EdFiSyncApi(configuration);

let tenantId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiServicesEdFiRosterSyncCreateEdFiRosterSyncJobRequestDto: EdGraphHttpAggregatorsTenantApiServicesEdFiRosterSyncCreateEdFiRosterSyncJobRequestDto; // (optional)

const { status, data } = await apiInstance.createEdFiSync(
    tenantId,
    edGraphHttpAggregatorsTenantApiServicesEdFiRosterSyncCreateEdFiRosterSyncJobRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiServicesEdFiRosterSyncCreateEdFiRosterSyncJobRequestDto** | **EdGraphHttpAggregatorsTenantApiServicesEdFiRosterSyncCreateEdFiRosterSyncJobRequestDto**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesEdFiRosterSyncJobCreatedResult**

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

# **executeEdFiSyncJob**
> DataSyncApiJobV1JobExecutionRequestedResponse executeEdFiSyncJob()


### Example

```typescript
import {
    EdFiSyncApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EdFiSyncApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.executeEdFiSyncJob(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**DataSyncApiJobV1JobExecutionRequestedResponse**

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

# **getEdFiSyncData**
> DataSyncApiEdFiRosterSyncV1EdFiRosterSyncJobProfile getEdFiSyncData()


### Example

```typescript
import {
    EdFiSyncApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EdFiSyncApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.getEdFiSyncData(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**DataSyncApiEdFiRosterSyncV1EdFiRosterSyncJobProfile**

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

# **updateEdFiSync**
> MicrosoftAspNetCoreMvcNoContentResult updateEdFiSync()


### Example

```typescript
import {
    EdFiSyncApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EdFiSyncApi(configuration);

let tenantId: string; // (default to undefined)
let body: any; // (optional)

const { status, data } = await apiInstance.updateEdFiSync(
    tenantId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**|  | |
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
|**200** | The requested resource was successfully retrieved. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

