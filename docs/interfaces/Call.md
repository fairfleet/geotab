[@fairfleet/geotab](../README.md) / Call

# Interface: Call<TResult\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `unknown` |

## Table of contents

### Properties

- [method](Call.md#method)
- [params](Call.md#params)
- [signal](Call.md#signal)

## Properties

### method

• **method**: `string`

The JSON-RPC method to call.

#### Defined in

[src/types/Call.ts:3](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Call.ts#L3)

___

### params

• `Optional` **params**: `Record`<`string`, `unknown`\>

The JSON-RPC method parameters.

#### Defined in

[src/types/Call.ts:5](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Call.ts#L5)

___

### signal

• `Optional` **signal**: `AbortSignal`

The optional abort signal.

#### Defined in

[src/types/Call.ts:7](https://github.com/fairfleet/geotab/blob/b682f10/src/types/Call.ts#L7)
