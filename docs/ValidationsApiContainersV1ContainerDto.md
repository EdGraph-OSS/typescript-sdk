# ValidationsApiContainersV1ContainerDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**containerType** | **string** |  | [optional] [default to undefined]
**parentContainerId** | **string** |  | [optional] [default to undefined]
**isDefault** | **boolean** |  | [optional] [default to undefined]
**environmentType** | **string** |  | [optional] [default to undefined]
**childContainers** | [**Array&lt;ValidationsApiContainersV1ContainerDto&gt;**](ValidationsApiContainersV1ContainerDto.md) |  | [optional] [readonly] [default to undefined]
**childContainersCount** | **number** |  | [optional] [default to undefined]
**tags** | [**Array&lt;ValidationsApiContainersV1ContainerDto Types TagDto&gt;**](ValidationsApiContainersV1ContainerDto Types TagDto.md) |  | [optional] [readonly] [default to undefined]
**rulesCount** | **number** |  | [optional] [default to undefined]
**certificationStatus** | **string** |  | [optional] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ValidationsApiContainersV1ContainerDto } from '@edgraph-oss/platform-client';

const instance: ValidationsApiContainersV1ContainerDto = {
    tenantId,
    id,
    name,
    description,
    containerType,
    parentContainerId,
    isDefault,
    environmentType,
    childContainers,
    childContainersCount,
    tags,
    rulesCount,
    certificationStatus,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
