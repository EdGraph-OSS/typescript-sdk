# IdentityApiApiClientV1UpdateApiClientRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**clientId** | **string** |  | [optional] [default to undefined]
**clientName** | **string** |  | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**apiClaims** | [**Array&lt;IdentityApiApiClientV1ApiClaim&gt;**](IdentityApiApiClientV1ApiClaim.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { IdentityApiApiClientV1UpdateApiClientRequest } from '@edgraph-oss/platform-client';

const instance: IdentityApiApiClientV1UpdateApiClientRequest = {
    tenantId,
    clientId,
    clientName,
    enabled,
    apiClaims,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
