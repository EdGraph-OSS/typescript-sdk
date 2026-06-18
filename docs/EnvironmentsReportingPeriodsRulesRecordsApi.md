# EnvironmentsReportingPeriodsRulesRecordsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteStateReportingPeriodRules**](#deletestatereportingperiodrules) | **DELETE** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/rules | Deletes the Rules of a Reporting Period.|
|[**searchStateReportingPeriodRecords**](#searchstatereportingperiodrecords) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/records | Retrieves the Invalid Records of all the Rules within a Reporting Period.|
|[**searchStateReportingPeriodRuleRecords**](#searchstatereportingperiodrulerecords) | **GET** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/rules/{ruleId}/records | Retrieves the Invalid Records of a Rule.|
|[**setStateReportingPeriodRuleRecordPostFlag**](#setstatereportingperiodrulerecordpostflag) | **PUT** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/rules/{ruleId}/records/{recordId}/excludefrompost | Toggles the \&quot;ExcludeFromPost\&quot; flag of a Rule\&#39;s Invalid Record.|
|[**setStateReportingPeriodRuleRecordPostFlagBulk**](#setstatereportingperiodrulerecordpostflagbulk) | **PUT** /tenants/{tenantId}/statereporting/environments/{environmentId}/reportingperiods/{reportingPeriodId}/rules/{ruleId}/records/excludefrompost | Toggles the \&quot;ExcludeFromPost\&quot; flag of a Rule\&#39;s Invalid Records in bulk.|

# **deleteStateReportingPeriodRules**
> EdGraphServicesStateReportingV1ReportingPeriodRulesDeletedResponse deleteStateReportingPeriodRules()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsRulesRecordsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsRulesRecordsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteStateReportingPeriodRules(
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

**EdGraphServicesStateReportingV1ReportingPeriodRulesDeletedResponse**

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

# **searchStateReportingPeriodRecords**
> EdGraphServicesStateReportingV1PaginatedRecords searchStateReportingPeriodRecords()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsRulesRecordsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsRulesRecordsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let excludeFromPost: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchStateReportingPeriodRecords(
    tenantId,
    environmentId,
    reportingPeriodId,
    pageIndex,
    pageSize,
    excludeFromPost
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
| **excludeFromPost** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1PaginatedRecords**

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

# **searchStateReportingPeriodRuleRecords**
> EdGraphServicesStateReportingV1PaginatedRuleRecords searchStateReportingPeriodRuleRecords()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsRulesRecordsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsRulesRecordsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let ruleId: string; // (default to undefined)
let pageIndex: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchStateReportingPeriodRuleRecords(
    tenantId,
    environmentId,
    reportingPeriodId,
    ruleId,
    pageIndex,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **ruleId** | [**string**] |  | defaults to undefined|
| **pageIndex** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to undefined|


### Return type

**EdGraphServicesStateReportingV1PaginatedRuleRecords**

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

# **setStateReportingPeriodRuleRecordPostFlag**
> EdGraphServicesStateReportingV1ReportingPeriodCreatedResponse setStateReportingPeriodRuleRecordPostFlag()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsRulesRecordsApi,
    Configuration,
    EdGraphServicesStateReportingV1SetReportingPeriodRuleRecordPostFlagRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsRulesRecordsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let ruleId: string; // (default to undefined)
let recordId: string; // (default to undefined)
let edGraphServicesStateReportingV1SetReportingPeriodRuleRecordPostFlagRequest: EdGraphServicesStateReportingV1SetReportingPeriodRuleRecordPostFlagRequest; // (optional)

const { status, data } = await apiInstance.setStateReportingPeriodRuleRecordPostFlag(
    tenantId,
    environmentId,
    reportingPeriodId,
    ruleId,
    recordId,
    edGraphServicesStateReportingV1SetReportingPeriodRuleRecordPostFlagRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphServicesStateReportingV1SetReportingPeriodRuleRecordPostFlagRequest** | **EdGraphServicesStateReportingV1SetReportingPeriodRuleRecordPostFlagRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **ruleId** | [**string**] |  | defaults to undefined|
| **recordId** | [**string**] |  | defaults to undefined|


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

# **setStateReportingPeriodRuleRecordPostFlagBulk**
> EdGraphServicesStateReportingV1ReportingPeriodCreatedResponse setStateReportingPeriodRuleRecordPostFlagBulk()


### Example

```typescript
import {
    EnvironmentsReportingPeriodsRulesRecordsApi,
    Configuration,
    EdGraphServicesStateReportingV1SetReportingPeriodRuleRecordPostFlagBulkRequest
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsReportingPeriodsRulesRecordsApi(configuration);

let tenantId: string; // (default to undefined)
let environmentId: string; // (default to undefined)
let reportingPeriodId: string; // (default to undefined)
let ruleId: string; // (default to undefined)
let edGraphServicesStateReportingV1SetReportingPeriodRuleRecordPostFlagBulkRequest: EdGraphServicesStateReportingV1SetReportingPeriodRuleRecordPostFlagBulkRequest; // (optional)

const { status, data } = await apiInstance.setStateReportingPeriodRuleRecordPostFlagBulk(
    tenantId,
    environmentId,
    reportingPeriodId,
    ruleId,
    edGraphServicesStateReportingV1SetReportingPeriodRuleRecordPostFlagBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphServicesStateReportingV1SetReportingPeriodRuleRecordPostFlagBulkRequest** | **EdGraphServicesStateReportingV1SetReportingPeriodRuleRecordPostFlagBulkRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] |  | defaults to undefined|
| **reportingPeriodId** | [**string**] |  | defaults to undefined|
| **ruleId** | [**string**] |  | defaults to undefined|


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

