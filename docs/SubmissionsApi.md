# SubmissionsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSubmission**](#createsubmission) | **POST** /tenants/{tenantId}/forms/{formId}/submissions | Creates a new Submission for a given question|
|[**deleteSubmission**](#deletesubmission) | **DELETE** /tenants/{tenantId}/forms/{formId}/submissions/{submissionId} | Deletes a Submission.|
|[**exportSubmissions**](#exportsubmissions) | **GET** /tenants/{tenantId}/forms/{formId}/submissions/export | Exports Submission data for a Form for a given tenant. (With JSON and CSV support)|
|[**getSubmission**](#getsubmission) | **GET** /tenants/{tenantId}/forms/{formId}/submissions/{submissionId} | Get Submission.|
|[**searchSubmissions**](#searchsubmissions) | **GET** /tenants/{tenantId}/forms/{formId}/submissions | Search Submissions|
|[**updateSubmission**](#updatesubmission) | **PUT** /tenants/{tenantId}/forms/{formId}/submissions/{submissionId} | Updates a Submission.|

# **createSubmission**
> FormApiSubmissionsV1SubmissionCreatedResponse createSubmission()


### Example

```typescript
import {
    SubmissionsApi,
    Configuration,
    FormApiSubmissionsV1CreateSubmissionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new SubmissionsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)
let formApiSubmissionsV1CreateSubmissionRequest: FormApiSubmissionsV1CreateSubmissionRequest; // (optional)

const { status, data } = await apiInstance.createSubmission(
    tenantId,
    formId,
    formApiSubmissionsV1CreateSubmissionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formApiSubmissionsV1CreateSubmissionRequest** | **FormApiSubmissionsV1CreateSubmissionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|


### Return type

**FormApiSubmissionsV1SubmissionCreatedResponse**

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

# **deleteSubmission**
> FormApiSubmissionsV1SubmissionDeletedResponse deleteSubmission()


### Example

```typescript
import {
    SubmissionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new SubmissionsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)
let submissionId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteSubmission(
    tenantId,
    formId,
    submissionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|


### Return type

**FormApiSubmissionsV1SubmissionDeletedResponse**

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

# **exportSubmissions**
> FormApiSubmissionsV1SubmissionsExportedResponse exportSubmissions()


### Example

```typescript
import {
    SubmissionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new SubmissionsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)
let type: FormApiSubmissionsV1ExportType; // (optional) (default to undefined)

const { status, data } = await apiInstance.exportSubmissions(
    tenantId,
    formId,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|
| **type** | **FormApiSubmissionsV1ExportType** |  | (optional) defaults to undefined|


### Return type

**FormApiSubmissionsV1SubmissionsExportedResponse**

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

# **getSubmission**
> FormApiSubmissionsV1SubmissionResponse getSubmission()


### Example

```typescript
import {
    SubmissionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new SubmissionsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)
let submissionId: string; // (default to undefined)

const { status, data } = await apiInstance.getSubmission(
    tenantId,
    formId,
    submissionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|


### Return type

**FormApiSubmissionsV1SubmissionResponse**

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

# **searchSubmissions**
> FormApiSubmissionsV1SubmissionResponsePaginatedItemsViewModel searchSubmissions()


### Example

```typescript
import {
    SubmissionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new SubmissionsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.searchSubmissions(
    tenantId,
    formId,
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
| **formId** | [**string**] |  | defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**FormApiSubmissionsV1SubmissionResponsePaginatedItemsViewModel**

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

# **updateSubmission**
> FormApiSubmissionsV1SubmissionUpdatedResponse updateSubmission()


### Example

```typescript
import {
    SubmissionsApi,
    Configuration,
    FormApiSubmissionsV1UpdateSubmissionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new SubmissionsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)
let submissionId: string; // (default to undefined)
let formApiSubmissionsV1UpdateSubmissionRequest: FormApiSubmissionsV1UpdateSubmissionRequest; // (optional)

const { status, data } = await apiInstance.updateSubmission(
    tenantId,
    formId,
    submissionId,
    formApiSubmissionsV1UpdateSubmissionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formApiSubmissionsV1UpdateSubmissionRequest** | **FormApiSubmissionsV1UpdateSubmissionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|
| **submissionId** | [**string**] |  | defaults to undefined|


### Return type

**FormApiSubmissionsV1SubmissionUpdatedResponse**

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

