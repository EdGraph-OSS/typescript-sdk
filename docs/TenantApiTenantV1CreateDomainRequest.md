# TenantApiTenantV1CreateDomainRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**domainName** | **string** |  | [optional] [default to undefined]
**domainStatus** | [**TenantApiTenantV1DomainStatus**](TenantApiTenantV1DomainStatus.md) |  | [optional] [default to undefined]
**autoAssignUsers** | **boolean** |  | [optional] [default to undefined]
**manuallyVerified** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { TenantApiTenantV1CreateDomainRequest } from '@edgraph-oss/platform-client';

const instance: TenantApiTenantV1CreateDomainRequest = {
    tenantId,
    domainName,
    domainStatus,
    autoAssignUsers,
    manuallyVerified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
