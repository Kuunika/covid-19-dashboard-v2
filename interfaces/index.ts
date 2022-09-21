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
