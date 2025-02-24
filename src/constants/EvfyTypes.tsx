import { ColorValue } from 'react-native';

export type SnackbarTypes = 'info' | 'error' | 'warn' | 'success' | 'danger';

export type EvfySnackbarStatus = {
  show: boolean,
  message: string,
  type: SnackbarTypes
};

export type EvfyChargerProtocols = 'chademo' | 'ccs1' | 'ccs2' | 'gbt' | 'tesla' | 'gbtSlow' | 'j1772T1' | 'mennekesT2' | 'bs1363' | 'industrialSocket';
export type EvfyCurrentType = 'ac' | 'dc';
export type EvfyChargingType = 'L1' | 'L2' | 'L3';
export type EvfyChargerProtocolType = 'CHAdeMO' | 'CCS1' | 'CCS2' | 'GBT' | 'Tesla' | 'GbtSlow' | 'T1' | 'T2' | 'BS1363' | 'Industrial';

export type EvfyPlugType = {
  id: EvfyChargerProtocols,
  idx: EvfyChargerProtocolType, // hansa temp
  currentType: EvfyCurrentType,
  name: string,
  iconName: string,
  gun: boolean
};

export type EvfyChargerType = {
  reference: string,
  name: string,
  openHours: string,
  longitude: number,
  latitude: number,
  address: string,
  isAvailable: string,
  power: boolean,
  type: EvfyChargingType,
  mobile: string,
  protocol: EvfyChargerProtocolType,
  vendor: number,
  owner: number,
  isExclusive: boolean
};

export type SnackBarConfigReturn = {
  body: ColorValue,
  textColor: ColorValue,
  actionTextColor: ColorValue
};

export type RouteParamList = {
  MyVehicle: {
    //vehicle: EvfyMyVehicleType;
  }
};
