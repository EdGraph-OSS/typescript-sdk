# EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsRequestsReportAccessRequest

Payload for setting a report\'s audience targeting. EdGraph.Platform.HttpAggregators.Tenant.Api.Controllers.v1.ViewModels.Requests.ReportAccessRequest.TargetAudience is one of  \"AnyoneInTenant\", \"UsersWithRoleInTenant\", or \"SpecificUsersInTenant\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targetAudience** | **string** |  | [optional] [default to undefined]
**staffClassifications** | **Array&lt;string&gt;** | Targeted EdFi staff classifications (&#x60;namespace#codeValue&#x60;). | [optional] [default to undefined]
**users** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsRequestsReportAccessRequest } from '@edgraph-oss/platform-client';

const instance: EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsRequestsReportAccessRequest = {
    targetAudience,
    staffClassifications,
    users,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
