# ReportsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createReportAsync**](#createreportasync) | **POST** /tenants/{tenantId}/analytics/reports | Creates a new report (Does not upload pbix file).|
|[**deleteReportAsync**](#deletereportasync) | **DELETE** /tenants/{tenantId}/analytics/reports/{reportId} | Removes a report.|
|[**downloadReportAsync**](#downloadreportasync) | **GET** /tenants/{tenantId}/analytics/reports/download/{reportId}/{groupId} | Retrieves the PBIX for any report in the list in order to download.|
|[**getAllTenantAnalyticsWorkspaceReportsAsync**](#getalltenantanalyticsworkspacereportsasync) | **GET** /tenants/{tenantId}/analytics/reports | Retrieves all reports.|
|[**getAnalyticsTenantUsersAsync**](#getanalyticstenantusersasync) | **GET** /tenants/{tenantId}/analytics/users | Searchable, paginated list of tenant users for the Manage Access \&quot;specific users\&quot; picker.|
|[**getReportAccessAsync**](#getreportaccessasync) | **GET** /tenants/{tenantId}/analytics/reports/{reportId}/access | Retrieves the audience-targeting (Manage Access) configuration for a report.|
|[**getReportByIdAsync**](#getreportbyidasync) | **GET** /tenants/{tenantId}/analytics/reports/{reportId} | Retrieves a Report by ID.|
|[**syncLatestVersion**](#synclatestversion) | **POST** /tenants/{tenantId}/analytics/reports/synclatestversion | Sync latest version|
|[**syncWorkspacesAsync**](#syncworkspacesasync) | **POST** /tenants/{tenantId}/analytics/reports/sync | Triggers workspace, ODS and DW automation.|
|[**updateReportAccessAsync**](#updatereportaccessasync) | **PUT** /tenants/{tenantId}/analytics/reports/{reportId}/access | Updates the audience-targeting (Manage Access) configuration for a report.|
|[**updateReportAsync**](#updatereportasync) | **PUT** /tenants/{tenantId}/analytics/reports/{reportId} | Updates a report.|

# **createReportAsync**
> AnalyticsApiReportsV1ReportIdResponse createReportAsync()


### Example

```typescript
import {
    ReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let tenantId: string; // (default to undefined)
let file: File; // (optional) (default to undefined)
let name: string; // (optional) (default to undefined)
let shortDescription: string; // (optional) (default to undefined)
let description: string; // (optional) (default to undefined)
let tags: string; // (optional) (default to undefined)
let isVisible: boolean; // (optional) (default to undefined)
let version: string; // (optional) (default to undefined)
let identityRequired: boolean; // (optional) (default to undefined)
let rolesRequired: boolean; // (optional) (default to undefined)
let state: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.createReportAsync(
    tenantId,
    file,
    name,
    shortDescription,
    description,
    tags,
    isVisible,
    version,
    identityRequired,
    rolesRequired,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **file** | [**File**] |  | (optional) defaults to undefined|
| **name** | [**string**] |  | (optional) defaults to undefined|
| **shortDescription** | [**string**] |  | (optional) defaults to undefined|
| **description** | [**string**] |  | (optional) defaults to undefined|
| **tags** | [**string**] |  | (optional) defaults to undefined|
| **isVisible** | [**boolean**] |  | (optional) defaults to undefined|
| **version** | [**string**] |  | (optional) defaults to undefined|
| **identityRequired** | [**boolean**] |  | (optional) defaults to undefined|
| **rolesRequired** | [**boolean**] |  | (optional) defaults to undefined|
| **state** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AnalyticsApiReportsV1ReportIdResponse**

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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteReportAsync**
> deleteReportAsync()


### Example

```typescript
import {
    ReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let tenantId: string; // (default to undefined)
let reportId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteReportAsync(
    tenantId,
    reportId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportId** | [**string**] |  | defaults to undefined|


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
|**200** | The requested resource was successfully retrieved. |  -  |
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadReportAsync**
> AnalyticsApiReportsV1DownloadReportResponse downloadReportAsync()

Admin-only. This resolves the PowerBI artifact straight from its report/group ids, so it  cannot apply the report\'s audience targeting the way the list and get-by-id paths do.  Restricting it to Analytics.Admin — the role that bypasses audience targeting anyway —  keeps a non-admin from downloading the source of a report they are not granted.

### Example

```typescript
import {
    ReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let tenantId: string; // (default to undefined)
let reportId: string; // (default to undefined)
let groupId: string; // (default to undefined)

const { status, data } = await apiInstance.downloadReportAsync(
    tenantId,
    reportId,
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportId** | [**string**] |  | defaults to undefined|
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**AnalyticsApiReportsV1DownloadReportResponse**

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

# **getAllTenantAnalyticsWorkspaceReportsAsync**
> AnalyticsApiReportsV1ReportPaginatedItemsResponse getAllTenantAnalyticsWorkspaceReportsAsync()


### Example

```typescript
import {
    ReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllTenantAnalyticsWorkspaceReportsAsync(
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

**AnalyticsApiReportsV1ReportPaginatedItemsResponse**

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

# **getAnalyticsTenantUsersAsync**
> IdentityApiUserV1UserListResponsePaginatedItemsViewModel getAnalyticsTenantUsersAsync()


### Example

```typescript
import {
    ReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 20)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAnalyticsTenantUsersAsync(
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
| **pageSize** | [**number**] |  | (optional) defaults to 20|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**IdentityApiUserV1UserListResponsePaginatedItemsViewModel**

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
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReportAccessAsync**
> EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesReportAccessResponseDto getReportAccessAsync()


### Example

```typescript
import {
    ReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let tenantId: string; // (default to undefined)
let reportId: string; // (default to undefined)

const { status, data } = await apiInstance.getReportAccessAsync(
    tenantId,
    reportId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesReportAccessResponseDto**

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
|**400** | Bad Request. The request was invalid and cannot be completed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReportByIdAsync**
> AnalyticsApiReportsV1ReportResponse getReportByIdAsync()


### Example

```typescript
import {
    ReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let tenantId: string; // (default to undefined)
let reportId: string; // (default to undefined)

const { status, data } = await apiInstance.getReportByIdAsync(
    tenantId,
    reportId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportId** | [**string**] |  | defaults to undefined|


### Return type

**AnalyticsApiReportsV1ReportResponse**

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

# **syncLatestVersion**
> object syncLatestVersion()


### Example

```typescript
import {
    ReportsApi,
    Configuration,
    AnalyticsApiReportsV1SyncLatestVersionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let tenantId: string; // (default to undefined)
let analyticsApiReportsV1SyncLatestVersionRequest: AnalyticsApiReportsV1SyncLatestVersionRequest; // (optional)

const { status, data } = await apiInstance.syncLatestVersion(
    tenantId,
    analyticsApiReportsV1SyncLatestVersionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **analyticsApiReportsV1SyncLatestVersionRequest** | **AnalyticsApiReportsV1SyncLatestVersionRequest**|  | |
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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **syncWorkspacesAsync**
> object syncWorkspacesAsync()


### Example

```typescript
import {
    ReportsApi,
    Configuration,
    AnalyticsApiReportsV1SyncWorkspacesRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let tenantId: string; // (default to undefined)
let analyticsApiReportsV1SyncWorkspacesRequest: AnalyticsApiReportsV1SyncWorkspacesRequest; // (optional)

const { status, data } = await apiInstance.syncWorkspacesAsync(
    tenantId,
    analyticsApiReportsV1SyncWorkspacesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **analyticsApiReportsV1SyncWorkspacesRequest** | **AnalyticsApiReportsV1SyncWorkspacesRequest**|  | |
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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateReportAccessAsync**
> AnalyticsApiReportsV1ReportIdResponse updateReportAccessAsync()


### Example

```typescript
import {
    ReportsApi,
    Configuration,
    EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsRequestsReportAccessRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let tenantId: string; // (default to undefined)
let reportId: string; // (default to undefined)
let edGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsRequestsReportAccessRequest: EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsRequestsReportAccessRequest; // (optional)

const { status, data } = await apiInstance.updateReportAccessAsync(
    tenantId,
    reportId,
    edGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsRequestsReportAccessRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsRequestsReportAccessRequest** | **EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsRequestsReportAccessRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportId** | [**string**] |  | defaults to undefined|


### Return type

**AnalyticsApiReportsV1ReportIdResponse**

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
|**200** | The requested resource was successfully updated. |  -  |
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateReportAsync**
> AnalyticsApiReportsV1AnalyticsReport updateReportAsync()


### Example

```typescript
import {
    ReportsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let tenantId: string; // (default to undefined)
let reportId: string; // (default to undefined)
let file: File; // (optional) (default to undefined)
let id: string; // (optional) (default to undefined)
let name: string; // (optional) (default to undefined)
let shortDescription: string; // (optional) (default to undefined)
let description: string; // (optional) (default to undefined)
let tags: string; // (optional) (default to undefined)
let isVisible: boolean; // (optional) (default to undefined)
let version: string; // (optional) (default to undefined)
let rolesRequired: boolean; // (optional) (default to undefined)
let identityRequired: boolean; // (optional) (default to undefined)
let state: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.updateReportAsync(
    tenantId,
    reportId,
    file,
    id,
    name,
    shortDescription,
    description,
    tags,
    isVisible,
    version,
    rolesRequired,
    identityRequired,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **reportId** | [**string**] |  | defaults to undefined|
| **file** | [**File**] |  | (optional) defaults to undefined|
| **id** | [**string**] |  | (optional) defaults to undefined|
| **name** | [**string**] |  | (optional) defaults to undefined|
| **shortDescription** | [**string**] |  | (optional) defaults to undefined|
| **description** | [**string**] |  | (optional) defaults to undefined|
| **tags** | [**string**] |  | (optional) defaults to undefined|
| **isVisible** | [**boolean**] |  | (optional) defaults to undefined|
| **version** | [**string**] |  | (optional) defaults to undefined|
| **rolesRequired** | [**boolean**] |  | (optional) defaults to undefined|
| **identityRequired** | [**boolean**] |  | (optional) defaults to undefined|
| **state** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AnalyticsApiReportsV1AnalyticsReport**

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
|**404** | Not Found |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

