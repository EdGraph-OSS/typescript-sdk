# EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserCacheResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userName** | **string** | The user name for this user. | [optional] [default to undefined]
**email** | **string** | The email address for this user. | [optional] [default to undefined]
**firstName** | **string** | The first name for this user. | [optional] [default to undefined]
**lastName** | **string** | The last name for this user. | [optional] [default to undefined]
**preferences** | [**Array&lt;IdentityApiUserV1Preference&gt;**](IdentityApiUserV1Preference.md) | List of preferences associated with this user | [optional] [default to undefined]
**tenants** | [**Array&lt;EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserCacheTenantResponse&gt;**](EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserCacheTenantResponse.md) | List of tenants associated with this user | [optional] [default to undefined]
**browserDebugEnabled** | **boolean** | Flag to indicate if the debug mode for user is enabled | [optional] [default to undefined]
**extensions** | [**Array&lt;IdentityApiUserV1UserExtension&gt;**](IdentityApiUserV1UserExtension.md) |  | [optional] [default to undefined]
**selectedTenant** | [**EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserCacheTenantResponse**](EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserCacheTenantResponse.md) |  | [optional] [default to undefined]
**tenantsTotalCount** | **number** | The total count of active tenants associated with this user | [optional] [default to undefined]

## Example

```typescript
import { EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserCacheResponse } from '@edgraph-oss/platform-client';

const instance: EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesUserCacheResponse = {
    userName,
    email,
    firstName,
    lastName,
    preferences,
    tenants,
    browserDebugEnabled,
    extensions,
    selectedTenant,
    tenantsTotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
