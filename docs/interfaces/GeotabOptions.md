[@fairfleet/geotab](../README.md) / GeotabOptions

# Interface: GeotabOptions

The [Geotab](Geotab.md) options.

## Table of contents

### Properties

- [credentials](GeotabOptions.md#credentials)
- [headers](GeotabOptions.md#headers)
- [middleware](GeotabOptions.md#middleware)
- [parseJSON](GeotabOptions.md#parsejson)
- [queueBufferTime](GeotabOptions.md#queuebuffertime)
- [queueMaxSize](GeotabOptions.md#queuemaxsize)
- [queueMethods](GeotabOptions.md#queuemethods)
- [url](GeotabOptions.md#url)

## Properties

### credentials

• `Optional` **credentials**: [`Credentials`](Credentials.md)

The Geotab credentials to supply to each JSON-RPC call.

#### Defined in

[src/types/GeotabOptions.ts:22](https://github.com/fairfleet/geotab/blob/b682f10/src/types/GeotabOptions.ts#L22)

___

### headers

• `Optional` **headers**: `HeadersInit`

The headers to supply for each POST request.

#### Defined in

[src/types/GeotabOptions.ts:19](https://github.com/fairfleet/geotab/blob/b682f10/src/types/GeotabOptions.ts#L19)

___

### middleware

• `Optional` **middleware**: [`Middleware`](../README.md#middleware)[]

The JSON-RPC call middleware to apply.

#### Defined in

[src/types/GeotabOptions.ts:16](https://github.com/fairfleet/geotab/blob/b682f10/src/types/GeotabOptions.ts#L16)

___

### parseJSON

• `Optional` **parseJSON**: (`text`: `string`, `reviver?`: (`this`: `any`, `key`: `string`, `value`: `any`) => `any`) => `any`

#### Type declaration

▸ (`text`, `reviver?`): `any`

Converts a JavaScript Object Notation (JSON) string into an object.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | A valid JSON string. |
| `reviver?` | (`this`: `any`, `key`: `string`, `value`: `any`) => `any` | A function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is. |

##### Returns

`any`

#### Defined in

[src/types/GeotabOptions.ts:53](https://github.com/fairfleet/geotab/blob/b682f10/src/types/GeotabOptions.ts#L53)

___

### queueBufferTime

• `Optional` **queueBufferTime**: `number`

The number of milliseconds to wait before flushing the call queue.

**`Remarks`**

Defaults to 1500ms

#### Defined in

[src/types/GeotabOptions.ts:46](https://github.com/fairfleet/geotab/blob/b682f10/src/types/GeotabOptions.ts#L46)

___

### queueMaxSize

• `Optional` **queueMaxSize**: `number`

The maximum number of calls to queue before flushing.

**`Remarks`**

Defaults to 100.

#### Defined in

[src/types/GeotabOptions.ts:40](https://github.com/fairfleet/geotab/blob/b682f10/src/types/GeotabOptions.ts#L40)

___

### queueMethods

• `Optional` **queueMethods**: `string`[]

The list of method names to queue.

**`Remarks`**

Defaults to `["Get", "GetAddresses", "GetCountOf", "GetFeed", "GetVersion", "GetVersionInformation"]`.

Ideally, methods that are not idempotent should not be queued, rather should be
executed immediately.

#### Defined in

[src/types/GeotabOptions.ts:33](https://github.com/fairfleet/geotab/blob/b682f10/src/types/GeotabOptions.ts#L33)

___

### url

• `Optional` **url**: `string`

The Geotab API url.

**`Remarks`**

Defaults to "https://my.geotab.com/apiv1".

#### Defined in

[src/types/GeotabOptions.ts:13](https://github.com/fairfleet/geotab/blob/b682f10/src/types/GeotabOptions.ts#L13)
