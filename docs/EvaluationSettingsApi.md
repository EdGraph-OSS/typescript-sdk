# EvaluationSettingsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getEvaluationSetting**](#getevaluationsetting) | **GET** /tenants/{tenantId}/evaluations/configuration | Gets the Evaluation Settings for a given tenant|
|[**setEvaluationSettingApplicationSetting**](#setevaluationsettingapplicationsetting) | **POST** /tenants/{tenantId}/evaluations/configuration/application | Sets the Application Settings of an Evaluation for a given Tenant|
|[**setEvaluationSettingUserSetting**](#setevaluationsettingusersetting) | **POST** /tenants/{tenantId}/evaluations/configuration/users | Sets the User Settings of an Evaluation for a given Tenant|

# **getEvaluationSetting**
> EvaluationApiEvaluationSettingsV1EvaluationSettingResponse getEvaluationSetting()


### Example

```typescript
import {
    EvaluationSettingsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EvaluationSettingsApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.getEvaluationSetting(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**EvaluationApiEvaluationSettingsV1EvaluationSettingResponse**

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

# **setEvaluationSettingApplicationSetting**
> EvaluationApiEvaluationSettingsV1ApplicationSetResponse setEvaluationSettingApplicationSetting()


### Example

```typescript
import {
    EvaluationSettingsApi,
    Configuration,
    EvaluationApiEvaluationSettingsV1SetApplicationRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EvaluationSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let evaluationApiEvaluationSettingsV1SetApplicationRequest: EvaluationApiEvaluationSettingsV1SetApplicationRequest; // (optional)

const { status, data } = await apiInstance.setEvaluationSettingApplicationSetting(
    tenantId,
    evaluationApiEvaluationSettingsV1SetApplicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **evaluationApiEvaluationSettingsV1SetApplicationRequest** | **EvaluationApiEvaluationSettingsV1SetApplicationRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**EvaluationApiEvaluationSettingsV1ApplicationSetResponse**

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

# **setEvaluationSettingUserSetting**
> EvaluationApiEvaluationSettingsV1UsersSetResponse setEvaluationSettingUserSetting()


### Example

```typescript
import {
    EvaluationSettingsApi,
    Configuration,
    EvaluationApiEvaluationSettingsV1SetUsersRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EvaluationSettingsApi(configuration);

let tenantId: string; // (default to undefined)
let evaluationApiEvaluationSettingsV1SetUsersRequest: EvaluationApiEvaluationSettingsV1SetUsersRequest; // (optional)

const { status, data } = await apiInstance.setEvaluationSettingUserSetting(
    tenantId,
    evaluationApiEvaluationSettingsV1SetUsersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **evaluationApiEvaluationSettingsV1SetUsersRequest** | **EvaluationApiEvaluationSettingsV1SetUsersRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**EvaluationApiEvaluationSettingsV1UsersSetResponse**

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

