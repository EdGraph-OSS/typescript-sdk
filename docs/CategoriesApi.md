# CategoriesApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addCategoryDataSteward**](#addcategorydatasteward) | **POST** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/categories/{categoryId}/stewards | Adds a Data Steward to a Category.|
|[**addCategoryDataStewardBulk**](#addcategorydatastewardbulk) | **POST** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/categories/stewards | Adds a Data Steward to Categories.|
|[**certifyCategory**](#certifycategory) | **POST** /tenants/{tenantId}/statereporting/categories/{categoryId}/certify | Certifies a Category.|
|[**getDataUsersBulk**](#getdatausersbulk) | **GET** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/categories/datausers | Get all Data Users|
|[**getStateReportingCategories**](#getstatereportingcategories) | **GET** /tenants/{tenantId}/statereporting/categories | Retrieves a list of Categories.|
|[**removeCategoryDataOwner**](#removecategorydataowner) | **DELETE** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/categories/{categoryId}/owner | Removes the Data Owner of a Category.|
|[**removeCategoryDataSteward**](#removecategorydatasteward) | **DELETE** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/categories/{categoryId}/stewards/{email} | Removes a Data Steward from a Category.|
|[**requestCategoryCertificationReminder**](#requestcategorycertificationreminder) | **POST** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/categories/{categoryId}/certificationreminder | Requests a Certification Reminder to be sent.|
|[**setCategoryDataOwner**](#setcategorydataowner) | **POST** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/categories/{categoryId}/owner | Sets the Data Owner of a Category.|
|[**setCategoryDataOwnerBulk**](#setcategorydataownerbulk) | **POST** /tenants/{tenantId}/statereporting/reportingperiods/{reportingPeriodId}/categories/owner | Sets the Data Owner of Categories.|
|[**uploadStateReportingCategory**](#uploadstatereportingcategory) | **POST** /tenants/{tenantId}/statereporting/categories/upload | Upload a Category via a JSON file.|
|[**uploadStateReportingPeriodsFromCategoryJson**](#uploadstatereportingperiodsfromcategoryjson) | **POST** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/upload | Upload a Category via a JSON file.|

# **addCategoryDataSteward**
> ValidationsApiContainersV1DataStewardAddedResponse addCategoryDataSteward()


### Example

```typescript
import {
    CategoriesApi,
    Configuration,
    ValidationsApiContainersV1AddDataStewardRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CategoriesApi(configuration);

let tenantId: string; // (default to undefined)
let categoryId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let validationsApiContainersV1AddDataStewardRequest: ValidationsApiContainersV1AddDataStewardRequest; // (optional)

const { status, data } = await apiInstance.addCategoryDataSteward(
    tenantId,
    categoryId,
    reportingPeriodId,
    validationsApiContainersV1AddDataStewardRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiContainersV1AddDataStewardRequest** | **ValidationsApiContainersV1AddDataStewardRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **categoryId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiContainersV1DataStewardAddedResponse**

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

# **addCategoryDataStewardBulk**
> ValidationsApiContainersV1DataStewardAddedBulkResponse addCategoryDataStewardBulk()


### Example

```typescript
import {
    CategoriesApi,
    Configuration,
    ValidationsApiContainersV1AddDataStewardBulkRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CategoriesApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let validationsApiContainersV1AddDataStewardBulkRequest: ValidationsApiContainersV1AddDataStewardBulkRequest; // (optional)

const { status, data } = await apiInstance.addCategoryDataStewardBulk(
    tenantId,
    reportingPeriodId,
    validationsApiContainersV1AddDataStewardBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiContainersV1AddDataStewardBulkRequest** | **ValidationsApiContainersV1AddDataStewardBulkRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiContainersV1DataStewardAddedBulkResponse**

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

# **certifyCategory**
> ValidationsApiContainersV1CertificationStatusSetResponse certifyCategory()


### Example

```typescript
import {
    CategoriesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CategoriesApi(configuration);

let tenantId: string; // (default to undefined)
let categoryId: string; // (default to undefined)

const { status, data } = await apiInstance.certifyCategory(
    tenantId,
    categoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **categoryId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiContainersV1CertificationStatusSetResponse**

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

# **getDataUsersBulk**
> ValidationsApiContainersV1CategoriesWithDataUsersResponse getDataUsersBulk()


### Example

```typescript
import {
    CategoriesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CategoriesApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)

const { status, data } = await apiInstance.getDataUsersBulk(
    tenantId,
    reportingPeriodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiContainersV1CategoriesWithDataUsersResponse**

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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStateReportingCategories**
> ValidationsApiContainersV1PaginatedContainers getStateReportingCategories()


### Example

```typescript
import {
    CategoriesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CategoriesApi(configuration);

let tenantId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let filter: string; // (optional) (default to '')
let orderBy: string; // (optional) (default to '')

const { status, data } = await apiInstance.getStateReportingCategories(
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
| **filter** | [**string**] |  | (optional) defaults to ''|
| **orderBy** | [**string**] |  | (optional) defaults to ''|


### Return type

**ValidationsApiContainersV1PaginatedContainers**

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

# **removeCategoryDataOwner**
> removeCategoryDataOwner()


### Example

```typescript
import {
    CategoriesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CategoriesApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let categoryId: string; // (default to undefined)

const { status, data } = await apiInstance.removeCategoryDataOwner(
    tenantId,
    reportingPeriodId,
    categoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **categoryId** | [**string**] |  | defaults to undefined|


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeCategoryDataSteward**
> removeCategoryDataSteward()


### Example

```typescript
import {
    CategoriesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CategoriesApi(configuration);

let tenantId: string; // (default to undefined)
let categoryId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let email: string; // (default to undefined)

const { status, data } = await apiInstance.removeCategoryDataSteward(
    tenantId,
    categoryId,
    reportingPeriodId,
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **categoryId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **email** | [**string**] |  | defaults to undefined|


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestCategoryCertificationReminder**
> ValidationsApiContainersV1CertificationReminderRequestedResponse requestCategoryCertificationReminder()


### Example

```typescript
import {
    CategoriesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CategoriesApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let categoryId: string; // (default to undefined)

const { status, data } = await apiInstance.requestCategoryCertificationReminder(
    tenantId,
    reportingPeriodId,
    categoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **categoryId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiContainersV1CertificationReminderRequestedResponse**

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

# **setCategoryDataOwner**
> ValidationsApiContainersV1DataOwnerSetResponse setCategoryDataOwner()


### Example

```typescript
import {
    CategoriesApi,
    Configuration,
    ValidationsApiContainersV1SetDataOwnerRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CategoriesApi(configuration);

let tenantId: string; // (default to undefined)
let categoryId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let validationsApiContainersV1SetDataOwnerRequest: ValidationsApiContainersV1SetDataOwnerRequest; // (optional)

const { status, data } = await apiInstance.setCategoryDataOwner(
    tenantId,
    categoryId,
    reportingPeriodId,
    validationsApiContainersV1SetDataOwnerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiContainersV1SetDataOwnerRequest** | **ValidationsApiContainersV1SetDataOwnerRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **categoryId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiContainersV1DataOwnerSetResponse**

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

# **setCategoryDataOwnerBulk**
> ValidationsApiContainersV1DataOwnerSetBulkResponse setCategoryDataOwnerBulk()


### Example

```typescript
import {
    CategoriesApi,
    Configuration,
    ValidationsApiContainersV1SetDataOwnerBulkRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CategoriesApi(configuration);

let tenantId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let validationsApiContainersV1SetDataOwnerBulkRequest: ValidationsApiContainersV1SetDataOwnerBulkRequest; // (optional)

const { status, data } = await apiInstance.setCategoryDataOwnerBulk(
    tenantId,
    reportingPeriodId,
    validationsApiContainersV1SetDataOwnerBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validationsApiContainersV1SetDataOwnerBulkRequest** | **ValidationsApiContainersV1SetDataOwnerBulkRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**ValidationsApiContainersV1DataOwnerSetBulkResponse**

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

# **uploadStateReportingCategory**
> ValidationsApiContainersV1CollectionUploadedResponse uploadStateReportingCategory()


### Example

```typescript
import {
    CategoriesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CategoriesApi(configuration);

let tenantId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let contentDisposition: string; // (optional) (default to undefined)
let headers: { [key: string]: Array<string>; }; // (optional) (default to undefined)
let length: number; // (optional) (default to undefined)
let name: string; // (optional) (default to undefined)
let fileName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.uploadStateReportingCategory(
    tenantId,
    contentType,
    contentDisposition,
    headers,
    length,
    name,
    fileName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|
| **contentDisposition** | [**string**] |  | (optional) defaults to undefined|
| **headers** | **{ [key: string]: Array&lt;string&gt;; }** |  | (optional) defaults to undefined|
| **length** | [**number**] |  | (optional) defaults to undefined|
| **name** | [**string**] |  | (optional) defaults to undefined|
| **fileName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ValidationsApiContainersV1CollectionUploadedResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
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

# **uploadStateReportingPeriodsFromCategoryJson**
> ValidationsApiContainersV1CollectionUploadedResponse uploadStateReportingPeriodsFromCategoryJson()


### Example

```typescript
import {
    CategoriesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new CategoriesApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let contentDisposition: string; // (optional) (default to undefined)
let headers: { [key: string]: Array<string>; }; // (optional) (default to undefined)
let length: number; // (optional) (default to undefined)
let name: string; // (optional) (default to undefined)
let fileName: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.uploadStateReportingPeriodsFromCategoryJson(
    tenantId,
    environmentId,
    contentType,
    contentDisposition,
    headers,
    length,
    name,
    fileName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|
| **contentDisposition** | [**string**] |  | (optional) defaults to undefined|
| **headers** | **{ [key: string]: Array&lt;string&gt;; }** |  | (optional) defaults to undefined|
| **length** | [**number**] |  | (optional) defaults to undefined|
| **name** | [**string**] |  | (optional) defaults to undefined|
| **fileName** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ValidationsApiContainersV1CollectionUploadedResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
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

