[@fairfleet/geotab](../README.md) / DriverRegulationReprocessRequest

# Interface: DriverRegulationReprocessRequest

Represents a request to reprocess driver regulations (violations and availability).

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`DriverRegulationReprocessRequest`**

## Table of contents

### Properties

- [createdDate](DriverRegulationReprocessRequest.md#createddate)
- [dateTime](DriverRegulationReprocessRequest.md#datetime)
- [fromDate](DriverRegulationReprocessRequest.md#fromdate)
- [id](DriverRegulationReprocessRequest.md#id)
- [requestedBy](DriverRegulationReprocessRequest.md#requestedby)
- [status](DriverRegulationReprocessRequest.md#status)
- [user](DriverRegulationReprocessRequest.md#user)

## Properties

### createdDate

• **createdDate**: `Date`

Gets or sets a value indicating the date the reprocess request was created.

#### Defined in

[src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequest.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequest.ts#L11)

___

### dateTime

• **dateTime**: `Date`

**`Inherit Doc`**

#### Defined in

[src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequest.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequest.ts#L15)

___

### fromDate

• **fromDate**: `Date`

Gets or sets a value indicating the cutoff date for reprocessing.

#### Defined in

[src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequest.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequest.ts#L17)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### requestedBy

• **requestedBy**: `string`

Gets or sets a value indicating the user who requested the reprocess.

#### Defined in

[src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequest.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequest.ts#L19)

___

### status

• **status**: `string`

Gets or sets a value describing the current status of the driver regulation reprocess request.
 See [DriverRegulationReprocessRequestStatus](../README.md#driverregulationreprocessrequeststatus) for valid values.

#### Defined in

[src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequest.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequest.ts#L24)

___

### user

• **user**: [`User`](User.md)

Gets or sets the user for whom to reprocess driver regulations.

#### Defined in

[src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequest.ts:26](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/HOS/DriverRegulationReprocessRequest.ts#L26)
