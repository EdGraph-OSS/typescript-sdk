# EnvironmentsReportingPeriodsCategoriesApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**searchStateReportingPeriodCategories**](#searchstatereportingperiodcategories) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/categories | Retrieves the Categories of a Reporting Period.|
|[**searchStateReportingPeriodSubCategories**](#searchstatereportingperiodsubcategories) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/categories/{categoryId}/subcategories | Retrieves the Sub-Categories of a Reporting Period.|

# **searchStateReportingPeriodCategories**
> EdGraphServicesStateReportingV1PaginatedCategories searchStateReportingPeriodCategories()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsCategoriesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsCategoriesApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchStateReportingPeriodCategories(
    tenantId,
    environmentId,
    reportingPeriodId,
    pageIndex,
    pageSize,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1PaginatedCategories**

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

# **searchStateReportingPeriodSubCategories**
> EdGraphServicesStateReportingV1PaginatedSubCategories searchStateReportingPeriodSubCategories()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsCategoriesApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsCategoriesApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let categoryId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchStateReportingPeriodSubCategories(
    tenantId,
    environmentId,
    reportingPeriodId,
    categoryId,
    pageIndex,
    pageSize,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **categoryId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1PaginatedSubCategories**

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

