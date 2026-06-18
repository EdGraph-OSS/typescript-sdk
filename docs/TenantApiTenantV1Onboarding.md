# TenantApiTenantV1Onboarding


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to undefined]
**progressPercentage** | **number** |  | [optional] [default to undefined]
**totalSteps** | **number** |  | [optional] [default to undefined]
**lastCompletedStep** | **number** |  | [optional] [default to undefined]
**startedAt** | **string** |  | [optional] [default to undefined]
**completedAt** | **string** |  | [optional] [default to undefined]
**steps** | [**Array&lt;TenantApiTenantV1OnboardingStep&gt;**](TenantApiTenantV1OnboardingStep.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { TenantApiTenantV1Onboarding } from '@edgraph-oss/platform-client';

const instance: TenantApiTenantV1Onboarding = {
    status,
    progressPercentage,
    totalSteps,
    lastCompletedStep,
    startedAt,
    completedAt,
    steps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
