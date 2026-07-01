# IdentityApiUserV2UserProfileResponse

Entities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** |  | [optional] [default to undefined]
**userName** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**firstName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**phoneNumber** | **string** |  | [optional] [default to undefined]
**lockoutEnabled** | **boolean** |  | [optional] [default to undefined]
**tenantCount** | **number** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]
**extensions** | [**Array&lt;IdentityApiUserV2UserExtension&gt;**](IdentityApiUserV2UserExtension.md) |  | [optional] [readonly] [default to undefined]
**logins** | [**Array&lt;IdentityApiUserV2UserLogin&gt;**](IdentityApiUserV2UserLogin.md) |  | [optional] [readonly] [default to undefined]
**source** | **string** |  | [optional] [default to undefined]
**lastLoginDateTime** | **string** |  | [optional] [default to undefined]
**mfaCompleted** | **boolean** |  | [optional] [default to undefined]
**platformRole** | **string** |  | [optional] [default to undefined]
**tenantStatus** | **string** |  | [optional] [default to undefined]
**tenantAdmin** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { IdentityApiUserV2UserProfileResponse } from '@edgraph-oss/platform-client';

const instance: IdentityApiUserV2UserProfileResponse = {
    userId,
    userName,
    email,
    firstName,
    lastName,
    phoneNumber,
    lockoutEnabled,
    tenantCount,
    createdDateTime,
    lastModifiedDateTime,
    extensions,
    logins,
    source,
    lastLoginDateTime,
    mfaCompleted,
    platformRole,
    tenantStatus,
    tenantAdmin,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
