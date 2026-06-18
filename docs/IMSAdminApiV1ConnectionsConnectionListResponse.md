# IMSAdminApiV1ConnectionsConnectionListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connectionId** | **string** |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]
**allowedTenants** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**details** | [**Array&lt;IMSAdminApiV1ConnectionsConnectionDetails&gt;**](IMSAdminApiV1ConnectionsConnectionDetails.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { IMSAdminApiV1ConnectionsConnectionListResponse } from '@edgraph-oss/platform-client';

const instance: IMSAdminApiV1ConnectionsConnectionListResponse = {
    connectionId,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
    allowedTenants,
    name,
    details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
