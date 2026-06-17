[@fairfleet/geotab](../README.md) / DueCriteriaSearch

# Interface: DueCriteriaSearch

The object used to specify the search criteria for finding [MaintenanceWorkRequest](MaintenanceWorkRequest.md)
 based on due parameters such as remaining engine hours, due date, and remaining kilometers.
 An OR condition is applied between the criteria, meaning any of the due parameters can match.

## Table of contents

### Properties

- [engineHoursRemaining](DueCriteriaSearch.md#enginehoursremaining)
- [kilometersRemaining](DueCriteriaSearch.md#kilometersremaining)
- [timeRemaining](DueCriteriaSearch.md#timeremaining)

## Properties

### engineHoursRemaining

• **engineHoursRemaining**: `string`

Gets or sets the number of engine hours remaining before the work request is due.
 If specified, the search will match work requests that have a remaining engine hour count
 that satisfies this criterion

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DueCriteriaSearch.ts:16](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DueCriteriaSearch.ts#L16)

___

### kilometersRemaining

• **kilometersRemaining**: `number`

Gets or sets the number of kilometers remaining before the work request is due.
 If specified, the search will match work requests that have a remaining kilometer count
 that satisfies this criterion.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DueCriteriaSearch.ts:22](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DueCriteriaSearch.ts#L22)

___

### timeRemaining

• **timeRemaining**: `string`

Gets or sets the time remaining before the work request is due, represented as a TimeSpan.
 If specified, the search will match work requests that are due within this remaining time period.

#### Defined in

[src/types/Checkmate/ObjectModel/Maintenance/DueCriteriaSearch.ts:27](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/Maintenance/DueCriteriaSearch.ts#L27)
