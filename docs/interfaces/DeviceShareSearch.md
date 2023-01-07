[@fairfleet/geotab](../README.md) / DeviceShareSearch

# Interface: DeviceShareSearch

The object used to specify the arguments when searching for [DeviceShare](DeviceShare.md)(s).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`DeviceShareSearch`**

## Table of contents

### Properties

- [acceptedDateTime](DeviceShareSearch.md#accepteddatetime)
- [dateTime](DeviceShareSearch.md#datetime)
- [devicePlan](DeviceShareSearch.md#deviceplan)
- [devicePlanBillingInfo](DeviceShareSearch.md#deviceplanbillinginfo)
- [exclusiveDates](DeviceShareSearch.md#exclusivedates)
- [findFirstAfterDate](DeviceShareSearch.md#findfirstafterdate)
- [findFirstBeforeDate](DeviceShareSearch.md#findfirstbeforedate)
- [findFromDevices](DeviceShareSearch.md#findfromdevices)
- [findFromMyAdminIds](DeviceShareSearch.md#findfrommyadminids)
- [findFromSerialNumbers](DeviceShareSearch.md#findfromserialnumbers)
- [findPendingOrActiveOnly](DeviceShareSearch.md#findpendingoractiveonly)
- [id](DeviceShareSearch.md#id)
- [myAdminId](DeviceShareSearch.md#myadminid)
- [serialNumber](DeviceShareSearch.md#serialnumber)
- [shareStatus](DeviceShareSearch.md#sharestatus)
- [shareType](DeviceShareSearch.md#sharetype)
- [sourceDatabaseName](DeviceShareSearch.md#sourcedatabasename)
- [targetDatabaseName](DeviceShareSearch.md#targetdatabasename)
- [terminatedDateTime](DeviceShareSearch.md#terminateddatetime)
- [toDate](DeviceShareSearch.md#todate)
- [updatedDateTime](DeviceShareSearch.md#updateddatetime)
- [version](DeviceShareSearch.md#version)

## Properties

### acceptedDateTime

• **acceptedDateTime**: `Date`

Gets or sets search for DeviceShares accepted from this date onwards.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:15](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L15)

___

### dateTime

• **dateTime**: `Date`

Gets or sets search for DeviceShares created from this date onwards.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:17](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L17)

___

### devicePlan

• **devicePlan**: [`DevicePlan`](../README.md#deviceplan)

Gets or sets search for DeviceShares using [DevicePlan](../README.md#deviceplan).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:19](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L19)

___

### devicePlanBillingInfo

• **devicePlanBillingInfo**: [`DevicePlanBillingInfo`](DevicePlanBillingInfo.md)

Gets or sets search for a DeviceShare using billing level in DeviceShareSearch.DevicePlanBillingInfo.
 Available DeviceShareSearch.DevicePlanBillingInfo search options are:
 <list><item><description>BillingLevel</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:25](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L25)

___

### exclusiveDates

• **exclusiveDates**: `boolean`

Gets or sets the ExclusiveDateSearch flag. Set to true to search for dates exclusively (meaning greater/less than is used instead greater/less or equal to when filtering results).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:27](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L27)

___

### findFirstAfterDate

• **findFirstAfterDate**: `boolean`

Gets or sets the FindFirstAfterDate flag. Set to true to find the first device share after the only
 non-null date field. Setting more than one date field will cause an exception. Also, this option cannot
 be used in combination with the FindFirstBeforeDate.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:33](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L33)

___

### findFirstBeforeDate

• **findFirstBeforeDate**: `boolean`

Gets or sets the GetFirstBeforeDate flag. Set to true to find the first device share before the only
 non-null date field. Setting more than one date field will cause an exception. Also, this option cannot
 be used in combination with the FindFirstAfterDate

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:39](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L39)

___

### findFromDevices

• **findFromDevices**: [`Device`](Device.md)[]

Gets or sets search for device shares belonging to devices (using their serial number).Note, if this field is set,
 no other search field is considered.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:44](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L44)

___

### findFromMyAdminIds

• **findFromMyAdminIds**: `number`[]

Gets or sets search for device shares using a list MyAdmin ids.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:46](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L46)

___

### findFromSerialNumbers

• **findFromSerialNumbers**: `string`[]

Gets or sets search for device shares using device serial numbers. Note, if this field is set, no other
 search field is considered.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:51](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L51)

___

### findPendingOrActiveOnly

• **findPendingOrActiveOnly**: `boolean`

Gets or sets the FindPendingOrActiveOnly flag. Set to true to find only device shares that have a share
 status of either pending or active.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:56](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L56)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L10)

___

### myAdminId

• **myAdminId**: `number`

Gets or sets search for a DeviceShare using its MyAdmin id.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:58](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L58)

___

### serialNumber

• **serialNumber**: `string`

Gets or sets search for a DeviceShares having a given serial number.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:60](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L60)

___

### shareStatus

• **shareStatus**: [`DeviceShareStatus`](../README.md#devicesharestatus)

Gets or sets search for DeviceShares using [DeviceShareStatus](../README.md#devicesharestatus).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:62](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L62)

___

### shareType

• **shareType**: [`DeviceShareType`](../README.md#devicesharetype)

Gets or sets search for DeviceShares using [DeviceShareType](../README.md#devicesharetype).

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:64](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L64)

___

### sourceDatabaseName

• **sourceDatabaseName**: `string`

Gets or sets search for DeviceShares using SourceDatabaseName matching this value. Wildcard can be used by
 prepending/appending "%" to string. Example "%database%".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:69](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L69)

___

### targetDatabaseName

• **targetDatabaseName**: `string`

Gets or sets search for DeviceShares using TargetDatabaseName matching this value. Wildcard can be used by
 prepending/appending "%" to string. Example "%database%".

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:74](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L74)

___

### terminatedDateTime

• **terminatedDateTime**: `Date`

Gets or sets search for DeviceShares terminated from this date onwards.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:76](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L76)

___

### toDate

• **toDate**: `Date`

Gets or sets the max date that a date field will be bound by. Only one other date field can be used in
 combination with the ToDate. If this is the only date field set, then the results will be bound by the
 DeviceShareSearch.DateTime field.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:82](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L82)

___

### updatedDateTime

• **updatedDateTime**: `Date`

Gets or sets search for DeviceShares updated from this date onwards.

#### Defined in

[src/types/Checkmate/ObjectModel/DeviceShareSearch.ts:84](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/DeviceShareSearch.ts#L84)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Search.ts#L12)
