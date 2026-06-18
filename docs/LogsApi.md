# LogsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getLogs**](#getlogs) | **GET** /tenants/{tenantId}/validations/logs | Retrieves a list of Logs.|

# **getLogs**
> ValidationsApiValidationResultsV1FindResponse getLogs()


### Example

```typescript
import {
    LogsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new LogsApi(configuration);

let tenantId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let orderBy: string; // (optional) (default to undefined)
let environmentId: string; // (optional) (default to undefined)
let collectionId: string; // (optional) (default to undefined)
let containerId: string; // (optional) (default to undefined)
let ruleId: string; // (optional) (default to undefined)
let jobId: string; // (optional) (default to undefined)
let jobExecutionId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getLogs(
    tenantId,
    pageIndex,
    pageSize,
    orderBy,
    environmentId,
    collectionId,
    containerId,
    ruleId,
    jobId,
    jobExecutionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **environmentId** | [**string**] |  | (optional) defaults to undefined|
| **collectionId** | [**string**] |  | (optional) defaults to undefined|
| **containerId** | [**string**] |  | (optional) defaults to undefined|
| **ruleId** | [**string**] |  | (optional) defaults to undefined|
| **jobId** | [**string**] |  | (optional) defaults to undefined|
| **jobExecutionId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ValidationsApiValidationResultsV1FindResponse**

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

