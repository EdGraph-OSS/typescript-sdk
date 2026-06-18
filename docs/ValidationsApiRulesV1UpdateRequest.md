# ValidationsApiRulesV1UpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** | Details | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**diagnosticSql** | **string** | SQL | [optional] [default to undefined]
**countSql** | **string** |  | [optional] [default to undefined]
**errorSeverityLevel** | **number** |  | [optional] [default to undefined]
**errorMessage** | **string** |  | [optional] [default to undefined]
**maxNumberResults** | **number** |  | [optional] [default to undefined]
**ruleIdentification** | **string** | Metadata | [optional] [default to undefined]
**resolution** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [readonly] [default to undefined]
**version** | **string** |  | [optional] [default to undefined]
**collectionId** | **string** |  | [optional] [default to undefined]
**urls** | [**Array&lt;ValidationsApiRulesV1Url&gt;**](ValidationsApiRulesV1Url.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { ValidationsApiRulesV1UpdateRequest } from '@edgraph-oss/platform-client';

const instance: ValidationsApiRulesV1UpdateRequest = {
    tenantId,
    id,
    name,
    description,
    diagnosticSql,
    countSql,
    errorSeverityLevel,
    errorMessage,
    maxNumberResults,
    ruleIdentification,
    resolution,
    tags,
    version,
    collectionId,
    urls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
