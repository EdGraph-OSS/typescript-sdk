# EnvironmentsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createEnvironment**](#createenvironment) | **POST** /tenants/{tenantId}/validations/environments | Creates an Environment.|
|[**createStateReportingEnvironment**](#createstatereportingenvironment) | **POST** /tenants/{tenantId}/statereporting/environments | Creates a new Environment.|
|[**deleteEnvironment**](#deleteenvironment) | **DELETE** /tenants/{tenantId}/validations/environments/{environmentId} | Deletes an Environment.|
|[**deleteStateReportingEnvironment**](#deletestatereportingenvironment) | **DELETE** /tenants/{tenantId}/statereporting/environments/{environmentId} | Deletes an Environment.|
|[**getEnvironmentById**](#getenvironmentbyid) | **GET** /tenants/{tenantId}/validations/environments/{environmentId} | Retrieves an Environment by ID.|
|[**getEnvironments**](#getenvironments) | **GET** /tenants/{tenantId}/validations/environments | Retrieves a list of Environments.|
|[**getStateReportingEnvironment**](#getstatereportingenvironment) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId} | Retrieves an Environment by ID.|
|[**searchStateReportingEnvironments**](#searchstatereportingenvironments) | **GET** /tenants/{tenantId}/statereporting/environments | Retrieves a list of Environments.|
|[**testEnvironmentConnection**](#testenvironmentconnection) | **POST** /tenants/{tenantId}/validations/environments/testconnection | Tests if the provided connection string can establish a valid connection.|
|[**updateEnvironment**](#updateenvironment) | **PUT** /tenants/{tenantId}/validations/environments/{environmentId} | Updates an Environment.|
|[**updateStateReportingEnvironment**](#updatestatereportingenvironment) | **PUT** /tenants/{tenantId}/statereporting/environments/{environmentId} | Updates an Environment.|

# **createEnvironment**
> ValidationsApiCoreV1CreatedResponse createEnvironment()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration,
    ValidationsApiDbEnvironmentsV1CreateRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let tenantId: string; // (default to undefined)
let validationsApiDbEnvironmentsV1CreateRequest: ValidationsApiDbEnvironmentsV1CreateRequest; // (optional)

const { status, data } = await apiInstance.createEnvironment(
    tenantId,
    validationsApiDbEnvironmentsV1CreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiDbEnvironmentsV1CreateRequest** | **ValidationsApiDbEnvironmentsV1CreateRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiCoreV1CreatedResponse**

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
|**200** | Success |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**201** | The resource was created. The location of the resource is available in the Location header of the response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createStateReportingEnvironment**
> EdGraphServicesStateReportingV1EnvironmentCreatedResponse createStateReportingEnvironment()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration,
    EdGraphServicesStateReportingV1CreateEnvironmentRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let tenantId: string; // (default to undefined)
let edGraphServicesStateReportingV1CreateEnvironmentRequest: EdGraphServicesStateReportingV1CreateEnvironmentRequest; // (optional)

const { status, data } = await apiInstance.createStateReportingEnvironment(
    tenantId,
    edGraphServicesStateReportingV1CreateEnvironmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphServicesStateReportingV1CreateEnvironmentRequest** | **EdGraphServicesStateReportingV1CreateEnvironmentRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1EnvironmentCreatedResponse**

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
|**200** | Success |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**201** | The resource was created. The location of the resource is available in the Location header of the response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteEnvironment**
> deleteEnvironment()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteEnvironment(
    tenantId,
    environmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

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
|**204** | The resource was successfully deleted. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteStateReportingEnvironment**
> EdGraphServicesStateReportingV1EnvironmentDeletedResponse deleteStateReportingEnvironment()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteStateReportingEnvironment(
    tenantId,
    environmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1EnvironmentDeletedResponse**

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

# **getEnvironmentById**
> ValidationsApiDbEnvironmentsV1DbEnvironmentDto getEnvironmentById()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)

const { status, data } = await apiInstance.getEnvironmentById(
    tenantId,
    environmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiDbEnvironmentsV1DbEnvironmentDto**

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

# **getEnvironments**
> ValidationsApiDbEnvironmentsV1PaginatedDbEnvironments getEnvironments()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let tenantId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let filter: string; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getEnvironments(
    tenantId,
    pageIndex,
    pageSize,
    filter,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **filter** | [**string**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ValidationsApiDbEnvironmentsV1PaginatedDbEnvironments**

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

# **getStateReportingEnvironment**
> EdGraphServicesStateReportingV1EnvironmentProfileResponse getStateReportingEnvironment()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)

const { status, data } = await apiInstance.getStateReportingEnvironment(
    tenantId,
    environmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1EnvironmentProfileResponse**

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

# **searchStateReportingEnvironments**
> EdGraphServicesStateReportingV1PaginatedEnvironmentsResponse searchStateReportingEnvironments()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let tenantId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let orderBy: string; // (optional) (default to undefined)
let filter: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchStateReportingEnvironments(
    tenantId,
    pageIndex,
    pageSize,
    orderBy,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **filter** | [**string**] |  | (optional) defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1PaginatedEnvironmentsResponse**

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

# **testEnvironmentConnection**
> ValidationsApiDbEnvironmentsV1TestConnectionResponse testEnvironmentConnection()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration,
    ValidationsApiDbEnvironmentsV1TestConnectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let tenantId: string; // (default to undefined)
let validationsApiDbEnvironmentsV1TestConnectionRequest: ValidationsApiDbEnvironmentsV1TestConnectionRequest; // (optional)

const { status, data } = await apiInstance.testEnvironmentConnection(
    tenantId,
    validationsApiDbEnvironmentsV1TestConnectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiDbEnvironmentsV1TestConnectionRequest** | **ValidationsApiDbEnvironmentsV1TestConnectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiDbEnvironmentsV1TestConnectionResponse**

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

# **updateEnvironment**
> object updateEnvironment()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration,
    ValidationsApiDbEnvironmentsV1UpdateRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let validationsApiDbEnvironmentsV1UpdateRequest: ValidationsApiDbEnvironmentsV1UpdateRequest; // (optional)

const { status, data } = await apiInstance.updateEnvironment(
    tenantId,
    environmentId,
    validationsApiDbEnvironmentsV1UpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiDbEnvironmentsV1UpdateRequest** | **ValidationsApiDbEnvironmentsV1UpdateRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|


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
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateStateReportingEnvironment**
> EdGraphServicesStateReportingV1EnvironmentUpdatedResponse updateStateReportingEnvironment()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration,
    EdGraphServicesStateReportingV1UpdateEnvironmentRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let edGraphServicesStateReportingV1UpdateEnvironmentRequest: EdGraphServicesStateReportingV1UpdateEnvironmentRequest; // (optional)

const { status, data } = await apiInstance.updateStateReportingEnvironment(
    tenantId,
    environmentId,
    edGraphServicesStateReportingV1UpdateEnvironmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphServicesStateReportingV1UpdateEnvironmentRequest** | **EdGraphServicesStateReportingV1UpdateEnvironmentRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1EnvironmentUpdatedResponse**

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
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

