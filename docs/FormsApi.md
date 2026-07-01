# FormsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createForm**](#createform) | **POST** /tenants/{tenantId}/forms | Creates a new Form for a given tenant|
|[**createFullForm**](#createfullform) | **POST** /tenants/{tenantId}/forms/full | Fully creates a new Form for a given tenant (with Sections and Questions).|
|[**deleteForm**](#deleteform) | **DELETE** /tenants/{tenantId}/forms/{formId} | Deletes a Form.|
|[**duplicateForm**](#duplicateform) | **POST** /tenants/{tenantId}/forms/{formId}/duplicate | Duplicates all Form data for a given tenant (with Sections and Questions).|
|[**getForm**](#getform) | **GET** /tenants/{tenantId}/forms/{formId} | Get Form.|
|[**getFormAccess**](#getformaccess) | **GET** /tenants/{tenantId}/forms/{formId}/access | Get the Access Type for a Form.|
|[**importForm**](#importform) | **POST** /tenants/{tenantId}/forms/import | Imports all form data for a given tenant.|
|[**searchForms**](#searchforms) | **GET** /tenants/{tenantId}/forms | Search Forms|
|[**setFormAccess**](#setformaccess) | **PUT** /tenants/{tenantId}/forms/{formId}/access | Sets the Access Type for a Form.|
|[**updateForm**](#updateform) | **PUT** /tenants/{tenantId}/forms/{formId} | Updates a Form.|
|[**updateFullForm**](#updatefullform) | **PUT** /tenants/{tenantId}/forms/{formId}/full | Fully updates a Form for a given tenant (with Sections and Questions).|

# **createForm**
> FormApiFormsV1FormCreatedResponse createForm()


### Example

```typescript
import {
    FormsApi,
    Configuration,
    FormApiFormsV1CreateFormRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let tenantId: string; // (default to undefined)
let formApiFormsV1CreateFormRequest: FormApiFormsV1CreateFormRequest; // (optional)

const { status, data } = await apiInstance.createForm(
    tenantId,
    formApiFormsV1CreateFormRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formApiFormsV1CreateFormRequest** | **FormApiFormsV1CreateFormRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**FormApiFormsV1FormCreatedResponse**

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

# **createFullForm**
> FormApiFormsV1FullFormCreatedResponse createFullForm()


### Example

```typescript
import {
    FormsApi,
    Configuration,
    FormApiFormsV1CreateFullFormRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let tenantId: string; // (default to undefined)
let formApiFormsV1CreateFullFormRequest: FormApiFormsV1CreateFullFormRequest; // (optional)

const { status, data } = await apiInstance.createFullForm(
    tenantId,
    formApiFormsV1CreateFullFormRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formApiFormsV1CreateFullFormRequest** | **FormApiFormsV1CreateFullFormRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**FormApiFormsV1FullFormCreatedResponse**

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

# **deleteForm**
> FormApiFormsV1FormDeletedResponse deleteForm()


### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteForm(
    tenantId,
    formId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|


### Return type

**FormApiFormsV1FormDeletedResponse**

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

# **duplicateForm**
> FormApiFormsV1FormDuplicatedResponse duplicateForm()


### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)

const { status, data } = await apiInstance.duplicateForm(
    tenantId,
    formId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|


### Return type

**FormApiFormsV1FormDuplicatedResponse**

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

# **getForm**
> EdGraphHttpAggregatorsTenantApiServicesFormsV1Form getForm()


### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)

const { status, data } = await apiInstance.getForm(
    tenantId,
    formId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesFormsV1Form**

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

# **getFormAccess**
> FormApiFormsV1FormAccessResponse getFormAccess()


### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)

const { status, data } = await apiInstance.getFormAccess(
    tenantId,
    formId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|


### Return type

**FormApiFormsV1FormAccessResponse**

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

# **importForm**
> object importForm()


### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let tenantId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.importForm(
    tenantId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**object**

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

# **searchForms**
> EdGraphHttpAggregatorsTenantApiServicesFormsV1FormPaginatedItemsViewModel searchForms()


### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.searchForms(
    tenantId,
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
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**EdGraphHttpAggregatorsTenantApiServicesFormsV1FormPaginatedItemsViewModel**

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

# **setFormAccess**
> FormApiFormsV1FormAccessSetResponse setFormAccess()


### Example

```typescript
import {
    FormsApi,
    Configuration,
    FormApiFormsV1SetFormAccessRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)
let formApiFormsV1SetFormAccessRequest: FormApiFormsV1SetFormAccessRequest; // (optional)

const { status, data } = await apiInstance.setFormAccess(
    tenantId,
    formId,
    formApiFormsV1SetFormAccessRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formApiFormsV1SetFormAccessRequest** | **FormApiFormsV1SetFormAccessRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|


### Return type

**FormApiFormsV1FormAccessSetResponse**

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

# **updateForm**
> FormApiFormsV1FormUpdatedResponse updateForm()


### Example

```typescript
import {
    FormsApi,
    Configuration,
    FormApiFormsV1UpdateFormRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)
let formApiFormsV1UpdateFormRequest: FormApiFormsV1UpdateFormRequest; // (optional)

const { status, data } = await apiInstance.updateForm(
    tenantId,
    formId,
    formApiFormsV1UpdateFormRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formApiFormsV1UpdateFormRequest** | **FormApiFormsV1UpdateFormRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|


### Return type

**FormApiFormsV1FormUpdatedResponse**

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

# **updateFullForm**
> FormApiFormsV1FullFormUpdatedResponse updateFullForm()


### Example

```typescript
import {
    FormsApi,
    Configuration,
    FormApiFormsV1UpdateFullFormRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)
let formApiFormsV1UpdateFullFormRequest: FormApiFormsV1UpdateFullFormRequest; // (optional)

const { status, data } = await apiInstance.updateFullForm(
    tenantId,
    formId,
    formApiFormsV1UpdateFullFormRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formApiFormsV1UpdateFullFormRequest** | **FormApiFormsV1UpdateFullFormRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|


### Return type

**FormApiFormsV1FullFormUpdatedResponse**

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

