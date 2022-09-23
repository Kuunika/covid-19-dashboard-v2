import * as TABS from "./tabs";

export const aggregateTabMapping: { [key: string]: string } = {
  [TABS.ACTIVE_CASES]: "numberOfActiveCases",
  [TABS.DEATHS]: "numberOfConfirmedDeaths",
  [TABS.CONFIRMED]: "numberOfConfirmedCases",
  [TABS.RECOVERED]: "numberOfRecoveredPatients",
};
