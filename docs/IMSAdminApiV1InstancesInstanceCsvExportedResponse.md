# IMSAdminApiV1InstancesInstanceCsvExportedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instanceId** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**status** | [**IMSAdminApiV1InstancesExportState**](IMSAdminApiV1InstancesExportState.md) |  | [optional] [default to undefined]
**details** | **string** |  | [optional] [default to undefined]
**zippedContents** | **Array&lt;number&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { IMSAdminApiV1InstancesInstanceCsvExportedResponse } from '@edgraph-oss/platform-client';

const instance: IMSAdminApiV1InstancesInstanceCsvExportedResponse = {
    instanceId,
    tenantId,
    status,
    details,
    zippedContents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
