# EdfiAdminApiEdfiAdminV1SyncLocalEducationAgencyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**instanceId** | **string** |  | [optional] [default to undefined]
**year** | **number** |  | [optional] [default to undefined]
**edOrgId** | **number** |  | [optional] [default to undefined]
**edOrgGuid** | **string** |  | [optional] [default to undefined]
**entries** | [**Array&lt;EdfiAdminApiEdfiAdminV1SyncEntry&gt;**](EdfiAdminApiEdfiAdminV1SyncEntry.md) |  | [optional] [readonly] [default to undefined]
**assignToExistingApplications** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { EdfiAdminApiEdfiAdminV1SyncLocalEducationAgencyRequest } from '@edgraph-oss/platform-client';

const instance: EdfiAdminApiEdfiAdminV1SyncLocalEducationAgencyRequest = {
    tenantId,
    instanceId,
    year,
    edOrgId,
    edOrgGuid,
    entries,
    assignToExistingApplications,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
