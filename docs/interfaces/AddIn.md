[@fairfleet/geotab](../README.md) / AddIn

# Interface: AddIn

Add-Ins are used to extend the functionality provided by MyGeotab and Geotab Drive. An Add-In is JavaScript, HTML
 and CSS loaded into the MyGeotab or Geotab Drive portal and resides directly inside the user interface. This allows
 third-parties to create a seamless user experience and provide solutions that would otherwise require the user to
 visit a different website altogether.
 <a href="https://developers.geotab.com/myGeotab/addIns/developingAddIns">More information on developing Add-Ins.</a>

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`AddIn`**

## Table of contents

### Properties

- [configuration](AddIn.md#configuration)
- [errorMessage](AddIn.md#errormessage)
- [groups](AddIn.md#groups)
- [id](AddIn.md#id)
- [isAutoEnrollEnabled](AddIn.md#isautoenrollenabled)
- [status](AddIn.md#status)
- [updateTime](AddIn.md#updatetime)
- [url](AddIn.md#url)

## Properties

### configuration

• **configuration**: [`AddInConfiguration`](AddInConfiguration.md)

Gets or sets the [AddInConfiguration](AddInConfiguration.md).

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddIn.ts:19](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddIn.ts#L19)

___

### errorMessage

• **errorMessage**: `string`

Gets or sets the error message if there was an issue with Add-In.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddIn.ts:21](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddIn.ts#L21)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets the group(s) that assets will auto enroll into.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddIn.ts:23](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddIn.ts#L23)

___

### id

• **id**: `string`

Gets or sets the unique identifier for this entity. See Id.

#### Overrides

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddIn.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddIn.ts#L25)

___

### isAutoEnrollEnabled

• **isAutoEnrollEnabled**: `boolean`

Gets or sets a value indicating whether devices can be auto enrolled to the add-in.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddIn.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddIn.ts#L27)

___

### status

• **status**: [`AddInStatus`](../README.md#addinstatus)

Gets or sets the Add-In status.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddIn.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddIn.ts#L29)

___

### updateTime

• **updateTime**: `Date`

Gets or sets the timestamp when Add-In is changed.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddIn.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddIn.ts#L31)

___

### url

• **url**: `string`

Gets or sets the marketplace Add-In Url.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddIn.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddIn.ts#L33)
