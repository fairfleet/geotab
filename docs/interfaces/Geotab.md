[@fairfleet/geotab](../README.md) / Geotab

# Interface: Geotab

A Geotab API client.

## Table of contents

### Methods

- [add](Geotab.md#add)
- [authenticate](Geotab.md#authenticate)
- [call](Geotab.md#call)
- [get](Geotab.md#get)
- [getAddresses](Geotab.md#getaddresses)
- [getCountOf](Geotab.md#getcountof)
- [getFeed](Geotab.md#getfeed)
- [getVersion](Geotab.md#getversion)
- [getVersionInformation](Geotab.md#getversioninformation)
- [remove](Geotab.md#remove)
- [set](Geotab.md#set)

## Methods

### add

▸ **add**<`TType`, `TEntity`\>(`typeName`, `entity`, `signal?`): `Promise`<`string`\>

Adds a new entity to the Geotab database.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends keyof [`EntityTypes`](../README.md#entitytypes) |
| `TEntity` | extends `object` = [`EntityTypes`](../README.md#entitytypes)[`TType`] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeName` | `TType` | The name of the entity type. |
| `entity` | { [K in string \| number \| symbol]?: TEntity[K] } | The entity to add. |
| `signal?` | `AbortSignal` | The optional abort signal. |

#### Returns

`Promise`<`string`\>

The id of the added entity.

#### Defined in

[src/types/Geotab.ts:41](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Geotab.ts#L41)

___

### authenticate

▸ **authenticate**(`userName`, `password`, `database?`, `signal?`): `Promise`<[`LoginResult`](LoginResult.md)\>

Authenticates a user and provides a [LoginResult](LoginResult.md) if successful.

**`Remarks`**

Maximum 10 attempts per minute.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userName` | `string` | The user name (typically an email address) that identifies the user. |
| `password` | `string` | The user's Geotab password. |
| `database?` | `string` | The name of the database to authenticate against. |
| `signal?` | `AbortSignal` | The optional abort signal. |

#### Returns

`Promise`<[`LoginResult`](LoginResult.md)\>

A [LoginResult](LoginResult.md) object.

#### Defined in

[src/types/Geotab.ts:61](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Geotab.ts#L61)

___

### call

▸ **call**<`TResult`\>(`method`, `params?`, `signal?`): `Promise`<`TResult`\>

Sends a JSON-RPC call to the Geotab API and returns the result.

**`Throws`**

If the HTTP status indicates a failure occurred.

**`Throws`**

If the JSONRPC response contains an error.

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | `string` | The method to call. |
| `params?` | `Record`<`string`, `unknown`\> | The parameters to pass to the method. |
| `signal?` | `AbortSignal` | The optional abort signal. |

#### Returns

`Promise`<`TResult`\>

- The result of the call.

#### Defined in

[src/types/Geotab.ts:27](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Geotab.ts#L27)

___

### get

▸ **get**<`TType`, `TEntity`, `TSearch`\>(`typeName`, `search`, `resultsLimit?`, `signal?`): `Promise`<`TEntity`[]\>

Gets collection of entities from the database that match the supplied search
criteria.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends ``"Source"`` \| ``"BinaryData"`` \| ``"Diagnostic"`` \| ``"Device"`` \| ``"Trailer"`` \| ``"DVIRDefect"`` \| ``"ExceptionEvent"`` \| ``"TextMessage"`` \| ``"TripTypeChange"`` \| ``"LogRecord"`` \| ``"FaultData"`` \| ``"StatusData"`` \| ``"WorkTime"`` \| ``"Zone"`` \| ``"FuelTransaction"`` \| ``"Rule"`` \| ``"Notification"`` \| ``"DVIRLog"`` \| ``"ChargeEvent"`` \| ``"Dashboard"`` \| ``"InstallRecord"`` \| ``"UserHosRuleSet"`` \| ``"User"`` \| ``"Route"`` \| ``"AddInData"`` \| ``"AnnotationLog"`` \| ``"Audit"`` \| ``"Certificate"`` \| ``"CustomData"`` \| ``"Property"`` \| ``"PropertySet"`` \| ``"DebugData"`` \| ``"Defect"`` \| ``"DefectRemark"`` \| ``"DeviceDataPrivacyChange"`` \| ``"DeviceLink"`` \| ``"DeviceMasterFlag"`` \| ``"DeviceShare"`` \| ``"DeviceStatusInfo"`` \| ``"DistributionList"`` \| ``"DriverChange"`` \| ``"DriverRegulation"`` \| ``"DutyStatusAvailability"`` \| ``"DutyStatusLog"`` \| ``"DutyStatusViolation"`` \| ``"EmployeeRoutePlan"`` \| ``"EventOccurrence"`` \| ``"EventOccurrenceDue"`` \| ``"EventRule"`` \| ``"FeedVersionTrackingData"`` \| ``"FuelTaxDetail"`` \| ``"Group"`` \| ``"GroupDevice"`` \| ``"GroupFilter"`` \| ``"GroupZoneMetadata"`` \| ``"HosRulesetConfig"`` \| ``"IoxAddOn"`` \| ``"LogRecordZoneDistance"`` \| ``"MaintenanceNotificationRule"`` \| ``"MaintenanceNotificationState"`` \| ``"MimeTask"`` \| ``"Recipient"`` \| ``"ReportStorage"`` \| ``"ReportTemplate"`` \| ``"RouteExtract"`` \| ``"SecurityId"`` \| ``"ServiceState"`` \| ``"ShareableLink"`` \| ``"ShipmentLog"`` \| ``"TrailerAttachment"`` \| ``"Trip"`` \| ``"TripAnnotation"`` \| ``"TripGeohash"`` \| ``"UserDeviceLink"`` \| ``"UserLoginStatus"`` \| ``"UserSupport"`` \| ``"VehicleConfiguration"`` \| ``"Widget"`` \| ``"WifiHotspot"`` \| ``"WorkHoliday"`` \| ``"ZoneType"`` \| ``"DeviceReprocessRequest"`` \| ``"EnergyConsumedProcessing"`` \| ``"FuelAndEnergySnapshotProcessing"`` \| ``"FillUp"`` \| ``"FuelSnapshotRecord"`` \| ``"FuelUpEvent"`` \| ``"FuelUsed"`` \| ``"MediaFile"`` \| ``"ExceptionEventAttachment"`` \| ``"ExceptionEventComment"`` \| ``"VirtualExceptionEvent"`` \| ``"EntityLinkRule"`` \| ``"Controller"`` \| ``"EngineType"`` \| ``"FailureMode"`` \| ``"ParameterGroup"`` \| ``"UnitOfMeasure"`` \| ``"DisplayMeasurementProfile"`` \| ``"DisplayMeasurementProfileDetail"`` \| ``"DisplayUnitOfMeasure"`` \| ``"UserDisplayProfile"`` \| ``"EnergyConsumed"`` \| ``"EnergySnapshotRecord"`` \| ``"DeviceReplacementInfo"`` \| ``"DeviceRegistrationState"`` \| ``"AddIn"`` |
| `TEntity` | [`EntityTypes`](../README.md#entitytypes)[`TType`] |
| `TSearch` | extends `object` = [`SearchTypes`](../README.md#searchtypes)[`TType`] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeName` | `TType` | The name of the entity type. |
| `search` | { [K in string \| number \| symbol]?: TSearch[K] } | The search criteria to use. |
| `resultsLimit?` | `number` | The maximum number of entities that will be returned. |
| `signal?` | `AbortSignal` | The optional abort signal. |

#### Returns

`Promise`<`TEntity`[]\>

The entities matching search criteria.

#### Defined in

[src/types/Geotab.ts:78](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Geotab.ts#L78)

___

### getAddresses

▸ **getAddresses**(`coordinates`, `hosAddresses?`, `movingAddresses?`, `signal?`): `Promise`<[`ReverseGeocodeAddress`](ReverseGeocodeAddress.md)[]\>

Gets the addresses from the list of [Coordinate](Coordinate.md), as well as any [Zone](Zone.md)s in the
system that contain the given coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coordinates` | [`Coordinate`](Coordinate.md)[] | The array of [Coordinate](Coordinate.md) to get the addresses for. |
| `hosAddresses?` | `boolean` | If true, the direction and distance to the nearest city with a population greater than 5000 will be returned. |
| `movingAddresses?` | `boolean` | If true, the coordinates are being specified for a moving object. |
| `signal?` | `AbortSignal` | The optional abort signal. |

#### Returns

`Promise`<[`ReverseGeocodeAddress`](ReverseGeocodeAddress.md)[]\>

A list of populated [ReverseGeocodeAddress](ReverseGeocodeAddress.md).

#### Defined in

[src/types/Geotab.ts:100](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Geotab.ts#L100)

___

### getCountOf

▸ **getCountOf**<`TType`\>(`typeName`, `signal?`): `Promise`<`number`\>

Gets the number of of entities in the database.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends keyof [`EntityTypes`](../README.md#entitytypes) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeName` | `TType` | The name of the entity type. |
| `signal?` | `AbortSignal` | The optional abort signal. |

#### Returns

`Promise`<`number`\>

The number of entities in the database.

#### Defined in

[src/types/Geotab.ts:114](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Geotab.ts#L114)

___

### getFeed

▸ **getFeed**<`TType`, `TEntity`, `TSearch`\>(`typeName`, `search`, `fromVersion?`, `resultsLimit?`, `signal?`): `Promise`<[`FeedResult`](FeedResult.md)<`TEntity`\>\>

Gets collection of entities from the database that have changed since the supplied
`fromVersion` and that match the supplied search criteria.

**`Remarks`**

Supported types are as follows:
- [AnnotationLog](AnnotationLog.md) and AnnotationLogSearch for Annotation Log related parameters.
- [Audit](Audit.md) and AuditSearch to provide a fromDate from which to seed the feed.
- [CustomData](CustomData.md) and CustomDataSearch for Custom Data related parameters.
- [DebugData](DebugData.md) and DebugDataSearch for Debug Data related parameters.
- [Device](Device.md) *search not supported. Maximum results: 5,000.
- [DeviceShare](DeviceShare.md) *search not supported. Beta
- [DeviceStatusInfo](DeviceStatusInfo.md) *search not supported.
- [Diagnostic](Diagnostic.md) *search not supported.
- [DriverChange](DriverChange.md) and DriverChangeSearch to provide a fromDate from which to seed the feed.
- [DutyStatusLog](DutyStatusLog.md) and DutyStatusLogSearch for Duty Status Log related parameters.
- [DVIRLog](DVIRLog.md) and DVIRLogSearch for DVIR Log related parameters.
- [ExceptionEvent](ExceptionEvent.md) and ExceptionEventSearch for Exception Event related parameters.
- [FaultData](FaultData.md) and FaultDataSearch for Fault Data related parameters.
- [FuelTaxDetail](FuelTaxDetail.md) and FuelTaxDetailSearch for Fuel Tax Detail related parameters.
- [IoxAddOn](IoxAddOn.md) and IoxAddOnSearch for Iox Add-On related parameters.
- [LogRecord](LogRecord.md) and LogRecordSearch for Log Record related parameters.
- [MediaFile](MediaFile.md) *search not supported. Maximum results: 10,000. Beta
- [Route](Route.md) and RouteSearch to provide a fromDate from which to seed the feed. Maximum results: 10,000.
- [Rule](Rule.md) (including ZoneStop ExceptionRuleBaseType) *search not supported. Maximum results: 10,000.
- [ShipmentLog](ShipmentLog.md) and ShipmentLogSearch for Shipment Log related parameters.
- [StatusData](StatusData.md) and StatusDataSearch for Status Data parameters.
- [TextMessage](TextMessage.md) and TextMessageSearch to provide a fromDate from which to seed the feed.
- [Trailer](Trailer.md) *search not supported.
- [TrailerAttachment](TrailerAttachment.md) and TrailerAttachmentSearch for Trailer Attachment related parameters.
- [Trip](Trip.md) and TripSearch for Trip related parameters.
- [User](User.md) (including Driver) *search not supported. Maximum results: 5,000.
- [Zone](Zone.md) *search not supported. Maximum results: 10,000.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends ``"Source"`` \| ``"BinaryData"`` \| ``"Diagnostic"`` \| ``"Device"`` \| ``"Trailer"`` \| ``"DVIRDefect"`` \| ``"ExceptionEvent"`` \| ``"TextMessage"`` \| ``"TripTypeChange"`` \| ``"LogRecord"`` \| ``"FaultData"`` \| ``"StatusData"`` \| ``"WorkTime"`` \| ``"Zone"`` \| ``"FuelTransaction"`` \| ``"Rule"`` \| ``"Notification"`` \| ``"DVIRLog"`` \| ``"ChargeEvent"`` \| ``"Dashboard"`` \| ``"InstallRecord"`` \| ``"UserHosRuleSet"`` \| ``"User"`` \| ``"Route"`` \| ``"AddInData"`` \| ``"AnnotationLog"`` \| ``"Audit"`` \| ``"Certificate"`` \| ``"CustomData"`` \| ``"Property"`` \| ``"PropertySet"`` \| ``"DebugData"`` \| ``"Defect"`` \| ``"DefectRemark"`` \| ``"DeviceDataPrivacyChange"`` \| ``"DeviceLink"`` \| ``"DeviceMasterFlag"`` \| ``"DeviceShare"`` \| ``"DeviceStatusInfo"`` \| ``"DistributionList"`` \| ``"DriverChange"`` \| ``"DriverRegulation"`` \| ``"DutyStatusAvailability"`` \| ``"DutyStatusLog"`` \| ``"DutyStatusViolation"`` \| ``"EmployeeRoutePlan"`` \| ``"EventOccurrence"`` \| ``"EventOccurrenceDue"`` \| ``"EventRule"`` \| ``"FeedVersionTrackingData"`` \| ``"FuelTaxDetail"`` \| ``"Group"`` \| ``"GroupDevice"`` \| ``"GroupFilter"`` \| ``"GroupZoneMetadata"`` \| ``"HosRulesetConfig"`` \| ``"IoxAddOn"`` \| ``"LogRecordZoneDistance"`` \| ``"MaintenanceNotificationRule"`` \| ``"MaintenanceNotificationState"`` \| ``"MimeTask"`` \| ``"Recipient"`` \| ``"ReportStorage"`` \| ``"ReportTemplate"`` \| ``"RouteExtract"`` \| ``"SecurityId"`` \| ``"ServiceState"`` \| ``"ShareableLink"`` \| ``"ShipmentLog"`` \| ``"TrailerAttachment"`` \| ``"Trip"`` \| ``"TripAnnotation"`` \| ``"TripGeohash"`` \| ``"UserDeviceLink"`` \| ``"UserLoginStatus"`` \| ``"UserSupport"`` \| ``"VehicleConfiguration"`` \| ``"Widget"`` \| ``"WifiHotspot"`` \| ``"WorkHoliday"`` \| ``"ZoneType"`` \| ``"DeviceReprocessRequest"`` \| ``"EnergyConsumedProcessing"`` \| ``"FuelAndEnergySnapshotProcessing"`` \| ``"FillUp"`` \| ``"FuelSnapshotRecord"`` \| ``"FuelUpEvent"`` \| ``"FuelUsed"`` \| ``"MediaFile"`` \| ``"ExceptionEventAttachment"`` \| ``"ExceptionEventComment"`` \| ``"VirtualExceptionEvent"`` \| ``"EntityLinkRule"`` \| ``"Controller"`` \| ``"EngineType"`` \| ``"FailureMode"`` \| ``"ParameterGroup"`` \| ``"UnitOfMeasure"`` \| ``"DisplayMeasurementProfile"`` \| ``"DisplayMeasurementProfileDetail"`` \| ``"DisplayUnitOfMeasure"`` \| ``"UserDisplayProfile"`` \| ``"EnergyConsumed"`` \| ``"EnergySnapshotRecord"`` \| ``"DeviceReplacementInfo"`` \| ``"DeviceRegistrationState"`` \| ``"AddIn"`` |
| `TEntity` | [`EntityTypes`](../README.md#entitytypes)[`TType`] |
| `TSearch` | extends `object` = [`SearchTypes`](../README.md#searchtypes)[`TType`] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeName` | `TType` | The name of the entity type. |
| `search` | { [K in string \| number \| symbol]?: TSearch[K] } | The search criteria to use. |
| `fromVersion?` | `string` | The version retrieved from the last GetFeed request. |
| `resultsLimit?` | `number` | The maximum number of entities that will be returned. |
| `signal?` | `AbortSignal` | The optional abort signal. |

#### Returns

`Promise`<[`FeedResult`](FeedResult.md)<`TEntity`\>\>

The feed result containing the entities matching supplied criteria.

#### Defined in

[src/types/Geotab.ts:161](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Geotab.ts#L161)

___

### getVersion

▸ **getVersion**(`signal?`): `Promise`<`string`\>

Gets the version of the server.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signal?` | `AbortSignal` | The optional abort signal. |

#### Returns

`Promise`<`string`\>

The string representation of the server version.

#### Defined in

[src/types/Geotab.ts:178](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Geotab.ts#L178)

___

### getVersionInformation

▸ **getVersionInformation**(`signal?`): `Promise`<[`VersionInformation`](VersionInformation.md)\>

Gets the version information of the server.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signal?` | `AbortSignal` | The optional abort signal. |

#### Returns

`Promise`<[`VersionInformation`](VersionInformation.md)\>

The version information of the server.

#### Defined in

[src/types/Geotab.ts:186](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Geotab.ts#L186)

___

### remove

▸ **remove**<`TType`, `TEntity`\>(`typeName`, `entity`, `signal?`): `Promise`<`void`\>

Removes the given entity from the database.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends keyof [`EntityTypes`](../README.md#entitytypes) |
| `TEntity` | extends `object` = [`EntityTypes`](../README.md#entitytypes)[`TType`] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeName` | `TType` | The type of entity. |
| `entity` | { [K in string \| number \| symbol]?: TEntity[K] } & { `id`: `string`  } | The entity to remove. |
| `signal?` | `AbortSignal` | The optional abort signal. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Geotab.ts:194](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Geotab.ts#L194)

___

### set

▸ **set**<`TType`, `TEntity`\>(`typeName`, `entity`, `signal?`): `Promise`<`void`\>

Modifies an TEntity.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends keyof [`EntityTypes`](../README.md#entitytypes) |
| `TEntity` | extends `object` = [`EntityTypes`](../README.md#entitytypes)[`TType`] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeName` | `TType` | The name of the entity type. |
| `entity` | { [K in string \| number \| symbol]?: TEntity[K] } | The entity to modify. |
| `signal?` | `AbortSignal` | The optional abort signal. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Geotab.ts:210](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Geotab.ts#L210)
