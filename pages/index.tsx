import type { NextPage } from "next";

import DashboardLayout from "../components/dashboard/dashboardLayout";
import { create } from "apisauce";
import { GetStaticProps, GetStaticPropsContext } from "next";
import "mapbox-gl/dist/mapbox-gl.css";
import { DistrictAggregate } from "../interfaces";
import { useContext, useEffect } from "react";
import {
  DistrictAggregateContext,
  DistrictAggregateContextType,
} from "../contexts/aggregates";
import { DashboardContext, DashboardContextType } from "../contexts/dashboards";
import { fetchDashboards } from "../services/api";

interface IProps {
  districts: DistrictAggregate[];
}

const Home: NextPage<IProps> = ({ districts }) => {
  const { saveAggregate } = useContext(
    DistrictAggregateContext
  ) as DistrictAggregateContextType;

  const { dashboards, auth, saveDashboards } = useContext(
    DashboardContext
  ) as DashboardContextType;

  useEffect(() => {
    if (dashboards.length === 0 && Boolean(auth.getToken())) {
      (async () => {
        const dash = await fetchDashboards(auth.getToken());
        saveDashboards(dash);
      })();
    }
  }, []);

  saveAggregate(districts);
  return <DashboardLayout />;
};

export async function getStaticProps() {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const api = create({ baseURL: "https://covid19.health.gov.mw/api" });
  const response = await api.get<{ districts: DistrictAggregate[] }>(
    "districts/aggregates"
  );
  let districts: DistrictAggregate[] | undefined = [];
  if (response.ok) districts = response.data?.districts;

  return {
    props: { districts },
    revalidate: 10,
  };
}

export default Home;
