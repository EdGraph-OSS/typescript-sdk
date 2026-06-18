# DataSyncApiProviderV1ConnectionType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerId** | **string** |  | [optional] [default to undefined]
**connectionTypeId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**documentationUri** | **string** |  | [optional] [default to undefined]
**connectionMetadataFields** | [**Array&lt;DataSyncApiProviderV1ConnectionMetadataField&gt;**](DataSyncApiProviderV1ConnectionMetadataField.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { DataSyncApiProviderV1ConnectionType } from '@edgraph-oss/platform-client';

const instance: DataSyncApiProviderV1ConnectionType = {
    providerId,
    connectionTypeId,
    name,
    description,
    documentationUri,
    connectionMetadataFields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
