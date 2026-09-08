# Changelog

## 3.1.0 — 2026-09-08

### Added

- Built-in rate limiting against Geotab's quota of 1000 calls per rolling minute. Every request
  leaving the client is charged against a sliding-window budget (one call per `ExecuteMultiCall`
  entry) and waits for the window to roll when the budget is spent. On by default with
  `{ maxCalls: 900, windowMs: 60000 }`; configurable via the new `rateLimit` option, `false`
  disables it.
- `retryOnOverLimit` option (default `1`): retries a call that failed with an `OverLimitException`
  after waiting out a full window. The retry is charged against the budget again; the original
  `GeotabError` surfaces once the retries are spent.
- `maxConcurrentFlushes` option: caps the number of `ExecuteMultiCall` requests in flight.
- `isOverLimitError()` export to recognise the quota error by its JSON-RPC `data.type` or message.
- `RateLimitOptions` type.

### Changed

- Default `queueBufferTime` lowered from `1500` to `0`. The queue still flushes only after the
  buffer time or 100 calls, but 0 ms means the flush happens on the next macrotask instead of
  after a fixed delay — calls issued synchronously in the same tick (one React commit, one
  TanStack Query batch) still coalesce into a single `ExecuteMultiCall`. Pass an explicit
  `queueBufferTime` (e.g. `1500`) to restore the previous behaviour.

### Notes

- The budget is per client instance. Other clients or browser tabs sharing one session are not
  visible to it.

## 3.0.0 — 2026-06-17

### Changed

- Regenerated all `src/types` from `Geotab.Checkmate.ObjectModel` **11.118.421** (was `10.0.0-preview1`).
- Retargeted the CaroKann type generator to **.NET 10** (`net10.0`); bumped `Reinforced.Typings` 1.6.1 → **1.6.7**.
- CI publish workflow (`publish.yaml`) now installs **.NET 10** (`10.0.x`) instead of .NET 6.

### Added

246 new type files across the following domains:

- **Camera / Video:** `Camera`, `CameraSearch`, `CameraHealth`, `CameraStatus`, `CameraDeviceStatus`, `CameraPartner`
- **EV / Charging / Battery:** `EVStatusInfo`, `EVStatusInfoSearch`, `RangeEstimate`, `BatteryStateOfHealth`, `ElectrificationAggregation`, `EvSuitabilityAssessment` family
- **Emission Reporting:** 12 types covering compliance events, vehicle enrollment, service logs, and reporting cycles (`EmissionReporting/*`)
- **Sustainability:** Electrification summaries, idling summaries, monthly summaries, powertrain (`Sustainability/*`)
- **Maintenance:** `MaintenanceSchedule` (replaces `EventRule` in the maintenance context), `MaintenanceWorkOrder`, `MaintenanceWorkRequest`, `DiagnosticValueStatus`, `DocumentScanning`
- **Inspection / DVIR:** `InspectionLog`, `InspectedItem`, `InspectionItemType`, `InspectionItemSeverity`, `InspectionItemOption`
- **Investigation:** `Investigation`, `InvestigationAttachment`, `InvestigationComment`
- **Push Notifications:** `PushToken`, `PushTokenSearch`, `PushNotificationPlatform`, `PushNotificationService`
- **Safety Insights:** `SafetyDriverInsight`, `SafetyFleetInsight`, `SafetyVehicleInsight`, `SafetyFleetBenchmark`
- **HOS / Duty Status:** `HosStatusInfo`, `DiscreteAvailabilitySnapshot`, `DriverRegulationReprocessRequest`, `DutyStatusViolationType` additions
- **Tachograph:** `TachographDriverActivity`, `TachographDrivingTimeStatus`, `WeekRest`
- **Fuel & Energy:** `FuelAndEnergyUsed`, `FuelAndEnergySetting`, `FuelAndEnergyUsedAggregation`, `FuelAndEnergySettingType`, `PotentialFuelFraud` family
- **Asset / Zone:** `AssetLink`, `AssetSeparationSubscription`, `ZoneMetadata`, `GroupZoneMetadataType`
- **Coaching:** `CoachingSession`, `CoachingSessionSearch`
- **Consent:** `ConsentStatus`, `Product`, `Option`
- **Device Comms / Feature:** `DeviceCommunicationHistory`, `DeviceCommunicationStatus`, `LostModeChange`, `DeviceShare`
- **Reprocessing:** `ReprocessRequest`, `DeviceReprocessRequest`
- **Report:** `ReportTag`, `ReportExtensionType`, `CustomReportSchedule`, `DashboardCache`
- **Upload / Queue:** `EntityUploadRequest`, `QueuedEntityRemoveTask`, `UploadTransaction`
- **Diagnostics:** `DiagnosticData`, `DiagnosticLookupTable`, `FaultCycle`, `FaultRichData`, `BasicDiagnostic`
- **Other:** `Feedback`, `UtilizationInterval`, `VehicleDowntime`, `IAMMetadata`, `StatusDataValueFilter`
- **`StoreForwardFaultState`** — the new `StoreForward/FaultState` enum re-exported under the alias `StoreForwardFaultState` to avoid collision with the existing Engine `FaultState` export.

### Breaking

The following changes require consumer code updates.

#### Removed exports (20 types deleted from OM 11.118.421)

