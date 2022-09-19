export interface Point {
  latitude: number;
  longitude: number;
}

export interface DistrictAggregate {
  districtGeolocation: { lat: null; lng: null };
  districtName: string;
  numberOutcomeUnderInvestigation: number;
  numberOfLostToFollowUp: number;
  numberOfConfirmedCases: number;
  numberOfActiveCases: number;
  numberOfConfirmedDeaths: number;
  numberOfRecoveredPatients: number;
  numberOfSuspectedCases: number;
}
