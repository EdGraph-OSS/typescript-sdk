# EdfiAdminApiEdfiAdminV1SyncClaimSetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**instanceId** | **string** |  | [optional] [default to undefined]
**year** | **number** |  | [optional] [default to undefined]
**claimSetId** | **number** |  | [optional] [default to undefined]
**entries** | [**Array&lt;EdfiAdminApiEdfiAdminV1SyncEntry&gt;**](EdfiAdminApiEdfiAdminV1SyncEntry.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { EdfiAdminApiEdfiAdminV1SyncClaimSetRequest } from '@edgraph-oss/platform-client';

const instance: EdfiAdminApiEdfiAdminV1SyncClaimSetRequest = {
    tenantId,
    instanceId,
    year,
    claimSetId,
    entries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
