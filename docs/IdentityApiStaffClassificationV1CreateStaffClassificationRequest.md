# IdentityApiStaffClassificationV1CreateStaffClassificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**namespace** | **string** |  | [optional] [default to undefined]
**codeValue** | **string** |  | [optional] [default to undefined]
**shortDescription** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**licenses** | [**Array&lt;IdentityApiStaffClassificationV1StaffClassificationLicenseRequest&gt;**](IdentityApiStaffClassificationV1StaffClassificationLicenseRequest.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { IdentityApiStaffClassificationV1CreateStaffClassificationRequest } from '@edgraph-oss/platform-client';

const instance: IdentityApiStaffClassificationV1CreateStaffClassificationRequest = {
    tenantId,
    namespace,
    codeValue,
    shortDescription,
    description,
    licenses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
