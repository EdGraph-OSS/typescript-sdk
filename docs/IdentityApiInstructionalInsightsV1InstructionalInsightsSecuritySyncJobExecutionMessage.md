# IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobExecutionMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executionId** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**jobId** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**queuedDateTime** | **string** |  | [optional] [default to undefined]
**startDateTime** | **string** |  | [optional] [default to undefined]
**cancelDateTime** | **string** |  | [optional] [default to undefined]
**endDateTime** | **string** |  | [optional] [default to undefined]
**input** | **string** |  | [optional] [default to undefined]
**output** | **string** |  | [optional] [default to undefined]
**metrics** | [**Array&lt;IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobExecutionMetricMessage&gt;**](IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobExecutionMetricMessage.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobExecutionMessage } from '@edgraph-oss/platform-client';

const instance: IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobExecutionMessage = {
    executionId,
    tenantId,
    jobId,
    status,
    queuedDateTime,
    startDateTime,
    cancelDateTime,
    endDateTime,
    input,
    output,
    metrics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
