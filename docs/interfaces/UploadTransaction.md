[@fairfleet/geotab](../README.md) / UploadTransaction

# Interface: UploadTransaction

Represents a batch of entity data to be uploaded to BIP

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`UploadTransaction`**

## Table of contents

### Properties

- [databaseName](UploadTransaction.md#databasename)
- [dateTime](UploadTransaction.md#datetime)
- [entityName](UploadTransaction.md#entityname)
- [entityUploadRequestId](UploadTransaction.md#entityuploadrequestid)
- [fromVersion](UploadTransaction.md#fromversion)
- [id](UploadTransaction.md#id)
- [status](UploadTransaction.md#status)
- [toVersion](UploadTransaction.md#toversion)

## Properties

### databaseName

• **databaseName**: `string`

Database name

#### Defined in

[src/types/Checkmate/ObjectModel/UploadTransaction.ts:11](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UploadTransaction.ts#L11)

___

### dateTime

• **dateTime**: `Date`

Timestamp when transaction was created

#### Defined in

[src/types/Checkmate/ObjectModel/UploadTransaction.ts:13](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UploadTransaction.ts#L13)

___

### entityName

• **entityName**: `string`

Entity type name (e.g., "Trip", "StatusData")

#### Defined in

[src/types/Checkmate/ObjectModel/UploadTransaction.ts:15](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UploadTransaction.ts#L15)

___

### entityUploadRequestId

• **entityUploadRequestId**: `number`

Foreign key to EntityUploadRequest

#### Defined in

[src/types/Checkmate/ObjectModel/UploadTransaction.ts:17](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UploadTransaction.ts#L17)

___

### fromVersion

• **fromVersion**: `number`

Start version (inclusive) for this batch

#### Defined in

[src/types/Checkmate/ObjectModel/UploadTransaction.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UploadTransaction.ts#L19)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Entity.ts#L14)

___

### status

• **status**: [`UploadTransactionStatus`](../README.md#uploadtransactionstatus)

Processing status of this transaction

#### Defined in

[src/types/Checkmate/ObjectModel/UploadTransaction.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UploadTransaction.ts#L21)

___

### toVersion

• **toVersion**: `number`

End version (inclusive) for this batch

#### Defined in

[src/types/Checkmate/ObjectModel/UploadTransaction.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UploadTransaction.ts#L23)
