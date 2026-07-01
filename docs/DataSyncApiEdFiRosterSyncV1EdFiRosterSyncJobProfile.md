# DataSyncApiEdFiRosterSyncV1EdFiRosterSyncJobProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**mode** | [**DataSyncApiEdFiRosterSyncV1EdFiRosterSyncJobMode**](DataSyncApiEdFiRosterSyncV1EdFiRosterSyncJobMode.md) |  | [optional] [default to undefined]
**provider** | [**DataSyncApiEdFiRosterSyncV1EdFiRosterSyncJobProvider**](DataSyncApiEdFiRosterSyncV1EdFiRosterSyncJobProvider.md) |  | [optional] [default to undefined]
**connectionId** | **string** |  | [optional] [default to undefined]
**jobId** | **string** |  | [optional] [default to undefined]
**clientId** | **string** |  | [optional] [default to undefined]
**clientSecret** | **string** |  | [optional] [default to undefined]
**baseUrl** | **string** |  | [optional] [default to undefined]
**authenticationUrl** | **string** |  | [optional] [default to undefined]
**resourcesUrl** | **string** |  | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**edFiInstanceId** | **string** |  | [optional] [default to undefined]
**useSSAInsteadOfSEOAA** | [**DataSyncApiEdFiRosterSyncV1UseSSAInsteadOfSEOAAOptions**](DataSyncApiEdFiRosterSyncV1UseSSAInsteadOfSEOAAOptions.md) |  | [optional] [default to undefined]
**importSectionAndCourseData** | **boolean** |  | [optional] [default to undefined]
**useStaffEdOrgContactAssociationForEmails** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { DataSyncApiEdFiRosterSyncV1EdFiRosterSyncJobProfile } from '@edgraph-oss/platform-client';

const instance: DataSyncApiEdFiRosterSyncV1EdFiRosterSyncJobProfile = {
    tenantId,
    mode,
    provider,
    connectionId,
    jobId,
    clientId,
    clientSecret,
    baseUrl,
    authenticationUrl,
    resourcesUrl,
    enabled,
    edFiInstanceId,
    useSSAInsteadOfSEOAA,
    importSectionAndCourseData,
    useStaffEdOrgContactAssociationForEmails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
