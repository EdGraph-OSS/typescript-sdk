# TenantApiWebhookV1CreateWebhookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**secretHeader** | **string** |  | [optional] [default to undefined]
**secretValue** | **string** |  | [optional] [default to undefined]
**contentType** | **string** |  | [optional] [default to undefined]
**eventSubscriptions** | [**Array&lt;TenantApiWebhookV1WebhookSubscriberResponse&gt;**](TenantApiWebhookV1WebhookSubscriberResponse.md) |  | [optional] [readonly] [default to undefined]
**subscriptions** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**webhookSchema** | [**TenantApiWebhookV1WebhookSchema**](TenantApiWebhookV1WebhookSchema.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TenantApiWebhookV1CreateWebhookRequest } from '@edgraph-oss/platform-client';

const instance: TenantApiWebhookV1CreateWebhookRequest = {
    tenantId,
    name,
    url,
    secretHeader,
    secretValue,
    contentType,
    eventSubscriptions,
    subscriptions,
    webhookSchema,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
