import * as TABS from "./tabs";
const activeCases = [
  {
    lower: 0,
    upper: 0,
  },
  {
    lower: 1,
    upper: 9,
  },
  {
    lower: 10,
    upper: 29,
  },
  {
    lower: 30,
    upper: 49,
  },
  {
    lower: 50,
    upper: 79,
  },
  {
    lower: 80,
    upper: 99,
  },
  {
    lower: 100,
    upper: 100000000000000,
  },
];

const deaths = activeCases;

const recovered = [
  {
    lower: 0,
    upper: 0,
  },
  {
    lower: 1,
    upper: 400,
  },
  {
    lower: 500,
    upper: 999,
  },
  {
    lower: 1000,
    upper: 1499,
  },
  {
    lower: 1500,
    upper: 1999,
  },
  {
    lower: 2000,
    upper: 2499,
  },
  {
    lower: 2500,
    upper: 100000000000000,
  },
];

const confirmed = recovered;

export default {
  [TABS.RECOVERED]: recovered,
  [TABS.CONFIRMED]: confirmed,
  [TABS.ACTIVE_CASES]: activeCases,
  [TABS.DEATHS]: deaths,
};
