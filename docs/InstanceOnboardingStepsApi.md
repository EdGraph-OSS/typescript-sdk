# InstanceOnboardingStepsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createInstanceOnboardingStepAsync**](#createinstanceonboardingstepasync) | **POST** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/onboardingsteps | Creates an Onboarding Step.|
|[**updateInstanceOnboardingStepAsync**](#updateinstanceonboardingstepasync) | **PUT** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/onboardingsteps/{stepNumber} | Updates the status of an Onboarding Step.|

# **createInstanceOnboardingStepAsync**
> EdfiAdminApiEdfiAdminV1InstanceUpdatedResponse createInstanceOnboardingStepAsync()


### Example

```typescript
import {
    InstanceOnboardingStepsApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1CreateOnboardingStepRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstanceOnboardingStepsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let edfiAdminApiEdfiAdminV1CreateOnboardingStepRequest: EdfiAdminApiEdfiAdminV1CreateOnboardingStepRequest; // (optional)

const { status, data } = await apiInstance.createInstanceOnboardingStepAsync(
    tenantId,
    instanceId,
    edfiAdminApiEdfiAdminV1CreateOnboardingStepRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1CreateOnboardingStepRequest** | **EdfiAdminApiEdfiAdminV1CreateOnboardingStepRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1InstanceUpdatedResponse**

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

# **updateInstanceOnboardingStepAsync**
> EdfiAdminApiEdfiAdminV1InstanceUpdatedResponse updateInstanceOnboardingStepAsync()


### Example

```typescript
import {
    InstanceOnboardingStepsApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1UpdateOnboardingStepRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstanceOnboardingStepsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let stepNumber: number; // (default to undefined)
let edfiAdminApiEdfiAdminV1UpdateOnboardingStepRequest: EdfiAdminApiEdfiAdminV1UpdateOnboardingStepRequest; // (optional)

const { status, data } = await apiInstance.updateInstanceOnboardingStepAsync(
    tenantId,
    instanceId,
    stepNumber,
    edfiAdminApiEdfiAdminV1UpdateOnboardingStepRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1UpdateOnboardingStepRequest** | **EdfiAdminApiEdfiAdminV1UpdateOnboardingStepRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **stepNumber** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1InstanceUpdatedResponse**

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

