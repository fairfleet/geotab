[@fairfleet/geotab](../README.md) / User

# Interface: User

A user of the system. A user can be a MyGeotab user or a user that is a [Driver](Driver.md).

## Hierarchy

- [`NameEntityWithVersion`](NameEntityWithVersion.md)

  ↳ **`User`**

  ↳↳ [`Driver`](Driver.md)

## Table of contents

### Properties

- [acceptedEULA](User.md#acceptedeula)
- [activeDashboardReports](User.md#activedashboardreports)
- [activeFrom](User.md#activefrom)
- [activeTo](User.md#activeto)
- [authorityAddress](User.md#authorityaddress)
- [authorityName](User.md#authorityname)
- [availableDashboardReports](User.md#availabledashboardreports)
- [bookmarks](User.md#bookmarks)
- [cannedResponseOptions](User.md#cannedresponseoptions)
- [carrierNumber](User.md#carriernumber)
- [changePassword](User.md#changepassword)
- [comment](User.md#comment)
- [companyAddress](User.md#companyaddress)
- [companyGroupFilter](User.md#companygroupfilter)
- [companyGroups](User.md#companygroups)
- [companyName](User.md#companyname)
- [countryCode](User.md#countrycode)
- [dateFormat](User.md#dateformat)
- [defaultGoogleMapStyle](User.md#defaultgooglemapstyle)
- [defaultHereMapStyle](User.md#defaultheremapstyle)
- [defaultMapEngine](User.md#defaultmapengine)
- [defaultOpenStreetMapStyle](User.md#defaultopenstreetmapstyle)
- [defaultPage](User.md#defaultpage)
- [designation](User.md#designation)
- [displayCurrency](User.md#displaycurrency)
- [displayMeasurementProfile](User.md#displaymeasurementprofile)
- [driveGuideVersion](User.md#driveguideversion)
- [electricEnergyEconomyUnit](User.md#electricenergyeconomyunit)
- [employeeNo](User.md#employeeno)
- [featurePreview](User.md#featurepreview)
- [firstDayOfWeek](User.md#firstdayofweek)
- [firstName](User.md#firstname)
- [fuelEconomyUnit](User.md#fueleconomyunit)
- [groups](User.md#groups)
- [hosRuleSet](User.md#hosruleset)
- [id](User.md#id)
- [isDriver](User.md#isdriver)
- [isEULAAccepted](User.md#iseulaaccepted)
- [isEmailReportEnabled](User.md#isemailreportenabled)
- [isExemptHOSEnabled](User.md#isexempthosenabled)
- [isLabsEnabled](User.md#islabsenabled)
- [isMetric](User.md#ismetric)
- [isNewsEnabled](User.md#isnewsenabled)
- [isPersonalConveyanceEnabled](User.md#ispersonalconveyanceenabled)
- [isServiceUpdatesEnabled](User.md#isserviceupdatesenabled)
- [isYardMoveEnabled](User.md#isyardmoveenabled)
- [issuerCertificate](User.md#issuercertificate)
- [language](User.md#language)
- [lastAccessDate](User.md#lastaccessdate)
- [lastName](User.md#lastname)
- [mapViews](User.md#mapviews)
- [maxPCDistancePerDay](User.md#maxpcdistanceperday)
- [name](User.md#name)
- [password](User.md#password)
- [phoneNumber](User.md#phonenumber)
- [phoneNumberExtension](User.md#phonenumberextension)
- [privateUserGroups](User.md#privateusergroups)
- [profilePictures](User.md#profilepictures)
- [reportGroups](User.md#reportgroups)
- [securityGroups](User.md#securitygroups)
- [showClickOnceWarning](User.md#showclickoncewarning)
- [timeZoneId](User.md#timezoneid)
- [userAuthenticationType](User.md#userauthenticationtype)
- [version](User.md#version)
- [wifiEULA](User.md#wifieula)
- [windowsAuthenticationUserId](User.md#windowsauthenticationuserid)
- [zoneDisplayMode](User.md#zonedisplaymode)

## Properties

### acceptedEULA

• **acceptedEULA**: `number`

Gets or sets a value indicating the user accepted EULA revision number. Default [null].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:24](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L24)

___

### activeDashboardReports

• **activeDashboardReports**: `string`[]

Gets or sets the list of active dashboards for the user, displayed on the dashboard page. Default [empty].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:26](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L26)

___

### activeFrom

• **activeFrom**: `Date`

Gets or sets the date the user is active from. Default [UtcNow].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:28](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L28)

___

### activeTo

• **activeTo**: `Date`

Gets or sets the date the user is active to. Default [MaxDate].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:30](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L30)

___

### authorityAddress

• **authorityAddress**: `string`

Gets or sets the HOS authority address of the user. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:32](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L32)

___

### authorityName

• **authorityName**: `string`

Gets or sets the HOS authority name of the user. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:34](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L34)

___

### availableDashboardReports

• **availableDashboardReports**: `string`[]

Gets or sets list of all available dashboard reports to the user. Default [empty].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:36](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L36)

___

### bookmarks

• **bookmarks**: `string`[]

Gets or sets the list of bookmarked pages. Default [empty].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:38](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L38)

___

### cannedResponseOptions

• **cannedResponseOptions**: `string`[][]

Gets or sets the user's stored list of custom response options to choose from when sending a [TextMessage](TextMessage.md). Each item is a set of predefined response options. Default [empty].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:40](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L40)

___

### carrierNumber

• **carrierNumber**: `string`

Gets or sets the carrier number. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:42](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L42)

___

### changePassword

• **changePassword**: `boolean`

Gets or sets a flag indicating whether the user's password requires resetting. If [true], the user will be forced to change their password on next login. Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:44](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L44)

___

### comment

• **comment**: `string`

Gets or sets free text field where any user information can be stored and referenced for this entity. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:46](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L46)

___

### companyAddress

• **companyAddress**: `string`

Gets or sets the company address for the user. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:48](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L48)

___

### companyGroupFilter

• **companyGroupFilter**: [`GroupFilter`](GroupFilter.md)

Gets or sets the list of organization [GroupFilterCondition](GroupFilterCondition.md)(s) that the user belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:50](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L50)

___

### companyGroups

• **companyGroups**: [`Group`](Group.md)[]

Gets or sets the list of organization [Group](Group.md)(s) that the user belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:52](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L52)

___

### companyName

• **companyName**: `string`

Gets or sets the name of the company for the user. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:54](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L54)

___

### countryCode

• **countryCode**: `string`

Gets or sets the user two symbols country ISO code (https://www.iso.org/iso-3166-country-codes.html). Maximum length [2] Default [""]

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:56](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L56)

___

### dateFormat

• **dateFormat**: `string`

Gets or sets the format dates will be displayed to this user. Default ["MM/dd/yy HH:mm:ss"].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:58](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L58)

___

### defaultGoogleMapStyle

• **defaultGoogleMapStyle**: [`GoogleMapStyle`](../README.md#googlemapstyle)

Gets or sets the default [GoogleMapStyle](../README.md#googlemapstyle) tiles when using Google maps. Default [Roadmap].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:60](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L60)

___

### defaultHereMapStyle

• **defaultHereMapStyle**: [`HereMapStyle`](../README.md#heremapstyle)

Gets or sets the default [HereMapStyle](../README.md#heremapstyle) tiles when using Here Maps. Default [Roadmap].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:62](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L62)

___

### defaultMapEngine

• **defaultMapEngine**: `string`

Gets or sets the default map engine to use for this user. System map engines are:
 <list><item><description>GoogleMaps</description></item></list><list><item><description>HereMap</description></item></list><list><item><description>MapBox</description></item></list>
 Default ["MapBox"].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:68](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L68)

___

### defaultOpenStreetMapStyle

• **defaultOpenStreetMapStyle**: [`OpenStreetMapStyle`](../README.md#openstreetmapstyle)

Gets or sets the default [OpenStreetMapStyle](../README.md#openstreetmapstyle) tiles when using Open Street Maps. Default [MapBox].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:70](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L70)

___

### defaultPage

• **defaultPage**: `string`

Gets or sets the default start page to view when login is complete. Maps to the hash portion of the web site URL (https://url/enpoint/[#page]). Default [helpGuide].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:72](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L72)

___

### designation

• **designation**: `string`

Gets or sets the designation or title of the employee. Maximum length [50] Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:74](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L74)

___

### displayCurrency

• **displayCurrency**: [`Currency`](../README.md#currency)

Gets or sets the user's preferred currency for display in the UI.

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:76](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L76)

___

### displayMeasurementProfile

• **displayMeasurementProfile**: [`DisplayMeasurementProfile`](DisplayMeasurementProfile.md)

Gets or sets the DisplayMeasurementProfile.

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:78](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L78)

___

### driveGuideVersion

• **driveGuideVersion**: `number`

Gets or sets the driver's last viewed guide version. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:80](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L80)

___

### electricEnergyEconomyUnit

• **electricEnergyEconomyUnit**: [`ElectricEnergyEconomyUnit`](../README.md#electricenergyeconomyunit)

Gets or sets the user's preferred [ElectricEnergyEconomyUnit](../README.md#electricenergyeconomyunit) for viewing fuel economy. Default [LitersEPer100Km].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:82](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L82)

___

### employeeNo

• **employeeNo**: `string`

Gets or sets the employee number or external identifier. Maximum length [50] Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:84](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L84)

___

### featurePreview

• **featurePreview**: `string`

Gets or sets a value indicating which features user enabled to preview. Default [""].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:86](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L86)

___

### firstDayOfWeek

• **firstDayOfWeek**: `number`

Gets or sets the user's preferred day to represent the start of the week. Default ["Sunday"].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:88](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L88)

___

### firstName

• **firstName**: `string`

Gets or sets the first name of the user. Maximum length [255].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:90](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L90)

___

### fuelEconomyUnit

• **fuelEconomyUnit**: [`FuelEconomyUnit`](../README.md#fueleconomyunit)

Gets or sets the user's preferred [FuelEconomyUnit](../README.md#fueleconomyunit) for viewing fuel economy. Default [LitersPer100Km].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:92](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L92)

___

### groups

• **groups**: [`Group`](Group.md)[]

Gets or sets the aggregated list of all user groups.

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:94](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L94)

___

### hosRuleSet

• **hosRuleSet**: [`HosRuleSet`](../README.md#hosruleset)

Gets or sets the [HosRuleSet](../README.md#hosruleset) the user follows. Default [None].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:96](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L96)

___

### id

• **id**: `string`

Gets or sets the unique identifier for the User. See Id.

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[id](NameEntityWithVersion.md#id)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:98](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L98)

___

### isDriver

• **isDriver**: `boolean`

Gets or sets the is driver toggle, if [true] the user is a driver, otherwise [false]. Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:100](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L100)

___

### isEULAAccepted

• **isEULAAccepted**: `boolean`

Gets a value indicating whether the old EULA has been accepted by the end user. Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:104](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L104)

___

### isEmailReportEnabled

• **isEmailReportEnabled**: `boolean`

Gets or sets the isEmailReportEnabled, if [true] the user will receive the emailed report, otherwise [false]. Default [true].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:102](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L102)

___

### isExemptHOSEnabled

• **isExemptHOSEnabled**: `boolean`

Gets or sets a value indicating whether the user is allowed to HOS personal conveyance. Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:106](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L106)

___

### isLabsEnabled

• **isLabsEnabled**: `boolean`

Gets a value indicating whether labs are enabled for this user. When set to true this will enable experimental features that are still in the process of being developed. Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:108](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L108)

___

### isMetric

• **isMetric**: `boolean`

Gets or sets whether the current regional settings is in metric units of measurement (or US/Imperial). Default [true].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:110](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L110)

___

### isNewsEnabled

• **isNewsEnabled**: `boolean`

Gets or sets a value that indicates whether news notifications are enabled for this user. Default [true].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:112](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L112)

___

### isPersonalConveyanceEnabled

• **isPersonalConveyanceEnabled**: `boolean`

Gets or sets a value indicating whether the user is allowed to HOS personal conveyance. Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:114](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L114)

___

### isServiceUpdatesEnabled

• **isServiceUpdatesEnabled**: `boolean`

Gets or sets a value indicating whether are service update notifications enabled for this user. Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:116](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L116)

___

### isYardMoveEnabled

• **isYardMoveEnabled**: `boolean`

Gets or sets a value indicating whether the user is allowed to HOS yard move. Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:120](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L120)

___

### issuerCertificate

• **issuerCertificate**: [`Certificate`](Certificate.md)

Gets or sets the issuer [Certificate](Certificate.md) for the user. Will only be populated for users not using basic authentication.

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:118](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L118)

___

### language

• **language**: `string`

Gets or sets the user's culture identifier as a predefined CultureInfo name, CultureInfo.Name of an existing System.Globalization.CultureInfo, or Windows-only culture name. Default: ["en"] for English.

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:122](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L122)

___

### lastAccessDate

• **lastAccessDate**: `Date`

Gets or sets the user's Last access date of the system.

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:124](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L124)

___

### lastName

• **lastName**: `string`

Gets or sets the last name of the user. Maximum length [255].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:126](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L126)

___

### mapViews

• **mapViews**: `unknown`[]

Gets or sets the list of the of the available MapViews from the live map. Default [continent of the user's selected time zone].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:128](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L128)

___

### maxPCDistancePerDay

• **maxPCDistancePerDay**: `number`

Gets or sets a value indicating the maximum personal conveyance distance per day in meters. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:130](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L130)

___

### name

• **name**: `string`

Gets or sets the user's email address / login name. Maximum length [255].

#### Overrides

[NameEntityWithVersion](NameEntityWithVersion.md).[name](NameEntityWithVersion.md#name)

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:132](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L132)

___

### password

• **password**: `string`

Gets or sets the user's password.

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:134](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L134)

___

### phoneNumber

• **phoneNumber**: `string`

Gets or sets the user phone number with space separated country phone code. Example +1 5555555555. Maximum length [20] Default [""]

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:136](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L136)

___

### phoneNumberExtension

• **phoneNumberExtension**: `string`

Gets or sets the user phone number without formatting. Maximum length [5] Default [""]

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:138](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L138)

___

### privateUserGroups

• **privateUserGroups**: [`Group`](Group.md)[]

Gets or sets the private [Group](Group.md)(s) that the user belongs to.

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:140](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L140)

___

### profilePictures

• **profilePictures**: [`MediaFile`](MediaFile.md)[]

Gets or sets the media files to act as profile pictures of the user. Users can only have at most one profile picture.

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:142](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L142)

___

### reportGroups

• **reportGroups**: [`Group`](Group.md)[]

Gets or sets the report [Group](Group.md)(s) for reporting that this user belongs to. The selected reporting groups will allow the user to sort entities that are children of the selected groups. It will not allow them to see entities that are outside of their data access. Default [empty].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:144](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L144)

___

### securityGroups

• **securityGroups**: [`Group`](Group.md)[]

Gets or sets the security [Group](Group.md)(s) this user belongs to; which define the user's access.

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:146](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L146)

___

### showClickOnceWarning

• **showClickOnceWarning**: `boolean`

Gets or sets a flag indicating whether to show ClickOnce support warning as the default page. (legacy) Default [false].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:148](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L148)

___

### timeZoneId

• **timeZoneId**: `string`

Gets or sets the IANA time zone Id of the user. All data will be displayed in this time zone. Default ["America/New_York"].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:150](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L150)

___

### userAuthenticationType

• **userAuthenticationType**: [`UserAuthenticationType`](../README.md#userauthenticationtype)

Gets or sets the [UserAuthenticationType](../README.md#userauthenticationtype). Default [Basic].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:152](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L152)

___

### version

• **version**: `number`

Gets or sets the version of the entity.

#### Inherited from

[NameEntityWithVersion](NameEntityWithVersion.md).[version](NameEntityWithVersion.md#version)

#### Defined in

[src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts:10](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/NameEntityWithVersion.ts#L10)

___

### wifiEULA

• **wifiEULA**: `number`

Gets or sets a value indicating the user accepted Wifi specific EULA revision number. Default [0].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:154](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L154)

___

### windowsAuthenticationUserId

• **windowsAuthenticationUserId**: `string`

Gets or sets the windows authentication user Id. This property is so we
 don't return both User Id and Name to the client side when they have the same value.
 User Id and Name only differ for WindowsAuthentication users.

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:160](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L160)

___

### zoneDisplayMode

• **zoneDisplayMode**: [`ZoneDisplayMode`](../README.md#zonedisplaymode)

Gets or sets the default [ZoneDisplayMode](../README.md#zonedisplaymode) used on the map. Default [Default].

#### Defined in

[src/types/Checkmate/ObjectModel/User.ts:162](https://github.com/fairfleet/geotab/blob/d57d931/src/types/Checkmate/ObjectModel/User.ts#L162)
