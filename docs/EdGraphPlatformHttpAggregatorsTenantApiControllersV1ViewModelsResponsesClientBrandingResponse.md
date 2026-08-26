# EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesClientBrandingResponse

Public, render-only projection of a client\'s branding (Azure DevOps #17086) returned by the  unauthenticated GET /clients/{clientId}/branding endpoint. Intentionally minimal — it carries only  the fields a sign-in / pre-auth surface needs to render, plus the override flag so the caller can  apply client-vs-tenant precedence itself. It never exposes secrets, storage internals  (blob/container names), or any other client configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** |  | [optional] [default to undefined]
**brandName** | **string** |  | [optional] [default to undefined]
**logoUrl** | **string** |  | [optional] [default to undefined]
**backgroundUrl** | **string** |  | [optional] [default to undefined]
**allowTenantToOverride** | **boolean** | When false, this client\&#39;s branding overrides the tenant\&#39;s on the sign-in page. | [optional] [default to undefined]

## Example

```typescript
import { EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesClientBrandingResponse } from '@edgraph-oss/platform-client';

const instance: EdGraphPlatformHttpAggregatorsTenantApiControllersV1ViewModelsResponsesClientBrandingResponse = {
    enabled,
    brandName,
    logoUrl,
    backgroundUrl,
    allowTenantToOverride,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
