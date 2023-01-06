[@fairfleet/geotab](../README.md) / TrailerAttachmentSearch

# Interface: TrailerAttachmentSearch

The object used to specify the arguments when searching for [TrailerAttachment](TrailerAttachment.md) record(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`TrailerAttachmentSearch`**

## Table of contents

### Properties

- [activeFrom](TrailerAttachmentSearch.md#activefrom)
- [activeTo](TrailerAttachmentSearch.md#activeto)
- [deviceSearch](TrailerAttachmentSearch.md#devicesearch)
- [id](TrailerAttachmentSearch.md#id)
- [maxVersion](TrailerAttachmentSearch.md#maxversion)
- [propertySelector](TrailerAttachmentSearch.md#propertyselector)
- [trailerSearch](TrailerAttachmentSearch.md#trailersearch)
- [version](TrailerAttachmentSearch.md#version)

## Properties

### activeFrom

• **activeFrom**: `Date`

Gets or sets search for TrailerAttachments that were active at this date or after. Set to UTC now to search for
 only currently active TrailerAttachments.

#### Defined in

[src/types/Checkmate/ObjectModel/TrailerAttachmentSearch.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TrailerAttachmentSearch.ts#L17)

___

### activeTo

• **activeTo**: `Date`

Gets or sets search for TrailerAttachments that were active at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/TrailerAttachmentSearch.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TrailerAttachmentSearch.ts#L19)

___

### deviceSearch

• **deviceSearch**: [`DeviceSearch`](DeviceSearch.md)

Gets or sets search for TrailerAttachments attached to this [DeviceSearch](DeviceSearch.md) Id. Available DeviceSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/TrailerAttachmentSearch.ts:24](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TrailerAttachmentSearch.ts#L24)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### maxVersion

• **maxVersion**: `number`

Gets or sets the maximum row version of the TrailerAttachment search criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/TrailerAttachmentSearch.ts:26](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TrailerAttachmentSearch.ts#L26)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### trailerSearch

• **trailerSearch**: [`TrailerSearch`](TrailerSearch.md)

Gets or sets search for TrailerAttachments with this [TrailerSearch](TrailerSearch.md) Id. Available TrailerSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/TrailerAttachmentSearch.ts:31](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TrailerAttachmentSearch.ts#L31)

___

### version

• **version**: `number`

Gets or sets the row version of the TrailerAttachment search criteria.

#### Overrides

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/TrailerAttachmentSearch.ts:33](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/TrailerAttachmentSearch.ts#L33)
