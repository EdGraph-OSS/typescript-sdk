# ValidationsApiDbEnvironmentsV1UpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Details | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**connectionType** | **string** | Connection | [optional] [default to undefined]
**sqlServerConnection** | [**ValidationsApiDbEnvironmentsV1SqlServerConnection**](ValidationsApiDbEnvironmentsV1SqlServerConnection.md) |  | [optional] [default to undefined]
**azureSynapseSqlServerlessConnection** | [**ValidationsApiDbEnvironmentsV1AzureSynapseSqlServerlessConnection**](ValidationsApiDbEnvironmentsV1AzureSynapseSqlServerlessConnection.md) |  | [optional] [default to undefined]
**maxNumberResults** | **number** | Metadata | [optional] [default to undefined]
**timeoutInMinutes** | **number** |  | [optional] [default to undefined]
**version** | **number** |  | [optional] [default to undefined]
**mapTables** | **string** |  | [optional] [default to undefined]
**instanceType** | [**ValidationsApiCoreV1InstanceType**](ValidationsApiCoreV1InstanceType.md) |  | [optional] [default to undefined]
**provider** | [**ValidationsApiCoreV1Provider**](ValidationsApiCoreV1Provider.md) |  | [optional] [default to undefined]
**isDefault** | **boolean** |  | [optional] [default to undefined]
**metadataJson** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ValidationsApiDbEnvironmentsV1UpdateRequest } from '@edgraph-oss/platform-client';

const instance: ValidationsApiDbEnvironmentsV1UpdateRequest = {
    id,
    name,
    connectionType,
    sqlServerConnection,
    azureSynapseSqlServerlessConnection,
    maxNumberResults,
    timeoutInMinutes,
    version,
    mapTables,
    instanceType,
    provider,
    isDefault,
    metadataJson,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
