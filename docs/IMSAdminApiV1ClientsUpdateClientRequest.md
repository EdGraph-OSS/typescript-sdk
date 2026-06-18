# IMSAdminApiV1ClientsUpdateClientRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**applicationId** | **string** |  | [optional] [default to undefined]
**clientId** | **string** |  | [optional] [default to undefined]
**clientName** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**allowedScopes** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**claims** | [**Array&lt;IMSAdminApiV1ClientsClaim&gt;**](IMSAdminApiV1ClientsClaim.md) |  | [optional] [readonly] [default to undefined]
**instanceId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { IMSAdminApiV1ClientsUpdateClientRequest } from '@edgraph-oss/platform-client';

const instance: IMSAdminApiV1ClientsUpdateClientRequest = {
    tenantId,
    applicationId,
    clientId,
    clientName,
    description,
    enabled,
    allowedScopes,
    claims,
    instanceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
