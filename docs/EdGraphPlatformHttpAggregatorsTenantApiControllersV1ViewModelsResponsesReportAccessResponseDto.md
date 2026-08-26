# EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesReportAccessResponseDto

A report\'s audience targeting, returned with EdGraph.Platform.HttpAggregators.Tenant.Api.Controllers.v1.ViewModels.Responses.ReportAccessResponseDto.TargetAudience as a stable  string (\"AnyoneInTenant\" | \"UsersWithRoleInTenant\" | \"SpecificUsersInTenant\") so the client  does not depend on proto enum serialization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**reportId** | **string** |  | [optional] [default to undefined]
**targetAudience** | **string** |  | [optional] [default to undefined]
**staffClassifications** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**users** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesReportAccessResponseDto } from '@edgraph-oss/platform-client';

const instance: EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesReportAccessResponseDto = {
    tenantId,
    reportId,
    targetAudience,
    staffClassifications,
    users,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
