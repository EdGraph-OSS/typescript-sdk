# EdGraphServicesStateReportingV1AddSubmissionMetricsBulkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**environmentId** | **string** |  | [optional] [default to undefined]
**reportingPeriodId** | **string** |  | [optional] [default to undefined]
**submissionId** | **string** |  | [optional] [default to undefined]
**details** | [**Array&lt;EdGraphServicesStateReportingV1SubmissionMetricsDetails&gt;**](EdGraphServicesStateReportingV1SubmissionMetricsDetails.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { EdGraphServicesStateReportingV1AddSubmissionMetricsBulkRequest } from '@edgraph-oss/platform-client';

const instance: EdGraphServicesStateReportingV1AddSubmissionMetricsBulkRequest = {
    tenantId,
    environmentId,
    reportingPeriodId,
    submissionId,
    details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
