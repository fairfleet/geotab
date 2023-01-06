[@fairfleet/geotab](../README.md) / UserSearch

# Interface: UserSearch

The object used to specify the arguments when searching for a [User](User.md)/[Driver](Driver.md).

## Hierarchy

- [`Search`](Search.md)

  ↳ **`UserSearch`**

## Table of contents

### Properties

- [authenticationType](UserSearch.md#authenticationtype)
- [authenticationTypes](UserSearch.md#authenticationtypes)
- [companyGroups](UserSearch.md#companygroups)
- [driverGroupFilterCondition](UserSearch.md#drivergroupfiltercondition)
- [driverGroups](UserSearch.md#drivergroups)
- [employeeNumber](UserSearch.md#employeenumber)
- [firstName](UserSearch.md#firstname)
- [fromDate](UserSearch.md#fromdate)
- [hosRuleSet](UserSearch.md#hosruleset)
- [hosRuleSets](UserSearch.md#hosrulesets)
- [id](UserSearch.md#id)
- [isDriver](UserSearch.md#isdriver)
- [keyId](UserSearch.md#keyid)
- [keywords](UserSearch.md#keywords)
- [lastLogin](UserSearch.md#lastlogin)
- [lastLoginComparator](UserSearch.md#lastlogincomparator)
- [lastName](UserSearch.md#lastname)
- [licenseNumber](UserSearch.md#licensenumber)
- [name](UserSearch.md#name)
- [propertySelector](UserSearch.md#propertyselector)
- [securityGroups](UserSearch.md#securitygroups)
- [serialNumber](UserSearch.md#serialnumber)
- [toDate](UserSearch.md#todate)
- [userGroupFilterCondition](UserSearch.md#usergroupfiltercondition)
- [userSearchType](UserSearch.md#usersearchtype)
- [version](UserSearch.md#version)

## Properties

### authenticationType

• **authenticationType**: [`UserAuthenticationType`](../README.md#userauthenticationtype)

Gets or sets search for Users who are associated with this [UserAuthenticationType](../README.md#userauthenticationtype).

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L16)

___

### authenticationTypes

• **authenticationTypes**: [`UserAuthenticationType`](../README.md#userauthenticationtype)[]

Gets or sets search for Users who are associated with these [UserAuthenticationType](../README.md#userauthenticationtype)s.

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:18](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L18)

___

### companyGroups

• **companyGroups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for Users who are a member of this [GroupSearch](GroupSearch.md). Available GroupSearch options are:.
 <list><item><description>Id</description></item></list>

**`Remarks`**

Cannot be used with DriverGroups.

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:25](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L25)

___

### driverGroupFilterCondition

• **driverGroupFilterCondition**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets for Driver group list search.

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:27](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L27)

___

### driverGroups

• **driverGroups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for Users who are assigned a Driver Key which is a member of the [GroupSearch](GroupSearch.md). Available
 GroupSearch options are:.
 <list><item><description>Id</description></item></list>

**`Remarks`**

Cannot be used with CompanyGroups.

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:35](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L35)

___

### employeeNumber

• **employeeNumber**: `string`

Gets or sets search for a User who is associated with this Driver Employee Number. Wildcard can be used by prepending/appending "%"
 to string. Example "%EmployeeNumber%".
 This property is negatable. If the first character of this search property is '!', then the API will know to negate the
 search logic. (e.g. field = "!EmployeeNumber%", is equivalent to: WHERE NOT LIKE 'EmployeeNumber%')

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:42](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L42)

___

### firstName

• **firstName**: `string`

Gets or sets search for Users with this first name. Wildcard can be used by prepending/appending "%"
 to string. Example "%firstName%".
 This property is negatable. If the first character of this search property is '!', then the API will know to negate the
 search logic. (e.g. field = "!John%", is equivalent to: WHERE NOT LIKE 'John%')

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:49](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L49)

___

### fromDate

• **fromDate**: `Date`

Gets or sets search for Users that were active at this date or after. Set to UTC now to search for
 only currently active (non-archived) users.

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:54](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L54)

___

### hosRuleSet

• **hosRuleSet**: [`HosRuleSet`](../README.md#hosruleset)

Gets or sets search for Users who are associated with this [HosRuleSet](../README.md#hosruleset).

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:56](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L56)

___

### hosRuleSets

• **hosRuleSets**: [`HosRuleSet`](../README.md#hosruleset)[]

Gets or sets search for Users who are associated with these [HosRuleSet](../README.md#hosruleset)s.

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:58](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L58)

___

### id

• **id**: `string`

Gets or sets search for an entry based on the specific Id.

#### Inherited from

[Search](Search.md).[id](Search.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:12](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L12)

___

### isDriver

• **isDriver**: `boolean`

Gets or sets only search for Users who have a Driver Key assigned.

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:60](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L60)

___

### keyId

• **keyId**: `number`

Gets or sets search for a User who is associated with this Driver Key Id.

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:62](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L62)

___

### keywords

• **keywords**: `string`[]

Gets or sets search for entities that contain specific keywords in all wildcard string-searchable fields.

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:64](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L64)

___

### lastLogin

• **lastLogin**: `Date`

Gets or sets for LastLogin search. Must be used with LastLoginComparator.
 If user's [UserAuthenticationType](../README.md#userauthenticationtype) is 'MyAdmin' and LastLoginComparator is 'After', user is returned regardless of LastLogin criteria.
 If user's [UserAuthenticationType](../README.md#userauthenticationtype) is 'MyAdmin' and LastLoginComparator is 'Before', user is not returned regardless of LastLogin criteria.

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:70](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L70)

___

### lastLoginComparator

• **lastLoginComparator**: [`DateTimeComparator`](../README.md#datetimecomparator)

Gets or sets for [DateTimeComparator](../README.md#datetimecomparator) for LastLogin search.

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:72](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L72)

___

### lastName

• **lastName**: `string`

Gets or sets search for Users with this last name. Wildcard can be used by prepending/appending "%"
 to string. Example "%lastName%".
 This property is negatable. If the first character of this search property is '!', then the API will know to negate the
 search logic. (e.g. field = "!John%", is equivalent to: WHERE NOT LIKE 'John%')

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:79](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L79)

___

### licenseNumber

• **licenseNumber**: `string`

Gets or sets search for a User who is associated with this Driver License Number. Wildcard can be used by prepending/appending "%"
 to string. Example "%LicenseNumber%".
 This property is negatable. If the first character of this search property is '!', then the API will know to negate the
 search logic. (e.g. field = "!LicenseNumber%", is equivalent to: WHERE NOT LIKE 'LicenseNumber%')

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:86](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L86)

___

### name

• **name**: `string`

Gets or sets search for Users with this email/log-on name. Wildcard can be used by prepending/appending "%"
 to string. Example "%name%".
 This property is negatable. If the first character of this search property is '!', then the API will know to negate the
 search logic. (e.g. field = "!John%", is equivalent to: WHERE NOT LIKE 'John%')

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:93](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L93)

___

### propertySelector

• **propertySelector**: [`PropertySelector`](PropertySelector.md)

Gets or sets Search.PropertySelector of the searched value fields to include or exclude from the result.

#### Inherited from

[Search](Search.md).[propertySelector](Search.md#propertyselector)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:14](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L14)

___

### securityGroups

• **securityGroups**: [`GroupSearch`](GroupSearch.md)[]

Gets or sets search for Users who are assigned to a specific Security Clearance which is a member of the [GroupSearch](GroupSearch.md). Available
 GroupSearch options are:.
 <list><item><description>Id</description></item></list>

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:99](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L99)

___

### serialNumber

• **serialNumber**: `string`

Gets or sets search for a User who is associated with this Driver Serial Number.

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:101](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L101)

___

### toDate

• **toDate**: `Date`

Gets or sets search for Users that were active at this date or before.

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:103](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L103)

___

### userGroupFilterCondition

• **userGroupFilterCondition**: [`GroupFilterCondition`](GroupFilterCondition.md)

Gets or sets for user group list search.

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:105](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L105)

___

### userSearchType

• **userSearchType**: [`UserSearchType`](../README.md#usersearchtype)

Gets or sets for UserSearch.UserSearchType search.

#### Defined in

[src/types/Checkmate/ObjectModel/UserSearch.ts:107](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/UserSearch.ts#L107)

___

### version

• **version**: `number`

Gets or sets the row version of the search criteria.

#### Inherited from

[Search](Search.md).[version](Search.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/Search.ts:16](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/Search.ts#L16)
