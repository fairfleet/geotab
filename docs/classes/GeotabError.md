[@fairfleet/geotab](../README.md) / GeotabError

# Class: GeotabError

## Hierarchy

- `Error`

  ↳ **`GeotabError`**

## Table of contents

### Constructors

- [constructor](GeotabError.md#constructor)

### Properties

- [code](GeotabError.md#code)
- [data](GeotabError.md#data)
- [message](GeotabError.md#message)
- [name](GeotabError.md#name)
- [stack](GeotabError.md#stack)
- [prepareStackTrace](GeotabError.md#preparestacktrace)
- [stackTraceLimit](GeotabError.md#stacktracelimit)

### Methods

- [captureStackTrace](GeotabError.md#capturestacktrace)

## Constructors

### constructor

• **new GeotabError**(`error`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |

#### Overrides

Error.constructor

#### Defined in

[src/GeotabError.ts:7](https://github.com/fairfleet/geotab/blob/ff38bfc/src/GeotabError.ts#L7)

## Properties

### code

• `Readonly` **code**: `number`

The error code that indicates the error that occurred.

#### Defined in

[src/GeotabError.ts:3](https://github.com/fairfleet/geotab/blob/ff38bfc/src/GeotabError.ts#L3)

___

### data

• `Optional` `Readonly` **data**: `unknown`

The data associated with the error.

#### Defined in

[src/GeotabError.ts:5](https://github.com/fairfleet/geotab/blob/ff38bfc/src/GeotabError.ts#L5)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es5.d.ts:1042

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/.pnpm/@types+node@18.11.9/node_modules/@types/node/ts4.8/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/.pnpm/@types+node@18.11.9/node_modules/@types/node/ts4.8/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/.pnpm/@types+node@18.11.9/node_modules/@types/node/ts4.8/globals.d.ts:4
