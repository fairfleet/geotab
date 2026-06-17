# Changelog

## 2.4.0

### Fixed

- **Illegal invocation on first API call when bundled.** `fetch` is now invoked
  with `globalThis` as its receiver (`fetch.call(globalThis, …)`), preventing the
  `TypeError: Illegal invocation` thrown by minified production builds on
  Authenticate/login.
- **`signal` serialized into `ExecuteMultiCall`.** The batched-call payload no
  longer copies queue-entry internals (`signal`, `resolve`, `reject`) into the
  JSON-RPC params; only `method` and `params` are sent per call.
