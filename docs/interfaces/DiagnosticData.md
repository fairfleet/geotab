[@fairfleet/geotab](../README.md) / DiagnosticData

# Interface: DiagnosticData

Stores deserialized diagnostic data from protobuf format. All fault-specific fields live inside
 DiagnosticData.Value — this class only holds common metadata (Id, DateTime, Diagnostic, Device).

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DiagnosticData`**

## Table of contents

### Properties

- [dateTime](DiagnosticData.md#datetime)
- [device](DiagnosticData.md#device)
- [diagnostic](DiagnosticData.md#diagnostic)
- [id](DiagnosticData.md#id)
- [value](DiagnosticData.md#value)

## Properties

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time when the fault occurred.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticData.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticData.ts#L15)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the device that reported this fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticData.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticData.ts#L17)

___

### diagnostic

• **diagnostic**: [`Diagnostic`](Diagnostic.md)

Gets or sets the diagnostic that triggered this fault.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticData.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticData.ts#L19)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### value

• **value**: `unknown`

Gets or sets the deserialized protobuf content containing all diagnostic-specific fields.

#### Defined in

[src/types/Checkmate/ObjectModel/Engine/DiagnosticData.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Engine/DiagnosticData.ts#L21)
