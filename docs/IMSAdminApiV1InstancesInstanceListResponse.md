# IMSAdminApiV1InstancesInstanceListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instanceId** | **string** |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**useCustomId** | **boolean** |  | [optional] [default to undefined]
**customId** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**connection** | [**IMSAdminApiV1ConnectionsConnectionListResponse**](IMSAdminApiV1ConnectionsConnectionListResponse.md) |  | [optional] [default to undefined]
**tier** | [**IMSAdminApiV1TiersTier**](IMSAdminApiV1TiersTier.md) |  | [optional] [default to undefined]
**backupCode** | [**IMSAdminApiV1DbBackupCodesDbBackupCode**](IMSAdminApiV1DbBackupCodesDbBackupCode.md) |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**schoolYear** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { IMSAdminApiV1InstancesInstanceListResponse } from '@edgraph-oss/platform-client';

const instance: IMSAdminApiV1InstancesInstanceListResponse = {
    instanceId,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
    tenantId,
    name,
    useCustomId,
    customId,
    description,
    connection,
    tier,
    backupCode,
    status,
    schoolYear,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
