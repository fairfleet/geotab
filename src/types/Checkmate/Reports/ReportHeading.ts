//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/** The report heading. */
export type ReportHeading =
  | "DummyColumnOne"
  | "DummyColumnTwo"
  | "DummyColumnThree"
  | "DummyCustomProperty"
  | "DummyName"
  | "DeviceName"
  | "DeviceId"
  | "DeviceComment"
  | "DeviceGroup"
  | "DeviceParentGroup"
  | "DriverGroup"
  | "WorkTimeName"
  | "TripDetailMaximumSpeed"
  | "TripDetailStopDuration"
  | "TripDetailRouteName"
  | "TripDetailIdlingDuration"
  | "TripDetailStopDateTime"
  | "TripDetailStartDateTime"
  | "TripDetailDrivingDuraion"
  | "TripDetailDistance"
  | "TripDetailLatitude"
  | "TripDetailLongitude"
  | "TripDetailLocation"
  | "TripDetailStartLocation"
  | "TripDetailSpeedRange1"
  | "TripDetailSpeedRange1Duration"
  | "TripDetailSpeedRange2"
  | "TripDetailSpeedRange2Duration"
  | "TripDetailSpeedRange3"
  | "TripDetailSpeedRange3Duration"
  | "TripDetailIsStartDriveWorkHours"
  | "TripDetailIsStopDriveWorkHours"
  | "TripDetailWorkHoursDistance"
  | "TripDetailWorkHoursTripTime"
  | "TripDetailWorkHoursStopTime"
  | "TripDetailOdometerAtStart"
  | "TripDetailOdometerAtEnd"
  | "TripDetailExceptionRule1Duration"
  | "TripDetailExceptionRule1Count"
  | "TripDetailExceptionRule1Distance"
  | "TripDetailExceptionRule2Duration"
  | "TripDetailExceptionRule2Count"
  | "TripDetailExceptionRule2Distance"
  | "TripDetailExceptionRule3Duration"
  | "TripDetailExceptionRule3Count"
  | "TripDetailExceptionRule3Distance"
  | "TripDetailExceptionRule4Duration"
  | "TripDetailExceptionRule4Count"
  | "TripDetailExceptionRule4Distance"
  | "TripDetailExceptionRule5Duration"
  | "TripDetailExceptionRule5Count"
  | "TripDetailExceptionRule5Distance"
  | "TripDetailExceptionRule6Duration"
  | "TripDetailExceptionRule6Count"
  | "TripDetailExceptionRule6Distance"
  | "TripDetailExceptionRule7Duration"
  | "TripDetailExceptionRule7Count"
  | "TripDetailExceptionRule7Distance"
  | "TripDetailExceptionRule8Duration"
  | "TripDetailExceptionRule8Count"
  | "TripDetailExceptionRule8Distance"
  | "TripDetailPrivateTrip"
  | "TripDetailCategory"
  | "TripDetailAnnotation"
  | "TripSummaryName"
  | "TripSummaryGroupName"
  | "TripSummaryCustomerDuration"
  | "TripSummaryNonCustomerDuration"
  | "TripSummaryDrivingDuration"
  | "TripSummaryOfficeDepotDuration"
  | "TripSummaryHomeDuration"
  | "TripSummaryCustomerStopsCount"
  | "TripSummaryStopCount"
  | "TripSummaryCustomerDurationPercentage"
  | "TripSummaryNonCustomerDurationPercentage"
  | "TripSummaryDrivingDurationPercentage"
  | "TripSummaryOfficeDepotDurationPercentage"
  | "TripSummaryHomeDurationPercentage"
  | "TripSummaryDistance"
  | "TripSummaryIdlingDuration"
  | "TripSummaryIdlingDurationPercentage"
  | "TripSummaryPeriodStartDate"
  | "TripSummaryPeriodEndDate"
  | "TripSummaryPeriodNumber"
  | "TripSummaryVocation"
  | "TripSummaryMaximumSpeed"
  | "TripSummaryOdometerAtStart"
  | "TripSummaryOdometerAtEnd"
  | "TripSummaryDaysDriven"
  | "RestrictedDataModeDistance"
  | "DebugDateTime"
  | "DebugRecordType"
  | "DebugSpeed"
  | "DebugLongitude"
  | "DebugLatitude"
  | "DebugLocation"
  | "DebugRecordReason"
  | "DebugRecordDataInHex"
  | "DebugIgnition"
  | "DebugAux1"
  | "DebugAux2"
  | "DebugAux3"
  | "DebugAux4"
  | "DebugAux5"
  | "DebugAux6"
  | "DebugAux7"
  | "DebugAux8"
  | "DebugPositionValid"
  | "DebugPositionValidAtUnit"
  | "DebugLoadedSection"
  | "DebugDataLength"
  | "DebugStatusDataValue"
  | "DiagnosticName"
  | "DiagnosticId"
  | "DiagnosticCode"
  | "ControllerName"
  | "ControllerId"
  | "ControllerCode"
  | "FailureModeName"
  | "FailureModeId"
  | "FailureModeCode"
  | "UnitOfMeasureName"
  | "UnitOfMeasureId"
  | "GroupName"
  | "GroupId"
  | "GroupComment"
  | "NodeDetailParents"
  | "RiskManagementSpeedLimit1Count"
  | "RiskManagementSpeedLimit2Count"
  | "RiskManagementSpeedLimit3Count"
  | "RiskManagementAverageSpeed"
  | "RiskManagementStopUnder10Count"
  | "RiskManagementStopOver10Count"
  | "RiskManagementStopOver20Count"
  | "RiskManagementStopOver30Count"
  | "RiskManagementStopOver40Count"
  | "RiskManagementStopOver50Count"
  | "RiskManagementIdlingOver5Count"
  | "RiskManagementIdlingDuration"
  | "RiskManagementAfterHoursTripCount"
  | "RiskManagementTotalDistance"
  | "RiskManagementTotalStopsCount"
  | "RiskManagementAux1"
  | "RiskManagementExceptionRule1"
  | "RiskManagementExceptionRule1Duration"
  | "RiskManagementExceptionRule1Count"
  | "RiskManagementExceptionRule1Distance"
  | "RiskManagementExceptionRule2"
  | "RiskManagementExceptionRule2Duration"
  | "RiskManagementExceptionRule2Count"
  | "RiskManagementExceptionRule2Distance"
  | "RiskManagementExceptionRule3"
  | "RiskManagementExceptionRule3Duration"
  | "RiskManagementExceptionRule3Count"
  | "RiskManagementExceptionRule3Distance"
  | "RiskManagementExceptionRule4"
  | "RiskManagementExceptionRule4Duration"
  | "RiskManagementExceptionRule4Count"
  | "RiskManagementExceptionRule4Distance"
  | "RiskManagementExceptionRule5"
  | "RiskManagementExceptionRule5Duration"
  | "RiskManagementExceptionRule5Count"
  | "RiskManagementExceptionRule5Distance"
  | "RiskManagementExceptionRule6"
  | "RiskManagementExceptionRule6Duration"
  | "RiskManagementExceptionRule6Count"
  | "RiskManagementExceptionRule6Distance"
  | "RiskManagementTotalDrivingDuration"
  | "RiskManagementPeriodStartDate"
  | "RiskManagementPeriodEndDate"
  | "RiskManagementPeriodNumber"
  | "RiskManagementMaxSpeed"
  | "ExceptionDetailLongitude"
  | "ExceptionDetailLatitude"
  | "ExceptionDetailLocation"
  | "ExceptionDetailStartTime"
  | "ExceptionDetailEndTime"
  | "ExceptionDuration"
  | "ExceptionTripDistance"
  | "ExceptionStatus"
  | "ExceptionDistance"
  | "ExceptionDetailDetails"
  | "ExceptionDetailExtraInfo"
  | "LegacyExceptionDetailExtraInfo"
  | "ExceptionSummaryFirstIncident"
  | "ExceptionSummaryLastIncident"
  | "ExceptionSummaryIncidentCount"
  | "ExceptionSummaryTripDistance"
  | "ExceptionRuleName"
  | "ExceptionRuleId"
  | "ExceptionRuleComment"
  | "ExceptionRuleGroup"
  | "TimeCardFirstDepartDate"
  | "TimeCardLastArriveDate"
  | "TimeCardLocation"
  | "TimeCardNonCustomerStopTime"
  | "TimeCardCustomerStopTime"
  | "TimeCardTripTime"
  | "TimeCardIdleTime"
  | "TimeCardMaxSpeed"
  | "TimeCardLatitude"
  | "TimeCardLongitude"
  | "DriverKeyId"
  | "DriverKeySerialNumber"
  | "DriverkeyType"
  | "UserDesignation"
  | "UserAuthorityName"
  | "UserAuthorityAddress"
  | "UserEmployeeNo"
  | "UserActiveFrom"
  | "UserActiveTo"
  | "UserCompanyName"
  | "UserCompanyAddress"
  | "DriverLicenseNumber"
  | "DriverLicenseProvince"
  | "UserCarrierNumber"
  | "UserLastAccessDate"
  | "UserTimeZone"
  | "AuditName"
  | "AuditUserName"
  | "AuditDateTime"
  | "AuditComment"
  | "DisplayUserGroups"
  | "DisplayUserReportGroups"
  | "DisplayUserSecurityLevel"
  | "UserComment"
  | "UserId"
  | "UserName"
  | "UserFirstName"
  | "UserLastName"
  | "UserAuthenticationType"
  | "UserHosRuleSet"
  | "ServiceStatusDatabase"
  | "ServiceStatusSource"
  | "ServiceStatusInfo"
  | "ServiceStatusLastUpdate"
  | "ServiceStatusPC"
  | "ServiceStatusStatus"
  | "SourceName"
  | "SourceId"
  | "EngineTypeName"
  | "EngineTypeId"
  | "DataDiagnosticDataLength"
  | "DataDiagnosticConversion"
  | "DataDiagnosticOffset"
  | "ParameterGroupName"
  | "ParameterGroupId"
  | "ExceptionInstanceDateTime"
  | "RouteName"
  | "RouteId"
  | "RouteComment"
  | "RouteDeviceLocalStartDate"
  | "VehicleDayRouteDriveTime"
  | "VehicleDayRouteDistance"
  | "VehicleDayRouteOfficeTime"
  | "VehicleDayRouteCustomerTimeOverThreshold"
  | "VehicleDayRouteCustomerTimeUnderThreshold"
  | "VehicleDayRouteHomeTime"
  | "VehicleDayRouteUndefinedStopTimeOverThreshold"
  | "VehicleDayRouteUndefinedStopTimeUnderThreshold"
  | "VehicleDayRouteTotalStops"
  | "VehicleDayRouteOfficeStops"
  | "VehicleDayRouteHomeStops"
  | "VehicleDayRouteCustomerStopsOverThreshold"
  | "VehicleDayRouteCustomerStopsUnderThreshold"
  | "VehicleDayRouteUndefinedStopsOverThreshold"
  | "VehicleDayRouteUndefinedStopsUnderThreshold"
  | "VehicleDayRouteLocalFirstDepartureTime"
  | "VehicleDayRouteLocalLastArrivalTime"
  | "VehicleDayRouteEmployeeList"
  | "VehicleDayRoutePercentageSpeeding"
  | "VehicleDayRouteIdleTime"
  | "VehicleDayRouteSeatbeltViolations"
  | "VehicleDayRouteSpeedingViolations"
  | "VehicleDayRouteJackRabbitStarts"
  | "VehicleDayRouteSpeedingViolationTime"
  | "NotificationDateTime"
  | "NotificationApplicationExceptionDataSource"
  | "NotificationApplicationExceptionDataDescription"
  | "NotificationApplicationExceptionDataInfo"
  | "NotificationInfoDataInstance"
  | "NotificationInfoDataSource"
  | "NotificationInfoDataInfo"
  | "NotificationNewsTextFullInfo"
  | "FuelTaxCountry"
  | "FuelTaxJurisdiction"
  | "FuelTaxUpdatesAvailable"
  | "FuelTaxEnterTime"
  | "FuelTaxExitTime"
  | "FuelTaxEnterOdometer"
  | "FuelTaxExitOdometer"
  | "FuelTaxDistance"
  | "FuelTaxGpsDistance"
  | "FuelTaxOdometerOffset"
  | "FuelTaxLatitude"
  | "FuelTaxLongitude"
  | "FuelTaxVin"
  | "FuelTaxLicensePlate"
  | "FuelTaxIsIftaJurisdiction"
  | "FuelTaxFuelType"
  | "FuelTaxFuelPurchased"
  | "FuelTaxFuelUsed"
  | "FuelTaxNetTaxableFuel"
  | "FuelTaxFuelEconomy"
  | "FuelTaxAuthority"
  | "FuelTaxTollRoad"
  | "FuelTaxRoadType"
  | "ZoneZoneTypes"
  | "ZoneGroup"
  | "ZoneName"
  | "ZoneId"
  | "ZoneComment"
  | "ZoneStartTime"
  | "ZoneEndTime"
  | "ZoneDisplayed"
  | "ZoneIsStopExceptionRequired"
  | "ZoneExternalReference"
  | "ZoneFillColor"
  | "ZoneCentroidLongitude"
  | "ZoneCentroidLatitude"
  | "CongregationStart"
  | "CongregationEnd"
  | "StopStart"
  | "StopEnd"
  | "StopLocation"
  | "DeviceStatusLastHeartBeat"
  | "DeviceStatusLastFaultData"
  | "DeviceStatusLastEngineData"
  | "FaultDataId"
  | "FaultDataDateTime"
  | "FaultDataFaultLampState"
  | "FaultDataFaultState"
  | "FaultDataCount"
  | "FaultDataDismissDateTime"
  | "FaultDataClass"
  | "FaultDataSeverity"
  | "FaultDataSourceAddress"
  | "FlashCodeName"
  | "FlashCodeId"
  | "FlashCodeCircuitIndex"
  | "FlashCodeFlashCodeIndex"
  | "FlashCodeHelpUrl"
  | "FlashCodePriorityLevel"
  | "FlashCodePageReference"
  | "FaultDataAmberWarningLamp"
  | "FaultDataRedStopLamp"
  | "FaultDataMalfunctionLamp"
  | "FaultDataProtectWarningLamp"
  | "StatusDataDateTime"
  | "StatusDataData"
  | "SensorDataAddress"
  | "DeviceDetailsCurrentOdometer"
  | "DeviceDetailsLastStopLongitude"
  | "DeviceDetailsLastStopLatitude"
  | "DeviceDetailsLocation"
  | "DeviceDetailsCurrentEngineHours"
  | "DeviceDeviceType"
  | "DeviceProductId"
  | "DeviceMajor"
  | "DeviceMinor"
  | "DeviceSerialNumber"
  | "DeviceLicensePlate"
  | "DeviceLicenseState"
  | "DeviceVIN"
  | "DeviceEngineVIN"
  | "DeviceSleeperBerth"
  | "DeviceDetailsMake"
  | "DeviceDetailsModel"
  | "DeviceDetailsYear"
  | "DeviceDetailsExtra"
  | "DeviceTimeZoneId"
  | "DeviceStatusLastTrip"
  | "DeviceStatusLastGpsRecord"
  | "DeviceStatusLastStatusData"
  | "DeviceStatusAnalysisTroubleDownloadStatus"
  | "DeviceDetailsDrivingState"
  | "DeviceDetailsPrivacyMode"
  | "RouteItemRouteName"
  | "RouteItemLegName"
  | "RouteItemTurnNumber"
  | "RouteItemTurnText"
  | "RouteItemDistance"
  | "RouteItemDuration"
  | "EventRuleKilometers"
  | "EventRuleMonths"
  | "EventRuleDayOfMonthSelect"
  | "EventRuleWeeks"
  | "EventRuleDayOfWeekSelect"
  | "EventRuleDays"
  | "EventRuleGroups"
  | "EventRuleDateTime"
  | "EventRuleEngineHours"
  | "EventRuleComment"
  | "ReminderEventCurrentOdometer"
  | "EventOccuranceEventDate"
  | "EventOccuranceAdjustedOdometer"
  | "EventOccuranceComment"
  | "EventOccurrenceReference"
  | "EventOccurrenceLaborCostInput"
  | "EventOccurrenceLaborCostConverted"
  | "EventOccurrencePartsCostInput"
  | "EventOccurrencePartsCostConverted"
  | "EventOccurrenceTaxInput"
  | "EventOccurrenceTaxConverted"
  | "EventOccurrenceTotalCostInput"
  | "EventOccurrenceTotalCostConverted"
  | "EventOccurrenceCostCurrencyInput"
  | "EventOccurrenceCostCurrencyConverted"
  | "ReminderEventEventRuleType"
  | "ReminderEventDueDate"
  | "ReminderEventDueDistance"
  | "ReminderEventDueEngineHours"
  | "EventRuleName"
  | "EventRuleId"
  | "EventOccuranceCurrentOdometer"
  | "EventOccuranceCurrentEngineHours"
  | "EventOccuranceAdjustedEngineHours"
  | "KeyInsertDataLogDate"
  | "DeviceInstallResultDate"
  | "DeviceInstallResultAllDownload"
  | "DeviceInstallResultLastGpsRecord"
  | "DeviceInstallResultLastEngineRecord"
  | "DeviceInstallResultSimNumber"
  | "DeviceInstallResultSimActive"
  | "DeviceInstallResultComments"
  | "DeviceInstallRequestSerialNumber"
  | "DeviceInstallRequestHardwareId"
  | "DeviceInstallRequestDate"
  | "DeviceInstallRequestInstallerName"
  | "DeviceInstallRequestInstallerCompany"
  | "DeviceInstallRequestOdometer"
  | "DeviceInstallRequestAsset"
  | "DeviceInstallRequestComments"
  | "DeviceInstallHistoryRecordType"
  | "DeviceInstallHistoryStatus"
  | "DeviceInstallMakeAndModel"
  | "DeviceInstallIox"
  | "DeviceInstallHarness"
  | "DeviceInstallHarnessComments"
  | "DeviceInstallAuxPorts"
  | "DeviceInstallComment"
  | "DeviceInstallWorkReference"
  | "DeviceInstallEngineHours"
  | "DeviceInstallEngineProtocol"
  | "DeviceInstallLastDeviceCommunication"
  | "DeviceInstallPossibleIssues"
  | "DeviceInstallPhoto1"
  | "DeviceInstallPhoto2"
  | "DeviceInstallPhoto3"
  | "DeviceInstallPhoto4"
  | "PerformanceDateTime"
  | "PerformanceProcessContext"
  | "PerformanceSource"
  | "PerformanceLevel1Action"
  | "PerformanceLevel2Action"
  | "PerformanceLevel3Action"
  | "PerformanceCpuSeconds"
  | "PerformanceSeconds"
  | "PerformanceLevel1Count"
  | "PerformanceLevel2Count"
  | "PerformanceLevel3Count"
  | "PerformanceTotalCpuSeconds"
  | "PerformanceTotalSeconds"
  | "PerformanceAction"
  | "PerformanceLastValue"
  | "PerformanceMinValue"
  | "PerformanceMaxValue"
  | "PerformanceTotalValue"
  | "PerformanceAverageValue"
  | "PerformanceCount"
  | "DeviceProgrammingImmobilizeArming"
  | "DeviceProgrammingSpeedingOn"
  | "DeviceProgrammingSpeedingOff"
  | "DeviceProgrammingIdleMinutes"
  | "DeviceProgrammingRpmValue"
  | "DeviceProgrammingHarshBrakeWarning"
  | "DeviceProgrammingOdometerOffset"
  | "DeviceProgrammingEngineHourOffset"
  | "EngineStatusStatisticsPeriodStartDate"
  | "EngineStatusStatisticsPeriodEndDate"
  | "EngineStatusStatisticsDistance"
  | "EngineStatusStatisticsFuelUsed"
  | "EngineStatusStatisticsZeroSpeedFuelUsed"
  | "EngineStatusStatisticsFuelEconomyMetric"
  | "EngineStatusStatisticsFuelEconomyUS"
  | "EngineStatusStatisticsIdling"
  | "EngineStatusStatisticsPeriodNumber"
  | "EngineStatusStatisticsFuelEconomy"
  | "EngineStatusStatisticsElectricEnergyUsed"
  | "EngineStatusStatisticsElectricEnergyUsedFuelEquivalent"
  | "EngineStatusStatisticsElectricEnergyEconomy"
  | "EngineStatusStatisticsFuelAndElectricEconomy"
  | "EngineStatusStatisticsElectricEnergyUsedPercentage"
  | "EngineStatusStatisticsGpsDistance"
  | "TextMessageSentDate"
  | "TextMessageDeliveredDate"
  | "TextMessageDirectionToVehicle"
  | "TextMessageReadDate"
  | "TextMessageContentMessage"
  | "LocationContentLatitude"
  | "LocationContentLongitude"
  | "LocationContentAddress"
  | "CannedResponseOptionsString"
  | "RouteComparisonDetailExpectedSequence"
  | "RouteComparisonDetailActualSequence"
  | "RouteComparisonDetailExpectedArrivalTime"
  | "RouteComparisonDetailActualArrivalTime"
  | "RouteComparisonDetailLatitude"
  | "RouteComparisonDetailLongitude"
  | "RouteComparisonDetailExpectedStopDuration"
  | "RouteComparisonDetailActualStopDuration"
  | "RouteComparisonDetailIdling"
  | "RouteComparisonDetailLocation"
  | "RouteComparisonDetailStartDateTime"
  | "RouteComparisonDetailEndDateTime"
  | "RouteComparisonDetailOfficeName"
  | "RouteComparisonDetailExpectedDrivingDistance"
  | "RouteComparisonDetailActualDrivingDistance"
  | "RouteComparisonDetailExpectedDrivingTimeSpan"
  | "RouteComparisonDetailActualDrivingTimeSpan"
  | "DVIRLogDateTimeCreated"
  | "DVIRLogDriverRemark"
  | "DVIRLogRepairDate"
  | "DVIRLogRepairRemark"
  | "DVIRDefects"
  | "DVIRLogCertifyDate"
  | "DVIRLogCertifyRemark"
  | "DVIRLogIsSafeToOperate"
  | "DVIRLogLogType"
  | "DVIRDetailOdometer"
  | "DVIRDetailHubometer"
  | "DVIRLogDetailInspector"
  | "DVIRLogDetailOperator"
  | "DVIRLogLoadHeight"
  | "DVIRLogLoadWidth"
  | "DVIRLogAuthorityName"
  | "DVIRLogAuthorityAddress"
  | "DVIRLogDeviceVin"
  | "DVIRDetailAddress"
  | "DVIRDetailDefects"
  | "DVIRDetailNormalDefects"
  | "DVIRDetailUnregulatedDefects"
  | "DVIRDetailCriticalDefects"
  | "DVIRDetailDefectName"
  | "DVIRDetailDefectSeverityLevel"
  | "DVIRDetailDefectRepairStatus"
  | "DVIRDefectRepairDateTime"
  | "DVIRDetailDefectRemark"
  | "DutyStatusId"
  | "DutyStatusFromPreviousPeriod"
  | "DutyStatusDateTime"
  | "DutyStatusStatus"
  | "DutyStatusVerifyDateTime"
  | "DutyStatusEditDateTime"
  | "DutyStatusCoDrivers"
  | "DutyStatusLocation"
  | "DutyStatusOrigin"
  | "DutyStatusParentId"
  | "DutyStatusState"
  | "DutyStatusVersion"
  | "DutyStatusDetailOdometer"
  | "DutyStatusDetailLatitude"
  | "DutyStatusDetailLongitude"
  | "DutyStatusDetailDistance"
  | "DutyStatusDetailTrailers"
  | "DutyStatusDetailShipments"
  | "DutyStatusDetailHosRuleSet"
  | "DutyStatusDetailAnnotations"
  | "DutyStatusDetailDuration"
  | "DutyStatusSequence"
  | "DutyStatusMalfunctionType"
  | "HosViolationDrivingDuration"
  | "HosViolationStartDateTime"
  | "HosViolationEndDateTime"
  | "HosViolationReason"
  | "HosViolationHoursLimit"
  | "HosViolationDaysLimit"
  | "HosViolationType"
  | "HosAvailabilityRest"
  | "HosAvailabilityDriving"
  | "HosAvailabilityDuty"
  | "HosAvailabilityWorkday"
  | "HosAvailabilityCycle"
  | "TrailerComment"
  | "TrailerId"
  | "TrailerName"
  | "TrailerGroups"
  | "DeviceActiveFrom"
  | "DeviceActiveTo"
  | "DeviceDetailsDevicePlan"
  | "DeviceDetailsCurrentExceptions"
  | "DeviceTimeToDownload"
  | "DeviceIgnoreDownloadsUntil"
  | "DeviceProgrammingImmobilizeUnit"
  | "DeviceProgrammingSpeedIndicator"
  | "DeviceProgrammingSpeedWarning"
  | "DeviceProgrammingBeepOnIdle"
  | "DeviceProgrammingBeepOnRpm"
  | "DeviceProgrammingAux1Warning"
  | "DeviceProgrammingAux2Warning"
  | "DeviceProgrammingAux3Warning"
  | "DeviceProgrammingAux4Warning"
  | "DeviceProgrammingAux5Warning"
  | "DeviceProgrammingAux6Warning"
  | "DeviceProgrammingAux7Warning"
  | "DeviceProgrammingAux8Warning"
  | "DeviceProgrammingAux1WarningSpeed"
  | "DeviceProgrammingAux2WarningSpeed"
  | "DeviceProgrammingAux3WarningSpeed"
  | "DeviceProgrammingAux4WarningSpeed"
  | "DeviceProgrammingAux5WarningSpeed"
  | "DeviceProgrammingAux6WarningSpeed"
  | "DeviceProgrammingAux7WarningSpeed"
  | "DeviceProgrammingAux8WarningSpeed"
  | "NotificationRowRecipientType"
  | "FuelEventDateTime"
  | "FuelEventProductType"
  | "FuelEventVolume"
  | "FuelEventOdometer"
  | "FuelEventCost"
  | "FuelEventCurrencyCode"
  | "FuelUsedEventDistance"
  | "FuelUpEventTotalFuelUsed"
  | "FuelUpEventTankCapacity"
  | "FuelUpEventTankCapacitySource"
  | "FuelUpEventTankLevelLow"
  | "FuelUpEventTankLevelHigh"
  | "FuelTransacationVin"
  | "FuelTransacationDriverName"
  | "FuelTransaction1Latitude"
  | "FuelTransaction1Longitude"
  | "FuelTransaction2Latitude"
  | "FuelTransaction2Longitude"
  | "FuelTransaction3Latitude"
  | "FuelTransaction3Longitude"
  | "FuelTransaction4Latitude"
  | "FuelTransaction4Longitude"
  | "FuelUpEventRiskIsLocationMatch"
  | "FuelUpEventRiskIsCapacityMatch"
  | "FuelUpEventRiskIsEngineFuelMatch"
  | "FuelUpEventRiskIsDerivedVolumeMatch"
  | "FillUpRecordLocation"
  | "FillUpRecordLatitude"
  | "FillUpRecordLongitude"
  | "FillUpRecordTransaction1Driver"
  | "FillUpRecordTransaction1DateTime"
  | "FillUpRecordTransaction1Cost"
  | "FillUpRecordTransaction1CurrencyCode"
  | "FillUpRecordTransaction1Odometer"
  | "FillUpRecordTransaction1Vin"
  | "FillUpRecordTransaction1ProductType"
  | "FillUpRecordTransaction1ProductDescription"
  | "FillUpRecordTransaction1CardNumber"
  | "FillUpRecordTransaction1SiteName"
  | "FillUpRecordTransaction2Driver"
  | "FillUpRecordTransaction2DateTime"
  | "FillUpRecordTransaction2Cost"
  | "FillUpRecordTransaction2CurrencyCode"
  | "FillUpRecordTransaction2Odometer"
  | "FillUpRecordTransaction2Vin"
  | "FillUpRecordTransaction2ProductType"
  | "FillUpRecordTransaction2ProductDescription"
  | "FillUpRecordTransaction2CardNumber"
  | "FillUpRecordTransaction2SiteName"
  | "FillUpRecordTransaction3Driver"
  | "FillUpRecordTransaction3DateTime"
  | "FillUpRecordTransaction3Cost"
  | "FillUpRecordTransaction3CurrencyCode"
  | "FillUpRecordTransaction3Odometer"
  | "FillUpRecordTransaction3Vin"
  | "FillUpRecordTransaction3ProductType"
  | "FillUpRecordTransaction3ProductDescription"
  | "FillUpRecordTransaction3CardNumber"
  | "FillUpRecordTransaction3SiteName"
  | "FillUpRecordTransaction4Driver"
  | "FillUpRecordTransaction4DateTime"
  | "FillUpRecordTransaction4Cost"
  | "FillUpRecordTransaction4CurrencyCode"
  | "FillUpRecordTransaction4Odometer"
  | "FillUpRecordTransaction4Vin"
  | "FillUpRecordTransaction4ProductType"
  | "FillUpRecordTransaction4ProductDescription"
  | "FillUpRecordTransaction4CardNumber"
  | "FillUpRecordTransaction4SiteName"
  | "FillUpRecordFuelEconomy"
  | "ChargeEventStartDate"
  | "ChargeEventDuration"
  | "ChargeEventLocation"
  | "ChargeEventZones"
  | "ChargeEventStartCharge"
  | "ChargeEventEndCharge"
  | "ChargeEventSessionStartCharge"
  | "ChargeEventSessionEndCharge"
  | "ChargeEventDeviceAverageStartCharge"
  | "ChargeEventDeviceAverageEndCharge"
  | "ChargeEventEnergyAdded"
  | "ChargeEventElectricEconomy"
  | "ChargeEventMaxPower"
  | "ChargeEventElectricCurrentType"
  | "ChargeEventACVoltage"
  | "ChargeEventStartOdometer"
  | "ChargeSessionTripStopTime"
  | "EngineFaultSummaryActiveFaultDataCount"
  | "EngineFaultSummaryFaultDataCount"
  | "EngineFaultSummaryLastFault"
  | "DVIRLogId"
  | "DeviceDetailsVocation"
  | "DeviceDetailsElectricalSystemRating"
  | "StartOfWorkday"
  | "AutoVehicleManagement"
  | "HosSettings"
  | "DutyStatusIgnoredLog"
  | "MaterialManagementStartDate"
  | "MaterialManagementEndDate"
  | "MaterialManagementSolidType"
  | "MaterialManagementPreWetType"
  | "MaterialManagementAntiIceType"
  | "MaterialManagementSolidTotal"
  | "MaterialManagementPreWetTotal"
  | "MaterialManagementAntiIceTotal"
  | "MaterialManagementSpreadTime"
  | "MaterialManagementPlowTime"
  | "MaterialManagementDeadheadTime"
  | "MaterialManagementTravelTime"
  | "MaterialManagementIdleTime"
  | "MaterialManagementTotalTime"
  | "MaterialManagementSpreadDistance"
  | "MaterialManagementPlowDistance"
  | "MaterialManagementDeadheadDistance"
  | "MaterialManagementTotalDistance"
  | "MaterialManagementAvgSolidRate"
  | "MaterialManagementAvgPreWetRate"
  | "MaterialManagementAvgAntiIceRate"
  | "TransactionFuelVolume"
  | "EngineDataFuelVolume"
  | "OBDAlertStatus"
  | "RouteCompletionPassCount"
  | "RouteCompletionExpectedPassCount"
  | "RouteCompletionCompletionPercentage"
  | "RouteCompletionDevices"
  | "FaultDataStatus"
  | "StatusDataRecordDisplayData"
  | "StatusDataRecordUnitOfMeasureName"
  | "DebuggingStatusRecordDisplayData"
  | "DebuggingStatusRecordUnitOfMeasureName"
  | "TripStartEVBatteryCharge"
  | "TripEndEVBatteryCharge"
  | "TripElectricEnergyUsedWhileDriving"
  | "TripElectricEnergyUsedWhileIdling"
  | "TripElectricEnergyUsed"
  | "TripElectricEnergyEconomy"
  | "DVIRDetailNeedsCertify"
  | "EVBatteryHealthMake"
  | "EVBatteryHealthModel"
  | "EVBatteryHealthYear"
  | "EVBatteryHealthEVType"
  | "EVBatteryHealthDetectionDate"
  | "EVBatteryHealth90DayRollingAverageDataCollectionStartDate"
  | "EVBatteryHealth90DayRollingAverageDataCollectionEndDate"
  | "EVBatteryHealthDetectionDateOdometer"
  | "EVBatteryHealthEVBatteryHealth"
  | "EVBatteryHealthLower90ConfidenceInterval"
  | "EVBatteryHealthLower90ConfidenceIntervalDelta"
  | "EVBatteryHealthUpper90ConfidenceInterval"
  | "EVBatteryHealthUpper90ConfidenceIntervalDelta"
  | "EVBatteryHealthUsableDetectedCapacity"
  | "EVBatteryHealthUsableDetectedCapacity90ConfidenceInterval"
  | "EVBatteryHealthUsableOriginalCapacity"
  | "EVBatteryHealthUsableOriginalCapacity90ConfidenceInterval"
  | "EVBatteryHealthUsableDetectedCapacitySource"
  | "EVBatteryHealthUsableOriginalCapacitySource"
  | "EVBatteryHealthUsableDetectedCapacityLower90ConfidenceInterval"
  | "EVBatteryHealthUsableDetectedCapacityUpper90ConfidenceInterval"
  | "EVBatteryHealthUsableOriginalCapacityLower90ConfidenceInterval"
  | "EVBatteryHealthUsableOriginalCapacityUpper90ConfidenceInterval";
