[@fairfleet/geotab](../README.md) / Driver

# Interface: Driver

A driver in the system, and it is derived from
 [User](User.md),
 with key ids and driver groups. If the driver is unknown then the driver is
 represented by "UnknownDriver".

## Hierarchy

- [`User`](User.md)

  ↳ **`Driver`**

## Table of contents

### Properties

- [acceptedEULA](Driver.md#acceptedeula)
- [accessGroupFilter](Driver.md#accessgroupfilter)
- [activeDashboardReports](Driver.md#activedashboardreports)
- [activeFrom](Driver.md#activefrom)
- [activeTo](Driver.md#activeto)
- [authorityAddress](Driver.md#authorityaddress)
- [authorityName](Driver.md#authorityname)
- [availableDashboardReports](Driver.md#availabledashboardreports)
- [bookmarks](Driver.md#bookmarks)
- [cannedResponseOptions](Driver.md#cannedresponseoptions)
- [carrierNumber](Driver.md#carriernumber)
- [changePassword](Driver.md#changepassword)
- [comment](Driver.md#comment)
- [companyAddress](Driver.md#companyaddress)
- [companyGroups](Driver.md#companygroups)
- [companyName](Driver.md#companyname)
- [countryCode](Driver.md#countrycode)
- [dateFormat](Driver.md#dateformat)
- [defaultGoogleMapStyle](Driver.md#defaultgooglemapstyle)
- [defaultHereMapStyle](Driver.md#defaultheremapstyle)
- [defaultMapEngine](Driver.md#defaultmapengine)
- [defaultOpenStreetMapStyle](Driver.md#defaultopenstreetmapstyle)
- [defaultPage](Driver.md#defaultpage)
- [designation](Driver.md#designation)
- [displayCurrency](Driver.md#displaycurrency)
- [displayMeasurementProfile](Driver.md#displaymeasurementprofile)
- [driveGuideVersion](Driver.md#driveguideversion)
- [driverGroups](Driver.md#drivergroups)
- [electricEnergyEconomyUnit](Driver.md#electricenergyeconomyunit)
- [employeeNo](Driver.md#employeeno)
- [featurePreview](Driver.md#featurepreview)
- [firstDayOfWeek](Driver.md#firstdayofweek)
- [firstName](Driver.md#firstname)
- [fuelEconomyUnit](Driver.md#fueleconomyunit)
- [groups](Driver.md#groups)
- [hosRuleSet](Driver.md#hosruleset)
- [id](Driver.md#id)
- [isAdverseDrivingEnabled](Driver.md#isadversedrivingenabled)
- [isDriver](Driver.md#isdriver)
- [isEULAAccepted](Driver.md#iseulaaccepted)
- [isEmailReportEnabled](Driver.md#isemailreportenabled)
- [isExemptHOSEnabled](Driver.md#isexempthosenabled)
- [isLabsEnabled](Driver.md#islabsenabled)
- [isMetric](Driver.md#ismetric)
- [isNewsEnabled](Driver.md#isnewsenabled)
- [isPersonalConveyanceEnabled](Driver.md#ispersonalconveyanceenabled)
- [isServiceUpdatesEnabled](Driver.md#isserviceupdatesenabled)
- [isYardMoveEnabled](Driver.md#isyardmoveenabled)
- [issuerCertificate](Driver.md#issuercertificate)
- [keys](Driver.md#keys)
- [language](Driver.md#language)
- [lastAccessDate](Driver.md#lastaccessdate)
- [lastName](Driver.md#lastname)
- [licenseNumber](Driver.md#licensenumber)
- [licenseProvince](Driver.md#licenseprovince)
- [mapViews](Driver.md#mapviews)
- [maxPCDistancePerDay](Driver.md#maxpcdistanceperday)
- [mediaFiles](Driver.md#mediafiles)
- [name](Driver.md#name)
- [nullifyAccessGroupFilter](Driver.md#nullifyaccessgroupfilter)
- [password](Driver.md#password)
- [phoneNumber](Driver.md#phonenumber)
- [phoneNumberExtension](Driver.md#phonenumberextension)
- [privateUserGroups](Driver.md#privateusergroups)
- [reportGroups](Driver.md#reportgroups)
- [securityGroups](Driver.md#securitygroups)
- [showClickOnceWarning](Driver.md#showclickoncewarning)
- [timeZoneId](Driver.md#timezoneid)
- [userAuthenticationType](Driver.md#userauthenticationtype)
- [version](Driver.md#version)
- [viewDriversOwnDataOnly](Driver.md#viewdriversowndataonly)
- [wifiEULA](Driver.md#wifieula)
- [windowsAuthenticationUserId](Driver.md#windowsauthenticationuserid)
- [zoneDisplayMode](Driver.md#zonedisplaymode)

## Properties

### acceptedEULA

• **acceptedEULA**: `number`

Gets or sets a value indicating the user accepted MyGeotab EULA revision number. Default [null].

#### Inherited from

[User](User.md).[acceptedEULA](User.md#acceptedeula)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L24)

___

### accessGroupFilter

• **accessGroupFilter**: [`GroupFilter`](GroupFilter.md)

Gets or sets the [GroupFilter](GroupFilter.md) that the user belongs to, which is used to determine what the user can see within the database.

#### Inherited from

[User](User.md).[accessGroupFilter](User.md#accessgroupfilter)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:26](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L26)

___

### activeDashboardReports

• **activeDashboardReports**: `string`[]

Gets or sets the list of active dashboards for the user, displayed on the dashboard page. Default [empty].

#### Inherited from

[User](User.md).[activeDashboardReports](User.md#activedashboardreports)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:28](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L28)

___

### activeFrom

• **activeFrom**: `Date`

Gets or sets the date the user is active from. Default [UtcNow].

#### Inherited from

[User](User.md).[activeFrom](User.md#activefrom)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:30](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L30)

___

### activeTo

• **activeTo**: `Date`

Gets or sets the date the user is active to. Default [MaxDate].

#### Inherited from

[User](User.md).[activeTo](User.md#activeto)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:32](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L32)

___

### authorityAddress

• **authorityAddress**: `string`

Gets or sets the HOS authority address of the user. Default [""].

#### Inherited from

[User](User.md).[authorityAddress](User.md#authorityaddress)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:34](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L34)

___

### authorityName

• **authorityName**: `string`

Gets or sets the HOS authority name of the user. Default [""].

#### Inherited from

[User](User.md).[authorityName](User.md#authorityname)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:36](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L36)

___

### availableDashboardReports

• **availableDashboardReports**: `string`[]

Gets or sets list of all available dashboard reports to the user. Default [empty].

#### Inherited from

[User](User.md).[availableDashboardReports](User.md#availabledashboardreports)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:38](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L38)

___

### bookmarks

• **bookmarks**: `string`[]

Gets or sets the list of bookmarked pages. Default [empty].

#### Inherited from

[User](User.md).[bookmarks](User.md#bookmarks)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:40](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L40)

___

### cannedResponseOptions

• **cannedResponseOptions**: `string`[][]

Gets or sets the user's stored list of custom response options to choose from when sending a [TextMessage](TextMessage.md). Each item is a set of predefined response options. Default [empty].

#### Inherited from

[User](User.md).[cannedResponseOptions](User.md#cannedresponseoptions)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:42](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L42)

___

### carrierNumber

• **carrierNumber**: `string`

Gets or sets the carrier number. Default [""].

#### Inherited from

[User](User.md).[carrierNumber](User.md#carriernumber)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:44](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L44)

___

### changePassword

• **changePassword**: `boolean`

Gets or sets a flag indicating whether the user's password requires resetting. If [true], the user will be forced to change their password on next login. Default [false].

#### Inherited from

[User](User.md).[changePassword](User.md#changepassword)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:46](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L46)

___

### comment

• **comment**: `string`

Gets or sets free text field where any user information can be stored and referenced for this entity. Default [""].

#### Inherited from

[User](User.md).[comment](User.md#comment)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:48](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L48)

___

### companyAddress

• **companyAddress**: `string`

Gets or sets the company address for the user. Default [""].

#### Inherited from

[User](User.md).[companyAddress](User.md#companyaddress)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:50](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L50)

___

### companyGroups

• **companyGroups**: [`Group`](Group.md)[]

Gets or sets the list of organization [Group](Group.md)(s) that the user belongs to.

#### Inherited from

[User](User.md).[companyGroups](User.md#companygroups)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:52](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L52)

___

### companyName

• **companyName**: `string`

Gets or sets the name of the company for the user. Default [""].

#### Inherited from

[User](User.md).[companyName](User.md#companyname)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:54](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L54)

___

### countryCode

• **countryCode**: `string`

Gets or sets the user two symbols country ISO code (https://www.iso.org/iso-3166-country-codes.html). Maximum length [2] Default [""]

#### Inherited from

[User](User.md).[countryCode](User.md#countrycode)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:56](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L56)

___

### dateFormat

• **dateFormat**: `string`

Gets or sets the format dates will be displayed to this user. Default ["MM/dd/yy HH:mm:ss"].

#### Inherited from

[User](User.md).[dateFormat](User.md#dateformat)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:58](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L58)

___

### defaultGoogleMapStyle

• **defaultGoogleMapStyle**: [`GoogleMapStyle`](../README.md#googlemapstyle)

Gets or sets the default [GoogleMapStyle](../README.md#googlemapstyle) tiles when using Google maps. Default [Roadmap].

#### Inherited from

[User](User.md).[defaultGoogleMapStyle](User.md#defaultgooglemapstyle)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:60](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L60)

___

### defaultHereMapStyle

• **defaultHereMapStyle**: [`HereMapStyle`](../README.md#heremapstyle)

Gets or sets the default [HereMapStyle](../README.md#heremapstyle) tiles when using Here Maps. Default [Roadmap].

#### Inherited from

[User](User.md).[defaultHereMapStyle](User.md#defaultheremapstyle)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:62](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L62)

___

### defaultMapEngine

• **defaultMapEngine**: `string`

Gets or sets the default map engine to use for this user. System map engines are:
 <list><item><description>GoogleMaps</description></item></list><list><item><description>HereMap</description></item></list><list><item><description>MapBox</description></item></list>
 Default ["MapBox"].

#### Inherited from

[User](User.md).[defaultMapEngine](User.md#defaultmapengine)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:68](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L68)

___

### defaultOpenStreetMapStyle

• **defaultOpenStreetMapStyle**: [`OpenStreetMapStyle`](../README.md#openstreetmapstyle)

Gets or sets the default [OpenStreetMapStyle](../README.md#openstreetmapstyle) tiles when using Open Street Maps. Default [MapBox].

#### Inherited from

[User](User.md).[defaultOpenStreetMapStyle](User.md#defaultopenstreetmapstyle)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:70](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L70)

___

### defaultPage

• **defaultPage**: `string`

Gets or sets the default start page to view when login is complete. Maps to the hash portion of the web site URL (https://url/enpoint/[#page]). Default [helpGuide].

#### Inherited from

[User](User.md).[defaultPage](User.md#defaultpage)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:72](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L72)

___

### designation

• **designation**: `string`

Gets or sets the designation or title of the employee. Maximum length [50] Default [""].

#### Inherited from

[User](User.md).[designation](User.md#designation)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:74](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L74)

___

### displayCurrency

• **displayCurrency**: [`Currency`](../README.md#currency)

Gets or sets the user's preferred currency for display in the UI.

#### Inherited from

[User](User.md).[displayCurrency](User.md#displaycurrency)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:76](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L76)

___

### displayMeasurementProfile

• **displayMeasurementProfile**: [`DisplayMeasurementProfile`](DisplayMeasurementProfile.md)

Gets or sets the DisplayMeasurementProfile.

#### Inherited from

[User](User.md).[displayMeasurementProfile](User.md#displaymeasurementprofile)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:78](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L78)

___

### driveGuideVersion

• **driveGuideVersion**: `number`

Gets or sets the driver's last viewed guide version. Default [0].

#### Inherited from

[User](User.md).[driveGuideVersion](User.md#driveguideversion)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:80](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L80)

___

### driverGroups

• **driverGroups**: [`Group`](Group.md)[]

Gets or sets the home [Group](Group.md)(s) for the driver.

#### Defined in

[src/types/Checkmate/ObjectModel/Driver.ts:16](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Driver.ts#L16)

___

### electricEnergyEconomyUnit

• **electricEnergyEconomyUnit**: [`ElectricEnergyEconomyUnit`](../README.md#electricenergyeconomyunit)

Gets or sets the user's preferred [ElectricEnergyEconomyUnit](../README.md#electricenergyeconomyunit) for viewing fuel economy. Default [LitersEPer100Km].

#### Inherited from

[User](User.md).[electricEnergyEconomyUnit](User.md#electricenergyeconomyunit)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:82](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L82)

___

### employeeNo

• **employeeNo**: `string`

Gets or sets the employee number or external identifier. Maximum length [50] Default [""].

#### Inherited from

[User](User.md).[employeeNo](User.md#employeeno)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:84](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L84)

___

### featurePreview

• **featurePreview**: `string`

Gets or sets a value indicating which features user enabled to preview. Default [""].

#### Inherited from

[User](User.md).[featurePreview](User.md#featurepreview)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:86](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L86)

___

### firstDayOfWeek

• **firstDayOfWeek**: `number`

Gets or sets the user's preferred day to represent the start of the week. Default ["Sunday"].

#### Inherited from

[User](User.md).[firstDayOfWeek](User.md#firstdayofweek)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:88](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L88)

___

### firstName

• **firstName**: `string`

Gets or sets the first name of the user. Maximum length [255].

#### Inherited from

[User](User.md).[firstName](User.md#firstname)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:90](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L90)

___

### fuelEconomyUnit

• **fuelEconomyUnit**: [`FuelEconomyUnit`](../README.md#fueleconomyunit)

Gets or sets the user's preferred [FuelEconomyUnit](../README.md#fueleconomyunit) for viewing fuel economy. Default [LitersPer100Km].

#### Inherited from

[User](User.md).[fuelEconomyUnit](User.md#fueleconomyunit)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:92](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L92)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets the aggregated list of all user groups.

#### Inherited from

[User](User.md).[groups](User.md#groups)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:94](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L94)

___

### hosRuleSet

• **hosRuleSet**: [`HosRuleSet`](../README.md#hosruleset)

Gets or sets the [HosRuleSet](../README.md#hosruleset) the user follows. Default [None].

#### Inherited from

[User](User.md).[hosRuleSet](User.md#hosruleset)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:96](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L96)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the User. See Id.

#### Inherited from

[User](User.md).[id](User.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:98](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L98)

___

### isAdverseDrivingEnabled

• **isAdverseDrivingEnabled**: `boolean`

Gets or sets a value indicating whether the user is allowed to Adverse Driving conditions exempt. Default [false].

#### Inherited from

[User](User.md).[isAdverseDrivingEnabled](User.md#isadversedrivingenabled)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:100](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L100)

___

### isDriver

• **isDriver**: `boolean`

Gets or sets the is driver toggle, if [true] the user is a driver, otherwise [false]. Default [false].

#### Inherited from

[User](User.md).[isDriver](User.md#isdriver)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:102](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L102)

___

### isEULAAccepted

• **isEULAAccepted**: `boolean`

Gets a value indicating whether the old EULA has been accepted by the end user. Default [false].

#### Inherited from

[User](User.md).[isEULAAccepted](User.md#iseulaaccepted)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:106](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L106)

___

### isEmailReportEnabled

• **isEmailReportEnabled**: `boolean`

Gets or sets the isEmailReportEnabled, if [true] the user will receive the emailed report, otherwise [false]. Default [true].

#### Inherited from

[User](User.md).[isEmailReportEnabled](User.md#isemailreportenabled)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:104](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L104)

___

### isExemptHOSEnabled

• **isExemptHOSEnabled**: `boolean`

Gets or sets a value indicating whether the user is allowed to HOS personal conveyance. Default [false].

#### Inherited from

[User](User.md).[isExemptHOSEnabled](User.md#isexempthosenabled)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:108](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L108)

___

### isLabsEnabled

• **isLabsEnabled**: `boolean`

Gets a value indicating whether labs are enabled for this user. When set to true this will enable experimental features that are still in the process of being developed. Default [false].

#### Inherited from

[User](User.md).[isLabsEnabled](User.md#islabsenabled)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:110](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L110)

___

### isMetric

• **isMetric**: `boolean`

Gets or sets whether the current regional settings is in metric units of measurement (or US/Imperial). Default [true].

#### Inherited from

[User](User.md).[isMetric](User.md#ismetric)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:112](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L112)

___

### isNewsEnabled

• **isNewsEnabled**: `boolean`

Gets or sets a value that indicates whether news notifications are enabled for this user. Default [true].

#### Inherited from

[User](User.md).[isNewsEnabled](User.md#isnewsenabled)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:114](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L114)

___

### isPersonalConveyanceEnabled

• **isPersonalConveyanceEnabled**: `boolean`

Gets or sets a value indicating whether the user is allowed to HOS personal conveyance. Default [false].

#### Inherited from

[User](User.md).[isPersonalConveyanceEnabled](User.md#ispersonalconveyanceenabled)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:116](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L116)

___

### isServiceUpdatesEnabled

• **isServiceUpdatesEnabled**: `boolean`

Gets or sets a value indicating whether are service update notifications enabled for this user. Default [false].

#### Inherited from

[User](User.md).[isServiceUpdatesEnabled](User.md#isserviceupdatesenabled)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:118](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L118)

___

### isYardMoveEnabled

• **isYardMoveEnabled**: `boolean`

Gets or sets a value indicating whether the user is allowed to HOS yard move. Default [false].

#### Inherited from

[User](User.md).[isYardMoveEnabled](User.md#isyardmoveenabled)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:122](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L122)

___

### issuerCertificate

• **issuerCertificate**: [`Certificate`](Certificate.md)

Gets or sets the issuer [Certificate](Certificate.md) for the user. Will only be populated for users not using basic authentication.

#### Inherited from

[User](User.md).[issuerCertificate](User.md#issuercertificate)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:120](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L120)

___

### keys

• **keys**: `unknown`[]

Gets or sets the NFC Key's serial number associated with the driver.

#### Defined in

[src/types/Checkmate/ObjectModel/Driver.ts:18](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Driver.ts#L18)

___

### language

• **language**: `string`

Gets or sets the user's culture identifier as a predefined CultureInfo name, CultureInfo.Name of an existing System.Globalization.CultureInfo, or Windows-only culture name. Default: ["en"] for English.

#### Inherited from

[User](User.md).[language](User.md#language)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:124](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L124)

___

### lastAccessDate

• **lastAccessDate**: `Date`

Gets or sets the user's Last access date of the system.

#### Inherited from

[User](User.md).[lastAccessDate](User.md#lastaccessdate)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:126](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L126)

___

### lastName

• **lastName**: `string`

Gets or sets the last name of the user. Maximum length [255].

#### Inherited from

[User](User.md).[lastName](User.md#lastname)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:128](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L128)

___

### licenseNumber

• **licenseNumber**: `string`

Gets or sets the driver license number of the user. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Driver.ts:20](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Driver.ts#L20)

___

### licenseProvince

• **licenseProvince**: `string`

Gets or sets the driver license province or state of the user. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/Driver.ts:22](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Driver.ts#L22)

___

### mapViews

• **mapViews**: `unknown`[]

Gets or sets the list of the of the available MapViews from the live map. Default [continent of the user's selected Timezone].

#### Inherited from

[User](User.md).[mapViews](User.md#mapviews)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:130](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L130)

___

### maxPCDistancePerDay

• **maxPCDistancePerDay**: `number`

Gets or sets a value indicating the maximum personal conveyance distance per day in meters. Default [0].

#### Inherited from

[User](User.md).[maxPCDistancePerDay](User.md#maxpcdistanceperday)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:132](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L132)

___

### mediaFiles

• **mediaFiles**: [`MediaFile`](MediaFile.md)[]

Gets or sets the list of [MediaFile](MediaFile.md)(s) photos of this user.
 Currently, a user can only be associated with at most one photo.

#### Inherited from

[User](User.md).[mediaFiles](User.md#mediafiles)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:137](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L137)

___

### name

• **name**: `string`

Gets or sets the user's email address / login name. Maximum length [255].

#### Inherited from

[User](User.md).[name](User.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:139](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L139)

___

### nullifyAccessGroupFilter

• **nullifyAccessGroupFilter**: `boolean`

Gets or sets a value to nullify AccessGroupFilter.

#### Inherited from

[User](User.md).[nullifyAccessGroupFilter](User.md#nullifyaccessgroupfilter)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:141](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L141)

___

### password

• **password**: `string`

Gets or sets the user's password.

#### Inherited from

[User](User.md).[password](User.md#password)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:143](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L143)

___

### phoneNumber

• **phoneNumber**: `string`

Gets or sets the user phone number with space separated country phone code. Example +1 5555555555. Maximum length [20] Default [""]

#### Inherited from

[User](User.md).[phoneNumber](User.md#phonenumber)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:145](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L145)

___

### phoneNumberExtension

• **phoneNumberExtension**: `string`

Gets or sets the user phone number without formatting. Maximum length [5] Default [""]

#### Inherited from

[User](User.md).[phoneNumberExtension](User.md#phonenumberextension)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:147](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L147)

___

### privateUserGroups

• **privateUserGroups**: [`Group`](Group.md)[]

Gets or sets the private [Group](Group.md)(s) that the user belongs to.

#### Inherited from

[User](User.md).[privateUserGroups](User.md#privateusergroups)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:149](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L149)

___

### reportGroups

• **reportGroups**: [`Group`](Group.md)[]

Gets or sets the report [Group](Group.md)(s) for reporting that this user belongs to. The selected reporting groups will allow the user to sort entities that are children of the selected groups. It will not allow them to see entities that are outside of their data access. Default [empty].

#### Inherited from

[User](User.md).[reportGroups](User.md#reportgroups)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:151](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L151)

___

### securityGroups

• **securityGroups**: [`Group`](Group.md)[]

Gets or sets the security [Group](Group.md)(s) this user belongs to; which define the user's access.

#### Inherited from

[User](User.md).[securityGroups](User.md#securitygroups)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:153](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L153)

___

### showClickOnceWarning

• **showClickOnceWarning**: `boolean`

Gets or sets a flag indicating whether to show ClickOnce support warning as the default page. (legacy) Default [false].

#### Inherited from

[User](User.md).[showClickOnceWarning](User.md#showclickoncewarning)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:155](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L155)

___

### timeZoneId

• **timeZoneId**: `string`

Gets or sets the IANA Timezone Id of the user. All data will be displayed in this Timezone. Default ["America/New_York"].

#### Inherited from

[User](User.md).[timeZoneId](User.md#timezoneid)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:157](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L157)

___

### userAuthenticationType

• **userAuthenticationType**: [`UserAuthenticationType`](../README.md#userauthenticationtype)

Gets or sets the [UserAuthenticationType](../README.md#userauthenticationtype). Default [Basic].

#### Inherited from

[User](User.md).[userAuthenticationType](User.md#userauthenticationtype)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:159](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L159)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[User](User.md).[version](User.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)

___

### viewDriversOwnDataOnly

• **viewDriversOwnDataOnly**: `boolean`

Gets or sets a value indicating whether the driver can view their own data.

#### Defined in

[src/types/Checkmate/ObjectModel/Driver.ts:24](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/Driver.ts#L24)

___

### wifiEULA

• **wifiEULA**: `number`

Gets or sets a value indicating the user accepted Wifi specific EULA revision number. Default [0].

#### Inherited from

[User](User.md).[wifiEULA](User.md#wifieula)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:161](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L161)

___

### windowsAuthenticationUserId

• **windowsAuthenticationUserId**: `string`

Gets or sets the windows authentication user Id. This property is so we
 don't return both User Id and Name to the client side when they have the same value.
 User Id and Name only differ for WindowsAuthentication users.

#### Inherited from

[User](User.md).[windowsAuthenticationUserId](User.md#windowsauthenticationuserid)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:167](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L167)

___

### zoneDisplayMode

• **zoneDisplayMode**: [`ZoneDisplayMode`](../README.md#zonedisplaymode)

Gets or sets the default [ZoneDisplayMode](../README.md#zonedisplaymode) used on the map. Default [Default].

#### Inherited from

[User](User.md).[zoneDisplayMode](User.md#zonedisplaymode)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:169](https://github.com/fairfleet/geotab/blob/ff38bfc/src/types/Checkmate/ObjectModel/User.ts#L169)
