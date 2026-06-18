# IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]
**isDeleted** | **boolean** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**jobTypeId** | **string** |  | [optional] [default to undefined]
**jobTypeName** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**input** | **string** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**schedule** | [**IdentityApiInstructionalInsightsV1ScheduleMessage**](IdentityApiInstructionalInsightsV1ScheduleMessage.md) |  | [optional] [default to undefined]
**retryPolicy** | [**IdentityApiInstructionalInsightsV1RetryPolicyMessage**](IdentityApiInstructionalInsightsV1RetryPolicyMessage.md) |  | [optional] [default to undefined]
**callbackNotifications** | [**Array&lt;IdentityApiInstructionalInsightsV1CallbackNotificationMessage&gt;**](IdentityApiInstructionalInsightsV1CallbackNotificationMessage.md) |  | [optional] [readonly] [default to undefined]
**lastExecution** | [**IdentityApiInstructionalInsightsV1JobExecutionMessage**](IdentityApiInstructionalInsightsV1JobExecutionMessage.md) |  | [optional] [default to undefined]

## Example

```typescript
import { IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobResponse } from '@edgraph-oss/platform-client';

const instance: IdentityApiInstructionalInsightsV1InstructionalInsightsSecuritySyncJobResponse = {
    id,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
    isDeleted,
    tenantId,
    jobTypeId,
    jobTypeName,
    name,
    input,
    active,
    schedule,
    retryPolicy,
    callbackNotifications,
    lastExecution,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
