[@fairfleet/geotab](../README.md) / UserWelcomeEmailStatusSearch

# Interface: UserWelcomeEmailStatusSearch

The object used to specify the search criteria for finding [User](User.md)
 based on their welcome email and verification status.
 An OR condition is applied between the criteria, meaning any of the status parameters can match.

## Table of contents

### Properties

- [verificationPending](UserWelcomeEmailStatusSearch.md#verificationpending)
- [welcomeEmailNotSent](UserWelcomeEmailStatusSearch.md#welcomeemailnotsent)

## Properties

### verificationPending

• **verificationPending**: `boolean`

Gets or sets search for Users who have been sent a welcome email but not verified yet.

#### Defined in

[src/types/Checkmate/ObjectModel/UserWelcomeEmailStatusSearch.ts:12](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UserWelcomeEmailStatusSearch.ts#L12)

___

### welcomeEmailNotSent

• **welcomeEmailNotSent**: `boolean`

Gets or sets search for Users who have not been sent a welcome email.

#### Defined in

[src/types/Checkmate/ObjectModel/UserWelcomeEmailStatusSearch.ts:14](https://github.com/fairfleet/geotab/blob/1ee4732/src/types/Checkmate/ObjectModel/UserWelcomeEmailStatusSearch.ts#L14)
