# InstancesReportsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**generateReportsAsync**](#generatereportsasync) | **POST** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/reports/generate | Queues a job to generate the report views in the ODS Database.|
|[**getReportsStatusAsync**](#getreportsstatusasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/reports/status | Retrieves the status of the report views in Instance.|
|[**getSchoolsByTypeReportAsync**](#getschoolsbytypereportasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/reports/schoolsbytype/{localEducationAgencyId} | Retrieves a \&quot;Schools By Type\&quot; report.|
|[**getStudentEconomicSituationReportAsync**](#getstudenteconomicsituationreportasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/reports/studentseconomicsituation/{localEducationAgencyId} | Retrieves a \&quot;Students Economic Situation\&quot; report.|
|[**getStudentEnrollmentByEthnicityReport**](#getstudentenrollmentbyethnicityreport) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/reports/studentenrollment/ethnicity/{localEducationAgencyId} | Retrieves a \&quot;Student Enrollment By Ethnicity\&quot; report.|
|[**getStudentEnrollmentByGenderReportAsync**](#getstudentenrollmentbygenderreportasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/reports/studentenrollment/gender/{localEducationAgencyId} | Retrieves a \&quot;Student Enrollment By Gender\&quot; report.|
|[**getStudentEnrollmentByRaceReportAsync**](#getstudentenrollmentbyracereportasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/reports/studentenrollment/race/{localEducationAgencyId} | Retrieves a \&quot;Student Enrollment By Race\&quot; report.|
|[**getStudentsByProgramReportAsync**](#getstudentsbyprogramreportasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/reports/studentsbyprogram/{localEducationAgencyId} | Retrieves a \&quot;Students By Program\&quot; report.|
|[**getTotalEnrollmentsReportAsync**](#gettotalenrollmentsreportasync) | **GET** /tenants/{tenantId}/edfiadmin/instances/{instanceId}/reports/totalenrollments/{localEducationAgencyId} | Retrieves a \&quot;Total Enrollments\&quot; report.|

# **generateReportsAsync**
> EdfiAdminApiEdfiAdminV1GenerateReportsResponse generateReportsAsync()


### Example

```typescript
import {
    InstancesReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesReportsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)

const { status, data } = await apiInstance.generateReportsAsync(
    tenantId,
    instanceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1GenerateReportsResponse**

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

# **getReportsStatusAsync**
> EdfiAdminApiEdfiAdminV1ReportsStatusResponse getReportsStatusAsync()


### Example

```typescript
import {
    InstancesReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesReportsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)

const { status, data } = await apiInstance.getReportsStatusAsync(
    tenantId,
    instanceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1ReportsStatusResponse**

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

# **getSchoolsByTypeReportAsync**
> EdfiAdminApiEdfiAdminV1SchoolsByTypeReportResponse getSchoolsByTypeReportAsync()


### Example

```typescript
import {
    InstancesReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesReportsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let localEducationAgencyId: number; // (default to undefined)

const { status, data } = await apiInstance.getSchoolsByTypeReportAsync(
    tenantId,
    instanceId,
    localEducationAgencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **localEducationAgencyId** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1SchoolsByTypeReportResponse**

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

# **getStudentEconomicSituationReportAsync**
> EdfiAdminApiEdfiAdminV1StudentEconomicSituationReportResponse getStudentEconomicSituationReportAsync()


### Example

```typescript
import {
    InstancesReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesReportsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let localEducationAgencyId: number; // (default to undefined)

const { status, data } = await apiInstance.getStudentEconomicSituationReportAsync(
    tenantId,
    instanceId,
    localEducationAgencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **localEducationAgencyId** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1StudentEconomicSituationReportResponse**

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

# **getStudentEnrollmentByEthnicityReport**
> EdfiAdminApiEdfiAdminV1StudentEnrollmentByEthnicityReportResponse getStudentEnrollmentByEthnicityReport()


### Example

```typescript
import {
    InstancesReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesReportsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let localEducationAgencyId: number; // (default to undefined)

const { status, data } = await apiInstance.getStudentEnrollmentByEthnicityReport(
    tenantId,
    instanceId,
    localEducationAgencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **localEducationAgencyId** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1StudentEnrollmentByEthnicityReportResponse**

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

# **getStudentEnrollmentByGenderReportAsync**
> EdfiAdminApiEdfiAdminV1StudentEnrollmentByGenderReportResponse getStudentEnrollmentByGenderReportAsync()


### Example

```typescript
import {
    InstancesReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesReportsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let localEducationAgencyId: number; // (default to undefined)

const { status, data } = await apiInstance.getStudentEnrollmentByGenderReportAsync(
    tenantId,
    instanceId,
    localEducationAgencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **localEducationAgencyId** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1StudentEnrollmentByGenderReportResponse**

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

# **getStudentEnrollmentByRaceReportAsync**
> EdfiAdminApiEdfiAdminV1StudentEnrollmentByRaceReportResponse getStudentEnrollmentByRaceReportAsync()


### Example

```typescript
import {
    InstancesReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesReportsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let localEducationAgencyId: number; // (default to undefined)

const { status, data } = await apiInstance.getStudentEnrollmentByRaceReportAsync(
    tenantId,
    instanceId,
    localEducationAgencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **localEducationAgencyId** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1StudentEnrollmentByRaceReportResponse**

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

# **getStudentsByProgramReportAsync**
> EdfiAdminApiEdfiAdminV1StudentsByProgramReportResponse getStudentsByProgramReportAsync()


### Example

```typescript
import {
    InstancesReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesReportsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let localEducationAgencyId: number; // (default to undefined)

const { status, data } = await apiInstance.getStudentsByProgramReportAsync(
    tenantId,
    instanceId,
    localEducationAgencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **localEducationAgencyId** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1StudentsByProgramReportResponse**

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

# **getTotalEnrollmentsReportAsync**
> EdfiAdminApiEdfiAdminV1TotalEnrollmentsReportResponse getTotalEnrollmentsReportAsync()


### Example

```typescript
import {
    InstancesReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new InstancesReportsApi(configuration);

let tenantId: string; // (default to undefined)
let instanceId: string; // (default to undefined)
let localEducationAgencyId: number; // (default to undefined)

const { status, data } = await apiInstance.getTotalEnrollmentsReportAsync(
    tenantId,
    instanceId,
    localEducationAgencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **instanceId** | [**string**] |  | defaults to undefined|
| **localEducationAgencyId** | [**number**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1TotalEnrollmentsReportResponse**

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

