# DataSyncApiConnectionV1TestConnectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connectionId** | **string** |  | [optional] [default to undefined]
**providerId** | **string** |  | [optional] [default to undefined]
**connectionTypeId** | **string** |  | [optional] [default to undefined]
**connectionMetadata** | [**Array&lt;DataSyncApiConnectionV1ConnectionMetadata&gt;**](DataSyncApiConnectionV1ConnectionMetadata.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { DataSyncApiConnectionV1TestConnectionRequest } from '@edgraph-oss/platform-client';

const instance: DataSyncApiConnectionV1TestConnectionRequest = {
    connectionId,
    providerId,
    connectionTypeId,
    connectionMetadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
