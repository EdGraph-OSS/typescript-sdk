# FormApiFormsV1FormAccessResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**targetAudience** | [**FormApiFormsV1AudienceType**](FormApiFormsV1AudienceType.md) |  | [optional] [default to undefined]
**singleResponsePerIndividual** | **boolean** |  | [optional] [default to undefined]
**staffClassifications** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**users** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { FormApiFormsV1FormAccessResponse } from '@edgraph-oss/platform-client';

const instance: FormApiFormsV1FormAccessResponse = {
    id,
    tenantId,
    targetAudience,
    singleResponsePerIndividual,
    staffClassifications,
    users,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
