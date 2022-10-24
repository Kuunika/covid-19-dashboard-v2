import { createContext, FC, useState } from "react";
import { IDashboard } from "../interfaces";

export type DashboardContextType = {
  dashboards: IDashboard[];
  saveDashboards: (districts: IDashboard[]) => void;
  getDashboard: (id: string) => IDashboard | boolean;
};

export const DashboardContext = createContext<DashboardContextType | null>(
  null
);

const DashboardProvider: FC = ({ children }) => {
  const [dashboards, setDashboards] = useState<IDashboard[]>([]);

  const saveDashboards = (Dashboards: IDashboard[]) =>
    setDashboards(Dashboards);

  const getDashboard = (id: string) => {
    const dashboard = dashboards.find((dash) => dash.id === id);

    return dashboard ? dashboard : false;
  };

  return (
    <DashboardContext.Provider
      value={{ dashboards, saveDashboards, getDashboard }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
