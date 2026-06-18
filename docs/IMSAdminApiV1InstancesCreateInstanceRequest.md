# IMSAdminApiV1InstancesCreateInstanceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**useCustomId** | **boolean** |  | [optional] [default to undefined]
**customId** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**connectionId** | **string** |  | [optional] [default to undefined]
**tier** | **string** |  | [optional] [default to undefined]
**backupCode** | **string** |  | [optional] [default to undefined]
**schoolYear** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { IMSAdminApiV1InstancesCreateInstanceRequest } from '@edgraph-oss/platform-client';

const instance: IMSAdminApiV1InstancesCreateInstanceRequest = {
    tenantId,
    name,
    useCustomId,
    customId,
    description,
    connectionId,
    tier,
    backupCode,
    schoolYear,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
