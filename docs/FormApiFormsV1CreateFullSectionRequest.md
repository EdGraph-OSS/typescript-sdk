# FormApiFormsV1CreateFullSectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**questions** | [**Array&lt;FormApiFormsV1CreateFullQuestionRequest&gt;**](FormApiFormsV1CreateFullQuestionRequest.md) |  | [optional] [readonly] [default to undefined]
**order** | **number** |  | [optional] [default to undefined]
**subHeading** | **string** |  | [optional] [default to undefined]
**customId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FormApiFormsV1CreateFullSectionRequest } from '@edgraph-oss/platform-client';

const instance: FormApiFormsV1CreateFullSectionRequest = {
    title,
    description,
    questions,
    order,
    subHeading,
    customId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
