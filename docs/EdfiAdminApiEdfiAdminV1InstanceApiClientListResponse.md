# EdfiAdminApiEdfiAdminV1InstanceApiClientListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**instanceId** | **string** |  | [optional] [default to undefined]
**instanceApplicationId** | **string** |  | [optional] [default to undefined]
**apiClientId** | **string** |  | [optional] [default to undefined]
**key** | **string** |  | [optional] [default to undefined]
**secretName** | **string** |  | [optional] [default to undefined]
**secretValue** | **string** |  | [optional] [default to undefined]
**secretValueType** | [**EdfiAdminApiEdfiAdminV1SecretValueType**](EdfiAdminApiEdfiAdminV1SecretValueType.md) |  | [optional] [default to undefined]
**secretValueEncryptionKey** | **string** |  | [optional] [default to undefined]
**secretEncryptionMetadata** | [**Array&lt;EdfiAdminApiEdfiAdminV1SecretEncryptionMetadata&gt;**](EdfiAdminApiEdfiAdminV1SecretEncryptionMetadata.md) |  | [optional] [readonly] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { EdfiAdminApiEdfiAdminV1InstanceApiClientListResponse } from '@edgraph-oss/platform-client';

const instance: EdfiAdminApiEdfiAdminV1InstanceApiClientListResponse = {
    tenantId,
    instanceId,
    instanceApplicationId,
    apiClientId,
    key,
    secretName,
    secretValue,
    secretValueType,
    secretValueEncryptionKey,
    secretEncryptionMetadata,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
