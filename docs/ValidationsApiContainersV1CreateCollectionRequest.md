# ValidationsApiContainersV1CreateCollectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**environmentType** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**environmentId** | **string** |  | [optional] [default to undefined]
**urls** | [**Array&lt;ValidationsApiContainersV1Url&gt;**](ValidationsApiContainersV1Url.md) |  | [optional] [readonly] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ValidationsApiContainersV1CreateCollectionRequest } from '@edgraph-oss/platform-client';

const instance: ValidationsApiContainersV1CreateCollectionRequest = {
    tenantId,
    name,
    description,
    environmentType,
    tags,
    environmentId,
    urls,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
