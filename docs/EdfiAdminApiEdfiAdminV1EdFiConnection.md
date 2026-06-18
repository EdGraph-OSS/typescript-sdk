# EdfiAdminApiEdfiAdminV1EdFiConnection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**connectionName** | **string** |  | [optional] [default to undefined]
**databaseEngine** | **string** |  | [optional] [default to undefined]
**edFiVersion** | **string** |  | [optional] [default to undefined]
**edFiExtension** | **string** |  | [optional] [default to undefined]
**hostingProvider** | **string** |  | [optional] [default to undefined]
**allowedTenantIds** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**tiers** | [**Array&lt;EdfiAdminApiEdfiAdminV1EdFiConnectionTier&gt;**](EdfiAdminApiEdfiAdminV1EdFiConnectionTier.md) |  | [optional] [readonly] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]
**connectionType** | **string** |  | [optional] [default to undefined]
**instanceType** | [**EdfiAdminApiEdfiAdminV1InstanceType**](EdfiAdminApiEdfiAdminV1InstanceType.md) |  | [optional] [default to undefined]
**deletedBy** | **string** |  | [optional] [default to undefined]
**deletedDateTime** | **string** |  | [optional] [default to undefined]
**isDeleted** | **boolean** |  | [optional] [default to undefined]
**metadataJson** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { EdfiAdminApiEdfiAdminV1EdFiConnection } from '@edgraph-oss/platform-client';

const instance: EdfiAdminApiEdfiAdminV1EdFiConnection = {
    id,
    connectionName,
    databaseEngine,
    edFiVersion,
    edFiExtension,
    hostingProvider,
    allowedTenantIds,
    tiers,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
    connectionType,
    instanceType,
    deletedBy,
    deletedDateTime,
    isDeleted,
    metadataJson,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
