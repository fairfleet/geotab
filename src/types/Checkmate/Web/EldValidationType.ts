//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

/** ELD output validation message types. */
export enum EldValidationType {
  /** The error type cannot be determined or was not provided. */
  None = "None",
  /** File data check value computed based on the file contents does not match the values included in the file line of the ELD Output File. */
  IncorrectFileDataCheckValue = "IncorrectFileDataCheckValue",
  /** Line data check value computed using the contents of the file line does not match the value included in the final field of the line. */
  IncorrectLineDataCheckValue = "IncorrectLineDataCheckValue",
  /** File line contains fewer or more than the expected number of fields for a line of its type. */
  IncorrectNumberOfLineValues = "IncorrectNumberOfLineValues",
  /** File contains a character that is not a part of the ASCII character set defined by ANSI INCITS 4-1986; this may result in invalid data being displayed to the enforcement user. */
  InvalidCharacter = "InvalidCharacter",
  /** A line was encountered that contains text but could not be identified. */
  UnexpectedLine = "UnexpectedLine",
  /** A section of the file could not be identified, sections are identified by matching the section header text with the contents of each file line. */
  MissingFileSection = "MissingFileSection",
  /** A CMV Order Number referenced in an event record was not found in the CMV List. */
  MissingCmv = "MissingCmv",
  /** An ELD User Order Number referenced in an event record was not found in the User List. */
  MissingEldUser = "MissingEldUser",
  /** Line expected to exist was not found in the file. */
  MissingFileLine = "MissingFileLine",
  /** A section header value appeared more than once in the ELD Output File. */
  DuplicateFileSection = "DuplicateFileSection",
  /** A field defined by the rule as required has not been supplied. */
  MissingRequiredField = "MissingRequiredField",
  /** A field with a restricted length does not match a specific length, or it is outside the valid range of length. */
  InvalidFieldLength = "InvalidFieldLength",
  /** For numeric fields with a specific range of possible values, the value supplied is a number but it falls outside the range of values defined in the Final Rule. */
  FieldValueOutsideValidRange = "FieldValueOutsideValidRange",
  /** For fields which define a specific structure, the value supplied does not match the format specified in the rule. */
  InvalidFieldFormat = "InvalidFieldFormat",
  /** For fields which are restricted to a specific list of values, the supplied value was not found in the list. */
  InvalidValue = "InvalidValue",
  /** The supplied value could not be parsed as a decimal number. */
  InvalidDecimal = "InvalidDecimal",
  /** The field value cannot be parsed as an integer. */
  InvalidInteger = "InvalidInteger",
  /** The field value could not be parsed as a date. */
  InvalidDate = "InvalidDate",
  /** The field value could not be parsed as a time. */
  InvalidTime = "InvalidTime",
  /** The VIN does not have a valid check-digit. */
  InvalidVin = "InvalidVin",
  /** The field could not be parsed as a hex value. */
  InvalidHexValue = "InvalidHexValue",
  /** A valid ELD file should contain only a single empty line following the CR character. */
  UnexpectedEmptyLine = "UnexpectedEmptyLine",
  /** The file is using something other than a single CR as a line delimiter. */
  InvalidLineDelimiter = "InvalidLineDelimiter",
  /** Individual field values in this ELD file have been wrapped with double quote characters. */
  UnexpectedQuoteDelimiters = "UnexpectedQuoteDelimiters",
  /** The submitted ELD file does not contain any line delimiters. */
  NoLines = "NoLines",
  /** The submitted ELD file is blank and does not contain any usable information. */
  EmptyFile = "EmptyFile",
  /** The value supplied is not valid for a coordinate component (longitude or latitude). */
  InvalidCoordinateValue = "InvalidCoordinateValue",
  /** The ELD Identifier, ELD Registration ID and (if supplied) the certificate value do not match a valid ELD registration. */
  InvalidEldRegistrationInformation = "InvalidEldRegistrationInformation",
  /** The ELD Identifier, ELD Registration ID and (if supplied) the certificate value to match a valid ELD registration, but that registration has been revoked for failure to conform to the ELD Final Rule. */
  EldRevoked = "EldRevoked",
  /** The certificate used to sign the S/MIME email or authenticate for connection to the web service has expired. */
  CertificateExpired = "CertificateExpired",
  /** The ELD Registration ID, ELD Identifier or Output File Comment sent in the subject/body of the S/MIME email or as parameters in the web service call do not match those values contained in the ELD output file. */
  ParameterMismatch = "ParameterMismatch",
  /** The ELD Registration Id or ELD Certificate used to submit the ELD Output file are the test values provided by FMCSA. */
  TestInformation = "TestInformation",
  /** Either the email was not signed or it was signed using a certificate not associated with the ELD. */
  UnableToVerifySmimeSignature = "UnableToVerifySmimeSignature",
  /** Either the email was not encrypted or it was not encrypted using the public key certificate provided by FMCSA on the ELD Provider Registration website. */
  UnableToDecryptSmimeMessage = "UnableToDecryptSmimeMessage",
  /** When using email transfer, the subject line of the email did not conform to any of the three formats described in.3.2.3.2. */
  InvalidMessageSubject = "InvalidMessageSubject",
  /** After decrypting the email message, more than one attachment was found. */
  MultipleAttachments = "MultipleAttachments",
  /** After decrypting the email message, no ELD Output File was found as an attachment. */
  NoAttachment = "NoAttachment",
}
