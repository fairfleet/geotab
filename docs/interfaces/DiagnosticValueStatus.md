[@fairfleet/geotab](../README.md) / DiagnosticValueStatus

# Interface: DiagnosticValueStatus

The data change for a particular diagnostic.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DiagnosticValueStatus`**

## Table of contents

### Properties

- [createdAt](DiagnosticValueStatus.md#createdat)
- [device](DiagnosticValueStatus.md#device)
- [diagnostic](DiagnosticValueStatus.md#diagnostic)
- [id](DiagnosticValueStatus.md#id)
- [isOn](DiagnosticValueStatus.md#ison)
- [lastValue](DiagnosticValueStatus.md#lastvalue)
- [maintenanceRecord](DiagnosticValueStatus.md#maintenancerecord)

## Properties

### createdAt

• **createdAt**: `Date`

Gets or sets the creation DateTime of the [DiagnosticValueStatus](DiagnosticValueStatus.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatus.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatus.ts#L13)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the device related to the [DiagnosticValueStatus](DiagnosticValueStatus.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatus.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatus.ts#L15)

___

### diagnostic

• **diagnostic**: [`BasicDiagnostic`](BasicDiagnostic.md)

Gets or sets the diagnostic related to the [DiagnosticValueStatus](DiagnosticValueStatus.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatus.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatus.ts#L17)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isOn

• **isOn**: `boolean`

Gets or sets whether the data is considered ON or OFF.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatus.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatus.ts#L19)

___

### lastValue

• **lastValue**: `number`

Gets or sets the last value reported

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatus.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatus.ts#L21)

___

### maintenanceRecord

• **maintenanceRecord**: [`EventOccurrence`](EventOccurrence.md)

Gets or sets the device related to the [EventOccurrence](EventOccurrence.md).

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatus.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DiagnosticValueStatus.ts#L23)
