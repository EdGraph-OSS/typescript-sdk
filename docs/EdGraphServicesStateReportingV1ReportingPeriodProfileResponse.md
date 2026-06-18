# EdGraphServicesStateReportingV1ReportingPeriodProfileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**environmentId** | **string** |  | [optional] [default to undefined]
**tagId** | **string** |  | [optional] [default to undefined]
**steps** | [**Array&lt;EdGraphServicesStateReportingV1ReportingPeriodStep&gt;**](EdGraphServicesStateReportingV1ReportingPeriodStep.md) |  | [optional] [readonly] [default to undefined]
**ruleIds** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**code** | **string** |  | [optional] [default to undefined]
**displayName** | **string** |  | [optional] [default to undefined]
**startDate** | **string** |  | [optional] [default to undefined]
**endDate** | **string** |  | [optional] [default to undefined]
**closeDate** | **string** |  | [optional] [default to undefined]
**isClosed** | **boolean** |  | [optional] [default to undefined]
**reSubmissionDate** | **string** |  | [optional] [default to undefined]
**autoRunNightly** | **boolean** |  | [optional] [default to undefined]
**selected** | **boolean** |  | [optional] [default to undefined]
**lastRun** | [**EdGraphServicesStateReportingV1ReportingPeriodValidationsRunDto**](EdGraphServicesStateReportingV1ReportingPeriodValidationsRunDto.md) |  | [optional] [default to undefined]
**latestSubmissionRequestDate** | **string** |  | [optional] [default to undefined]
**latestSubmissionId** | **string** |  | [optional] [default to undefined]
**currentStep** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { EdGraphServicesStateReportingV1ReportingPeriodProfileResponse } from '@edgraph-oss/platform-client';

const instance: EdGraphServicesStateReportingV1ReportingPeriodProfileResponse = {
    id,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
    tenantId,
    environmentId,
    tagId,
    steps,
    ruleIds,
    code,
    displayName,
    startDate,
    endDate,
    closeDate,
    isClosed,
    reSubmissionDate,
    autoRunNightly,
    selected,
    lastRun,
    latestSubmissionRequestDate,
    latestSubmissionId,
    currentStep,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
