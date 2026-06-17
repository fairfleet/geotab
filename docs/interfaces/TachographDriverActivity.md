[@fairfleet/geotab](../README.md) / TachographDriverActivity

# Interface: TachographDriverActivity

The entity that contains the data for the [TachographDriverActivity](TachographDriverActivity.md) tachograph driver activity extractor.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`TachographDriverActivity`**

## Table of contents

### Properties

- [activity](TachographDriverActivity.md#activity)
- [dateTime](TachographDriverActivity.md#datetime)
- [device](TachographDriverActivity.md#device)
- [id](TachographDriverActivity.md#id)
- [isCrew](TachographDriverActivity.md#iscrew)
- [nation](TachographDriverActivity.md#nation)
- [slot](TachographDriverActivity.md#slot)

## Properties

### activity

• **activity**: `string`

Gets or sets the activity in this telemetry.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivity.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivity.ts#L11)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the time of this telemetry.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivity.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivity.ts#L13)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the TachographDriverActivity.Device id.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivity.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivity.ts#L15)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isCrew

• **isCrew**: `boolean`

Gets or sets a value indicating if is part of the crew.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivity.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivity.ts#L17)

___

### nation

• **nation**: `string`

Gets or sets the nation (specific country code from tachograph driver card).

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivity.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivity.ts#L19)

___

### slot

• **slot**: `string`

Gets or sets the slot.

#### Defined in

[src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivity.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Tachograph/TachographDriverActivity.ts#L21)
