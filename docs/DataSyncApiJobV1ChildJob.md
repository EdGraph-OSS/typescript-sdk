# DataSyncApiJobV1ChildJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **string** |  | [optional] [default to undefined]
**jobExecutionId** | **string** |  | [optional] [default to undefined]
**childJobId** | **string** |  | [optional] [default to undefined]
**childJobName** | **string** |  | [optional] [default to undefined]
**jobExecutionStatus** | [**DataSyncApiJobV1JobExecutionStatus**](DataSyncApiJobV1JobExecutionStatus.md) |  | [optional] [default to undefined]
**jobExecutionStartDateTime** | **string** |  | [optional] [default to undefined]
**jobExecutionEndDateTime** | **string** |  | [optional] [default to undefined]
**metrics** | [**Array&lt;DataSyncApiJobV1Metric&gt;**](DataSyncApiJobV1Metric.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { DataSyncApiJobV1ChildJob } from '@edgraph-oss/platform-client';

const instance: DataSyncApiJobV1ChildJob = {
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
