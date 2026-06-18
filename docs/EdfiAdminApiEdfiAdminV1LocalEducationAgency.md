# EdfiAdminApiEdfiAdminV1LocalEducationAgency


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**instanceId** | **string** |  | [optional] [default to undefined]
**educationOrganizationId** | **number** |  | [optional] [default to undefined]
**localEducationAgencyId** | **number** |  | [optional] [default to undefined]
**nameOfInstitution** | **string** |  | [optional] [default to undefined]
**shortnameOfInstitution** | **string** |  | [optional] [default to undefined]
**webSite** | **string** |  | [optional] [default to undefined]
**operationalStatusDescriptorId** | **number** |  | [optional] [default to undefined]
**discriminator** | **string** |  | [optional] [default to undefined]
**createDate** | **string** |  | [optional] [default to undefined]
**lastModifiedDate** | **string** |  | [optional] [default to undefined]
**addresses** | [**Array&lt;EdfiAdminApiEdfiAdminV1EducationOrganizationAddress&gt;**](EdfiAdminApiEdfiAdminV1EducationOrganizationAddress.md) |  | [optional] [readonly] [default to undefined]
**categories** | [**Array&lt;EdfiAdminApiEdfiAdminV1EducationOrganizationCategoryDescriptor&gt;**](EdfiAdminApiEdfiAdminV1EducationOrganizationCategoryDescriptor.md) |  | [optional] [readonly] [default to undefined]
**localEducationAgencyCategoryDescriptorCodeValue** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { EdfiAdminApiEdfiAdminV1LocalEducationAgency } from '@edgraph-oss/platform-client';

const instance: EdfiAdminApiEdfiAdminV1LocalEducationAgency = {
    tenantId,
    instanceId,
    educationOrganizationId,
    localEducationAgencyId,
    nameOfInstitution,
    shortnameOfInstitution,
    webSite,
    operationalStatusDescriptorId,
    discriminator,
    createDate,
    lastModifiedDate,
    addresses,
    categories,
    localEducationAgencyCategoryDescriptorCodeValue,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
