import { createContext, FC, ReactNode, useState } from "react";
import { DistrictAggregate } from "../interfaces";

export type DistrictAggregateContextType = {
  districtsAggregates: DistrictAggregate[];
  saveAggregate: (districts: DistrictAggregate[]) => void;
};

export const DistrictAggregateContext =
  createContext<DistrictAggregateContextType | null>(null);

const DistrictAggregateProvider: FC = ({ children }) => {
  const [districtsAggregates, setDistrictAggregate] = useState<
    DistrictAggregate[]
  >([]);

  const saveAggregate = (districtAggregates: DistrictAggregate[]) =>
    setDistrictAggregate(districtAggregates);

  return (
    <DistrictAggregateContext.Provider
      value={{ districtsAggregates, saveAggregate }}
    >
      {children}
    </DistrictAggregateContext.Provider>
  );
};

export default DistrictAggregateProvider;
