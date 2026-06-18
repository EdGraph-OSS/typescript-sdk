# TenantApiTenantV1UpdateDomainRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**oldDomainName** | **string** |  | [optional] [default to undefined]
**newDomainName** | **string** |  | [optional] [default to undefined]
**domainStatus** | [**TenantApiTenantV1DomainStatus**](TenantApiTenantV1DomainStatus.md) |  | [optional] [default to undefined]
**autoAssignUsers** | **boolean** |  | [optional] [default to undefined]
**manuallyVerified** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { TenantApiTenantV1UpdateDomainRequest } from '@edgraph-oss/platform-client';

const instance: TenantApiTenantV1UpdateDomainRequest = {
    tenantId,
    oldDomainName,
    newDomainName,
    domainStatus,
    autoAssignUsers,
    manuallyVerified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
