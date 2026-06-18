# EdfiAdminApiEdfiAdminV1CreateInstanceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instanceName** | **string** | Details | [optional] [default to undefined]
**useCustomId** | **boolean** |  | [optional] [default to undefined]
**customId** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**databaseEngine** | **string** | Connection | [optional] [default to undefined]
**selectedConnectionId** | **string** |  | [optional] [default to undefined]
**schoolYears** | [**Array&lt;EdfiAdminApiEdfiAdminV1CreateInstanceRequestSchoolYear&gt;**](EdfiAdminApiEdfiAdminV1CreateInstanceRequestSchoolYear.md) | School Years | [optional] [readonly] [default to undefined]
**tenantId** | **string** | Metadata | [optional] [default to undefined]
**provider** | **string** | Provider | [optional] [default to undefined]
**enableAdminApi** | **boolean** | Enable Admin API | [optional] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { EdfiAdminApiEdfiAdminV1CreateInstanceRequest } from '@edgraph-oss/platform-client';

const instance: EdfiAdminApiEdfiAdminV1CreateInstanceRequest = {
    instanceName,
    useCustomId,
    customId,
    description,
    databaseEngine,
    selectedConnectionId,
    schoolYears,
    tenantId,
    provider,
    enableAdminApi,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
