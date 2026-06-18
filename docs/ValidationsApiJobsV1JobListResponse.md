# ValidationsApiJobsV1JobListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**jobId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**jobTypeId** | **string** |  | [optional] [default to undefined]
**jobTypeName** | **string** |  | [optional] [default to undefined]
**sourceConnectionId** | **string** |  | [optional] [default to undefined]
**destinationConnectionId** | **string** |  | [optional] [default to undefined]
**profileId** | **string** |  | [optional] [default to undefined]
**applicationId** | **string** |  | [optional] [default to undefined]
**schedule** | [**ValidationsApiJobsV1Schedule**](ValidationsApiJobsV1Schedule.md) |  | [optional] [default to undefined]
**jobStatus** | [**ValidationsApiJobsV1JobStatus**](ValidationsApiJobsV1JobStatus.md) |  | [optional] [default to undefined]
**jobExecutionId** | **string** |  | [optional] [default to undefined]
**jobExecutionStatus** | [**ValidationsApiJobsV1JobExecutionStatus**](ValidationsApiJobsV1JobExecutionStatus.md) |  | [optional] [default to undefined]
**jobExecutionStartDateTime** | **string** |  | [optional] [default to undefined]
**jobExecutionEndDateTime** | **string** |  | [optional] [default to undefined]
**metrics** | [**Array&lt;ValidationsApiJobsV1Metric&gt;**](ValidationsApiJobsV1Metric.md) |  | [optional] [readonly] [default to undefined]
**childJobs** | [**Array&lt;ValidationsApiJobsV1ChildJob&gt;**](ValidationsApiJobsV1ChildJob.md) |  | [optional] [readonly] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]
**collectionId** | **string** |  | [optional] [default to undefined]
**jobExecutionQueuedDateTime** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ValidationsApiJobsV1JobListResponse } from '@edgraph-oss/platform-client';

const instance: ValidationsApiJobsV1JobListResponse = {
    tenantId,
    jobId,
    name,
    jobTypeId,
    jobTypeName,
    sourceConnectionId,
    destinationConnectionId,
    profileId,
    applicationId,
    schedule,
    jobStatus,
    jobExecutionId,
    jobExecutionStatus,
    jobExecutionStartDateTime,
    jobExecutionEndDateTime,
    metrics,
    childJobs,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
    collectionId,
    jobExecutionQueuedDateTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
