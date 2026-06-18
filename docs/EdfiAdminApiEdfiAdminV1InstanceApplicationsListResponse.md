# EdfiAdminApiEdfiAdminV1InstanceApplicationsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**instanceId** | **string** |  | [optional] [default to undefined]
**instanceApplicationId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**apiClients** | [**Array&lt;EdfiAdminApiEdfiAdminV1InstanceApiClientListResponse&gt;**](EdfiAdminApiEdfiAdminV1InstanceApiClientListResponse.md) |  | [optional] [readonly] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { EdfiAdminApiEdfiAdminV1InstanceApplicationsListResponse } from '@edgraph-oss/platform-client';

const instance: EdfiAdminApiEdfiAdminV1InstanceApplicationsListResponse = {
    tenantId,
    instanceId,
    instanceApplicationId,
    name,
    apiClients,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
