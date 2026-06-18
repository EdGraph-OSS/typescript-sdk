# PartnershipsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllPartnerships**](#getallpartnerships) | **GET** /tenants/{tenantId}/partnerships | Retrieves a list of Partnerships.|
|[**getPartnershipById**](#getpartnershipbyid) | **GET** /tenants/{tenantId}/partnerships/{partnershipId} | Retrieves a Partnership by ID.|

# **getAllPartnerships**
> TenantApiPartnershipV1PaginatedItemsResponse getAllPartnerships()


### Example

```typescript
import {
    PartnershipsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new PartnershipsApi(configuration);

let tenantId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 10)
let orderBy: string; // (optional) (default to undefined)
let partnerTenantId: string; // (optional) (default to undefined)
let partnershipType: Array<string>; // (optional) (default to undefined)
let excludeSoftDeleted: boolean; // (optional) (default to true)

const { status, data } = await apiInstance.getAllPartnerships(
    tenantId,
    pageIndex,
    pageSize,
    orderBy,
    partnerTenantId,
    partnershipType,
    excludeSoftDeleted
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **partnerTenantId** | [**string**] |  | (optional) defaults to undefined|
| **partnershipType** | **Array&lt;string&gt;** |  | (optional) defaults to undefined|
| **excludeSoftDeleted** | [**boolean**] |  | (optional) defaults to true|


### Return type

**TenantApiPartnershipV1PaginatedItemsResponse**

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

# **getPartnershipById**
> TenantApiPartnershipV1PartnershipByIdResponse getPartnershipById()


### Example

```typescript
import {
    PartnershipsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new PartnershipsApi(configuration);

let tenantId: string; // (default to undefined)
let partnershipId: string; // (default to undefined)
let excludeSoftDeleted: boolean; // (optional) (default to true)

const { status, data } = await apiInstance.getPartnershipById(
    tenantId,
    partnershipId,
    excludeSoftDeleted
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **partnershipId** | [**string**] |  | defaults to undefined|
| **excludeSoftDeleted** | [**boolean**] |  | (optional) defaults to true|


### Return type

**TenantApiPartnershipV1PartnershipByIdResponse**

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

