# ValidationsApiContainersV1CreateContainerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**environmentType** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**parentContainerId** | **string** |  | [optional] [default to undefined]
**environmentId** | **string** |  | [optional] [default to undefined]
**urls** | [**Array&lt;ValidationsApiContainersV1Url&gt;**](ValidationsApiContainersV1Url.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { ValidationsApiContainersV1CreateContainerRequest } from '@edgraph-oss/platform-client';

const instance: ValidationsApiContainersV1CreateContainerRequest = {
    tenantId,
    name,
    description,
    environmentType,
    tags,
    parentContainerId,
    environmentId,
    urls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
