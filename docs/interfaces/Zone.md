[@fairfleet/geotab](../README.md) / Zone

# Interface: Zone

Sometimes referred to as a "Geofence", a zone is a virtual geographic boundary, defined by its points representing a real-world geographic area.

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`Zone`**

## Table of contents

### Properties

- [activeFrom](Zone.md#activefrom)
- [activeTo](Zone.md#activeto)
- [centroidLatitude](Zone.md#centroidlatitude)
- [centroidLongitude](Zone.md#centroidlongitude)
- [comment](Zone.md#comment)
- [displayed](Zone.md#displayed)
- [extent](Zone.md#extent)
- [externalReference](Zone.md#externalreference)
- [fillColor](Zone.md#fillcolor)
- [groups](Zone.md#groups)
- [id](Zone.md#id)
- [mustIdentifyStops](Zone.md#mustidentifystops)
- [name](Zone.md#name)
- [points](Zone.md#points)
- [version](Zone.md#version)
- [zoneTypes](Zone.md#zonetypes)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets the date indicating when this zone begins it's active lifespan. Default [UtcNow].

#### Defined in

[src/types/Checkmate/ObjectModel/Zone.ts:13](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Zone.ts#L13)

___

### activeTo

• **activeTo**: `Date`

Gets or sets the date indicating when this zone finishes it's active lifespan. Default [MaxDate].

#### Defined in

[src/types/Checkmate/ObjectModel/Zone.ts:15](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Zone.ts#L15)

___

### centroidLatitude

• **centroidLatitude**: `number`

Gets the latitude coordinate of the zone's centroid.

#### Defined in

[src/types/Checkmate/ObjectModel/Zone.ts:17](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Zone.ts#L17)

___

### centroidLongitude

• **centroidLongitude**: `number`

Gets the longitude coordinate of the zone's centroid.

#### Defined in

[src/types/Checkmate/ObjectModel/Zone.ts:19](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Zone.ts#L19)

___

### comment

• **comment**: `string`

Gets or sets a free text field where any user information can be stored and referenced for this entity. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Zone.ts:21](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Zone.ts#L21)

___

### displayed

• **displayed**: `boolean`

Gets or sets a value indicating whether this zone must be displayed when viewing a map or it should be hidden. Default [true].

#### Defined in

[src/types/Checkmate/ObjectModel/Zone.ts:23](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Zone.ts#L23)

___

### extent

• **extent**: `unknown`[]

Gets the zone's extent.

#### Defined in

[src/types/Checkmate/ObjectModel/Zone.ts:25](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Zone.ts#L25)

___

### externalReference

• **externalReference**: `string`

Gets or sets external Reference. Any type of external reference you would like to attach to the zone. For example; an ID from another data source referenced when exporting zone data into another program. Maximum length [255] Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Zone.ts:27](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Zone.ts#L27)

___

### fillColor

• **fillColor**: [`Color`](Color.md)

Gets or sets the [Color](Color.md) of the fill for this zone when showing on a map. Default [based on zone type; Customer: Orange, Office: Light Orange, Home: Green, Other: Blue].

#### Defined in

[src/types/Checkmate/ObjectModel/Zone.ts:29](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Zone.ts#L29)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets the group(s) this zone belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/Zone.ts:31](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Zone.ts#L31)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity. See Id.

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Zone.ts:33](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Zone.ts#L33)

___

### mustIdentifyStops

• **mustIdentifyStops**: `boolean`

Gets or sets whether this zone name must be shown when devices stop in this zone. If [true] a "zone stop rule" (Rule with BaseType: ZoneStop) will automatically be created for this zone. This is to facilitate reporting on zone stops. The rule is not visible via the UI. Default [true].

#### Defined in

[src/types/Checkmate/ObjectModel/Zone.ts:35](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Zone.ts#L35)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity.

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/Zone.ts:37](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Zone.ts#L37)

___

### points

• **points**: `unknown`[]

Gets or sets the list of points (see [Coordinate](Coordinate.md)) that make up this zone. A zone should be closed, the first point is the same coordinate as the last point.

**`Remarks`**

It is possible to add a zone with an unclosed set of points but the points will be closed by the system.

#### Defined in

[src/types/Checkmate/ObjectModel/Zone.ts:43](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Zone.ts#L43)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)

___

### zoneTypes

• **zoneTypes**: [`ZoneType`](ZoneType.md)[]

Gets or sets the list of [ZoneType](ZoneType.md)(s) this zone belongs to. Default [Customer].

#### Defined in

[src/types/Checkmate/ObjectModel/Zone.ts:45](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Zone.ts#L45)
