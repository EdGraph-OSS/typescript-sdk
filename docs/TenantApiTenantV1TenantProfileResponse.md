# TenantApiTenantV1TenantProfileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**tenantTypes** | [**Array&lt;TenantApiTenantV1TenantType&gt;**](TenantApiTenantV1TenantType.md) |  | [optional] [readonly] [default to undefined]
**organizationIdentifier** | **string** |  | [optional] [default to undefined]
**organizationName** | **string** |  | [optional] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]
**tenantStatus** | [**TenantApiTenantV1TenantStatus**](TenantApiTenantV1TenantStatus.md) |  | [optional] [default to undefined]
**isDemo** | **boolean** |  | [optional] [default to undefined]
**subscriptionsMigrated** | **boolean** |  | [optional] [default to undefined]
**subscriptions** | [**Array&lt;TenantApiTenantV1SubscriptionProfileResponse&gt;**](TenantApiTenantV1SubscriptionProfileResponse.md) |  | [optional] [readonly] [default to undefined]
**domains** | [**Array&lt;TenantApiTenantV1DomainProfileResponse&gt;**](TenantApiTenantV1DomainProfileResponse.md) |  | [optional] [readonly] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]
**identityProviders** | [**Array&lt;TenantApiTenantV1TenantIdentityProviders&gt;**](TenantApiTenantV1TenantIdentityProviders.md) |  | [optional] [readonly] [default to undefined]
**onboarding** | [**TenantApiTenantV1Onboarding**](TenantApiTenantV1Onboarding.md) |  | [optional] [default to undefined]
**organizations** | [**Array&lt;TenantApiTenantV1Organization&gt;**](TenantApiTenantV1Organization.md) |  | [optional] [readonly] [default to undefined]
**organizationIdentifierHash** | **string** |  | [optional] [default to undefined]
**settings** | [**Array&lt;TenantApiTenantV1TenantSetting&gt;**](TenantApiTenantV1TenantSetting.md) |  | [optional] [readonly] [default to undefined]
**additionalSettings** | [**TenantApiTenantV1TenantAdditionalSetting**](TenantApiTenantV1TenantAdditionalSetting.md) |  | [optional] [default to undefined]
**tenantType** | **string** |  | [optional] [default to undefined]
**securityScore** | **number** |  | [optional] [default to undefined]
**organizationalAccountRating** | **number** |  | [optional] [default to undefined]
**multiFactorAuthenticationRating** | **number** |  | [optional] [default to undefined]
**domainVerificationRating** | **number** |  | [optional] [default to undefined]
**deploymentType** | [**TenantApiTenantV1DeploymentType**](TenantApiTenantV1DeploymentType.md) |  | [optional] [default to undefined]
**branding** | [**TenantApiTenantV1TenantBrandingResponse**](TenantApiTenantV1TenantBrandingResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TenantApiTenantV1TenantProfileResponse } from '@edgraph-oss/platform-client';

const instance: TenantApiTenantV1TenantProfileResponse = {
    tenantId,
    tenantTypes,
    organizationIdentifier,
    organizationName,
    state,
    tenantStatus,
    isDemo,
    subscriptionsMigrated,
    subscriptions,
    domains,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
    identityProviders,
    onboarding,
    organizations,
    organizationIdentifierHash,
    settings,
    additionalSettings,
    tenantType,
    securityScore,
    organizationalAccountRating,
    multiFactorAuthenticationRating,
    domainVerificationRating,
    deploymentType,
    branding,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
