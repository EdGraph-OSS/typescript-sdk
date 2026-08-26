# IdentityApiUserV1ComputedLicense


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **string** |  | [optional] [default to undefined]
**applicationName** | **string** |  | [optional] [default to undefined]
**applicationRole** | [**Array&lt;IdentityApiUserV1ComputedLicenseApplicationRole&gt;**](IdentityApiUserV1ComputedLicenseApplicationRole.md) |  | [optional] [readonly] [default to undefined]
**applicationTenantId** | **string** |  | [optional] [default to undefined]
**assignedLicenses** | **number** |  | [optional] [default to undefined]
**isTenantSubscribed** | **boolean** |  | [optional] [default to undefined]
**isUserLicensed** | **boolean** |  | [optional] [default to undefined]
**numberOfLicenses** | **number** |  | [optional] [default to undefined]
**subscriptionTenantId** | **string** |  | [optional] [default to undefined]
**tenantSubscriptionActualEndDateTime** | **string** |  | [optional] [default to undefined]
**tenantSubscriptionEndDateTime** | **string** |  | [optional] [default to undefined]
**tenantSubscriptionId** | **string** |  | [optional] [default to undefined]
**tenantSubscriptionStartDateTime** | **string** |  | [optional] [default to undefined]
**deletedAt** | **string** |  | [optional] [default to undefined]
**status** | [**IdentityApiUserV1LicenseStatus**](IdentityApiUserV1LicenseStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { IdentityApiUserV1ComputedLicense } from '@edgraph-oss/platform-client';

const instance: IdentityApiUserV1ComputedLicense = {
    applicationId,
    applicationName,
    applicationRole,
    applicationTenantId,
    assignedLicenses,
    isTenantSubscribed,
    isUserLicensed,
    numberOfLicenses,
    subscriptionTenantId,
    tenantSubscriptionActualEndDateTime,
    tenantSubscriptionEndDateTime,
    tenantSubscriptionId,
    tenantSubscriptionStartDateTime,
    deletedAt,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
