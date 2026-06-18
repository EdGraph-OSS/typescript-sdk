# EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserTenantLicenseRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **string** |  | [optional] [default to undefined]
**isImplicitlyAssigned** | **boolean** |  | [optional] [default to undefined]
**status** | **string** | Maps to EdGraph.Platform.HttpAggregators.Tenant.Api.Controllers.v1.ViewModels.Responses.UserTenantLicenseRoleStatus.&lt;br&gt;&lt;/br&gt;    For more info on deprecation see: Task 9962: Modify implicit license response to prioritize explicit licenses over implicit (part 2) (https://dev.azure.com/edwire/EW.Educate/_workitems/edit/9962)&lt;br&gt;&lt;/br&gt;    Use EdGraph.Platform.HttpAggregators.Tenant.Api.Controllers.v1.ViewModels.Responses.LicenseSource instead.&lt;br&gt;&lt;/br&gt; | [optional] [default to undefined]
**educationOrganizationId** | **number** |  | [optional] [default to undefined]
**staffClassification** | **string** |  | [optional] [default to undefined]
**source** | **string** | Maps to EdGraph.Platform.HttpAggregators.Tenant.Api.Controllers.v1.ViewModels.Responses.LicenseSource.&lt;br&gt;&lt;/br&gt;    For more info see: Task 9962: Modify implicit license response to prioritize explicit licenses over implicit (part 2) (https://dev.azure.com/edwire/EW.Educate/_workitems/edit/9962) | [optional] [default to undefined]

## Example

```typescript
import { EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserTenantLicenseRole } from '@edgraph-oss/platform-client';

const instance: EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserTenantLicenseRole = {
    role,
    isImplicitlyAssigned,
    status,
    educationOrganizationId,
    staffClassification,
    source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
