[@fairfleet/geotab](../README.md) / StatusDataValueFilter

# Interface: StatusDataValueFilter

Represents a filter for a specific value in the status data.
 This is used to filter the [DeviceStatusInfo](DeviceStatusInfo.md) based on the value.

## Table of contents

### Properties

- [comparison](StatusDataValueFilter.md#comparison)
- [diagnostic](StatusDataValueFilter.md#diagnostic)
- [value](StatusDataValueFilter.md#value)

## Properties

### comparison

• **comparison**: [`FilterComparison`](../README.md#filtercomparison)

Gets or sets comparison type for the value.
 This defines how the value should be compared against the diagnostic's value.

#### Defined in

[src/types/Checkmate/ObjectModel/StatusDataValueFilter.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/StatusDataValueFilter.ts#L17)

___

### diagnostic

• **diagnostic**: [`Diagnostic`](Diagnostic.md)

Gets or sets the diagnostic to filter by.

#### Defined in

[src/types/Checkmate/ObjectModel/StatusDataValueFilter.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/StatusDataValueFilter.ts#L19)

___

### value

• **value**: `number`

Gets or sets the value the diagnostic should match.

#### Defined in

[src/types/Checkmate/ObjectModel/StatusDataValueFilter.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/StatusDataValueFilter.ts#L21)
