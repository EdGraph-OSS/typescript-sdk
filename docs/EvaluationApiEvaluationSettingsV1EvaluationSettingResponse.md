# EvaluationApiEvaluationSettingsV1EvaluationSettingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**forms** | [**Array&lt;EvaluationApiEvaluationSettingsV1FormConfigurationResponse&gt;**](EvaluationApiEvaluationSettingsV1FormConfigurationResponse.md) |  | [optional] [readonly] [default to undefined]
**recommendedNumberOfEvaluations** | **number** |  | [optional] [default to undefined]
**reminderEmailSchedule** | [**EvaluationApiEvaluationSettingsV1ScheduleType**](EvaluationApiEvaluationSettingsV1ScheduleType.md) |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]
**deletedBy** | **string** |  | [optional] [default to undefined]
**deletedDateTime** | **string** |  | [optional] [default to undefined]
**isDeleted** | **boolean** |  | [optional] [default to undefined]
**appraisers** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**staffClassifications** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**availablePersonas** | [**Array&lt;EvaluationApiEvaluationSettingsV1PersonaResponse&gt;**](EvaluationApiEvaluationSettingsV1PersonaResponse.md) |  | [optional] [readonly] [default to undefined]
**roleConfigurations** | [**Array&lt;EvaluationApiEvaluationSettingsV1RoleConfigurationResponse&gt;**](EvaluationApiEvaluationSettingsV1RoleConfigurationResponse.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { EvaluationApiEvaluationSettingsV1EvaluationSettingResponse } from '@edgraph-oss/platform-client';

const instance: EvaluationApiEvaluationSettingsV1EvaluationSettingResponse = {
    id,
    tenantId,
    forms,
    recommendedNumberOfEvaluations,
    reminderEmailSchedule,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
    deletedBy,
    deletedDateTime,
    isDeleted,
    appraisers,
    staffClassifications,
    availablePersonas,
    roleConfigurations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
