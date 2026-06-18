# IdentityApiUserV2UserMeProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** |  | [optional] [default to undefined]
**userName** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**firstName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**tenantCount** | **number** |  | [optional] [default to undefined]
**extensions** | [**Array&lt;IdentityApiUserV2UserExtension&gt;**](IdentityApiUserV2UserExtension.md) |  | [optional] [readonly] [default to undefined]
**selectedTenant** | [**IdentityApiUserV2TenantMeProfile**](IdentityApiUserV2TenantMeProfile.md) |  | [optional] [default to undefined]
**platformRole** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { IdentityApiUserV2UserMeProfile } from '@edgraph-oss/platform-client';

const instance: IdentityApiUserV2UserMeProfile = {
    userId,
    userName,
    email,
    firstName,
    lastName,
    tenantCount,
    extensions,
    selectedTenant,
    platformRole,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
