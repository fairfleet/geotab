[@fairfleet/geotab](../README.md) / LostModeChangeSearch

# Interface: LostModeChangeSearch

The object used to specify the arguments when searching for [LostModeChange](LostModeChange.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`LostModeChangeSearch`**

## Table of contents

### Properties

- [deviceSearch](LostModeChangeSearch.md#devicesearch)
- [fromDate](LostModeChangeSearch.md#fromdate)
- [id](LostModeChangeSearch.md#id)
- [isActive](LostModeChangeSearch.md#isactive)
- [maxVersion](LostModeChangeSearch.md#maxversion)
- [toDate](LostModeChangeSearch.md#todate)
- [version](LostModeChangeSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for [LostModeChange](LostModeChange.md)s with this LostModeChangeSearch.DeviceSearch Id.
 Available DeviceSearch options are:.
 <list><item><description>Id</description></item><item><description>DeviceIds</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/LostModeChangeSearch.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LostModeChangeSearch.ts#L17)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for [LostModeChange](LostModeChange.md)s activated at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/LostModeChangeSearch.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LostModeChangeSearch.ts#L19)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### isActive

• **isActive**: `boolean`

Gets or sets a value indicating whether to search for only active lost mode changes.

#### Defined in

[src/types/Checkmate/ObjectModel/LostModeChangeSearch.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LostModeChangeSearch.ts#L21)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum version of the
 [LostModeChange](LostModeChange.md) search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/LostModeChangeSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LostModeChangeSearch.ts#L26)

___

### toDate

• **toDate**: `Date`

Gets or sets search for [LostModeChange](LostModeChange.md)s activated at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/LostModeChangeSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LostModeChangeSearch.ts#L28)

___

### version

• **version**: `number`

Gets or sets the version of the [LostModeChange](LostModeChange.md)
 search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/LostModeChangeSearch.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/LostModeChangeSearch.ts#L33)
