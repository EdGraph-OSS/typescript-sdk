# AnalyticsApiReportsV1AnalyticsReport

Entities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**reportId** | **string** |  | [optional] [default to undefined]
**groupId** | **string** |  | [optional] [default to undefined]
**datasetIds** | [**Array&lt;AnalyticsApiReportsV1AnalyticsReportDataset&gt;**](AnalyticsApiReportsV1AnalyticsReportDataset.md) |  | [optional] [readonly] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**reportName** | **string** |  | [optional] [default to undefined]
**shortDescription** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**embedUrl** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**source** | [**AnalyticsApiReportsV1ReportSource**](AnalyticsApiReportsV1ReportSource.md) |  | [optional] [default to undefined]
**isVisible** | **boolean** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]
**deletedBy** | **string** |  | [optional] [default to undefined]
**deletedDateTime** | **string** |  | [optional] [default to undefined]
**lastUploadedBy** | **string** |  | [optional] [default to undefined]
**lastUploadedDateTime** | **string** |  | [optional] [default to undefined]
**downloadUri** | **string** |  | [optional] [default to undefined]
**version** | **string** |  | [optional] [default to undefined]
**rolesRequired** | **boolean** |  | [optional] [default to undefined]
**identityRequired** | **boolean** |  | [optional] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AnalyticsApiReportsV1AnalyticsReport } from '@edgraph-oss/platform-client';

const instance: AnalyticsApiReportsV1AnalyticsReport = {
    id,
    tenantId,
    reportId,
    groupId,
    datasetIds,
    name,
    reportName,
    shortDescription,
    description,
    embedUrl,
    type,
    source,
    isVisible,
    tags,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
    deletedBy,
    deletedDateTime,
    lastUploadedBy,
    lastUploadedDateTime,
    downloadUri,
    version,
    rolesRequired,
    identityRequired,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
