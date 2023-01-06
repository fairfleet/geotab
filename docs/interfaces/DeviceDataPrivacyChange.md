[@fairfleet/geotab](../README.md) / DeviceDataPrivacyChange

# Interface: DeviceDataPrivacyChange

Indicates when a DeviceDataPrivacyChange.DataPrivacyType was changed.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DeviceDataPrivacyChange`**

## Table of contents

### Properties

- [dataPrivacyType](DeviceDataPrivacyChange.md#dataprivacytype)
- [dateTime](DeviceDataPrivacyChange.md#datetime)
- [device](DeviceDataPrivacyChange.md#device)
- [id](DeviceDataPrivacyChange.md#id)
- [isPrivate](DeviceDataPrivacyChange.md#isprivate)
- [isPublic](DeviceDataPrivacyChange.md#ispublic)
- [isStrict](DeviceDataPrivacyChange.md#isstrict)

## Properties

### dataPrivacyType

• **dataPrivacyType**: [`DataPrivacyType`](DataPrivacyType.md)

Gets or sets the type of the trip.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceDataPrivacyChange.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceDataPrivacyChange.ts#L12)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date time.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceDataPrivacyChange.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceDataPrivacyChange.ts#L14)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the device.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceDataPrivacyChange.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceDataPrivacyChange.ts#L16)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### isPrivate

• **isPrivate**: `boolean`

Gets a value indicating whether the privacy mode is private.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceDataPrivacyChange.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceDataPrivacyChange.ts#L18)

___

### isPublic

• **isPublic**: `boolean`

Gets a value indicating whether the privacy mode is public.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceDataPrivacyChange.ts:20](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceDataPrivacyChange.ts#L20)

___

### isStrict

• **isStrict**: `boolean`

Gets a value indicating whether the privacy mode is private strict.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceDataPrivacyChange.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/DeviceDataPrivacyChange.ts#L22)
