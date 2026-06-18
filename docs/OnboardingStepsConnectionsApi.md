# OnboardingStepsConnectionsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createOnboardingStepConnection**](#createonboardingstepconnection) | **POST** /tenants/{tenantId}/onboardingsteps/{stepNumber}/connections | Creates an Onboarding Step connection.|
|[**getOnboardingStepConnectionById**](#getonboardingstepconnectionbyid) | **GET** /tenants/{tenantId}/onboardingsteps/{stepNumber}/connections/{connectionId} | Get an Onboarding Step connection by Id|
|[**updateOnboardingStepConnection**](#updateonboardingstepconnection) | **PUT** /tenants/{tenantId}/onboardingsteps/{stepNumber}/connections/{connectionId} | Update an Onboarding Step connection by Id|

# **createOnboardingStepConnection**
> EdGraphHttpAggregatorsTenantApiServicesOnboardingStepsConnectionCreatedResponse createOnboardingStepConnection()


### Example

```typescript
import {
    OnboardingStepsConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new OnboardingStepsConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let stepNumber: number; // (default to undefined)
let body: any; // (optional)

const { status, data } = await apiInstance.createOnboardingStepConnection(
    tenantId,
    stepNumber,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **stepNumber** | [**number**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesOnboardingStepsConnectionCreatedResponse**

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

# **getOnboardingStepConnectionById**
> EdGraphHttpAggregatorsTenantApiServicesOnboardingStepsConnectionResponse getOnboardingStepConnectionById()


### Example

```typescript
import {
    OnboardingStepsConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new OnboardingStepsConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let stepNumber: number; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.getOnboardingStepConnectionById(
    tenantId,
    stepNumber,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **stepNumber** | [**number**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesOnboardingStepsConnectionResponse**

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

# **updateOnboardingStepConnection**
> EdGraphHttpAggregatorsTenantApiServicesOnboardingStepsConnectionUpdatedResponse updateOnboardingStepConnection()


### Example

```typescript
import {
    OnboardingStepsConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new OnboardingStepsConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let stepNumber: number; // (default to undefined)
let connectionId: string; // (default to undefined)
let body: any; // (optional)

const { status, data } = await apiInstance.updateOnboardingStepConnection(
    tenantId,
    stepNumber,
    connectionId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **stepNumber** | [**number**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesOnboardingStepsConnectionUpdatedResponse**

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

