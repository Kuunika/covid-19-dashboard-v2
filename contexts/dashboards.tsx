import { createContext, FC, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { IAuth, IDashboard } from "../interfaces";

export type DashboardContextType = {
  dashboards: IDashboard[];
  saveDashboards: (dashboards: IDashboard[]) => void;
  getDashboard: (id: string) => IDashboard | undefined;
  auth: IAuth;
};

export const DashboardContext = createContext<DashboardContextType | null>(
  null
);

const DashboardProvider: FC = ({ children }) => {
  const [dashboards, setDashboards] = useState<IDashboard[]>([]);
  const [authenticated, setAuthenticated] = useState(false);
  const auth = useAuth();

  const saveDashboards = (dashs: IDashboard[]) => {
    setDashboards(dashs);
    console.log(dashboards);
  };

  const getDashboard = (id: string): IDashboard | undefined => {
    const dashboard = dashboards.find((dash) => dash.id === id);

    return dashboard;
  };

  return (
    <DashboardContext.Provider
      value={{ dashboards, saveDashboards, getDashboard, auth }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
