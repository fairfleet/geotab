[@fairfleet/geotab](../README.md) / EmissionServiceConnectionLog

# Interface: EmissionServiceConnectionLog

<para />
 A Clean Truck Check connection log.
 <para />
 Security clearance requirements:
 <para />
 Creating EmissionServiceConnectionLog (Add requests) requires security clearances SecurityIdentifier.AccessCleanTruckCheckCompliance;
 <para />
 Retrieving EmissionServiceConnectionLog (Get requests) requires one of the following security clearances
 SecurityIdentifier.AccessCleanTruckCheckCompliance, SecurityIdentifier.AccessCleanTruckCheckComplianceEditor, or SecurityIdentifier.AccessCleanTruckCheckComplianceViewer.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`EmissionServiceConnectionLog`**

## Table of contents

### Properties

- [connectionDateTime](EmissionServiceConnectionLog.md#connectiondatetime)
- [errorMessage](EmissionServiceConnectionLog.md#errormessage)
- [id](EmissionServiceConnectionLog.md#id)
- [isSuccess](EmissionServiceConnectionLog.md#issuccess)

## Properties

### connectionDateTime

• **connectionDateTime**: `Date`

Gets or sets the connection DateTime for the [EmissionServiceConnectionLog](EmissionServiceConnectionLog.md).

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionServiceConnectionLog.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionServiceConnectionLog.ts#L20)

___

### errorMessage

• **errorMessage**: `string`

Gets or sets the error message, when the attempt to connect fails.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionServiceConnectionLog.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionServiceConnectionLog.ts#L22)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### isSuccess

• **isSuccess**: `boolean`

Gets or sets a value indicating whether the result of the attempt to connect was successful.

#### Defined in

[src/types/Checkmate/ObjectModel/EmissionReporting/EmissionServiceConnectionLog.ts:24](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/EmissionReporting/EmissionServiceConnectionLog.ts#L24)
