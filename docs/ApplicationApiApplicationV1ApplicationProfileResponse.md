# ApplicationApiApplicationV1ApplicationProfileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**applicationId** | **string** |  | [optional] [default to undefined]
**applicationType** | [**ApplicationApiApplicationV1ApplicationType**](ApplicationApiApplicationV1ApplicationType.md) |  | [optional] [default to undefined]
**applicationName** | **string** |  | [optional] [default to undefined]
**applicationUri** | **string** |  | [optional] [default to undefined]
**version** | **string** |  | [optional] [default to undefined]
**tooltipText** | **string** |  | [optional] [default to undefined]
**applicationDescription** | **string** |  | [optional] [default to undefined]
**tags** | **string** |  | [optional] [default to undefined]
**groups** | **string** |  | [optional] [default to undefined]
**applicationStatus** | [**ApplicationApiApplicationV1ApplicationStatus**](ApplicationApiApplicationV1ApplicationStatus.md) |  | [optional] [default to undefined]
**openInNewWindow** | **boolean** |  | [optional] [default to undefined]
**roles** | [**Array&lt;ApplicationApiApplicationV1Role&gt;**](ApplicationApiApplicationV1Role.md) |  | [optional] [readonly] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]
**clientId** | **string** |  | [optional] [default to undefined]
**subscriptionType** | [**ApplicationApiApplicationV1ApplicationSubscriptionType**](ApplicationApiApplicationV1ApplicationSubscriptionType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApplicationApiApplicationV1ApplicationProfileResponse } from '@edgraph-oss/platform-client';

const instance: ApplicationApiApplicationV1ApplicationProfileResponse = {
    tenantId,
    applicationId,
    applicationType,
    applicationName,
    applicationUri,
    version,
    tooltipText,
    applicationDescription,
    tags,
    groups,
    applicationStatus,
    openInNewWindow,
    roles,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
    clientId,
    subscriptionType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
