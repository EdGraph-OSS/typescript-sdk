# ValidationsApiDbEnvironmentsV1TestConnectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**connectionType** | **string** |  | [optional] [default to undefined]
**sqlServerConnection** | [**ValidationsApiDbEnvironmentsV1SqlServerConnection**](ValidationsApiDbEnvironmentsV1SqlServerConnection.md) |  | [optional] [default to undefined]
**azureSynapseSqlServerlessConnection** | [**ValidationsApiDbEnvironmentsV1AzureSynapseSqlServerlessConnection**](ValidationsApiDbEnvironmentsV1AzureSynapseSqlServerlessConnection.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ValidationsApiDbEnvironmentsV1TestConnectionRequest } from '@edgraph-oss/platform-client';

const instance: ValidationsApiDbEnvironmentsV1TestConnectionRequest = {
    id,
    connectionType,
    sqlServerConnection,
    azureSynapseSqlServerlessConnection,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
