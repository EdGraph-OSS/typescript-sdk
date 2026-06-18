# EdfiAdminApiEdfiAdminV1SaveClaimSetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**instanceId** | **string** |  | [optional] [default to undefined]
**claimSetId** | **number** |  | [optional] [default to undefined]
**claimSetName** | **string** |  | [optional] [default to undefined]
**applicationId** | **number** |  | [optional] [default to undefined]
**resourceClaims** | [**Array&lt;EdfiAdminApiEdfiAdminV1ClaimSetDetailsResourceClaim&gt;**](EdfiAdminApiEdfiAdminV1ClaimSetDetailsResourceClaim.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { EdfiAdminApiEdfiAdminV1SaveClaimSetRequest } from '@edgraph-oss/platform-client';

const instance: EdfiAdminApiEdfiAdminV1SaveClaimSetRequest = {
    tenantId,
    instanceId,
    claimSetId,
    claimSetName,
    applicationId,
    resourceClaims,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
