[@fairfleet/geotab](../README.md) / GroupDevice

# Interface: GroupDevice

Represents a [Group](Group.md) linked to a [Device](Device.md). This defines to the many to many relationship between a [Device](Device.md) and [Group](Group.md).

## Table of contents

### Properties

- [from](GroupDevice.md#from)
- [to](GroupDevice.md#to)

## Properties

### from

• **from**: `Date`

Gets or sets the date the user is active from. Default [UtcNow].

#### Defined in

[src/types/Checkmate/ObjectModel/GroupDevice.ts:8](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/GroupDevice.ts#L8)

___

### to

• **to**: `Date`

Gets or sets the date the user is active to. Default [MaxDate].

#### Defined in

[src/types/Checkmate/ObjectModel/GroupDevice.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/GroupDevice.ts#L10)
