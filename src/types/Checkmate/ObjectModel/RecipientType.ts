//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/** The type of notification message that is generated for a {@link Recipient}. */
export enum RecipientType {
  /** Recipient will be notified via a normal priority log that will appear in their Notifications. A {@link User} is required. */
  LogOnly = "LogOnly",
  /** Recipient will be notified via either a simple email. A {@link User} or valid Address is required. Optionally includes an EmailTemplate (NotificationBinaryFile). */
  Email = "Email",
  /** Recipient will be notified with a popup notification in the MyGeotab application that will also appear in their Notifications. A {@link User} is required. */
  LogPopup = "LogPopup",
  /** Recipient will be notified with an urgent popup in the MyGeotab application that will also appear in their Notifications. A {@link User} is required. */
  LogUrgentPopup = "LogUrgentPopup",
  /** Recipient will be notified with an alarm sound in the MyGeotab application. A {@link User} and {@link NotificationBinaryFile} are required. */
  Alarm = "Alarm",
  /** Recipient will be notified via the related Address. */
  WebService = "WebService",
  /** Recipient will be notified via a text message in the vehicle (for example, Garmin). */
  TextMessage = "TextMessage",
  /** Recipient must be prompted via a text message in the vehicle (for example, Garmin) to select their status. */
  ChangeStatus = "ChangeStatus",
  /** Beep three times rapidly using the GO device buzzer. */
  BeepThreeTimesRapidly = "BeepThreeTimesRapidly",
  /** Beep three times using the GO device buzzer. */
  BeepThreeTimes = "BeepThreeTimes",
  /** Beep ten times rapidly using the GO device buzzer. */
  BeepTenTimesRapidly = "BeepTenTimesRapidly",
  /** Recipient will be notified with a popup notification in the MyGeotab application that will also appear in their Notifications. */
  LogPopupInfo = "LogPopupInfo",
  /** Recipient will be notified via the related WebRequestTemplate (NotificationBinaryFile). A WebRequestTemplate is required. */
  WebRequest = "WebRequest",
  /** The vehicle associate with the {@link ExceptionEvent} will be assigned to the designated group (removed from sibling groups). A {@link Group} is required. */
  AssignToGroup = "AssignToGroup",
  /** Recipient will be notified via audio from a text to speech application connected to the {@link GoDevice}. */
  TextToSpeech = "TextToSpeech",
  /** Recipient will be notified with a popup notification in the MyGeotab application that will also appear in their Notifications. A {@link User} is required. */
  LogNewsPopup = "LogNewsPopup",
  /** Beep three times rapidly using the GO device buzzer. The device will beep even if there is a delay in the data and may beep after the event causing the exception has ended. */
  BeepThreeTimesRapidlyAllowDelay = "BeepThreeTimesRapidlyAllowDelay",
  /** Beep three times using the GO device buzzer. The device will beep even if there is a delay in the data and may beep after the event causing the exception has ended. */
  BeepThreeTimesAllowDelay = "BeepThreeTimesAllowDelay",
  /** Beep ten times rapidly using the GO device buzzer. The device will beep even if there is a delay in the data and may beep after the event causing the exception has ended. */
  BeepTenTimesRapidlyAllowDelay = "BeepTenTimesRapidlyAllowDelay",
  /** Recipient will be notified via audio from a GoTalk IOX. The GoTalk will speak even if there is a delay in the data and may beep after the event causing the exception has ended. */
  TextToSpeechAllowDelay = "TextToSpeechAllowDelay",
  /** TripType change will be added. */
  TripTypeChange = "TripTypeChange",
  /** Recipients within a group will be notified via simple email. A valid group name is required. Optionally includes an EmailTemplate (NotificationBinaryFile). */
  EmailToGroup = "EmailToGroup",
  /** Hos will be enabled. */
  HosEnabled = "HosEnabled",
  /** Hos will be disabled. */
  HosDisabled = "HosDisabled",
  /** DeviceDataPrivacy change will be added. */
  DeviceDataPrivacy = "DeviceDataPrivacy",
}
