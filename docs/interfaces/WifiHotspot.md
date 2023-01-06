[@fairfleet/geotab](../README.md) / WifiHotspot

# Interface: WifiHotspot

WifiHotspot is used to configure WiFi hotspot settings on telematics devices.

## Hierarchy

- [`VehicleConfiguration`](VehicleConfiguration.md)

  ↳ **`WifiHotspot`**

## Table of contents

### Properties

- [device](WifiHotspot.md#device)
- [id](WifiHotspot.md#id)
- [password](WifiHotspot.md#password)
- [rateLimitKbps](WifiHotspot.md#ratelimitkbps)
- [ssid](WifiHotspot.md#ssid)
- [version](WifiHotspot.md#version)

## Properties

### device

• **device**: [`Device`](Device.md)

Gets or sets the [Device](Device.md) associated with this VehicleConfiguration.

#### Inherited from

[VehicleConfiguration](VehicleConfiguration.md).[device](VehicleConfiguration.md#device)

#### Defined in

[src/types/Checkmate/ObjectModel/VehicleConfiguration.ts:11](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/VehicleConfiguration.ts#L11)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the specific [Entity](Entity.md) object in the Geotab system. See Id.

#### Inherited from

[VehicleConfiguration](VehicleConfiguration.md).[id](VehicleConfiguration.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Entity.ts:15](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/Entity.ts#L15)

___

### password

• **password**: `string`

Gets or sets the WiFi password.

#### Defined in

[src/types/Checkmate/ObjectModel/WifiHotspot.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/WifiHotspot.ts#L10)

___

### rateLimitKbps

• **rateLimitKbps**: `number`

Gets or sets the WiFi rate limit. If the WiFi data cap tier is exceeded (as provided by plan or 3GB), this rate limit will be imposed to reduce the data usage.

#### Defined in

[src/types/Checkmate/ObjectModel/WifiHotspot.ts:12](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/WifiHotspot.ts#L12)

___

### ssid

• **ssid**: `string`

Gets or sets the WiFi SSID.

#### Defined in

[src/types/Checkmate/ObjectModel/WifiHotspot.ts:14](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/WifiHotspot.ts#L14)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[VehicleConfiguration](VehicleConfiguration.md).[version](VehicleConfiguration.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/EntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Checkmate/ObjectModel/EntityWithVersion.ts#L10)
