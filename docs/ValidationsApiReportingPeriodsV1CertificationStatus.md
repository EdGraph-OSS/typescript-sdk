# ValidationsApiReportingPeriodsV1CertificationStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**reportingPeriod** | [**ValidationsApiReportingPeriodsV1ReportingPeriodDto**](ValidationsApiReportingPeriodsV1ReportingPeriodDto.md) |  | [optional] [default to undefined]
**certificationPercentage** | **number** |  | [optional] [default to undefined]
**categories** | [**Array&lt;ValidationsApiReportingPeriodsV1CertificationStatusCategory&gt;**](ValidationsApiReportingPeriodsV1CertificationStatusCategory.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { ValidationsApiReportingPeriodsV1CertificationStatus } from '@edgraph-oss/platform-client';

const instance: ValidationsApiReportingPeriodsV1CertificationStatus = {
    tenantId,
    reportingPeriod,
    certificationPercentage,
    categories,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
