import * as TABS from "../constants/tabs";

const activeCases: { [key: number]: string } = {
  0: "#B6B6B6",
  1: "#FFEDC1",
  2: "#95DCF4",
  3: "#53CAF2",
  4: "#04ABE3",
  5: "#008EBC",
  6: "#007092",
};

const deaths: { [key: number]: string } = {
  0: "#B6B6B6",
  1: "#FFEDC1",
  2: "#E2A686",
  3: "#DF8D5D",
  4: "#D76422",
  5: "#BA551B",
  6: "#984414",
};

const recovered: { [key: number]: string } = {
  0: "#B6B6B6",
  1: "#DFF3CC",
  2: "#BDEAAA",
  3: "#92E188",
  4: "#66D666",
  5: "#44CB5D",
  6: "#22BF5F",
};
const confirmed: { [key: number]: string } = deaths;

export default {
  [TABS.DEATHS]: deaths,
  [TABS.RECOVERED]: recovered,
  [TABS.CONFIRMED]: confirmed,
  [TABS.ACTIVE_CASES]: activeCases,
};
