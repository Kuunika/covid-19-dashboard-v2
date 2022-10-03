import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DashboardLayout from "../components/dashboard/dashboardLayout";
import { create } from "apisauce";
import { GetStaticProps, GetStaticPropsContext } from "next";
import "mapbox-gl/dist/mapbox-gl.css";
import { DistrictAggregate } from "../interfaces";
import { useContext } from "react";
import {
  DistrictAggregateContext,
  DistrictAggregateContextType,
} from "../contexts/aggregates";

interface IProps {
  districts: DistrictAggregate[];
}

const Home: NextPage<IProps> = ({ districts }) => {
  const { saveAggregate } = useContext(
    DistrictAggregateContext
  ) as DistrictAggregateContextType;

  saveAggregate(districts);
  return <DashboardLayout />;
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
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
};

export default Home;
