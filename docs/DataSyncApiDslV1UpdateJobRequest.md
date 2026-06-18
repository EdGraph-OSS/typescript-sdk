# DataSyncApiDslV1UpdateJobRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**jobId** | **string** |  | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**dagWorkflow** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**startDate** | **string** |  | [optional] [default to undefined]
**endDate** | **string** |  | [optional] [default to undefined]
**cron** | **string** |  | [optional] [default to undefined]
**timeZone** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DataSyncApiDslV1UpdateJobRequest } from '@edgraph-oss/platform-client';

const instance: DataSyncApiDslV1UpdateJobRequest = {
    tenantId,
    jobId,
    enabled,
    dagWorkflow,
    name,
    startDate,
    endDate,
    cron,
    timeZone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
