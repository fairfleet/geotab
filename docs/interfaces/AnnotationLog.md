[@fairfleet/geotab](../README.md) / AnnotationLog

# Interface: AnnotationLog

An AnnotationLog is a comment that can be associated with a [DutyStatusLog](DutyStatusLog.md). The [Driver](Driver.md) is the author of the AnnotationLog.

## Hierarchy

- [`EntityWithVersion`](EntityWithVersion.md)

  ↳ **`AnnotationLog`**

## Table of contents

### Properties

- [comment](AnnotationLog.md#comment)
- [dateTime](AnnotationLog.md#datetime)
- [driver](AnnotationLog.md#driver)
- [dutyStatusLog](AnnotationLog.md#dutystatuslog)
- [id](AnnotationLog.md#id)
- [version](AnnotationLog.md#version)

## Properties

### comment

• **comment**: `string`

Gets or sets the annotation text associated with the log.

#### Defined in

[src/types/Checkmate/ObjectModel/AnnotationLog.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/AnnotationLog.ts#L12)

___

### dateTime

• **dateTime**: `Date`

Gets or sets the date and time the log was created.

#### Defined in

[src/types/Checkmate/ObjectModel/AnnotationLog.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/AnnotationLog.ts#L14)

___

### driver

• **driver**: [`User`](User.md)

Gets or sets the [User](User.md) who created the log.

#### Defined in

[src/types/Checkmate/ObjectModel/AnnotationLog.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/AnnotationLog.ts#L16)

___

### dutyStatusLog

• **dutyStatusLog**: [`DutyStatusLog`](DutyStatusLog.md)

Gets or sets the AnnotationLog.DutyStatusLog which this log belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/AnnotationLog.ts:18](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/AnnotationLog.ts#L18)

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
