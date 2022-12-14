//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { NameEntityWithVersion } from "./NameEntityWithVersion";
import { DisplayMeasurementProfile } from "./Engine/DisplayDiagnostic/DisplayMeasurementProfile";
import { Group } from "./Group";
import { MediaFile } from "./Files/MediaFile";
import { GroupFilter } from "./GroupFilter";
import { Currency } from "./Currencies/Currency";
import { GoogleMapStyle } from "../Settings/GoogleMapStyle";
import { OpenStreetMapStyle } from "../Settings/OpenStreetMapStyle";
import { HereMapStyle } from "../Settings/HereMapStyle";
import { FuelEconomyUnit } from "../Settings/FuelEconomyUnit";
import { ElectricEnergyEconomyUnit } from "../Settings/ElectricEnergyEconomyUnit";
import { HosRuleSet } from "../Settings/HosRuleSet";
import { UserAuthenticationType } from "./UserAuthenticationType";
import { ZoneDisplayMode } from "../Settings/ZoneDisplayMode";
import { Certificate } from "./Certificate";

/** A user of the system. A user can be a MyGeotab user or a user that is a {@link Driver}. */
export interface User extends NameEntityWithVersion {
  /** Gets or sets a value indicating the user accepted MyGeotab EULA revision number. Default [null]. */
  acceptedEULA: number;
  /** Gets or sets the {@link GroupFilter} that the user belongs to, which is used to determine what the user can see within the database. */
  accessGroupFilter: GroupFilter;
  /** Gets or sets the list of active dashboards for the user, displayed on the dashboard page. Default [empty]. */
  activeDashboardReports: string[];
  /** Gets or sets the date the user is active from. Default [UtcNow]. */
  activeFrom: Date;
  /** Gets or sets the date the user is active to. Default [MaxDate]. */
  activeTo: Date;
  /** Gets or sets the HOS authority address of the user. Default [""]. */
  authorityAddress: string;
  /** Gets or sets the HOS authority name of the user. Default [""]. */
  authorityName: string;
  /** Gets or sets list of all available dashboard reports to the user. Default [empty]. */
  availableDashboardReports: string[];
  /** Gets or sets the list of bookmarked pages. Default [empty]. */
  bookmarks: string[];
  /** Gets or sets the user's stored list of custom response options to choose from when sending a {@link TextMessage}. Each item is a set of predefined response options. Default [empty]. */
  cannedResponseOptions: string[][];
  /** Gets or sets the carrier number. Default [""]. */
  carrierNumber: string;
  /** Gets or sets a flag indicating whether the user's password requires resetting. If [true], the user will be forced to change their password on next login. Default [false]. */
  changePassword: boolean;
  /** Gets or sets free text field where any user information can be stored and referenced for this entity. Default [""]. */
  comment: string;
  /** Gets or sets the company address for the user. Default [""]. */
  companyAddress: string;
  /** Gets or sets the list of organization {@link Group}(s) that the user belongs to. */
  companyGroups: Group[];
  /** Gets or sets the name of the company for the user. Default [""]. */
  companyName: string;
  /** Gets or sets the user two symbols country ISO code (https://www.iso.org/iso-3166-country-codes.html). Maximum length [2] Default [""] */
  countryCode: string;
  /** Gets or sets the format dates will be displayed to this user. Default ["MM/dd/yy HH:mm:ss"]. */
  dateFormat: string;
  /** Gets or sets the default {@link GoogleMapStyle} tiles when using Google maps. Default [Roadmap]. */
  defaultGoogleMapStyle: GoogleMapStyle;
  /** Gets or sets the default {@link HereMapStyle} tiles when using Here Maps. Default [Roadmap]. */
  defaultHereMapStyle: HereMapStyle;
  /**
   * Gets or sets the default map engine to use for this user. System map engines are:
   *  <list><item><description>GoogleMaps</description></item></list><list><item><description>HereMap</description></item></list><list><item><description>MapBox</description></item></list>
   *  Default ["MapBox"].
   */
  defaultMapEngine: string;
  /** Gets or sets the default {@link OpenStreetMapStyle} tiles when using Open Street Maps. Default [MapBox]. */
  defaultOpenStreetMapStyle: OpenStreetMapStyle;
  /** Gets or sets the default start page to view when login is complete. Maps to the hash portion of the web site URL (https://url/enpoint/[#page]). Default [helpGuide]. */
  defaultPage: string;
  /** Gets or sets the designation or title of the employee. Maximum length [50] Default [""]. */
  designation: string;
  /** Gets or sets the user's preferred currency for display in the UI. */
  displayCurrency: Currency;
  /** Gets or sets the DisplayMeasurementProfile. */
  displayMeasurementProfile: DisplayMeasurementProfile;
  /** Gets or sets the driver's last viewed guide version. Default [0]. */
  driveGuideVersion: number;
  /** Gets or sets the user's preferred {@link ElectricEnergyEconomyUnit} for viewing fuel economy. Default [LitersEPer100Km]. */
  electricEnergyEconomyUnit: ElectricEnergyEconomyUnit;
  /** Gets or sets the employee number or external identifier. Maximum length [50] Default [""]. */
  employeeNo: string;
  /** Gets or sets a value indicating which features user enabled to preview. Default [""]. */
  featurePreview: string;
  /** Gets or sets the user's preferred day to represent the start of the week. Default ["Sunday"]. */
  firstDayOfWeek: number;
  /** Gets or sets the first name of the user. Maximum length [255]. */
  firstName: string;
  /** Gets or sets the user's preferred {@link FuelEconomyUnit} for viewing fuel economy. Default [LitersPer100Km]. */
  fuelEconomyUnit: FuelEconomyUnit;
  /** Gets or sets the aggregated list of all user groups. */
  groups: Group[];
  /** Gets or sets the {@link HosRuleSet} the user follows. Default [None]. */
  hosRuleSet: HosRuleSet;
  /** Gets or sets the unique identifier for the User. See {@link Id}. */
  id: string;
  /** Gets or sets a value indicating whether the user is allowed to Adverse Driving conditions exempt. Default [false]. */
  isAdverseDrivingEnabled: boolean;
  /** Gets or sets the is driver toggle, if [true] the user is a driver, otherwise [false]. Default [false]. */
  isDriver: boolean;
  /** Gets or sets the isEmailReportEnabled, if [true] the user will receive the emailed report, otherwise [false]. Default [true]. */
  isEmailReportEnabled: boolean;
  /** Gets a value indicating whether the old EULA has been accepted by the end user. Default [false]. */
  isEULAAccepted: boolean;
  /** Gets or sets a value indicating whether the user is allowed to HOS personal conveyance. Default [false]. */
  isExemptHOSEnabled: boolean;
  /** Gets a value indicating whether labs are enabled for this user. When set to true this will enable experimental features that are still in the process of being developed. Default [false]. */
  isLabsEnabled: boolean;
  /** Gets or sets whether the current regional settings is in metric units of measurement (or US/Imperial). Default [true]. */
  isMetric: boolean;
  /** Gets or sets a value that indicates whether news notifications are enabled for this user. Default [true]. */
  isNewsEnabled: boolean;
  /** Gets or sets a value indicating whether the user is allowed to HOS personal conveyance. Default [false]. */
  isPersonalConveyanceEnabled: boolean;
  /** Gets or sets a value indicating whether are service update notifications enabled for this user. Default [false]. */
  isServiceUpdatesEnabled: boolean;
  /** Gets or sets the issuer {@link Certificate} for the user. Will only be populated for users not using basic authentication. */
  issuerCertificate: Certificate;
  /** Gets or sets a value indicating whether the user is allowed to HOS yard move. Default [false]. */
  isYardMoveEnabled: boolean;
  /** Gets or sets the user's culture identifier as a predefined {@link CultureInfo} name, {@link CultureInfo.Name} of an existing System.Globalization.CultureInfo, or Windows-only culture name. Default: ["en"] for English. */
  language: string;
  /** Gets or sets the user's Last access date of the system. */
  lastAccessDate: Date;
  /** Gets or sets the last name of the user. Maximum length [255]. */
  lastName: string;
  /** Gets or sets the list of the of the available {@link MapView}s from the live map. Default [continent of the user's selected Timezone]. */
  mapViews: unknown[];
  /** Gets or sets a value indicating the maximum personal conveyance distance per day in meters. Default [0]. */
  maxPCDistancePerDay: number;
  /**
   * Gets or sets the list of {@link MediaFile}(s) photos of this user.
   *  Currently, a user can only be associated with at most one photo.
   */
  mediaFiles: MediaFile[];
  /** Gets or sets the user's email address / login name. Maximum length [255]. */
  name: string;
  /** Gets or sets a value to nullify AccessGroupFilter. */
  nullifyAccessGroupFilter: boolean;
  /** Gets or sets the user's password. */
  password: string;
  /** Gets or sets the user phone number with space separated country phone code. Example +1 5555555555. Maximum length [20] Default [""] */
  phoneNumber: string;
  /** Gets or sets the user phone number without formatting. Maximum length [5] Default [""] */
  phoneNumberExtension: string;
  /** Gets or sets the private {@link Group}(s) that the user belongs to. */
  privateUserGroups: Group[];
  /** Gets or sets the report {@link Group}(s) for reporting that this user belongs to. The selected reporting groups will allow the user to sort entities that are children of the selected groups. It will not allow them to see entities that are outside of their data access. Default [empty]. */
  reportGroups: Group[];
  /** Gets or sets the security {@link Group}(s) this user belongs to; which define the user's access. */
  securityGroups: Group[];
  /** Gets or sets a flag indicating whether to show ClickOnce support warning as the default page. (legacy) Default [false]. */
  showClickOnceWarning: boolean;
  /** Gets or sets the IANA Timezone Id of the user. All data will be displayed in this Timezone. Default ["America/New_York"]. */
  timeZoneId: string;
  /** Gets or sets the {@link UserAuthenticationType}. Default [Basic]. */
  userAuthenticationType: UserAuthenticationType;
  /** Gets or sets a value indicating the user accepted Wifi specific EULA revision number. Default [0]. */
  wifiEULA: number;
  /**
   * Gets or sets the windows authentication user Id. This property is so we
   *  don't return both User Id and Name to the client side when they have the same value.
   *  User Id and Name only differ for WindowsAuthentication users.
   */
  windowsAuthenticationUserId: string;
  /** Gets or sets the default {@link ZoneDisplayMode} used on the map. Default [Default]. */
  zoneDisplayMode: ZoneDisplayMode;
}
