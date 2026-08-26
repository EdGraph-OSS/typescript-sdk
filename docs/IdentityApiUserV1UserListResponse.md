# IdentityApiUserV1UserListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** |  | [optional] [default to undefined]
**userName** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**firstName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**tenantCount** | **number** |  | [optional] [default to undefined]
**tenants** | [**Array&lt;IdentityApiUserV1Tenant&gt;**](IdentityApiUserV1Tenant.md) |  | [optional] [readonly] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]
**logins** | [**Array&lt;IdentityApiUserV1UserLogin&gt;**](IdentityApiUserV1UserLogin.md) |  | [optional] [readonly] [default to undefined]
**source** | **string** |  | [optional] [default to undefined]
**lastLoginDateTime** | **string** |  | [optional] [default to undefined]
**mfaCompleted** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { IdentityApiUserV1UserListResponse } from '@edgraph-oss/platform-client';

const instance: IdentityApiUserV1UserListResponse = {
    userId,
    userName,
    email,
    firstName,
    lastName,
    tenantCount,
    tenants,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
    logins,
    source,
    lastLoginDateTime,
    mfaCompleted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
