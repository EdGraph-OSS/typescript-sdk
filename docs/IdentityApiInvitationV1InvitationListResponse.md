# IdentityApiInvitationV1InvitationListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**invitationId** | **string** |  | [optional] [default to undefined]
**firstName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**role** | **string** |  | [optional] [default to undefined]
**invitationToken** | **string** |  | [optional] [default to undefined]
**invitationStatus** | [**IdentityApiInvitationV1InvitationStatus**](IdentityApiInvitationV1InvitationStatus.md) |  | [optional] [default to undefined]
**invitationSentDateTime** | **string** |  | [optional] [default to undefined]
**assignLicenseRequests** | [**Array&lt;IdentityApiInvitationV1AssignLicenseRequest&gt;**](IdentityApiInvitationV1AssignLicenseRequest.md) |  | [optional] [readonly] [default to undefined]
**invitationUrl** | **string** |  | [optional] [default to undefined]
**organizationName** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { IdentityApiInvitationV1InvitationListResponse } from '@edgraph-oss/platform-client';

const instance: IdentityApiInvitationV1InvitationListResponse = {
    tenantId,
    invitationId,
    firstName,
    lastName,
    email,
    role,
    invitationToken,
    invitationStatus,
    invitationSentDateTime,
    assignLicenseRequests,
    invitationUrl,
    organizationName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
