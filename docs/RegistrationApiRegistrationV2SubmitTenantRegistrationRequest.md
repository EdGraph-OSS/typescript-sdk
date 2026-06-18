# RegistrationApiRegistrationV2SubmitTenantRegistrationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantTypes** | [**Array&lt;RegistrationApiRegistrationV2TenantType&gt;**](RegistrationApiRegistrationV2TenantType.md) |  | [optional] [readonly] [default to undefined]
**firstName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]
**organizationIdentifier** | **string** |  | [optional] [default to undefined]
**organizationName** | **string** |  | [optional] [default to undefined]
**password** | **string** |  | [optional] [default to undefined]
**applicationIds** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**azureSubscriptionId** | **string** |  | [optional] [default to undefined]
**azureSubscriptionStoragePath** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { RegistrationApiRegistrationV2SubmitTenantRegistrationRequest } from '@edgraph-oss/platform-client';

const instance: RegistrationApiRegistrationV2SubmitTenantRegistrationRequest = {
    tenantTypes,
    firstName,
    lastName,
    email,
    state,
    organizationIdentifier,
    organizationName,
    password,
    applicationIds,
    azureSubscriptionId,
    azureSubscriptionStoragePath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