| Removed export | Previously at |
|---|---|
| `Dashboard` | `Checkmate/ObjectModel/Dashboard` |
| `DashboardSearch` | `Checkmate/ObjectModel/DashboardSearch` |
| `Widget` | `Checkmate/ObjectModel/Widget` |
| `WidgetSearch` | `Checkmate/ObjectModel/WidgetSearch` |
| `WidgetType` | `Checkmate/ObjectModel/WidgetType` |
| `VirtualExceptionEvent` | `Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent` |
| `VirtualExceptionEventSearch` | `Checkmate/ObjectModel/Exceptions/VirtualExceptionEventSearch` |
| `SigningInfo` | `Checkmate/ObjectModel/SigningInfo` |
| `PubSubDataUpdateVerb` | `Checkmate/ObjectModel/PubSub/PubSubDataUpdateVerb` |
| `ReportHeading` | `Checkmate/Reports/ReportHeading` |
| `AreaType` | `Log/AreaType` |
| `SeverityLevel` | `Log/SeverityLevel` |
| `RectangleF` | `Drawing/RectangleF` |
| `ExceptionInfoTag` | `Checkmate/ExceptionInfoTag` |
| `EntityBackfillStatus` | `Checkmate/ObjectModel/EntityBackfillStatus` |
| `EventRuleSearch` | `Checkmate/ObjectModel/EventRuleSearch` |
| `FirmwareType` | `Checkmate/ObjectModel/FirmwareType` |
| `TachographFileType` (enum) | `Checkmate/ObjectModel/Tachograph/Files/TachographFileType` |
| `MachineSettings.ServerSwitches` | `Checkmate/MachineSettings/ServerSwitches` |
| `MachineSettings.State` | `Checkmate/MachineSettings/State` |

`Dashboard`, `VirtualExceptionEvent`, and `Widget` are also removed from the `EntityTypes` and `SearchTypes` index maps.

#### Property and type changes on surviving interfaces

| Interface | Change |
|---|---|
| `AddInConfiguration` | `items: any[]` → `items: unknown[]` (callers reading `items` must now cast; technically breaking) |
| `ChargeEventSearch` | `id: string` removed |
| `DutyStatusViolation` | `id: string` removed (does not extend `Entity`) |
| `EventDeviation` | `eventRule: EventRule` → `eventRule: MaintenanceSchedule` |
| `EventDeviationSearch` | `eventRuleSearch: EventRuleSearch` → `eventRuleSearch: MaintenanceScheduleSearch` |
| `EventOccurrenceDueSearch` | `eventRuleSearch: EventRuleSearch` → `eventRuleSearch: MaintenanceScheduleSearch` |
| `EventOccurrenceSearch` | `eventRuleSearch: EventRuleSearch` → `eventRuleSearch: MaintenanceScheduleSearch` |
| `HosRulesetConfigParameters` | `labsEnabled: boolean` removed |
| `InstallRecordOtherDetails` | `photos: unknown[]` → `photos: string[]` (type narrowed — breaking for writes with non-string values) |
| `MaintenanceNotificationRule` | `eventRule: EventRule` → `eventRule: MaintenanceSchedule` |
| `NotificationMaintenanceReminderData` | `eventRule: EventRule` → `eventRule: MaintenanceSchedule` |
| `ReportTemplate` | `signingInfo: SigningInfo` removed (`SigningInfo` type also deleted) |
| `ReportTemplateSearch` | `reportDataSource: ReportDataSource` → `reportDataSources: ReportDataSource[]` (renamed + pluralized) |
| `TachographCompanyCard` | `status: TachographCompanyCardStatus` → `status: string` (enum deleted) |
| `TachographCompanyCardSearch` | `status: TachographCompanyCardStatus` → `status: string` (enum deleted) |
| `TachographDataFileSearch` | `containsText`, `deviceIds`, `driverIds`, `fromDate`, `toDate` removed |
| `TachographDataFileSearch` | `type: TachographFileType` → `type: string` (`TachographFileType` enum deleted) |
| `TripSearch` | `maxId: string` removed (replaced by `maxVersion: number`) |
| `TripSearch` | `minId: string` removed (replaced by `minVersion: number`) |
| `User` | `isServiceUpdatesEnabled: boolean` removed |
| `ZoneSearch` | `viewport: RectangleF` removed (`RectangleF` type also deleted) |
| `KnownId` (enum) | Members `ZoneTypeAddressLookupId` and `SecurityIdViewActiveInsightsId` removed |
| `KnownId` (enum) | `SourceLevcId` runtime value changed: `"SourceLevcId"` → `"Source14Id"` |
| `KnownId` (enum) | `SourceLevcObsoleteId` runtime value changed: `"SourceLevcObsoleteId"` → `"Source114Id"` |
| `KnownId` (enum) | `ControllerLevcAnyId` runtime value changed: `"ControllerLevcAnyId"` → `"ControllerSource14AnyId"` |

---

## 2.4.0

### Fixed

- **Illegal invocation on first API call when bundled.** `fetch` is now invoked
  with `globalThis` as its receiver (`fetch.call(globalThis, …)`), preventing the
  `TypeError: Illegal invocation` thrown by minified production builds on
  Authenticate/login.
- **`signal` serialized into `ExecuteMultiCall`.** The batched-call payload no
  longer copies queue-entry internals (`signal`, `resolve`, `reject`) into the
  JSON-RPC params; only `method` and `params` are sent per call.
