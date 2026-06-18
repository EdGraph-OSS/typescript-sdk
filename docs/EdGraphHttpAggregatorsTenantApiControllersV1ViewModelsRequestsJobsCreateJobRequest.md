# EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsCreateJobRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**jobId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**jobTypeId** | **string** |  | [optional] [default to undefined]
**sourceConnectionId** | **string** |  | [optional] [default to undefined]
**destinationConnectionId** | **string** |  | [optional] [default to undefined]
**profileId** | **string** |  | [optional] [default to undefined]
**jobPoints** | **number** |  | [optional] [default to undefined]
**applicationId** | **string** |  | [optional] [default to undefined]
**dataRefreshType** | [**EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsDataRefreshType**](EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsDataRefreshType.md) |  | [optional] [default to undefined]
**dataRefreshSpecificDate** | **string** |  | [optional] [default to undefined]
**maxApiFailure** | **number** |  | [optional] [default to undefined]
**maxApiRetry** | **number** |  | [optional] [default to undefined]
**jobCompleteCallbackUrl** | **string** |  | [optional] [default to undefined]
**jobMetadata** | [**Array&lt;EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsJobMetadata&gt;**](EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsJobMetadata.md) |  | [optional] [default to undefined]
**schedule** | [**EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsSchedule**](EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsSchedule.md) |  | [optional] [default to undefined]
**notificationEmails** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsCreateJobRequest } from '@edgraph-oss/platform-client';

const instance: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsJobsCreateJobRequest = {
    tenantId,
    jobId,
    name,
    jobTypeId,
    sourceConnectionId,
    destinationConnectionId,
    profileId,
    jobPoints,
    applicationId,
    dataRefreshType,
    dataRefreshSpecificDate,
    maxApiFailure,
    maxApiRetry,
    jobCompleteCallbackUrl,
    jobMetadata,
    schedule,
    notificationEmails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
