export type Point = {
  latitude: number;
  longitude: number;
};

export type DistrictAggregate = {
  districtGeolocation: { lat: null; lng: null };
  districtName: string;
  numberOutcomeUnderInvestigation: number;
  numberOfLostToFollowUp: number;
  numberOfConfirmedCases: number;
  numberOfActiveCases: number;
  numberOfConfirmedDeaths: number;
  numberOfRecoveredPatients: number;
  numberOfSuspectedCases: number;
};

export type IScale = {
  lower: number;
  upper: number;
};

export type IColor = { [key: number]: string };

export type ITabs = "activeCases" | "deaths";

export type IMobileStats = {
  title: string;
  value: string | number;
  subTitle?: string;
};

export type IDosageIndicator = {
  dosageNumber: number | string;
  vaccineName: string;
  manufacture: string;
  type: string;
  batchNumber: string;
  vaccinationSite: string;
  vaccinationDate: Date;
  expirationDate: Date;
};

export type ICertificate = {
  signature: string;
  firstname: string;
  lastname: string;
  birthdate: Date;
  epiNo: string;
  updatedAt: Date;
  createdAt: Date;
  dosageIndicators: IDosageIndicator[];
};

export type IDashboard = {
  dashboard_name: string;
  dashboard_url: string;
  id: string;
};

export type IAuth = {
  isAuthenticated: boolean;
  storeToken: (token: string) => void;
  deleteToken: () => void;
};
