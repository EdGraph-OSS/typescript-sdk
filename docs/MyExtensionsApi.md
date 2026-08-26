# MyExtensionsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**removeUserExtension**](#removeuserextension) | **DELETE** /me/extensions/{code} | Removes a user\&#39;s profile extension.  &lt;br&gt;&lt;b&gt;Deprecated.&lt;/b&gt; Use &#x60;/me/settings/{code}&#x60; instead. Superseded by  EdGraph.Services.Settings; see docs/settings-deprecation-map.md. This endpoint  still works and is unchanged.|
|[**setUserExtension**](#setuserextension) | **POST** /me/extensions | Creates or update a user\&#39;s profile extension.  &lt;br&gt;&lt;b&gt;Deprecated.&lt;/b&gt; Use &#x60;/me/settings&#x60; instead. Superseded by  EdGraph.Services.Settings; see docs/settings-deprecation-map.md. This endpoint  still works and is unchanged.|

# **removeUserExtension**
> IdentityApiUserV1UserExtensionRemovedResponse removeUserExtension()


### Example

```typescript
import {
    MyExtensionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MyExtensionsApi(configuration);

let code: string; // (default to undefined)

const { status, data } = await apiInstance.removeUserExtension(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] |  | defaults to undefined|


### Return type

**IdentityApiUserV1UserExtensionRemovedResponse**

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

# **setUserExtension**
> IdentityApiUserV1UserExtensionSetResponse setUserExtension()


### Example

```typescript
import {
    MyExtensionsApi,
    Configuration,
    IdentityApiUserV1SetUserExtensionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new MyExtensionsApi(configuration);

let identityApiUserV1SetUserExtensionRequest: IdentityApiUserV1SetUserExtensionRequest; // (optional)

const { status, data } = await apiInstance.setUserExtension(
    identityApiUserV1SetUserExtensionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityApiUserV1SetUserExtensionRequest** | **IdentityApiUserV1SetUserExtensionRequest**|  | |


### Return type

**IdentityApiUserV1UserExtensionSetResponse**

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

