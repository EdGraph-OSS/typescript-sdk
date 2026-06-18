# EdfiAdminApiEdfiAdminV1Vendor

Common Objects

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vendorId** | **number** |  | [optional] [default to undefined]
**vendorName** | **string** |  | [optional] [default to undefined]
**applications** | **Array&lt;number&gt;** | TODO: Changed from application object to applicationId\&#39;s to remove cyclic structure | [optional] [readonly] [default to undefined]
**namespacePrefixes** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { EdfiAdminApiEdfiAdminV1Vendor } from '@edgraph-oss/platform-client';

const instance: EdfiAdminApiEdfiAdminV1Vendor = {
    vendorId,
    vendorName,
    applications,
    namespacePrefixes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
