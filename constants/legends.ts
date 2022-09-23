import * as TABS from "./tabs";
const deaths: { [key: number]: string } = {
  0: "0",
  1: "1-9",
  2: "10-29",
  3: "30-49",
  4: "50-79",
  5: "80-99",
  6: ">100",
};

const recovered: { [key: number]: string } = {
  0: "0",
  1: "1-499",
  2: "500-999",
  3: "1000-1499",
  4: "1500-1999",
  5: "2000-2499",
  6: ">2500",
};
const confirmed: { [key: number]: string } = {
  0: "0",
  1: "1-499",
  2: "500-999",
  3: "1000-1499",
  4: "1500-1999",
  5: "2000-2499",
  6: ">2500",
};
const activeCases: { [key: number]: string } = {
  0: "0",
  1: "1-9",
  2: "10-29",
  3: "30-49",
  4: "50-79",
  5: "80-99",
  6: ">100",
};

export default {
  [TABS.DEATHS]: deaths,
  [TABS.RECOVERED]: recovered,
  [TABS.CONFIRMED]: confirmed,
  [TABS.ACTIVE_CASES]: activeCases,
};
