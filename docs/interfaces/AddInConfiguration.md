[@fairfleet/geotab](../README.md) / AddInConfiguration

# Interface: AddInConfiguration

Represents populated Add-In with configuration.

## Table of contents

### Properties

- [customSecurityIds](AddInConfiguration.md#customsecurityids)
- [dataPermissions](AddInConfiguration.md#datapermissions)
- [enableViewSecurityId](AddInConfiguration.md#enableviewsecurityid)
- [files](AddInConfiguration.md#files)
- [installCallbackUrl](AddInConfiguration.md#installcallbackurl)
- [isSigned](AddInConfiguration.md#issigned)
- [items](AddInConfiguration.md#items)
- [key](AddInConfiguration.md#key)
- [name](AddInConfiguration.md#name)
- [onShutdown](AddInConfiguration.md#onshutdown)
- [onStartup](AddInConfiguration.md#onstartup)
- [securityIds](AddInConfiguration.md#securityids)
- [signature](AddInConfiguration.md#signature)
- [solutionId](AddInConfiguration.md#solutionid)
- [supportEmail](AddInConfiguration.md#supportemail)
- [uninstallCallbackUrl](AddInConfiguration.md#uninstallcallbackurl)
- [version](AddInConfiguration.md#version)

## Properties

### customSecurityIds

• **customSecurityIds**: `unknown`[]

Gets or sets an array of CustomSecurityId that are added to the list of features available when editing clearances.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:8](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L8)

___

### dataPermissions

• **dataPermissions**: `unknown`[]

Gets or sets the Data Permissions (i.e. collection of authorizations and consents) if exists.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:10](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L10)

___

### enableViewSecurityId

• **enableViewSecurityId**: `boolean`

Gets or sets a value indicating whether Add-In is going to setup the securityIds for viewing support.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L12)

___

### files

• **files**: `any`

Gets or sets custom pages and/or buttons (Embedded code).

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L14)

___

### installCallbackUrl

• **installCallbackUrl**: `string`

Gets or sets the install callback URL.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L16)

___

### isSigned

• **isSigned**: `boolean`

Gets or sets a value indicating whether the Add-In is signed.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:18](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L18)

___

### items

• **items**: `unknown`[]

Gets or sets an array of custom pages and/or buttons (External references).

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:20](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L20)

___

### key

• **key**: `string`

Gets or sets the unique MyGeotab Marketplace Add-In key assigned by Geotab.
 If there’s no plan to get your Add-In to the Marketplace, you can leave out the key/value pair from the configuration.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:25](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L25)

___

### name

• **name**: `string`

Gets or sets the name of this Add-In.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L27)

___

### onShutdown

• **onShutdown**: `boolean`

Gets or sets a value indicating whether Add-In is executed upon log out within the Drive App.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:29](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L29)

___

### onStartup

• **onStartup**: `boolean`

Gets or sets a value indicating whether Add-In is executed initially on start up within the Drive App.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:31](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L31)

___

### securityIds

• **securityIds**: `unknown`[]

Gets or sets an array of CustomSecurityIdDefinition that are added to the list of features available when editing clearances.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:33](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L33)

___

### signature

• **signature**: `string`

Gets or sets the digital signature of the Add-In.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:35](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L35)

___

### solutionId

• **solutionId**: `string`

Gets or sets the Add-In solution Id.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:37](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L37)

___

### supportEmail

• **supportEmail**: `string`

Gets or sets the email address for support related to this Add-In.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:39](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L39)

___

### uninstallCallbackUrl

• **uninstallCallbackUrl**: `string`

Gets or sets the uninstall callback URL.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:41](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L41)

___

### version

• **version**: `string`

Gets or sets the Add-In application version.

#### Defined in

[src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts:43](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/AddIns/AddInConfiguration.ts#L43)
