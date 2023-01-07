[@fairfleet/geotab](../README.md) / DiagnosticSearch

# Interface: DiagnosticSearch

The object used to specify the
 arguments when searching for [Diagnostic](Diagnostic.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DiagnosticSearch`**

## Table of contents

### Properties

- [code](DiagnosticSearch.md#code)
- [diagnosticType](DiagnosticSearch.md#diagnostictype)
- [engineTypeSearch](DiagnosticSearch.md#enginetypesearch)
- [faultResetMode](DiagnosticSearch.md#faultresetmode)
- [id](DiagnosticSearch.md#id)
- [name](DiagnosticSearch.md#name)
- [sourceSearch](DiagnosticSearch.md#sourcesearch)
- [version](DiagnosticSearch.md#version)

## Properties

### code

• **code**: `number`

Gets or sets search for a Diagnostic by the code number.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L17)

___

### diagnosticType

• **diagnosticType**: [`DiagnosticType`](../README.md#diagnostictype)

Gets or sets the [DiagnosticType](../README.md#diagnostictype) to search for in Diagnostics.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L19)

___

### engineTypeSearch

• **engineTypeSearch**: [`EngineTypeSearch`](EngineTypeSearch.md)

Gets or sets search for [Diagnostic](Diagnostic.md)(s) with this
 [EngineTypeSearch](EngineTypeSearch.md)Id. Available EngineTypeSearch
 options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L26)

___

### faultResetMode

• **faultResetMode**: [`FaultResetMode`](../README.md#faultresetmode)

Gets or sets the [FaultResetMode](../README.md#faultresetmode) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L28)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### name

• **name**: `string`

Gets or sets search for Diagnostics with this Name. Wildcard can be used by prepending/appending "%" to
 string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:33](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L33)

___

### sourceSearch

• **sourceSearch**: [`SourceSearch`](SourceSearch.md)

Gets or sets the [SourceSearch](SourceSearch.md) Id to search for in
 Diagnostics. Available SourceSearch
 options are:.
 <list><item><description>Id</description></item><item><description>Name</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:40](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L40)

___

### version

• **version**: `number`

Gets or sets the row version of the
 [Diagnostic](Diagnostic.md) search
 criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:46](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L46)
