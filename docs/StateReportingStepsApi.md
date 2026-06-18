# StateReportingStepsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSteps**](#getsteps) | **GET** /tenants/{tenantId}/statereporting/schoolYear/{schoolYear}/steps | Get Steps Status for the tenant.|
|[**updateStep**](#updatestep) | **POST** /tenants/{tenantId}/statereporting/schoolYear/{schoolYear}/steps | Update Steps Status for the tenant.|

# **getSteps**
> ValidationsApiStateReportingStepsV1GetStateReportingStepsResponse getSteps()


### Example

```typescript
import {
    StateReportingStepsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new StateReportingStepsApi(configuration);

let tenantId: string; // (default to undefined)
let schoolYear: number; // (default to undefined)

const { status, data } = await apiInstance.getSteps(
    tenantId,
    schoolYear
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **schoolYear** | [**number**] |  | defaults to undefined|


### Return type

**ValidationsApiStateReportingStepsV1GetStateReportingStepsResponse**

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

# **updateStep**
> ValidationsApiStateReportingStepsV1GetStateReportingStepsResponse updateStep()


### Example

```typescript
import {
    StateReportingStepsApi,
    Configuration,
    ValidationsApiStateReportingStepsV1UpdateStateReportingStepRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new StateReportingStepsApi(configuration);

let tenantId: string; // (default to undefined)
let schoolYear: number; // (default to undefined)
let validationsApiStateReportingStepsV1UpdateStateReportingStepRequest: ValidationsApiStateReportingStepsV1UpdateStateReportingStepRequest; // (optional)

const { status, data } = await apiInstance.updateStep(
    tenantId,
    schoolYear,
    validationsApiStateReportingStepsV1UpdateStateReportingStepRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiStateReportingStepsV1UpdateStateReportingStepRequest** | **ValidationsApiStateReportingStepsV1UpdateStateReportingStepRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **schoolYear** | [**number**] |  | defaults to undefined|


### Return type

**ValidationsApiStateReportingStepsV1GetStateReportingStepsResponse**

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

