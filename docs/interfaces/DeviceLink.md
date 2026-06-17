[@fairfleet/geotab](../README.md) / DeviceLink

# Interface: DeviceLink

A DeviceLink is a relationship between two [Device](Device.md)s over a period of time.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`DeviceLink`**

## Table of contents

### Properties

- [dateTime](DeviceLink.md#datetime)
- [destinationDevice](DeviceLink.md#destinationdevice)
- [fromDate](DeviceLink.md#fromdate)
- [id](DeviceLink.md#id)
- [linkType](DeviceLink.md#linktype)
- [sourceDevice](DeviceLink.md#sourcedevice)
- [toDate](DeviceLink.md#todate)
- [version](DeviceLink.md#version)

## Properties

### dateTime

• **dateTime**: `Date`

Gets the date the [Device](Device.md)s were linked. This is only present so that we can implement IDateTimeProvider.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLink.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceLink.ts#L12)

___

### destinationDevice

• **destinationDevice**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) (destination) which the source [Device](Device.md) is being linked to.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLink.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceLink.ts#L14)

___

### fromDate

• **fromDate**: `Date`

Gets or sets the date and time the [Device](Device.md)s were linked. Default [UtcNow].

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLink.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceLink.ts#L16)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### linkType

• **linkType**: [`DeviceLinkType`](../README.md#devicelinktype)

Gets or sets the link type

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLink.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceLink.ts#L18)

___

### sourceDevice

• **sourceDevice**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) (source) which is being linked.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLink.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceLink.ts#L20)

___

### toDate

• **toDate**: `Date`

Gets or sets the date and time the [Device](Device.md)s were delinked. Default [MaxDate].

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceLink.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/DeviceLink.ts#L22)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
