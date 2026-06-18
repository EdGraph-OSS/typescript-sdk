# FormApiFormsV1UpdateFullSectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**questions** | [**Array&lt;FormApiFormsV1UpdateFullQuestionRequest&gt;**](FormApiFormsV1UpdateFullQuestionRequest.md) |  | [optional] [readonly] [default to undefined]
**order** | **number** |  | [optional] [default to undefined]
**subHeading** | **string** |  | [optional] [default to undefined]
**customId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FormApiFormsV1UpdateFullSectionRequest } from '@edgraph-oss/platform-client';

const instance: FormApiFormsV1UpdateFullSectionRequest = {
    id,
    title,
    description,
    questions,
    order,
    subHeading,
    customId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
