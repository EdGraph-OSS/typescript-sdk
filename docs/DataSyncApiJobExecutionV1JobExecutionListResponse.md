# DataSyncApiJobExecutionV1JobExecutionListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**jobId** | **string** |  | [optional] [default to undefined]
**applicationId** | **string** |  | [optional] [default to undefined]
**jobExecutionId** | **string** |  | [optional] [default to undefined]
**jobExecutionStatus** | [**DataSyncApiJobExecutionV1JobExecutionStatus**](DataSyncApiJobExecutionV1JobExecutionStatus.md) |  | [optional] [default to undefined]
**jobExecutionStartDateTime** | **string** |  | [optional] [default to undefined]
**jobExecutionEndDateTime** | **string** |  | [optional] [default to undefined]
**childJobs** | [**Array&lt;DataSyncApiJobExecutionV1ChildJob&gt;**](DataSyncApiJobExecutionV1ChildJob.md) |  | [optional] [readonly] [default to undefined]
**metrics** | [**Array&lt;DataSyncApiJobExecutionV1Metric&gt;**](DataSyncApiJobExecutionV1Metric.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { DataSyncApiJobExecutionV1JobExecutionListResponse } from '@edgraph-oss/platform-client';

const instance: DataSyncApiJobExecutionV1JobExecutionListResponse = {
    tenantId,
    jobId,
    applicationId,
    jobExecutionId,
    jobExecutionStatus,
    jobExecutionStartDateTime,
    jobExecutionEndDateTime,
    childJobs,
    metrics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
