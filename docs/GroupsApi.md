# GroupsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addUsersToGroupAsync**](#adduserstogroupasync) | **POST** /tenants/{tenantId}/analytics/groups/{groupId}/users/bulk | Adds users to group.|
|[**createAnalyticsPowerBiGroup**](#createanalyticspowerbigroup) | **POST** /tenants/{tenantId}/analytics/groups | Creates a group.|
|[**deleteAnalyticsPowerBiGroup**](#deleteanalyticspowerbigroup) | **DELETE** /tenants/{tenantId}/analytics/groups/{groupId} | Deletes a group.|
|[**getAnalyticsPowerBiGroupUsers**](#getanalyticspowerbigroupusers) | **GET** /tenants/{tenantId}/analytics/groups/{groupId}/users | Retrieves all users for a specific group.|
|[**getGroupsAsync**](#getgroupsasync) | **GET** /tenants/{tenantId}/analytics/groups | Retrieves a list of groups.|

# **addUsersToGroupAsync**
> addUsersToGroupAsync()


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    AnalyticsApiGroupsV1AddGroupUsersRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let tenantId: string; // (default to undefined)
let groupId: string; // (default to undefined)
let analyticsApiGroupsV1AddGroupUsersRequest: AnalyticsApiGroupsV1AddGroupUsersRequest; // (optional)

const { status, data } = await apiInstance.addUsersToGroupAsync(
    tenantId,
    groupId,
    analyticsApiGroupsV1AddGroupUsersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **analyticsApiGroupsV1AddGroupUsersRequest** | **AnalyticsApiGroupsV1AddGroupUsersRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

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

# **createAnalyticsPowerBiGroup**
> AnalyticsApiGroupsV1GroupResponse createAnalyticsPowerBiGroup()


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    AnalyticsApiGroupsV1CreateGroupRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let tenantId: string; // (default to undefined)
let analyticsApiGroupsV1CreateGroupRequest: AnalyticsApiGroupsV1CreateGroupRequest; // (optional)

const { status, data } = await apiInstance.createAnalyticsPowerBiGroup(
    tenantId,
    analyticsApiGroupsV1CreateGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **analyticsApiGroupsV1CreateGroupRequest** | **AnalyticsApiGroupsV1CreateGroupRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**AnalyticsApiGroupsV1GroupResponse**

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

# **deleteAnalyticsPowerBiGroup**
> deleteAnalyticsPowerBiGroup()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let tenantId: string; // (default to undefined)
let groupId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAnalyticsPowerBiGroup(
    tenantId,
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **groupId** | [**string**] |  | defaults to undefined|


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

# **getAnalyticsPowerBiGroupUsers**
> AnalyticsApiGroupsV1GroupUsersResponse getAnalyticsPowerBiGroupUsers()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let tenantId: string; // (default to undefined)
let groupId: string; // (default to undefined)
let skipFirstN: number; // (optional) (default to undefined)
let topFirstN: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getAnalyticsPowerBiGroupUsers(
    tenantId,
    groupId,
    skipFirstN,
    topFirstN
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **groupId** | [**string**] |  | defaults to undefined|
| **skipFirstN** | [**number**] |  | (optional) defaults to undefined|
| **topFirstN** | [**number**] |  | (optional) defaults to undefined|


### Return type

**AnalyticsApiGroupsV1GroupUsersResponse**

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

# **getGroupsAsync**
> AnalyticsApiGroupsV1GroupsResponse getGroupsAsync()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let tenantId: string; // (default to undefined)
let filter: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupsAsync(
    tenantId,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **filter** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AnalyticsApiGroupsV1GroupsResponse**

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

