//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Entity } from "../Entity";
import { Device } from "../Device";

/** Log of energy consumed */
export interface EnergySnapshotRecord extends Entity {
  /** Gets or sets the batter level in percentage. Default [0]. */
  batteryLevel: number;
  /** Gets or sets the UTC date and time of the snapshot. */
  dateTime: Date;
  /** Gets or sets the StatusData for the {@link Device} specified. */
  device: Device;
  /** Gets or sets a value indicating whether the current record is waiting for data */
  isWaitingForData: boolean;
  /** Gets or sets the ammount of driving energy in AC charging (kWh). Default [0]. */
  lifetimeBatteryEnergyInAcChargingKwh: number;
  /** Gets or sets the ammount of driving energy in DC charging (kWh). Default [0]. */
  lifetimeBatteryEnergyInDcChargingKwh: number;
  /** Gets or sets the ammount of driving energy out AC charging (kWh). Default [0]. */
  lifetimeBatteryEnergyOutAcChargingKwh: number;
  /** Gets or sets the ammount of driving energy out DC charging (kWh). Default [0]. */
  lifetimeBatteryEnergyOutDcChargingKwh: number;
  /** Gets or sets the amount of driving energy out (kWh). Default [0]. */
  lifetimeDrivingEnergyInKwh: number;
  /** Gets or sets the amount of driving energy out (kWh). Default [0]. */
  lifetimeDrivingEnergyOutKwh: number;
  /** Gets or sets the Distance Driven in Km when Fuel or Energy was used. */
  lifetimeFuelOrEnergyDistanceDrivenKm: number;
  /** Gets or sets the ammount of idling energy in (kWh). Default [0]. */
  lifetimeIdlingEnergyInKwh: number;
  /** Gets or sets the amount of idling energy out (kWh). Default [0]. */
  lifetimeIdlingEnergyOutKwh: number;
  /** Gets or sets the onboard charger energy in AC charging (kwh). Default [0]. */
  lifetimeOnboardChargerEnergyInAcChargingKwh: number;
  /** Gets or sets the onboard charger energy in DC charging (kwh). Default [0]. */
  lifetimeOnBoardChargerEnergyOutAcChargingKwh: number;
  /** Gets or sets the amount of trip energy in (kWh). Default [0]. */
  lifetimeTripEnergyInKwh: number;
  /** Gets or sets the amount of trip energy out (kWh). Default [0]. */
  lifetimeTripEnergyOutkwh: number;
  /** Gets or sets the reason for logging the snapshot. */
  logReason: string;
  /** Gets or sets the max electric vehicle battery power (watts). Default [0]. */
  maxElectricVehicleBatteryPowerW: number;
  /** Gets or sets the max onboard charger AC input power (watts). Default [0]. */
  maxOnboardChargerAcInputPowerW: number;
  /** Gets or sets the max onboard charger voltage (volts). Default [0]. */
  maxOnboardChargerAcInputVoltageV: number;
  /** Gets or sets the max onboard charger DC output power (watts). Default [0]. */
  maxOnboardChargerDcOutputPowerW: number;
}
