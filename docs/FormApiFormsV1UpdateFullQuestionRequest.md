# FormApiFormsV1UpdateFullQuestionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**type** | [**FormApiQuestionsV1QuestionType**](FormApiQuestionsV1QuestionType.md) |  | [optional] [default to undefined]
**required** | **boolean** |  | [optional] [default to undefined]
**defaultValue** | **string** |  | [optional] [default to undefined]
**validation** | [**FormApiFormsV1UpdateFullQuestionValidationRequest**](FormApiFormsV1UpdateFullQuestionValidationRequest.md) |  | [optional] [default to undefined]
**_options** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**order** | **number** |  | [optional] [default to undefined]
**component** | **string** |  | [optional] [default to undefined]
**customId** | **string** |  | [optional] [default to undefined]
**visibilityCondition** | [**FormApiQuestionsV1QuestionVisibilityCondition**](FormApiQuestionsV1QuestionVisibilityCondition.md) |  | [optional] [default to undefined]
**multiline** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { FormApiFormsV1UpdateFullQuestionRequest } from '@edgraph-oss/platform-client';

const instance: FormApiFormsV1UpdateFullQuestionRequest = {
    id,
    title,
    description,
    type,
    required,
    defaultValue,
    validation,
    _options,
    order,
    component,
    customId,
    visibilityCondition,
    multiline,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
