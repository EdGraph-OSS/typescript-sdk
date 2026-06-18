# FormApiFormsV1UpdateFullFormRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**source** | [**FormApiFormsV1FormSource**](FormApiFormsV1FormSource.md) |  | [optional] [default to undefined]
**version** | **string** |  | [optional] [default to undefined]
**anonymous** | **boolean** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**status** | [**FormApiFormsV1FormStatus**](FormApiFormsV1FormStatus.md) |  | [optional] [default to undefined]
**sections** | [**Array&lt;FormApiFormsV1UpdateFullSectionRequest&gt;**](FormApiFormsV1UpdateFullSectionRequest.md) |  | [optional] [readonly] [default to undefined]
**image** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FormApiFormsV1UpdateFullFormRequest } from '@edgraph-oss/platform-client';

const instance: FormApiFormsV1UpdateFullFormRequest = {
    id,
    name,
    description,
    source,
    version,
    anonymous,
    tenantId,
    status,
    sections,
    image,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
