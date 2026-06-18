# ValidationsApiJobsV1ChildJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **string** |  | [optional] [default to undefined]
**jobExecutionId** | **string** |  | [optional] [default to undefined]
**childJobId** | **string** |  | [optional] [default to undefined]
**childJobName** | **string** |  | [optional] [default to undefined]
**jobExecutionStatus** | [**ValidationsApiJobsV1JobExecutionStatus**](ValidationsApiJobsV1JobExecutionStatus.md) |  | [optional] [default to undefined]
**jobExecutionStartDateTime** | **string** |  | [optional] [default to undefined]
**jobExecutionEndDateTime** | **string** |  | [optional] [default to undefined]
**metrics** | [**Array&lt;ValidationsApiJobsV1Metric&gt;**](ValidationsApiJobsV1Metric.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { ValidationsApiJobsV1ChildJob } from '@edgraph-oss/platform-client';

const instance: ValidationsApiJobsV1ChildJob = {
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
