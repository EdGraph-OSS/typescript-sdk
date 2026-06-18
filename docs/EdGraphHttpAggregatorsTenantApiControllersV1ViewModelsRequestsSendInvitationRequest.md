# EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsSendInvitationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**firstName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**role** | **string** |  | [optional] [default to undefined]
**assignLicenseRequests** | [**Array&lt;EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesAssignLicenseRequest&gt;**](EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsLicensesAssignLicenseRequest.md) |  | [optional] [default to undefined]
**invitingUserDisplayName** | **string** |  | [optional] [default to undefined]
**dontSendEmail** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsSendInvitationRequest } from '@edgraph-oss/platform-client';

const instance: EdGraphHttpAggregatorsTenantApiControllersV1ViewModelsRequestsSendInvitationRequest = {
    tenantId,
    email,
    firstName,
    lastName,
    role,
    assignLicenseRequests,
    invitingUserDisplayName,
    dontSendEmail,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
