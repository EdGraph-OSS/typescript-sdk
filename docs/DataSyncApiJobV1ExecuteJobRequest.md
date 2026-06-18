# DataSyncApiJobV1ExecuteJobRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**jobId** | **string** |  | [optional] [default to undefined]
**childJobId** | **string** |  | [optional] [default to undefined]
**dataRefreshType** | [**DataSyncApiJobV1DataRefreshType**](DataSyncApiJobV1DataRefreshType.md) |  | [optional] [default to undefined]
**dataRefreshSpecificDate** | **string** |  | [optional] [default to undefined]
**jobExecutionMetadata** | [**Array&lt;DataSyncApiJobV1JobExecutionMetadata&gt;**](DataSyncApiJobV1JobExecutionMetadata.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { DataSyncApiJobV1ExecuteJobRequest } from '@edgraph-oss/platform-client';

const instance: DataSyncApiJobV1ExecuteJobRequest = {
    tenantId,
    jobId,
    childJobId,
    dataRefreshType,
    dataRefreshSpecificDate,
    jobExecutionMetadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
