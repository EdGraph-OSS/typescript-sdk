# TenantInstancesApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**loadOnboardingStepEdFiApiMetadata**](#loadonboardingstepedfiapimetadata) | **POST** /tenants/{tenantId}/onboardingsteps/edfi-api-metadata | Loads connection metadata.|
|[**testOnboardingStepConnection**](#testonboardingstepconnection) | **POST** /tenants/{tenantId}/onboardingsteps/testconnection | Tests availability of provided connection metadata.|

# **loadOnboardingStepEdFiApiMetadata**
> EdGraphHttpAggregatorsTenantApiServicesOnboardingStepsEdFiApiLoadEdFiApiMetadataResult loadOnboardingStepEdFiApiMetadata()


### Example

```typescript
import {
    TenantInstancesApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiServicesOnboardingStepsUseCasesEdFiApiMetadataRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantInstancesApi(configuration);

let tenantId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiServicesOnboardingStepsUseCasesEdFiApiMetadataRequest: EdGraphHttpAggregatorsTenantApiServicesOnboardingStepsUseCasesEdFiApiMetadataRequest; // (optional)

const { status, data } = await apiInstance.loadOnboardingStepEdFiApiMetadata(
    tenantId,
    edGraphHttpAggregatorsTenantApiServicesOnboardingStepsUseCasesEdFiApiMetadataRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiServicesOnboardingStepsUseCasesEdFiApiMetadataRequest** | **EdGraphHttpAggregatorsTenantApiServicesOnboardingStepsUseCasesEdFiApiMetadataRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesOnboardingStepsEdFiApiLoadEdFiApiMetadataResult**

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

# **testOnboardingStepConnection**
> EdGraphHttpAggregatorsTenantApiServicesOnboardingStepsTestConnectionResponse testOnboardingStepConnection()


### Example

```typescript
import {
    TenantInstancesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new TenantInstancesApi(configuration);

let tenantId: string; // (default to undefined)
let body: any; // (optional)

const { status, data } = await apiInstance.testOnboardingStepConnection(
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

**EdGraphHttpAggregatorsTenantApiServicesOnboardingStepsTestConnectionResponse**

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

