# AnalyticsApiGroupsV1AddGroupUsersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupId** | **string** |  | [optional] [default to undefined]
**users** | [**Array&lt;AnalyticsApiGroupsV1AnalyticsGroupUser&gt;**](AnalyticsApiGroupsV1AnalyticsGroupUser.md) |  | [optional] [readonly] [default to undefined]
**addGlobalTenantUsers** | **boolean** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AnalyticsApiGroupsV1AddGroupUsersRequest } from '@edgraph-oss/platform-client';

const instance: AnalyticsApiGroupsV1AddGroupUsersRequest = {
    groupId,
    users,
    addGlobalTenantUsers,
    tenantId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
