# DataSyncApiJobTypeV1JobTypeProfileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobTypeId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**jobPoints** | **number** |  | [optional] [default to undefined]
**hasChildJobs** | **boolean** |  | [optional] [default to undefined]
**childJobField** | **string** |  | [optional] [default to undefined]
**sourceConnectionTypeId** | **string** |  | [optional] [default to undefined]
**destinationConnectionTypeId** | **string** |  | [optional] [default to undefined]
**sourceConnectionRequired** | **boolean** |  | [optional] [default to undefined]
**destinationConnectionRequired** | **boolean** |  | [optional] [default to undefined]
**jobMetadataFields** | [**Array&lt;DataSyncApiJobTypeV1JobMetadataField&gt;**](DataSyncApiJobTypeV1JobMetadataField.md) |  | [optional] [readonly] [default to undefined]
**profiles** | [**Array&lt;DataSyncApiJobTypeV1Profile&gt;**](DataSyncApiJobTypeV1Profile.md) |  | [optional] [readonly] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DataSyncApiJobTypeV1JobTypeProfileResponse } from '@edgraph-oss/platform-client';

const instance: DataSyncApiJobTypeV1JobTypeProfileResponse = {
    jobTypeId,
    name,
    description,
    jobPoints,
    hasChildJobs,
    childJobField,
    sourceConnectionTypeId,
    destinationConnectionTypeId,
    sourceConnectionRequired,
    destinationConnectionRequired,
    jobMetadataFields,
    profiles,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
