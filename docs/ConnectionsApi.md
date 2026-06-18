# ConnectionsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**connectionTestedResponse**](#connectiontestedresponse) | **POST** /tenants/{tenantId}/datasync/connections/testconnection | Tests availability of provided connection metadata.|
|[**createEdFiConnection**](#createedficonnection) | **POST** /tenants/{tenantId}/edfiadmin/connections | Creates a new Ed-Fi Connection.|
|[**createTenantDataSyncConnection**](#createtenantdatasyncconnection) | **POST** /tenants/{tenantId}/datasync/connections | Creates a new DataSync connection|
|[**deleteEdFiConnection**](#deleteedficonnection) | **DELETE** /tenants/{tenantId}/edfiadmin/connections/{connectionId} | Deletes an Ed-Fi Connection.|
|[**deleteTenantDataSyncConnection**](#deletetenantdatasyncconnection) | **DELETE** /tenants/{tenantId}/datasync/connections/{connectionId} | Delete a DataSync connection matching the primary key|
|[**getAllTenantDataSyncConnections**](#getalltenantdatasyncconnections) | **GET** /tenants/{tenantId}/datasync/connections | Retrieves a list of DataSync Connections|
|[**getConnectionById**](#getconnectionbyid) | **GET** /tenants/{tenantId}/oneroster/connections/{connectionId} | Retrieves the profile of a Connection.|
|[**getEdFiConnectionById**](#getedficonnectionbyid) | **GET** /tenants/{tenantId}/edfiadmin/connections/{connectionId} | Retrieves an Ed-Fi Connection by ID.|
|[**getEdFiConnectionsAsync**](#getedficonnectionsasync) | **GET** /tenants/{tenantId}/edfiadmin/connections | Retrieves a list of Ed-Fi Connections.|
|[**getEdFiOdsBackupCodesDescriptorsAsync**](#getedfiodsbackupcodesdescriptorsasync) | **GET** /tenants/{tenantId}/edfiadmin/connections/odsbackupcodes | Retrieves a list of Ed-Fi ODS backup codes.|
|[**getPagedConnections**](#getpagedconnections) | **GET** /tenants/{tenantId}/oneroster/connections | Retrieves a list of Connections.|
|[**getTenantDataSyncConnectionProfileById**](#gettenantdatasyncconnectionprofilebyid) | **GET** /tenants/{tenantId}/datasync/connections/{connectionId} | Retrieves a specific DataSync connection using its primary key|
|[**testConnectionDetailsAsync**](#testconnectiondetailsasync) | **POST** /tenants/{tenantId}/oneroster/connections/test | Tests the connection by sending the connection details in the request payload|
|[**testConnectionDetailsByIdAsync**](#testconnectiondetailsbyidasync) | **POST** /tenants/{tenantId}/oneroster/connections/{connectionId}/test | Tests the connection by obtaining the details by ID|
|[**updateEdFiConnection**](#updateedficonnection) | **PUT** /tenants/{tenantId}/edfiadmin/connections/{connectionId} | Updates an Ed-Fi Connection.|
|[**updateTenantDataSyncConnection**](#updatetenantdatasyncconnection) | **PUT** /tenants/{tenantId}/datasync/connections/{connectionId} | Updates a DataSync connection matching the primary key|

# **connectionTestedResponse**
> DataSyncApiConnectionV1ConnectionTestedResponse connectionTestedResponse()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration,
    DataSyncApiConnectionV1TestConnectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let dataSyncApiConnectionV1TestConnectionRequest: DataSyncApiConnectionV1TestConnectionRequest; // (optional)

const { status, data } = await apiInstance.connectionTestedResponse(
    tenantId,
    dataSyncApiConnectionV1TestConnectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dataSyncApiConnectionV1TestConnectionRequest** | **DataSyncApiConnectionV1TestConnectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**DataSyncApiConnectionV1ConnectionTestedResponse**

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

# **createEdFiConnection**
> createEdFiConnection()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1CreateEdFiConnectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let edfiAdminApiEdfiAdminV1CreateEdFiConnectionRequest: EdfiAdminApiEdfiAdminV1CreateEdFiConnectionRequest; // (optional)

const { status, data } = await apiInstance.createEdFiConnection(
    tenantId,
    edfiAdminApiEdfiAdminV1CreateEdFiConnectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1CreateEdFiConnectionRequest** | **EdfiAdminApiEdfiAdminV1CreateEdFiConnectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


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
|**200** | Success |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |
|**201** | The resource was created. The location of the resource is available in the Location header of the response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTenantDataSyncConnection**
> createTenantDataSyncConnection()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsConnectionsCreateConnectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsConnectionsCreateConnectionRequest: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsConnectionsCreateConnectionRequest; // (optional)

const { status, data } = await apiInstance.createTenantDataSyncConnection(
    tenantId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsConnectionsCreateConnectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsConnectionsCreateConnectionRequest** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsConnectionsCreateConnectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


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
|**201** | The resource was created. The location of the resource is available in the Location header of the response. |  -  |
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteEdFiConnection**
> EdfiAdminApiEdfiAdminV1EdFiConnectionDeletedResponse deleteEdFiConnection()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteEdFiConnection(
    tenantId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1EdFiConnectionDeletedResponse**

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

# **deleteTenantDataSyncConnection**
> deleteTenantDataSyncConnection()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTenantDataSyncConnection(
    tenantId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


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

# **getAllTenantDataSyncConnections**
> DataSyncApiConnectionV1ConnectionListResponsePaginatedItemsViewModel getAllTenantDataSyncConnections()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getAllTenantDataSyncConnections(
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

**DataSyncApiConnectionV1ConnectionListResponsePaginatedItemsViewModel**

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

# **getConnectionById**
> IMSAdminApiV1ConnectionsPagedConnectionsResponse getConnectionById()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getConnectionById(
    tenantId,
    connectionId,
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
| **connectionId** | [**string**] |  | defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**IMSAdminApiV1ConnectionsPagedConnectionsResponse**

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

# **getEdFiConnectionById**
> EdfiAdminApiEdfiAdminV1EdFiConnection getEdFiConnectionById()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.getEdFiConnectionById(
    tenantId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1EdFiConnection**

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

# **getEdFiConnectionsAsync**
> EdfiAdminApiEdfiAdminV1EdFiConnectionPaginatedItemsResponse getEdFiConnectionsAsync()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getEdFiConnectionsAsync(
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

**EdfiAdminApiEdfiAdminV1EdFiConnectionPaginatedItemsResponse**

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

# **getEdFiOdsBackupCodesDescriptorsAsync**
> EdfiAdminApiEdfiAdminV1EdFiOdsBackupDescriptorsPaginatedItemsResponse getEdFiOdsBackupCodesDescriptorsAsync()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getEdFiOdsBackupCodesDescriptorsAsync(
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

**EdfiAdminApiEdfiAdminV1EdFiOdsBackupDescriptorsPaginatedItemsResponse**

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

# **getPagedConnections**
> IMSAdminApiV1ConnectionsPagedConnectionsResponse getPagedConnections()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.getPagedConnections(
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

**IMSAdminApiV1ConnectionsPagedConnectionsResponse**

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

# **getTenantDataSyncConnectionProfileById**
> DataSyncApiConnectionV1ConnectionProfileResponse getTenantDataSyncConnectionProfileById()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.getTenantDataSyncConnectionProfileById(
    tenantId,
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**DataSyncApiConnectionV1ConnectionProfileResponse**

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

# **testConnectionDetailsAsync**
> IMSAdminApiV1ConnectionsConnectionTestedResponse testConnectionDetailsAsync()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration,
    IMSAdminApiV1ConnectionsTestConnectionDetailsRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let iMSAdminApiV1ConnectionsTestConnectionDetailsRequest: IMSAdminApiV1ConnectionsTestConnectionDetailsRequest; // (optional)

const { status, data } = await apiInstance.testConnectionDetailsAsync(
    tenantId,
    iMSAdminApiV1ConnectionsTestConnectionDetailsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **iMSAdminApiV1ConnectionsTestConnectionDetailsRequest** | **IMSAdminApiV1ConnectionsTestConnectionDetailsRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**IMSAdminApiV1ConnectionsConnectionTestedResponse**

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

# **testConnectionDetailsByIdAsync**
> IMSAdminApiV1ConnectionsConnectionTestedResponse testConnectionDetailsByIdAsync()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration,
    IMSAdminApiV1ConnectionsTestConnectionDetailsByIdRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)
let iMSAdminApiV1ConnectionsTestConnectionDetailsByIdRequest: IMSAdminApiV1ConnectionsTestConnectionDetailsByIdRequest; // (optional)

const { status, data } = await apiInstance.testConnectionDetailsByIdAsync(
    tenantId,
    connectionId,
    iMSAdminApiV1ConnectionsTestConnectionDetailsByIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **iMSAdminApiV1ConnectionsTestConnectionDetailsByIdRequest** | **IMSAdminApiV1ConnectionsTestConnectionDetailsByIdRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**IMSAdminApiV1ConnectionsConnectionTestedResponse**

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

# **updateEdFiConnection**
> EdfiAdminApiEdfiAdminV1EdFiConnectionUpdatedResponse updateEdFiConnection()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration,
    EdfiAdminApiEdfiAdminV1UpdateEdFiConnectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)
let edfiAdminApiEdfiAdminV1UpdateEdFiConnectionRequest: EdfiAdminApiEdfiAdminV1UpdateEdFiConnectionRequest; // (optional)

const { status, data } = await apiInstance.updateEdFiConnection(
    tenantId,
    connectionId,
    edfiAdminApiEdfiAdminV1UpdateEdFiConnectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edfiAdminApiEdfiAdminV1UpdateEdFiConnectionRequest** | **EdfiAdminApiEdfiAdminV1UpdateEdFiConnectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**EdfiAdminApiEdfiAdminV1EdFiConnectionUpdatedResponse**

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

# **updateTenantDataSyncConnection**
> updateTenantDataSyncConnection()


### Example

```typescript
import {
    ConnectionsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsConnectionsUpdateConnectionRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let tenantId: string; // (default to undefined)
let connectionId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsConnectionsUpdateConnectionRequest: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsConnectionsUpdateConnectionRequest; // (optional)

const { status, data } = await apiInstance.updateTenantDataSyncConnection(
    tenantId,
    connectionId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsConnectionsUpdateConnectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsConnectionsUpdateConnectionRequest** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsConnectionsUpdateConnectionRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **connectionId** | [**string**] |  | defaults to undefined|


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
|**400** | Bad Request. The request was invalid and cannot be completed. See the response body for specific validation errors. This will typically be an issue with the query parameters or the request body values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

