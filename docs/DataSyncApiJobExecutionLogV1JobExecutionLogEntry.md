# DataSyncApiJobExecutionLogV1JobExecutionLogEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**jobId** | **string** |  | [optional] [default to undefined]
**jobExecutionId** | **string** |  | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**messageType** | [**DataSyncApiJobExecutionLogV1MessageType**](DataSyncApiJobExecutionLogV1MessageType.md) |  | [optional] [default to undefined]
**loggedDateTime** | **string** |  | [optional] [default to undefined]
**errorCode** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DataSyncApiJobExecutionLogV1JobExecutionLogEntry } from '@edgraph-oss/platform-client';

const instance: DataSyncApiJobExecutionLogV1JobExecutionLogEntry = {
    tenantId,
    jobId,
    jobExecutionId,
    message,
    messageType,
    loggedDateTime,
    errorCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
