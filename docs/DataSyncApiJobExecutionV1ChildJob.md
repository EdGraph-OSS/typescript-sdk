# DataSyncApiJobExecutionV1ChildJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **string** |  | [optional] [default to undefined]
**jobExecutionId** | **string** |  | [optional] [default to undefined]
**childJobId** | **string** |  | [optional] [default to undefined]
**childJobName** | **string** |  | [optional] [default to undefined]
**jobExecutionStatus** | [**DataSyncApiJobExecutionV1JobExecutionStatus**](DataSyncApiJobExecutionV1JobExecutionStatus.md) |  | [optional] [default to undefined]
**jobExecutionStartDateTime** | **string** |  | [optional] [default to undefined]
**jobExecutionEndDateTime** | **string** |  | [optional] [default to undefined]
**metrics** | [**Array&lt;DataSyncApiJobExecutionV1Metric&gt;**](DataSyncApiJobExecutionV1Metric.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { DataSyncApiJobExecutionV1ChildJob } from '@edgraph-oss/platform-client';

const instance: DataSyncApiJobExecutionV1ChildJob = {
    jobId,
    jobExecutionId,
    childJobId,
    childJobName,
    jobExecutionStatus,
    jobExecutionStartDateTime,
    jobExecutionEndDateTime,
    metrics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
