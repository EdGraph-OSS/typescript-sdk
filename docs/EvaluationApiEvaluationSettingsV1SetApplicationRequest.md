# EvaluationApiEvaluationSettingsV1SetApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**forms** | [**Array&lt;EvaluationApiEvaluationSettingsV1SetFormConfigurationRequest&gt;**](EvaluationApiEvaluationSettingsV1SetFormConfigurationRequest.md) |  | [optional] [readonly] [default to undefined]
**recommendedNumberOfEvaluations** | **number** |  | [optional] [default to undefined]
**reminderEmailSchedule** | [**EvaluationApiEvaluationSettingsV1ScheduleType**](EvaluationApiEvaluationSettingsV1ScheduleType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EvaluationApiEvaluationSettingsV1SetApplicationRequest } from '@edgraph-oss/platform-client';

const instance: EvaluationApiEvaluationSettingsV1SetApplicationRequest = {
    tenantId,
    forms,
    recommendedNumberOfEvaluations,
    reminderEmailSchedule,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
