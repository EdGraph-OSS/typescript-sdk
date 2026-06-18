# ClientsSecretsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addClientSecret**](#addclientsecret) | **POST** /tenants/{tenantId}/oneroster/instances/{instanceId}/clients/{clientId}/secrets | Creates a new secret for an OpenId client|
|[**regenerateOneRosterApiClientSecretAsync**](#regenerateonerosterapiclientsecretasync) | **PUT** /tenants/{tenantId}/oneroster/instances/{instanceId}/clients/{clientId}/regeneratesecret | Regenerate Client Secret|

# **addClientSecret**
> IMSAdminApiV1ClientsClientSecretAddedResponse addClientSecret()


### Example

```typescript
import {
    ClientsSecretsApi,
    Configuration,
    IMSAdminApiV1ClientsAddClientSecretRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ClientsSecretsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let clientId: string; // (default to undefined)
let iMSAdminApiV1ClientsAddClientSecretRequest: IMSAdminApiV1ClientsAddClientSecretRequest; // (optional)

const { status, data } = await apiInstance.addClientSecret(
    tenantId,
    instanceId,
    clientId,
    iMSAdminApiV1ClientsAddClientSecretRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **iMSAdminApiV1ClientsAddClientSecretRequest** | **IMSAdminApiV1ClientsAddClientSecretRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**IMSAdminApiV1ClientsClientSecretAddedResponse**

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

# **regenerateOneRosterApiClientSecretAsync**
> IMSAdminApiV1ClientsClientSecretRegeneratedResponse regenerateOneRosterApiClientSecretAsync()


### Example

```typescript
import {
    ClientsSecretsApi,
    Configuration,
    IMSAdminApiV1ClientsRegenerateClientSecretRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ClientsSecretsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let clientId: string; // (default to undefined)
let iMSAdminApiV1ClientsRegenerateClientSecretRequest: IMSAdminApiV1ClientsRegenerateClientSecretRequest; // (optional)

const { status, data } = await apiInstance.regenerateOneRosterApiClientSecretAsync(
    tenantId,
    instanceId,
    clientId,
    iMSAdminApiV1ClientsRegenerateClientSecretRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **iMSAdminApiV1ClientsRegenerateClientSecretRequest** | **IMSAdminApiV1ClientsRegenerateClientSecretRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**IMSAdminApiV1ClientsClientSecretRegeneratedResponse**

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

