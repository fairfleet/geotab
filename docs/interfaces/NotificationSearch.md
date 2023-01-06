[@fairfleet/geotab](../README.md) / NotificationSearch

# Interface: NotificationSearch

The object used to specify the arguments when searching for
 [Notification](Notification.md)(s).

**`Deprecated`**

## Hierarchy

- [`Search`](Search.md)

  ↳ **`NotificationSearch`**

## Table of contents

### Properties

- [activeOnly](NotificationSearch.md#activeonly)
- [id](NotificationSearch.md#id)
- [notificationData](NotificationSearch.md#notificationdata)
- [propertySelector](NotificationSearch.md#propertyselector)
- [recipientSearch](NotificationSearch.md#recipientsearch)
- [version](NotificationSearch.md#version)

## Properties

### activeOnly

• **activeOnly**: `boolean`

Gets or sets a value indicating whether to search for active notifications only

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationSearch.ts:17](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NotificationSearch.ts#L17)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### notificationData

• **notificationData**: [`Entity`](Entity.md)

Gets or sets search for Notifications with this [NotificationData](../README.md#notificationdata) Id.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationSearch.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NotificationSearch.ts#L19)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### recipientSearch

• **recipientSearch**: [`RecipientSearch`](RecipientSearch.md)

Gets or sets search for Notifications with this [RecipientSearch](RecipientSearch.md) Id.

#### Defined in

[src/types/Checkmate/ObjectModel/NotificationSearch.ts:21](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/NotificationSearch.ts#L21)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Search.ts#L16)
