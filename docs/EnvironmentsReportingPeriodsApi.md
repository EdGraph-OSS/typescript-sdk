# EnvironmentsReportingPeriodsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelStateReportingPeriodRun**](#cancelstatereportingperiodrun) | **DELETE** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/run | Cancel the Validation Run of a Reporting Period.|
|[**closeStateReportingPeriod**](#closestatereportingperiod) | **PUT** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/close | Closes a Reporting Period.|
|[**createStateReportingPeriod**](#createstatereportingperiod) | **POST** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods | Creates a new Reporting Period.|
|[**deleteStateReportingPeriod**](#deletestatereportingperiod) | **DELETE** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId} | Deletes a Reporting Period.|
|[**getStateReportingPeriod**](#getstatereportingperiod) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId} | Retrieves a Reporting Period by ID.|
|[**getStateReportingPeriodCertificationStatus**](#getstatereportingperiodcertificationstatus) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/certificationstatus | Retrieves the Certification Status of Reporting Period.|
|[**getStateReportingPeriodValidationSummary**](#getstatereportingperiodvalidationsummary) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/validationsummary | Retrieves the Validation Summary of Reporting Period.|
|[**getStateReportingPeriodValidationSummaryByCategory**](#getstatereportingperiodvalidationsummarybycategory) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/validationsummary/categories/{categoryId} | Retrieves the Validation Summary of Reporting Period by Category.|
|[**postStateReportingPeriod**](#poststatereportingperiod) | **POST** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/post | Posts a Reporting Period.|
|[**runStateReportingPeriod**](#runstatereportingperiod) | **POST** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/run | Run a Reporting Period.|
|[**searchStateReportingPeriods**](#searchstatereportingperiods) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods | Retrieves a list of Reporting Periods.|
|[**setStateReportingPeriodCurrentStep**](#setstatereportingperiodcurrentstep) | **PUT** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/steps/current | Sets the current step of a Reporting Period.|
|[**setStateReportingPeriodStepStatus**](#setstatereportingperiodstepstatus) | **PUT** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/steps/{stepNumber} | Sets the status of a Reporting Period step.|
|[**toggleStateReportingPeriodSelected**](#togglestatereportingperiodselected) | **PUT** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/toggle | Toggles the Selected state of a Reporting Period.|
|[**updateStateReportingPeriod**](#updatestatereportingperiod) | **PUT** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId} | Updates a Reporting Period.|
|[**updateStateReportingPeriodBulk**](#updatestatereportingperiodbulk) | **PUT** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods | Updates Reporting Periods in bulk.|

# **cancelStateReportingPeriodRun**
> EdGraphServicesStateReportingV1ReportingPeriodValidationsCancelledResponse cancelStateReportingPeriodRun()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)

const { status, data } = await apiInstance.cancelStateReportingPeriodRun(
    tenantId,
    environmentId,
    reportingPeriodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1ReportingPeriodValidationsCancelledResponse**

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

# **closeStateReportingPeriod**
> EdGraphServicesStateReportingV1ReportingPeriodCreatedResponse closeStateReportingPeriod()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)

const { status, data } = await apiInstance.closeStateReportingPeriod(
    tenantId,
    environmentId,
    reportingPeriodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1ReportingPeriodCreatedResponse**

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
|**200** | Success |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**201** | The resource was created. The location of the resource is available in the Location header of the response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createStateReportingPeriod**
> EdGraphServicesStateReportingV1ReportingPeriodCreatedResponse createStateReportingPeriod()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration,
    EdGraphServicesStateReportingV1CreateReportingPeriodRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let edGraphServicesStateReportingV1CreateReportingPeriodRequest: EdGraphServicesStateReportingV1CreateReportingPeriodRequest; // (optional)

const { status, data } = await apiInstance.createStateReportingPeriod(
    tenantId,
    environmentId,
    edGraphServicesStateReportingV1CreateReportingPeriodRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphServicesStateReportingV1CreateReportingPeriodRequest** | **EdGraphServicesStateReportingV1CreateReportingPeriodRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1ReportingPeriodCreatedResponse**

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

# **deleteStateReportingPeriod**
> EdGraphServicesStateReportingV1ReportingPeriodDeletedResponse deleteStateReportingPeriod()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteStateReportingPeriod(
    tenantId,
    environmentId,
    reportingPeriodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1ReportingPeriodDeletedResponse**

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

# **getStateReportingPeriod**
> EdGraphServicesStateReportingV1ReportingPeriodProfileResponse getStateReportingPeriod()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)

const { status, data } = await apiInstance.getStateReportingPeriod(
    tenantId,
    environmentId,
    reportingPeriodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1ReportingPeriodProfileResponse**

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

# **getStateReportingPeriodCertificationStatus**
> EdGraphServicesStateReportingV1ReportingPeriodCertificationStatus getStateReportingPeriodCertificationStatus()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)

const { status, data } = await apiInstance.getStateReportingPeriodCertificationStatus(
    tenantId,
    environmentId,
    reportingPeriodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1ReportingPeriodCertificationStatus**

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

# **getStateReportingPeriodValidationSummary**
> EdGraphServicesStateReportingV1ReportingPeriodValidationSummary getStateReportingPeriodValidationSummary()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)

const { status, data } = await apiInstance.getStateReportingPeriodValidationSummary(
    tenantId,
    environmentId,
    reportingPeriodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1ReportingPeriodValidationSummary**

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

# **getStateReportingPeriodValidationSummaryByCategory**
> EdGraphServicesStateReportingV1ReportingPeriodValidationSummaryByCategoryId getStateReportingPeriodValidationSummaryByCategory()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let categoryId: string; // (default to undefined)

const { status, data } = await apiInstance.getStateReportingPeriodValidationSummaryByCategory(
    tenantId,
    environmentId,
    reportingPeriodId,
    categoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **categoryId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1ReportingPeriodValidationSummaryByCategoryId**

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

# **postStateReportingPeriod**
> EdGraphServicesStateReportingV1ReportingPeriodPostedResponse postStateReportingPeriod()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration,
    EdGraphServicesStateReportingV1PostReportingPeriodRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let edGraphServicesStateReportingV1PostReportingPeriodRequest: EdGraphServicesStateReportingV1PostReportingPeriodRequest; // (optional)

const { status, data } = await apiInstance.postStateReportingPeriod(
    tenantId,
    environmentId,
    reportingPeriodId,
    edGraphServicesStateReportingV1PostReportingPeriodRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphServicesStateReportingV1PostReportingPeriodRequest** | **EdGraphServicesStateReportingV1PostReportingPeriodRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1ReportingPeriodPostedResponse**

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

# **runStateReportingPeriod**
> EdGraphServicesStateReportingV1ReportingPeriodRunResponse runStateReportingPeriod()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration,
    EdGraphServicesStateReportingV1RunReportingPeriodRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let edGraphServicesStateReportingV1RunReportingPeriodRequest: EdGraphServicesStateReportingV1RunReportingPeriodRequest; // (optional)

const { status, data } = await apiInstance.runStateReportingPeriod(
    tenantId,
    environmentId,
    reportingPeriodId,
    edGraphServicesStateReportingV1RunReportingPeriodRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphServicesStateReportingV1RunReportingPeriodRequest** | **EdGraphServicesStateReportingV1RunReportingPeriodRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1ReportingPeriodRunResponse**

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

# **searchStateReportingPeriods**
> EdGraphServicesStateReportingV1PaginatedReportingPeriods searchStateReportingPeriods()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let orderBy: string; // (optional) (default to undefined)
let filter: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchStateReportingPeriods(
    tenantId,
    environmentId,
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
| **environmentId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **filter** | [**string**] |  | (optional) defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1PaginatedReportingPeriods**

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

# **setStateReportingPeriodCurrentStep**
> EdGraphServicesStateReportingV1ReportingPeriodCurrentStepSetResponse setStateReportingPeriodCurrentStep()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration,
    EdGraphServicesStateReportingV1SetReportingPeriodCurrentStepRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let edGraphServicesStateReportingV1SetReportingPeriodCurrentStepRequest: EdGraphServicesStateReportingV1SetReportingPeriodCurrentStepRequest; // (optional)

const { status, data } = await apiInstance.setStateReportingPeriodCurrentStep(
    tenantId,
    environmentId,
    reportingPeriodId,
    edGraphServicesStateReportingV1SetReportingPeriodCurrentStepRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphServicesStateReportingV1SetReportingPeriodCurrentStepRequest** | **EdGraphServicesStateReportingV1SetReportingPeriodCurrentStepRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1ReportingPeriodCurrentStepSetResponse**

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

# **setStateReportingPeriodStepStatus**
> EdGraphServicesStateReportingV1ReportingPeriodCreatedResponse setStateReportingPeriodStepStatus()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration,
    EdGraphServicesStateReportingV1SetReportingPeriodStepStatusRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let stepNumber: number; // (default to undefined)
let edGraphServicesStateReportingV1SetReportingPeriodStepStatusRequest: EdGraphServicesStateReportingV1SetReportingPeriodStepStatusRequest; // (optional)

const { status, data } = await apiInstance.setStateReportingPeriodStepStatus(
    tenantId,
    environmentId,
    reportingPeriodId,
    stepNumber,
    edGraphServicesStateReportingV1SetReportingPeriodStepStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphServicesStateReportingV1SetReportingPeriodStepStatusRequest** | **EdGraphServicesStateReportingV1SetReportingPeriodStepStatusRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **stepNumber** | [**number**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1ReportingPeriodCreatedResponse**

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

# **toggleStateReportingPeriodSelected**
> EdGraphServicesStateReportingV1ReportingPeriodToggledResponse toggleStateReportingPeriodSelected()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration,
    EdGraphServicesStateReportingV1ToggleReportingPeriodSelectedRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let edGraphServicesStateReportingV1ToggleReportingPeriodSelectedRequest: EdGraphServicesStateReportingV1ToggleReportingPeriodSelectedRequest; // (optional)

const { status, data } = await apiInstance.toggleStateReportingPeriodSelected(
    tenantId,
    environmentId,
    reportingPeriodId,
    edGraphServicesStateReportingV1ToggleReportingPeriodSelectedRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphServicesStateReportingV1ToggleReportingPeriodSelectedRequest** | **EdGraphServicesStateReportingV1ToggleReportingPeriodSelectedRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1ReportingPeriodToggledResponse**

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

# **updateStateReportingPeriod**
> EdGraphServicesStateReportingV1ReportingPeriodUpdatedResponse updateStateReportingPeriod()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration,
    EdGraphServicesStateReportingV1UpdateReportingPeriodRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let edGraphServicesStateReportingV1UpdateReportingPeriodRequest: EdGraphServicesStateReportingV1UpdateReportingPeriodRequest; // (optional)

const { status, data } = await apiInstance.updateStateReportingPeriod(
    tenantId,
    environmentId,
    reportingPeriodId,
    edGraphServicesStateReportingV1UpdateReportingPeriodRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphServicesStateReportingV1UpdateReportingPeriodRequest** | **EdGraphServicesStateReportingV1UpdateReportingPeriodRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1ReportingPeriodUpdatedResponse**

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

# **updateStateReportingPeriodBulk**
> EdGraphServicesStateReportingV1ReportingPeriodUpdatedBulkResponse updateStateReportingPeriodBulk()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsApi,
    Configuration,
    EdGraphServicesStateReportingV1UpdateReportingPeriodBulkRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let edGraphServicesStateReportingV1UpdateReportingPeriodBulkRequest: EdGraphServicesStateReportingV1UpdateReportingPeriodBulkRequest; // (optional)

const { status, data } = await apiInstance.updateStateReportingPeriodBulk(
    tenantId,
    environmentId,
    edGraphServicesStateReportingV1UpdateReportingPeriodBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphServicesStateReportingV1UpdateReportingPeriodBulkRequest** | **EdGraphServicesStateReportingV1UpdateReportingPeriodBulkRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1ReportingPeriodUpdatedBulkResponse**

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

