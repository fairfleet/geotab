[@fairfleet/geotab](../README.md) / ShipmentLog

# Interface: ShipmentLog

A ShipmentLog is a record of shipment transported by a specified vehicle for a duration of time.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`ShipmentLog`**

## Table of contents

### Properties

- [activeFrom](ShipmentLog.md#activefrom)
- [activeTo](ShipmentLog.md#activeto)
- [commodity](ShipmentLog.md#commodity)
- [dateTime](ShipmentLog.md#datetime)
- [device](ShipmentLog.md#device)
- [documentNumber](ShipmentLog.md#documentnumber)
- [driver](ShipmentLog.md#driver)
- [id](ShipmentLog.md#id)
- [shipperName](ShipmentLog.md#shippername)
- [version](ShipmentLog.md#version)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets the date the shipment was started. Default [UtcNow].

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLog.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ShipmentLog.ts#L14)

___

### activeTo

• **activeTo**: `Date`

Gets or sets the date the shipment was ended. Default [MaxDate].

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLog.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ShipmentLog.ts#L16)

___

### commodity

• **commodity**: `string`

Gets or sets the commodity shipped. Maximum length [255] Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLog.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ShipmentLog.ts#L18)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time the log was created.

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLog.ts:20](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ShipmentLog.ts#L20)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with this log.

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLog.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ShipmentLog.ts#L22)

___

### documentNumber

• **documentNumber**: `string`

Gets or sets the identifier of the shipment document. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLog.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ShipmentLog.ts#L24)

___

### driver

• **driver**: [`User`](User.md)

Gets or sets the [User](User.md) who created this log.

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLog.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ShipmentLog.ts#L26)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### shipperName

• **shipperName**: `string`

Gets or sets the name of the shipper. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/ShipmentLog.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/ShipmentLog.ts#L28)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
