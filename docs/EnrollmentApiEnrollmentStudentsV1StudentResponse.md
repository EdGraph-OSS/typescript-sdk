# EnrollmentApiEnrollmentStudentsV1StudentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**studentId** | **string** |  | [optional] [default to undefined]
**allowedApplicationProfileIds** | [**Array&lt;EnrollmentApiEnrollmentStudentsV1AllowedApplicationProfileIdMessage&gt;**](EnrollmentApiEnrollmentStudentsV1AllowedApplicationProfileIdMessage.md) |  | [optional] [readonly] [default to undefined]
**firstName** | **string** |  | [optional] [default to undefined]
**middleName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**birthdate** | **string** |  | [optional] [default to undefined]
**localId** | **string** |  | [optional] [default to undefined]
**peimsId** | **string** |  | [optional] [default to undefined]
**last4SSN** | **string** |  | [optional] [default to undefined]
**nextAddress** | **string** |  | [optional] [default to undefined]
**nextGradeLevel** | **string** |  | [optional] [default to undefined]
**nextSchoolCode** | **string** |  | [optional] [default to undefined]
**nextSchoolName** | **string** |  | [optional] [default to undefined]
**nextSchoolAddress** | **string** |  | [optional] [default to undefined]
**eligibilityCode** | **string** |  | [optional] [default to undefined]
**eligibilityDescription** | **string** |  | [optional] [default to undefined]
**contacts** | [**Array&lt;EnrollmentApiEnrollmentStudentsV1StudentContactMessage&gt;**](EnrollmentApiEnrollmentStudentsV1StudentContactMessage.md) |  | [optional] [readonly] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]
**deletedBy** | **string** |  | [optional] [default to undefined]
**deletedDateTime** | **string** |  | [optional] [default to undefined]
**isDeleted** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { EnrollmentApiEnrollmentStudentsV1StudentResponse } from '@edgraph-oss/platform-client';

const instance: EnrollmentApiEnrollmentStudentsV1StudentResponse = {
    id,
    tenantId,
    studentId,
    allowedApplicationProfileIds,
    firstName,
    middleName,
    lastName,
    birthdate,
    localId,
    peimsId,
    last4SSN,
    nextAddress,
    nextGradeLevel,
    nextSchoolCode,
    nextSchoolName,
    nextSchoolAddress,
    eligibilityCode,
    eligibilityDescription,
    contacts,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
    deletedBy,
    deletedDateTime,
    isDeleted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
