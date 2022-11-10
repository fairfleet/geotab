import type { AddInData } from "./Checkmate/ObjectModel/AddInData";
import type { AddIn } from "./Checkmate/ObjectModel/AddIns/AddIn";
import type { AnnotationLog } from "./Checkmate/ObjectModel/AnnotationLog";
import type { Audit } from "./Checkmate/ObjectModel/Audit";
import type { Certificate } from "./Checkmate/ObjectModel/Certificate";
import type { ChargeEvent } from "./Checkmate/ObjectModel/Charging/ChargeEvent";
import type { CustomData } from "./Checkmate/ObjectModel/CustomData";
import type { Dashboard } from "./Checkmate/ObjectModel/Dashboard";
import type { DebugData } from "./Checkmate/ObjectModel/DebugData";
import type { Defect } from "./Checkmate/ObjectModel/Defect";
import type { DefectRemark } from "./Checkmate/ObjectModel/DefectRemark";
import type { Device } from "./Checkmate/ObjectModel/Device";
import type { DeviceDataPrivacyChange } from "./Checkmate/ObjectModel/DeviceDataPrivacyChange";
import type { DeviceLink } from "./Checkmate/ObjectModel/DeviceLink";
import type { DeviceMasterFlag } from "./Checkmate/ObjectModel/DeviceMasterFlag";
import type { DeviceRegistrationState } from "./Checkmate/ObjectModel/DeviceRegistration/DeviceRegistrationState";
import type { DeviceReplacementInfo } from "./Checkmate/ObjectModel/DeviceReplacement/DeviceReplacementInfo";
import type { DeviceShare } from "./Checkmate/ObjectModel/DeviceShare";
import type { DeviceStatusInfo } from "./Checkmate/ObjectModel/DeviceStatusInfo";
import type { DistributionList } from "./Checkmate/ObjectModel/DistributionList";
import type { DriverChange } from "./Checkmate/ObjectModel/DriverChange";
import type { DriverRegulation } from "./Checkmate/ObjectModel/DriverRegulation";
import type { DutyStatusAvailability } from "./Checkmate/ObjectModel/DutyStatusAvailability";
import type { DutyStatusLog } from "./Checkmate/ObjectModel/DutyStatusLog";
import type { DutyStatusViolation } from "./Checkmate/ObjectModel/DutyStatusViolation";
import type { DVIRDefect } from "./Checkmate/ObjectModel/DVIRDefect";
import type { DVIRLog } from "./Checkmate/ObjectModel/DVIRLog";
import type { EmployeeRoutePlan } from "./Checkmate/ObjectModel/EmployeeRoutePlan";
import type { EnergyConsumed } from "./Checkmate/ObjectModel/Energy/EnergyConsumed";
import type { EnergySnapshotRecord } from "./Checkmate/ObjectModel/Energy/EnergySnapshotRecord";
import type { Controller } from "./Checkmate/ObjectModel/Engine/Controller";
import type { Diagnostic } from "./Checkmate/ObjectModel/Engine/Diagnostic";
import type { DisplayMeasurementProfile } from "./Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfile";
import type { DisplayMeasurementProfileDetail } from "./Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayMeasurementProfileDetail";
import type { DisplayUnitOfMeasure } from "./Checkmate/ObjectModel/Engine/DisplayDiagnostic/DisplayUnitOfMeasure";
import type { UserDisplayProfile } from "./Checkmate/ObjectModel/Engine/DisplayDiagnostic/UserDisplayProfile";
import type { EngineType } from "./Checkmate/ObjectModel/Engine/EngineType";
import type { FailureMode } from "./Checkmate/ObjectModel/Engine/FailureMode";
import type { FaultData } from "./Checkmate/ObjectModel/Engine/FaultData";
import type { ParameterGroup } from "./Checkmate/ObjectModel/Engine/ParameterGroup";
import type { Source } from "./Checkmate/ObjectModel/Engine/Source";
import type { StatusData } from "./Checkmate/ObjectModel/Engine/StatusData";
import type { UnitOfMeasure } from "./Checkmate/ObjectModel/Engine/UnitOfMeasure";
import type { EntityLinkRule } from "./Checkmate/ObjectModel/EntityLink/EntityLinkRule";
import type { EventOccurrence } from "./Checkmate/ObjectModel/EventOccurrence";
import type { EventOccurrenceDue } from "./Checkmate/ObjectModel/EventOccurrenceDue";
import type { EventRule } from "./Checkmate/ObjectModel/EventRule";
import type { ExceptionEvent } from "./Checkmate/ObjectModel/Exceptions/ExceptionEvent";
import type { ExceptionEventAttachment } from "./Checkmate/ObjectModel/Exceptions/ExceptionEventAttachment";
import type { ExceptionEventComment } from "./Checkmate/ObjectModel/Exceptions/ExceptionEventComment";
import type { Rule } from "./Checkmate/ObjectModel/Exceptions/Rule";
import type { VirtualExceptionEvent } from "./Checkmate/ObjectModel/Exceptions/VirtualExceptionEvent";
import type { FeedVersionTrackingData } from "./Checkmate/ObjectModel/FeedVersionTrackingData";
import type { MediaFile } from "./Checkmate/ObjectModel/Files/MediaFile";
import type { FillUp } from "./Checkmate/ObjectModel/Fuel/FillUp";
import type { FuelSnapshotRecord } from "./Checkmate/ObjectModel/Fuel/FuelSnapshotRecord";
import type { FuelTransaction } from "./Checkmate/ObjectModel/Fuel/FuelTransaction";
import type { FuelUpEvent } from "./Checkmate/ObjectModel/Fuel/FuelUpEvent";
import type { FuelUsed } from "./Checkmate/ObjectModel/Fuel/FuelUsed";
import type { FuelTaxDetail } from "./Checkmate/ObjectModel/FuelTaxDetail";
import type { Group } from "./Checkmate/ObjectModel/Group";
import type { GroupDevice } from "./Checkmate/ObjectModel/GroupDevice";
import type { GroupFilter } from "./Checkmate/ObjectModel/GroupFilter";
import type { GroupZoneMetadata } from "./Checkmate/ObjectModel/GroupZoneMetadata";
import type { HosRulesetConfig } from "./Checkmate/ObjectModel/HosRulesetConfig";
import type { InstallRecord } from "./Checkmate/ObjectModel/InstallRecords/InstallRecord";
import type { IoxAddOn } from "./Checkmate/ObjectModel/IoxAddOn";
import type { LogRecord } from "./Checkmate/ObjectModel/LogRecord";
import type { LogRecordZoneDistance } from "./Checkmate/ObjectModel/LogRecordZoneDistance";
import type { MaintenanceNotificationRule } from "./Checkmate/ObjectModel/MaintenanceNotificationRule";
import type { MaintenanceNotificationState } from "./Checkmate/ObjectModel/MaintenanceNotificationState";
import type { MimeTask } from "./Checkmate/ObjectModel/MimeTask";
import type { EnergyConsumedProcessing } from "./Checkmate/ObjectModel/Processing/EnergyConsumedProcessing";
import type { FuelAndEnergySnapshotProcessing } from "./Checkmate/ObjectModel/Processing/FuelAndEnergySnapshotProcessing";
import type { Property } from "./Checkmate/ObjectModel/Property";
import type { PropertySet } from "./Checkmate/ObjectModel/PropertySet";
import type { Recipient } from "./Checkmate/ObjectModel/Recipient";
import type { ReportStorage } from "./Checkmate/ObjectModel/ReportStorage";
import type { ReportTemplate } from "./Checkmate/ObjectModel/ReportTemplate";
import type { DeviceReprocessRequest } from "./Checkmate/ObjectModel/Reprocessing/DeviceReprocessRequest";
import type { Route } from "./Checkmate/ObjectModel/Route";
import type { RouteExtract } from "./Checkmate/ObjectModel/RouteExtract";
import type { SecurityId } from "./Checkmate/ObjectModel/SecurityId";
import type { ServiceState } from "./Checkmate/ObjectModel/ServiceState";
import type { ShareableLink } from "./Checkmate/ObjectModel/ShareableLink";
import type { ShipmentLog } from "./Checkmate/ObjectModel/ShipmentLog";
import type { TextMessage } from "./Checkmate/ObjectModel/TextMessage";
import type { Trailer } from "./Checkmate/ObjectModel/Trailer";
import type { TrailerAttachment } from "./Checkmate/ObjectModel/TrailerAttachment";
import type { Trip } from "./Checkmate/ObjectModel/Trip";
import type { TripAnnotation } from "./Checkmate/ObjectModel/TripAnnotation";
import type { TripGeohash } from "./Checkmate/ObjectModel/TripGeohash";
import type { TripTypeChange } from "./Checkmate/ObjectModel/TripTypeChange";
import type { User } from "./Checkmate/ObjectModel/User";
import type { UserDeviceLink } from "./Checkmate/ObjectModel/UserDeviceLink";
import type { UserHosRuleSet } from "./Checkmate/ObjectModel/UserHosRuleSet";
import type { UserLoginStatus } from "./Checkmate/ObjectModel/UserLoginStatus";
import type { UserSupport } from "./Checkmate/ObjectModel/UserSupport";
import type { VehicleConfiguration } from "./Checkmate/ObjectModel/VehicleConfiguration";
import type { Widget } from "./Checkmate/ObjectModel/Widget";
import type { WifiHotspot } from "./Checkmate/ObjectModel/WifiHotspot";
import type { WorkHoliday } from "./Checkmate/ObjectModel/WorkHoliday";
import type { WorkTime } from "./Checkmate/ObjectModel/WorkTime";
import type { Zone } from "./Checkmate/ObjectModel/Zone";
import type { ZoneType } from "./Checkmate/ObjectModel/ZoneType";

