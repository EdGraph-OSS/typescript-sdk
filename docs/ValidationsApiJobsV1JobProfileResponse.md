# ValidationsApiJobsV1JobProfileResponse


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
**profileName** | **string** |  | [optional] [default to undefined]
**applicationId** | **string** |  | [optional] [default to undefined]
**jobPoints** | **number** |  | [optional] [default to undefined]
**dataRefreshType** | [**ValidationsApiJobsV1DataRefreshType**](ValidationsApiJobsV1DataRefreshType.md) |  | [optional] [default to undefined]
**dataRefreshSpecificDate** | **string** |  | [optional] [default to undefined]
**maxApiFailure** | **number** |  | [optional] [default to undefined]
**maxApiRetry** | **number** |  | [optional] [default to undefined]
**jobCompleteCallbackUrl** | **string** |  | [optional] [default to undefined]
**jobMetadata** | [**Array&lt;ValidationsApiJobsV1JobMetadata&gt;**](ValidationsApiJobsV1JobMetadata.md) |  | [optional] [readonly] [default to undefined]
**schedule** | [**ValidationsApiJobsV1Schedule**](ValidationsApiJobsV1Schedule.md) |  | [optional] [default to undefined]
**notificationEmails** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
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

## Example

```typescript
import { ValidationsApiJobsV1JobProfileResponse } from '@edgraph-oss/platform-client';

const instance: ValidationsApiJobsV1JobProfileResponse = {
    tenantId,
    jobId,
    name,
    jobTypeId,
    jobTypeName,
    sourceConnectionId,
    destinationConnectionId,
    profileId,
    profileName,
    applicationId,
    jobPoints,
    dataRefreshType,
    dataRefreshSpecificDate,
    maxApiFailure,
    maxApiRetry,
    jobCompleteCallbackUrl,
    jobMetadata,
    schedule,
    notificationEmails,
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
