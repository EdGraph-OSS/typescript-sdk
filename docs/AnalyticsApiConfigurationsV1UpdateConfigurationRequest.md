# AnalyticsApiConfigurationsV1UpdateConfigurationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**sqlConnectionString** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**useEdGraphPowerBi** | **boolean** |  | [optional] [default to undefined]
**isGlobalConfiguration** | **boolean** |  | [optional] [default to undefined]
**isDefaultTenantConfiguration** | **boolean** |  | [optional] [default to undefined]
**azureAd** | [**AnalyticsApiConfigurationsV1AnalyticsAzureAd**](AnalyticsApiConfigurationsV1AnalyticsAzureAd.md) |  | [optional] [default to undefined]
**powerBi** | [**AnalyticsApiConfigurationsV1AnalyticsPowerBi**](AnalyticsApiConfigurationsV1AnalyticsPowerBi.md) |  | [optional] [default to undefined]
**selectedEdFiConnectionId** | **string** |  | [optional] [default to undefined]
**triggerOptions** | [**Array&lt;AnalyticsApiConfigurationsV1AnalyticsTriggerOption&gt;**](AnalyticsApiConfigurationsV1AnalyticsTriggerOption.md) |  | [optional] [readonly] [default to undefined]
**schoolYears** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { AnalyticsApiConfigurationsV1UpdateConfigurationRequest } from '@edgraph-oss/platform-client';

const instance: AnalyticsApiConfigurationsV1UpdateConfigurationRequest = {
    id,
    tenantId,
    sqlConnectionString,
    status,
    useEdGraphPowerBi,
    isGlobalConfiguration,
    isDefaultTenantConfiguration,
    azureAd,
    powerBi,
    selectedEdFiConnectionId,
    triggerOptions,
    schoolYears,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
