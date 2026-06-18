# DataSyncApiProviderV1ProviderProfileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**iconUri** | **string** |  | [optional] [default to undefined]
**connectionTypes** | [**Array&lt;DataSyncApiProviderV1ConnectionType&gt;**](DataSyncApiProviderV1ConnectionType.md) |  | [optional] [readonly] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DataSyncApiProviderV1ProviderProfileResponse } from '@edgraph-oss/platform-client';

const instance: DataSyncApiProviderV1ProviderProfileResponse = {
    providerId,
    name,
    description,
    iconUri,
    connectionTypes,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
