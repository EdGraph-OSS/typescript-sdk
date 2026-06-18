# RegistrationsAzureMarketplaceApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**submitTenantRegistrationAzureMonaAsync**](#submittenantregistrationazuremonaasync) | **POST** /registrations/azure/mona | Submits a tenant\&#39;s registration request received through Azure [M]arketplace [On]boarding [A]ccelerator (MONA)|

# **submitTenantRegistrationAzureMonaAsync**
> string submitTenantRegistrationAzureMonaAsync()


### Example

```typescript
import {
    RegistrationsAzureMarketplaceApi,
    Configuration,
    RegistrationApiRegistrationV2SubmitTenantRegistrationRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new RegistrationsAzureMarketplaceApi(configuration);

let registrationApiRegistrationV2SubmitTenantRegistrationRequest: RegistrationApiRegistrationV2SubmitTenantRegistrationRequest; // (optional)

const { status, data } = await apiInstance.submitTenantRegistrationAzureMonaAsync(
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