export type EntityTypes = {
  AddInData: AddInData;
  AnnotationLog: AnnotationLog;
  Audit: Audit;
  BinaryData: BinaryData;
  Certificate: Certificate;
  CustomData: CustomData;
  Property: Property;
  PropertySet: PropertySet;
  Dashboard: Dashboard;
  DebugData: DebugData;
  Defect: Defect;
  DefectRemark: DefectRemark;
  Device: Device;
  DeviceDataPrivacyChange: DeviceDataPrivacyChange;
  DeviceLink: DeviceLink;
  DeviceMasterFlag: DeviceMasterFlag;
  DeviceShare: DeviceShare;
  DeviceStatusInfo: DeviceStatusInfo;
  DistributionList: DistributionList;
  DriverChange: DriverChange;
  DriverRegulation: DriverRegulation;
  DutyStatusAvailability: DutyStatusAvailability;
  DutyStatusLog: DutyStatusLog;
  DutyStatusViolation: DutyStatusViolation;
  DVIRDefect: DVIRDefect;
  DVIRLog: DVIRLog;
  EmployeeRoutePlan: EmployeeRoutePlan;
  EventOccurrence: EventOccurrence;
  EventOccurrenceDue: EventOccurrenceDue;
  EventRule: EventRule;
  FeedVersionTrackingData: FeedVersionTrackingData;
  FuelTaxDetail: FuelTaxDetail;
  Group: Group;
  GroupDevice: GroupDevice;
  GroupFilter: GroupFilter;
  GroupZoneMetadata: GroupZoneMetadata;
  HosRulesetConfig: HosRulesetConfig;
  IoxAddOn: IoxAddOn;
  LogRecord: LogRecord;
  LogRecordZoneDistance: LogRecordZoneDistance;
  MaintenanceNotificationRule: MaintenanceNotificationRule;
  MaintenanceNotificationState: MaintenanceNotificationState;
  MimeTask: MimeTask;
  Notification: Notification;
  Recipient: Recipient;
  ReportStorage: ReportStorage;
  ReportTemplate: ReportTemplate;
  Route: Route;
  RouteExtract: RouteExtract;
  SecurityId: SecurityId;
  ServiceState: ServiceState;
  ShareableLink: ShareableLink;
  ShipmentLog: ShipmentLog;
  TextMessage: TextMessage;
  Trailer: Trailer;
  TrailerAttachment: TrailerAttachment;
  Trip: Trip;
  TripAnnotation: TripAnnotation;
  TripGeohash: TripGeohash;
  TripTypeChange: TripTypeChange;
  User: User;
  UserDeviceLink: UserDeviceLink;
  UserHosRuleSet: UserHosRuleSet;
  UserLoginStatus: UserLoginStatus;
  UserSupport: UserSupport;
  VehicleConfiguration: VehicleConfiguration;
  Widget: Widget;
  WifiHotspot: WifiHotspot;
  WorkHoliday: WorkHoliday;
  WorkTime: WorkTime;
  Zone: Zone;
  ZoneType: ZoneType;
  DeviceReprocessRequest: DeviceReprocessRequest;
  EnergyConsumedProcessing: EnergyConsumedProcessing;
  FuelAndEnergySnapshotProcessing: FuelAndEnergySnapshotProcessing;
  InstallRecord: InstallRecord;
  FillUp: FillUp;
  FuelSnapshotRecord: FuelSnapshotRecord;
  FuelTransaction: FuelTransaction;
  FuelUpEvent: FuelUpEvent;
  FuelUsed: FuelUsed;
  MediaFile: MediaFile;
  ExceptionEvent: ExceptionEvent;
  ExceptionEventAttachment: ExceptionEventAttachment;
  ExceptionEventComment: ExceptionEventComment;
  Rule: Rule;
  VirtualExceptionEvent: VirtualExceptionEvent;
  EntityLinkRule: EntityLinkRule;
  Controller: Controller;
  Diagnostic: Diagnostic;
  EngineType: EngineType;
  FailureMode: FailureMode;
  FaultData: FaultData;
  ParameterGroup: ParameterGroup;
  Source: Source;
  StatusData: StatusData;
  UnitOfMeasure: UnitOfMeasure;
  DisplayMeasurementProfile: DisplayMeasurementProfile;
  DisplayMeasurementProfileDetail: DisplayMeasurementProfileDetail;
  DisplayUnitOfMeasure: DisplayUnitOfMeasure;
  UserDisplayProfile: UserDisplayProfile;
  EnergyConsumed: EnergyConsumed;
  EnergySnapshotRecord: EnergySnapshotRecord;
  DeviceReplacementInfo: DeviceReplacementInfo;
  DeviceRegistrationState: DeviceRegistrationState;
  ChargeEvent: ChargeEvent;
  AddIn: AddIn;
};