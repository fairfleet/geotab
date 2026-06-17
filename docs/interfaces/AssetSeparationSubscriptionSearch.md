[@fairfleet/geotab](../README.md) / AssetSeparationSubscriptionSearch

# Interface: AssetSeparationSubscriptionSearch

The object used to specify the arguments when searching for [AssetSeparationSubscriptionSearch](AssetSeparationSubscriptionSearch.md) record(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`AssetSeparationSubscriptionSearch`**

## Table of contents

### Properties

- [createdFrom](AssetSeparationSubscriptionSearch.md#createdfrom)
- [createdTo](AssetSeparationSubscriptionSearch.md#createdto)
- [currentActiveLinkId](AssetSeparationSubscriptionSearch.md#currentactivelinkid)
- [deviceSearch](AssetSeparationSubscriptionSearch.md#devicesearch)
- [deviceSearch2](AssetSeparationSubscriptionSearch.md#devicesearch2)
- [id](AssetSeparationSubscriptionSearch.md#id)
- [lastAlertFrom](AssetSeparationSubscriptionSearch.md#lastalertfrom)
- [lastAlertTo](AssetSeparationSubscriptionSearch.md#lastalertto)
- [user](AssetSeparationSubscriptionSearch.md#user)
- [version](AssetSeparationSubscriptionSearch.md#version)

## Properties

### createdFrom

• **createdFrom**: `Date`

Gets or sets search for subscriptions created at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts#L12)

___

### createdTo

• **createdTo**: `Date`

Gets or sets search for subscriptions created at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts#L14)

___

### currentActiveLinkId

• **currentActiveLinkId**: `string`

Gets or sets the current active link id.

#### Defined in

[src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts#L16)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the device to search in either Vehicle1 or Vehicle2.

#### Defined in

[src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts#L18)

___

### deviceSearch2

• **deviceSearch2**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets the second vehicle id to search for subscriptions between two specific vehicles.
 Used in combination with Vehicle to find subscriptions between two vehicles regardless of order.

#### Defined in

[src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts#L23)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### lastAlertFrom

• **lastAlertFrom**: `Date`

Gets or sets search for subscriptions with last alert at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts#L25)

___

### lastAlertTo

• **lastAlertTo**: `Date`

Gets or sets search for subscriptions with last alert at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts#L27)

___

### user

• **user**: [`User`](User.md)

Gets or sets the user.

#### Defined in

[src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AssetSeparationSubscriptionSearch.ts#L29)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
