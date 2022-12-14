//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "./Entity";
import { Zone } from "./Zone";
import { Group } from "./Group";
import { GroupZoneMetadataType } from "./GroupZoneMetadataType";

/** The metadata of the relatioship between groups and zones. */
export interface GroupZoneMetadata extends Entity {
  /** Gets or sets value of the metadata. */
  data: number;
  /** Gets or sets the group. */
  group: Group;
  /** Gets or sets the metadata type. */
  metadataType: GroupZoneMetadataType;
  /** Gets or sets the zone. */
  zone: Zone;
}
