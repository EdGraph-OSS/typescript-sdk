# EdfiAdminApiEdfiAdminV1SyncApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**instanceId** | **string** |  | [optional] [default to undefined]
**year** | **number** |  | [optional] [default to undefined]
**applicationId** | **number** |  | [optional] [default to undefined]
**entries** | [**Array&lt;EdfiAdminApiEdfiAdminV1SyncEntry&gt;**](EdfiAdminApiEdfiAdminV1SyncEntry.md) |  | [optional] [readonly] [default to undefined]
**assignToExistingLeas** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { EdfiAdminApiEdfiAdminV1SyncApplicationRequest } from '@edgraph-oss/platform-client';

const instance: EdfiAdminApiEdfiAdminV1SyncApplicationRequest = {
    tenantId,
    instanceId,
    year,
    applicationId,
    entries,
    assignToExistingLeas,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
