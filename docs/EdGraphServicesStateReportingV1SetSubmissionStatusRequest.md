# EdGraphServicesStateReportingV1SetSubmissionStatusRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**environmentId** | **string** |  | [optional] [default to undefined]
**reportingPeriodId** | **string** |  | [optional] [default to undefined]
**submissionId** | **string** |  | [optional] [default to undefined]
**status** | [**EdGraphServicesStateReportingV1SubmissionStatus**](EdGraphServicesStateReportingV1SubmissionStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EdGraphServicesStateReportingV1SetSubmissionStatusRequest } from '@edgraph-oss/platform-client';

const instance: EdGraphServicesStateReportingV1SetSubmissionStatusRequest = {
    tenantId,
    environmentId,
    reportingPeriodId,
    submissionId,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
