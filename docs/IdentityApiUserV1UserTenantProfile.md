# IdentityApiUserV1UserTenantProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**tenantTypes** | [**Array&lt;IdentityApiUserV1TenantType&gt;**](IdentityApiUserV1TenantType.md) |  | [optional] [readonly] [default to undefined]
**tenantStatus** | [**IdentityApiUserV1TenantStatus**](IdentityApiUserV1TenantStatus.md) |  | [optional] [default to undefined]
**organizationIdentifier** | **string** |  | [optional] [default to undefined]
**organizationName** | **string** |  | [optional] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]
**isDemo** | **boolean** |  | [optional] [default to undefined]
**educationOrganizations** | [**Array&lt;IdentityApiUserV1UserTenantProfile Types UserTenantEducationOrganizationProfile&gt;**](IdentityApiUserV1UserTenantProfile Types UserTenantEducationOrganizationProfile.md) |  | [optional] [readonly] [default to undefined]
**licenses** | [**Array&lt;IdentityApiUserV1UserTenantProfile Types UserTenantLicenseProfile&gt;**](IdentityApiUserV1UserTenantProfile Types UserTenantLicenseProfile.md) |  | [optional] [readonly] [default to undefined]
**mfaCompleted** | **boolean** |  | [optional] [default to undefined]
**tenantType** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { IdentityApiUserV1UserTenantProfile } from '@edgraph-oss/platform-client';

const instance: IdentityApiUserV1UserTenantProfile = {
    tenantId,
    tenantTypes,
    tenantStatus,
    organizationIdentifier,
    organizationName,
    state,
    isDemo,
    educationOrganizations,
    licenses,
    mfaCompleted,
    tenantType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
