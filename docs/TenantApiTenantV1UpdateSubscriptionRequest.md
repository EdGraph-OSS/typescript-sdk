# TenantApiTenantV1UpdateSubscriptionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**subscriptionId** | **string** |  | [optional] [default to undefined]
**startDateTime** | **string** |  | [optional] [default to undefined]
**endDateTime** | **string** |  | [optional] [default to undefined]
**gracePeriod** | **number** |  | [optional] [default to undefined]
**numberOfLicenses** | **number** |  | [optional] [default to undefined]
**assignedLicenses** | **number** |  | [optional] [default to undefined]
**licenseType** | [**TenantApiTenantV1LicenseType**](TenantApiTenantV1LicenseType.md) |  | [optional] [default to undefined]
**autoAssign** | **boolean** | SubscriptionStatus SubscriptionStatus &#x3D; 10; | [optional] [default to undefined]

## Example

```typescript
import { TenantApiTenantV1UpdateSubscriptionRequest } from '@edgraph-oss/platform-client';

const instance: TenantApiTenantV1UpdateSubscriptionRequest = {
    tenantId,
    subscriptionId,
    startDateTime,
    endDateTime,
    gracePeriod,
    numberOfLicenses,
    assignedLicenses,
    licenseType,
    autoAssign,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
