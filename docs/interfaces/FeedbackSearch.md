[@fairfleet/geotab](../README.md) / FeedbackSearch

# Interface: FeedbackSearch

The object used to specify the
 arguments when searching for a [Feedback](Feedback.md).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`FeedbackSearch`**

## Table of contents

### Properties

- [deviceSearch](FeedbackSearch.md#devicesearch)
- [feedbackStatus](FeedbackSearch.md#feedbackstatus)
- [feedbackTargetId](FeedbackSearch.md#feedbacktargetid)
- [feedbackTargetIds](FeedbackSearch.md#feedbacktargetids)
- [feedbackType](FeedbackSearch.md#feedbacktype)
- [feedbackTypes](FeedbackSearch.md#feedbacktypes)
- [id](FeedbackSearch.md#id)
- [submittedOn](FeedbackSearch.md#submittedon)
- [version](FeedbackSearch.md#version)

## Properties

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets filter by the [DeviceSearch](DeviceSearch.md) options. Providing a device ID will
 search for any Feedback that are assigned to that Device.
 Providing the Groups will search for Feedback for that have Devices in that group.
 Available DeviceSearch options are:
 <list><item><description>Id</description></item><item><description>Groups</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/FeedbackSearch.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FeedbackSearch.ts#L24)

___

### feedbackStatus

• **feedbackStatus**: [`FeedbackStatus`](../README.md#feedbackstatus)

Gets or sets search for [Feedback](Feedback.md)s of the given FeedbackSearch.FeedbackStatus.

#### Defined in

[src/types/Checkmate/ObjectModel/FeedbackSearch.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FeedbackSearch.ts#L26)

___

### feedbackTargetId

• **feedbackTargetId**: `string`

Gets or sets search for [Feedback](Feedback.md)s for a Feedback Target Id/&gt;.

#### Defined in

[src/types/Checkmate/ObjectModel/FeedbackSearch.ts:28](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FeedbackSearch.ts#L28)

___

### feedbackTargetIds

• **feedbackTargetIds**: `string`[]

Gets or sets search for [Feedback](Feedback.md)s for a list of Feedback Target Ids.

#### Defined in

[src/types/Checkmate/ObjectModel/FeedbackSearch.ts:30](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FeedbackSearch.ts#L30)

___

### feedbackType

• **feedbackType**: [`FeedbackType`](../README.md#feedbacktype)

Gets or sets search for [Feedback](Feedback.md)s of the given FeedbackSearch.FeedbackType.

#### Defined in

[src/types/Checkmate/ObjectModel/FeedbackSearch.ts:32](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FeedbackSearch.ts#L32)

___

### feedbackTypes

• **feedbackTypes**: [`FeedbackType`](../README.md#feedbacktype)[]

Gets or sets search for [Feedback](Feedback.md)s of the given FeedbackSearch.FeedbackType.

#### Defined in

[src/types/Checkmate/ObjectModel/FeedbackSearch.ts:34](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FeedbackSearch.ts#L34)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### submittedOn

• **submittedOn**: `Date`

Gets or sets search for [Feedback](Feedback.md)s recorded at this date or after.

#### Defined in

[src/types/Checkmate/ObjectModel/FeedbackSearch.ts:36](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/FeedbackSearch.ts#L36)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Search.ts#L12)
