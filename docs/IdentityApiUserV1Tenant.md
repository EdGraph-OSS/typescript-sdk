# IdentityApiUserV1Tenant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**status** | [**IdentityApiUserV1TenantStatus**](IdentityApiUserV1TenantStatus.md) |  | [optional] [default to undefined]
**source** | [**IdentityApiUserV1TenantSource**](IdentityApiUserV1TenantSource.md) |  | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**educationOrganizations** | [**Array&lt;IdentityApiUserV1EducationOrganization&gt;**](IdentityApiUserV1EducationOrganization.md) |  | [optional] [readonly] [default to undefined]
**licenses** | [**Array&lt;IdentityApiUserV1ComputedLicense&gt;**](IdentityApiUserV1ComputedLicense.md) |  | [optional] [readonly] [default to undefined]
**organizationName** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { IdentityApiUserV1Tenant } from '@edgraph-oss/platform-client';

const instance: IdentityApiUserV1Tenant = {
    tenantId,
    status,
    source,
    roles,
    educationOrganizations,
    licenses,
    organizationName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
