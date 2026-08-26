# EnrollmentAdminStudentsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getEnrollmentStudent**](#getenrollmentstudent) | **GET** /tenants/{tenantId}/enrollmentadmin/students/{studentId} | Gets an Enrollment Student.|
|[**getEnrollmentStudents**](#getenrollmentstudents) | **GET** /tenants/{tenantId}/enrollmentadmin/students | Searches Enrollment Students.|

# **getEnrollmentStudent**
> EnrollmentApiEnrollmentStudentsV1StudentResponse getEnrollmentStudent()


### Example

```typescript
import {
    EnrollmentAdminStudentsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnrollmentAdminStudentsApi(configuration);

let tenantId: string; // (default to undefined)
let studentId: string; // (default to undefined)

const { status, data } = await apiInstance.getEnrollmentStudent(
    tenantId,
    studentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **studentId** | [**string**] |  | defaults to undefined|


### Return type

**EnrollmentApiEnrollmentStudentsV1StudentResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Server Error |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |
|**404** | The resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEnrollmentStudents**
> EnrollmentApiEnrollmentStudentsV1StudentsSearchResponse getEnrollmentStudents()


### Example

```typescript
import {
    EnrollmentAdminStudentsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnrollmentAdminStudentsApi(configuration);

let tenantId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let filter: string; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getEnrollmentStudents(
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
| **pageIndex** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to undefined|
| **filter** | [**string**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|


### Return type

**EnrollmentApiEnrollmentStudentsV1StudentsSearchResponse**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Server Error |  -  |
|**200** | The requested resource was successfully retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

