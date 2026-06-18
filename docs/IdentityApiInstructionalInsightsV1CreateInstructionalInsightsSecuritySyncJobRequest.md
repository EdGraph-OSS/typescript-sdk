# IdentityApiInstructionalInsightsV1CreateInstructionalInsightsSecuritySyncJobRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**jobId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**input** | [**IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobInputMessage**](IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobInputMessage.md) |  | [optional] [default to undefined]
**schedule** | [**IdentityApiInstructionalInsightsV1ScheduleMessage**](IdentityApiInstructionalInsightsV1ScheduleMessage.md) |  | [optional] [default to undefined]
**retryPolicy** | [**IdentityApiInstructionalInsightsV1RetryPolicyMessage**](IdentityApiInstructionalInsightsV1RetryPolicyMessage.md) |  | [optional] [default to undefined]
**callbackNotifications** | [**Array&lt;IdentityApiInstructionalInsightsV1CallbackNotificationMessage&gt;**](IdentityApiInstructionalInsightsV1CallbackNotificationMessage.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { IdentityApiInstructionalInsightsV1CreateInstructionalInsightsSecuritySyncJobRequest } from '@edgraph-oss/platform-client';

const instance: IdentityApiInstructionalInsightsV1CreateInstructionalInsightsSecuritySyncJobRequest = {
    tenantId,
    jobId,
    name,
    input,
    schedule,
    retryPolicy,
    callbackNotifications,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
