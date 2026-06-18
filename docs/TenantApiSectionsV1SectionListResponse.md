# TenantApiSectionsV1SectionListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sectionId** | **string** |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**schoolId** | **number** |  | [optional] [default to undefined]
**schoolName** | **string** |  | [optional] [default to undefined]
**sessionName** | **string** |  | [optional] [default to undefined]
**term** | **string** |  | [optional] [default to undefined]
**localCourseCode** | **string** |  | [optional] [default to undefined]
**localCourseTitle** | **string** |  | [optional] [default to undefined]
**courseCode** | **string** |  | [optional] [default to undefined]
**courseTitle** | **string** |  | [optional] [default to undefined]
**academicSubjects** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**offeredGradeLevels** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**sectionIdentifier** | **string** |  | [optional] [default to undefined]
**sectionName** | **string** |  | [optional] [default to undefined]
**sectionType** | **string** |  | [optional] [default to undefined]
**source** | [**TenantApiSectionsV1SectionSource**](TenantApiSectionsV1SectionSource.md) |  | [optional] [default to undefined]
**edFiInstanceId** | **string** |  | [optional] [default to undefined]
**jobId** | **string** |  | [optional] [default to undefined]
**jobExecutionId** | **string** |  | [optional] [default to undefined]
**schoolYear** | **number** |  | [optional] [default to undefined]
**classPeriods** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { TenantApiSectionsV1SectionListResponse } from '@edgraph-oss/platform-client';

const instance: TenantApiSectionsV1SectionListResponse = {
    sectionId,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
    tenantId,
    schoolId,
    schoolName,
    sessionName,
    term,
    localCourseCode,
    localCourseTitle,
    courseCode,
    courseTitle,
    academicSubjects,
    offeredGradeLevels,
    sectionIdentifier,
    sectionName,
    sectionType,
    source,
    edFiInstanceId,
    jobId,
    jobExecutionId,
    schoolYear,
    classPeriods,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
