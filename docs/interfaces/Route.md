[@fairfleet/geotab](../README.md) / Route

# Interface: Route

A connected sequence of zones which create a path for the vehicle to follow.

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`Route`**

## Table of contents

### Properties

- [comment](Route.md#comment)
- [device](Route.md#device)
- [endTime](Route.md#endtime)
- [id](Route.md#id)
- [name](Route.md#name)
- [routePlanItemCollection](Route.md#routeplanitemcollection)
- [routeType](Route.md#routetype)
- [startTime](Route.md#starttime)
- [status](Route.md#status)
- [version](Route.md#version)

## Properties

### comment

• **comment**: `string`

Gets or sets free text field where any user information can be stored and referenced for this entity. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Route.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Route.ts#L15)

___

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) linked to the route. Only applies to "Plan" type routes.

#### Defined in

[src/types/Checkmate/ObjectModel/Route.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Route.ts#L17)

___

### endTime

• **endTime**: `Date`

Gets the end date and time of the route which is the arrival time of the last stop.

#### Defined in

[src/types/Checkmate/ObjectModel/Route.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Route.ts#L19)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity. See Id.

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Route.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Route.ts#L21)

___

### name

• **name**: `string`

Gets or sets the name of this entity that uniquely identifies it and is used when displaying this entity. Maximum length [255].

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/Route.ts:23](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Route.ts#L23)

___

### routePlanItemCollection

• **routePlanItemCollection**: `unknown`[]

Gets or sets the RoutePlanItem item collection (sequence of stops which make up the route).

#### Defined in

[src/types/Checkmate/ObjectModel/Route.ts:25](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Route.ts#L25)

___

### routeType

• **routeType**: [`RouteType`](../README.md#routetype)

Gets or sets the [RouteType](../README.md#routetype). Default [Basic].

#### Defined in

[src/types/Checkmate/ObjectModel/Route.ts:27](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Route.ts#L27)

___

### startTime

• **startTime**: `Date`

Gets the start date and time or the route which is the arrival time of the 1st stop.

#### Defined in

[src/types/Checkmate/ObjectModel/Route.ts:29](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Route.ts#L29)

___

### status

• **status**: [`RouteStatus`](../README.md#routestatus)

Gets or sets the [RouteStatus](../README.md#routestatus).

#### Defined in

[src/types/Checkmate/ObjectModel/Route.ts:31](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Route.ts#L31)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)
