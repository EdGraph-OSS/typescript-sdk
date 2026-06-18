# EdFiAdminApiApplicationAccessV1UpdateApplicationAccessRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**applicationId** | **number** |  | [optional] [default to undefined]
**apiClientId** | **number** |  | [optional] [default to undefined]
**users** | [**Array&lt;EdFiAdminApiApplicationAccessV1ApplicationUserAccessResponse&gt;**](EdFiAdminApiApplicationAccessV1ApplicationUserAccessResponse.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { EdFiAdminApiApplicationAccessV1UpdateApplicationAccessRequest } from '@edgraph-oss/platform-client';

const instance: EdFiAdminApiApplicationAccessV1UpdateApplicationAccessRequest = {
    id,
    tenantId,
    applicationId,
    apiClientId,
    users,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
