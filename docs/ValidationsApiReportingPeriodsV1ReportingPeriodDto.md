# ValidationsApiReportingPeriodsV1ReportingPeriodDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**deletedAt** | **string** |  | [optional] [default to undefined]
**deletedBy** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**tagId** | **string** |  | [optional] [default to undefined]
**ruleIds** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**code** | **string** |  | [optional] [default to undefined]
**displayName** | **string** |  | [optional] [default to undefined]
**startDate** | **string** |  | [optional] [default to undefined]
**endDate** | **string** |  | [optional] [default to undefined]
**closeDate** | **string** |  | [optional] [default to undefined]
**reSubmissionDate** | **string** |  | [optional] [default to undefined]
**autoRunNightly** | **boolean** |  | [optional] [default to undefined]
**selected** | **boolean** |  | [optional] [default to undefined]
**lastRun** | [**ValidationsApiReportingPeriodsV1ReportingPeriodValidationsRunDto**](ValidationsApiReportingPeriodsV1ReportingPeriodValidationsRunDto.md) |  | [optional] [default to undefined]
**latestSubmissionRequestDate** | **string** |  | [optional] [default to undefined]
**latestSubmissionId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ValidationsApiReportingPeriodsV1ReportingPeriodDto } from '@edgraph-oss/platform-client';

const instance: ValidationsApiReportingPeriodsV1ReportingPeriodDto = {
    id,
    createdAt,
    createdBy,
    updatedAt,
    updatedBy,
    deletedAt,
    deletedBy,
    tenantId,
    tagId,
    ruleIds,
    code,
    displayName,
    startDate,
    endDate,
    closeDate,
    reSubmissionDate,
    autoRunNightly,
    selected,
    lastRun,
    latestSubmissionRequestDate,
    latestSubmissionId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
