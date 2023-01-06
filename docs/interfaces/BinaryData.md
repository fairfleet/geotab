[@fairfleet/geotab](../README.md) / BinaryData

# Interface: BinaryData

This is binary data representing anything that can be stored. BinaryData can use this to store images but the data can be any custom data, including custom engine information types. The type of the data is defined by the [BinaryDataType](../README.md#binarydatatype).

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`BinaryData`**

## Table of contents

### Properties

- [binaryType](BinaryData.md#binarytype)
- [controller](BinaryData.md#controller)
- [data](BinaryData.md#data)
- [dateTime](BinaryData.md#datetime)
- [device](BinaryData.md#device)
- [id](BinaryData.md#id)
- [version](BinaryData.md#version)

## Properties

### binaryType

• **binaryType**: [`BinaryDataType`](../README.md#binarydatatype)

Gets or sets the [BinaryDataType](../README.md#binarydatatype).

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryData.ts:13](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/BinaryData.ts#L13)

___

### controller

• **controller**: [`Controller`](Controller.md)

Gets or sets the [Controller](Controller.md) for the [BinaryData](BinaryData.md) specified.

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryData.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/BinaryData.ts#L15)

___

### data

• **data**: `number`[]

Gets the binary data for the [BinaryData](BinaryData.md) object.

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryData.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/BinaryData.ts#L17)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time of the logging of the data.

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryData.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/BinaryData.ts#L19)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) on which the binary data was recorded.

#### Defined in

[src/types/Checkmate/ObjectModel/BinaryData.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/BinaryData.ts#L21)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[id](EntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[EntityWithVersion](EntityWithVersion.md).[version](EntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
