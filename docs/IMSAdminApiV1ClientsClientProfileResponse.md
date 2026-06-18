# IMSAdminApiV1ClientsClientProfileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**applicationId** | **string** |  | [optional] [default to undefined]
**clientId** | **string** |  | [optional] [default to undefined]
**clientName** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**clientUri** | **string** |  | [optional] [default to undefined]
**logoUri** | **string** |  | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**accessTokenType** | [**IMSAdminApiV1ClientsAccessTokenType**](IMSAdminApiV1ClientsAccessTokenType.md) |  | [optional] [default to undefined]
**tokenUsage** | [**IMSAdminApiV1ClientsTokenUsage**](IMSAdminApiV1ClientsTokenUsage.md) |  | [optional] [default to undefined]
**refreshTokenExpiration** | [**IMSAdminApiV1ClientsTokenExpiration**](IMSAdminApiV1ClientsTokenExpiration.md) |  | [optional] [default to undefined]
**enableLocalLogin** | **boolean** |  | [optional] [default to undefined]
**allowOfflineAccess** | **boolean** |  | [optional] [default to undefined]
**allowAccessTokensViaBrowser** | **boolean** |  | [optional] [default to undefined]
**updateAccessTokenClaimsOnRefresh** | **boolean** |  | [optional] [default to undefined]
**alwaysIncludeUserClaimsInIdToken** | **boolean** |  | [optional] [default to undefined]
**identityTokenLifetime** | **number** |  | [optional] [default to undefined]
**accessTokenLifetime** | **number** |  | [optional] [default to undefined]
**authorizationCodeLifetime** | **number** |  | [optional] [default to undefined]
**absoluteRefreshTokenLifetime** | **number** |  | [optional] [default to undefined]
**slidingRefreshTokenLifetime** | **number** |  | [optional] [default to undefined]
**requireClientSecret** | **boolean** |  | [optional] [default to undefined]
**requireConsent** | **boolean** |  | [optional] [default to undefined]
**allowedScopes** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**allowedCorsOrigins** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**allowedGrantTypes** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**identityProviderRestrictions** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**redirectUris** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**postLogoutRedirectUris** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**clientSecrets** | [**Array&lt;IMSAdminApiV1ClientsSecret&gt;**](IMSAdminApiV1ClientsSecret.md) |  | [optional] [readonly] [default to undefined]
**claims** | [**Array&lt;IMSAdminApiV1ClientsClaim&gt;**](IMSAdminApiV1ClientsClaim.md) |  | [optional] [readonly] [default to undefined]
**requirePkce** | **boolean** |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdDateTime** | **string** |  | [optional] [default to undefined]
**lastModifiedBy** | **string** |  | [optional] [default to undefined]
**lastModifiedDateTime** | **string** |  | [optional] [default to undefined]
**instanceId** | **string** |  | [optional] [default to undefined]
**selectedScope** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { IMSAdminApiV1ClientsClientProfileResponse } from '@edgraph-oss/platform-client';

const instance: IMSAdminApiV1ClientsClientProfileResponse = {
    tenantId,
    applicationId,
    clientId,
    clientName,
    description,
    clientUri,
    logoUri,
    enabled,
    accessTokenType,
    tokenUsage,
    refreshTokenExpiration,
    enableLocalLogin,
    allowOfflineAccess,
    allowAccessTokensViaBrowser,
    updateAccessTokenClaimsOnRefresh,
    alwaysIncludeUserClaimsInIdToken,
    identityTokenLifetime,
    accessTokenLifetime,
    authorizationCodeLifetime,
    absoluteRefreshTokenLifetime,
    slidingRefreshTokenLifetime,
    requireClientSecret,
    requireConsent,
    allowedScopes,
    allowedCorsOrigins,
    allowedGrantTypes,
    identityProviderRestrictions,
    redirectUris,
    postLogoutRedirectUris,
    clientSecrets,
    claims,
    requirePkce,
    createdBy,
    createdDateTime,
    lastModifiedBy,
    lastModifiedDateTime,
    instanceId,
    selectedScope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
