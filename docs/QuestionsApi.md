# QuestionsApi

All URIs are relative to *https://api.dev.edgraph.com/tenant*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createQuestion**](#createquestion) | **POST** /tenants/{tenantId}/forms/{formId}/sections/{sectionId}/questions | Creates a new Question for a given section|
|[**deleteQuestion**](#deletequestion) | **DELETE** /tenants/{tenantId}/forms/{formId}/sections/{sectionId}/questions/{questionId} | Deletes a Question.|
|[**getQuestion**](#getquestion) | **GET** /tenants/{tenantId}/forms/{formId}/sections/{sectionId}/questions/{questionId} | Get Question.|
|[**searchQuestions**](#searchquestions) | **GET** /tenants/{tenantId}/forms/{formId}/sections/{sectionId}/questions | Search Questions|
|[**updateQuestion**](#updatequestion) | **PUT** /tenants/{tenantId}/forms/{formId}/sections/{sectionId}/questions/{questionId} | Updates a Question.|

# **createQuestion**
> FormApiQuestionsV1QuestionCreatedResponse createQuestion()


### Example

```typescript
import {
    QuestionsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsFormsCreateQuestionRequestDto
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new QuestionsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)
let sectionId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsFormsCreateQuestionRequestDto: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsFormsCreateQuestionRequestDto; // (optional)

const { status, data } = await apiInstance.createQuestion(
    tenantId,
    formId,
    sectionId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsFormsCreateQuestionRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsFormsCreateQuestionRequestDto** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsFormsCreateQuestionRequestDto**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|
| **sectionId** | [**string**] |  | defaults to undefined|


### Return type

**FormApiQuestionsV1QuestionCreatedResponse**

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

# **deleteQuestion**
> FormApiQuestionsV1QuestionDeletedResponse deleteQuestion()


### Example

```typescript
import {
    QuestionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new QuestionsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)
let sectionId: string; // (default to undefined)
let questionId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteQuestion(
    tenantId,
    formId,
    sectionId,
    questionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|
| **sectionId** | [**string**] |  | defaults to undefined|
| **questionId** | [**string**] |  | defaults to undefined|


### Return type

**FormApiQuestionsV1QuestionDeletedResponse**

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

# **getQuestion**
> EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesFormsQuestionResponseDto getQuestion()


### Example

```typescript
import {
    QuestionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new QuestionsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)
let sectionId: string; // (default to undefined)
let questionId: string; // (default to undefined)

const { status, data } = await apiInstance.getQuestion(
    tenantId,
    formId,
    sectionId,
    questionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|
| **sectionId** | [**string**] |  | defaults to undefined|
| **questionId** | [**string**] |  | defaults to undefined|


### Return type

**EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesFormsQuestionResponseDto**

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

# **searchQuestions**
> EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesFormsQuestionResponseDtoPaginatedItemsViewModel searchQuestions()


### Example

```typescript
import {
    QuestionsApi,
    Configuration
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new QuestionsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)
let sectionId: string; // (default to undefined)
let pageSize: number; // (optional) (default to 10)
let pageIndex: number; // (optional) (default to 0)
let orderBy: string; // (optional) (default to '')
let filter: string; // (optional) (default to '')

const { status, data } = await apiInstance.searchQuestions(
    tenantId,
    formId,
    sectionId,
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
| **formId** | [**string**] |  | defaults to undefined|
| **sectionId** | [**string**] |  | defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **orderBy** | [**string**] |  | (optional) defaults to ''|
| **filter** | [**string**] |  | (optional) defaults to ''|


### Return type

**EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsResponsesFormsQuestionResponseDtoPaginatedItemsViewModel**

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

# **updateQuestion**
> FormApiQuestionsV1QuestionUpdatedResponse updateQuestion()


### Example

```typescript
import {
    QuestionsApi,
    Configuration,
    EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsFormsUpdateQuestionRequestDto
} from '@edgraph-oss/platform-client';

const configuration = new Configuration();
const apiInstance = new QuestionsApi(configuration);

let tenantId: string; // (default to undefined)
let formId: string; // (default to undefined)
let sectionId: string; // (default to undefined)
let questionId: string; // (default to undefined)
let edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsFormsUpdateQuestionRequestDto: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsFormsUpdateQuestionRequestDto; // (optional)

const { status, data } = await apiInstance.updateQuestion(
    tenantId,
    formId,
    sectionId,
    questionId,
    edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsFormsUpdateQuestionRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **edGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsFormsUpdateQuestionRequestDto** | **EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsFormsUpdateQuestionRequestDto**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|
| **formId** | [**string**] |  | defaults to undefined|
| **sectionId** | [**string**] |  | defaults to undefined|
| **questionId** | [**string**] |  | defaults to undefined|


### Return type

**FormApiQuestionsV1QuestionUpdatedResponse**

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

