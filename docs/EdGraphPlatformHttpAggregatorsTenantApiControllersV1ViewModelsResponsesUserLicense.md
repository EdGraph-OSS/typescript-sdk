# EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserLicense


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscriptionTenantId** | **string** | The Tenant Id the subscription belongs to | [optional] [default to undefined]
**isTenantSubscribed** | **boolean** | The Tenant has a subscription license for this application | [optional] [default to undefined]
**tenantSubscriptionId** | **string** | The Tenant subscription Id | [optional] [default to undefined]
**tenantSubscriptionStartDateTime** | **string** | The Tenant subscription start date | [optional] [default to undefined]
**tenantSubscriptionEndDateTime** | **string** | The Tenant subscription end date | [optional] [default to undefined]
**tenantSubscriptionActualEndDateTime** | **string** | The Tenant subscription end date | [optional] [default to undefined]
**tenantSubscriptionDeletedAt** | **string** | The Tenant subscription deleted date | [optional] [default to undefined]
**tenantSubscriptionGracePeriod** | **number** | The Tenant subscription grace period value | [optional] [default to undefined]
**numberOfLicenses** | **number** | The Tenant\&#39;s number of licenses | [optional] [default to undefined]
**assignedLicenses** | **number** | The Tenant\&#39;s assigned of licenses | [optional] [default to undefined]
**isUserLicensed** | **boolean** | The user is assigned license for this application | [optional] [default to undefined]
**applicationTenantId** | **string** | The Tenant this application belongs to | [optional] [default to undefined]
**applicationId** | **string** | The application Id of the application for license | [optional] [default to undefined]
**applicationName** | **string** | The application Name of the application for license | [optional] [default to undefined]
**applicationRole** | [**Array&lt;EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesApplicationRole&gt;**](EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesApplicationRole.md) | Application role for this user. | [optional] [default to undefined]

## Example

```typescript
import { EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserLicense } from '@edgraph-oss/platform-client';

const instance: EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserLicense = {
    subscriptionTenantId,
    isTenantSubscribed,
    tenantSubscriptionId,
    tenantSubscriptionStartDateTime,
    tenantSubscriptionEndDateTime,
    tenantSubscriptionActualEndDateTime,
    tenantSubscriptionDeletedAt,
    tenantSubscriptionGracePeriod,
    numberOfLicenses,
    assignedLicenses,
    isUserLicensed,
    applicationTenantId,
    applicationId,
    applicationName,
    applicationRole,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
