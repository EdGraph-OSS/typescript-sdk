# RegistrationsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getOnboardingApplicationsAsync**](#getonboardingapplicationsasync) | **GET** /public/applications | Gets a list of applications available for registration/onboarding|
|[**getRegistrationApprovalStatusAsync**](#getregistrationapprovalstatusasync) | **GET** /registrations/{registrationId} | Gets the approval status of a registration|
|[**submitTenantRegistrationAsync**](#submittenantregistrationasync) | **POST** /registrations | Submits a tenant\&#39;s registration request|

# **getOnboardingApplicationsAsync**
> ApplicationApiApplicationV1PaginatedItemsResponse getOnboardingApplicationsAsync()


### Example

```typescript
import {
    RegistrationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new RegistrationsApi(configuration);

let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')

const { status, data } = await apiInstance.getOnboardingApplicationsAsync(
    pageSize,
    pageIndex,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|


### Return type

**ApplicationApiApplicationV1PaginatedItemsResponse**

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

# **getRegistrationApprovalStatusAsync**
> RegistrationApiRegistrationV2ApprovalStatus getRegistrationApprovalStatusAsync()


### Example

```typescript
import {
    RegistrationsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new RegistrationsApi(configuration);

let registrationId: string; // (default to undefined)

const { status, data } = await apiInstance.getRegistrationApprovalStatusAsync(
    registrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registrationId** | [**string**] |  | defaults to undefined|


### Return type

**RegistrationApiRegistrationV2ApprovalStatus**

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
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitTenantRegistrationAsync**
> string submitTenantRegistrationAsync()


### Example

```typescript
import {
    RegistrationsApi,
    Configuration,
    RegistrationApiRegistrationV2SubmitTenantRegistrationRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new RegistrationsApi(configuration);

let registrationApiRegistrationV2SubmitTenantRegistrationRequest: RegistrationApiRegistrationV2SubmitTenantRegistrationRequest; // (optional)

const { status, data } = await apiInstance.submitTenantRegistrationAsync(
    registrationApiRegistrationV2SubmitTenantRegistrationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registrationApiRegistrationV2SubmitTenantRegistrationRequest** | **RegistrationApiRegistrationV2SubmitTenantRegistrationRequest**|  | |


### Return type

**string**

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

