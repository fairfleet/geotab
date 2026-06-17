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
- [diagnosticTypes](DiagnosticSearch.md#diagnostictypes)
- [engineTypeSearch](DiagnosticSearch.md#enginetypesearch)
- [faultResetMode](DiagnosticSearch.md#faultresetmode)
- [id](DiagnosticSearch.md#id)
- [ids](DiagnosticSearch.md#ids)
- [name](DiagnosticSearch.md#name)
- [sourceSearch](DiagnosticSearch.md#sourcesearch)
- [version](DiagnosticSearch.md#version)

## Properties

### code

• **code**: `number`

Gets or sets search for a Diagnostic by the code number.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L17)

___

### diagnosticType

• **diagnosticType**: [`DiagnosticType`](../README.md#diagnostictype)

Gets or sets the [DiagnosticType](../README.md#diagnostictype) to search for in Diagnostics.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L19)

___

### diagnosticTypes

• **diagnosticTypes**: `string`[]

Gets or sets the list of [DiagnosticType](../README.md#diagnostictype) to search for in Diagnostics.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L21)

___

### engineTypeSearch

• **engineTypeSearch**: [`EngineTypeSearch`](EngineTypeSearch.md)

Gets or sets search for [Diagnostic](Diagnostic.md)(s) with this
 [EngineTypeSearch](EngineTypeSearch.md)Id. Available EngineTypeSearch
 options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L28)

___

### faultResetMode

• **faultResetMode**: [`FaultResetMode`](../README.md#faultresetmode)

Gets or sets the [FaultResetMode](../README.md#faultresetmode) to search by.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L30)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### ids

• **ids**: `string`[]

Gets or sets search for Diagnostics with these unique Id(s).

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L32)

___

### name

• **name**: `string`

Gets or sets search for Diagnostics with this Name. Wildcard can be used by prepending/appending "%" to
 string. Example "%name%".

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L37)

___

### sourceSearch

• **sourceSearch**: [`SourceSearch`](SourceSearch.md)

Gets or sets the [SourceSearch](SourceSearch.md) Id to search for in
 Diagnostics. Available SourceSearch
 options are:.
 <list><item><description>Id</description></item><item><description>Name</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:44](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L44)

___

### version

• **version**: `number`

Gets or sets the row version of the
 [Diagnostic](Diagnostic.md) search
 criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts:50](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticSearch.ts#L50)
