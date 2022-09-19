import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DashboardLayout from "../components/dashboard/dashboardLayout";
import { create } from "apisauce";
import { GetStaticProps, GetStaticPropsContext } from "next";
import "mapbox-gl/dist/mapbox-gl.css";

interface IProps {
  districts: any;
}

const Home: NextPage = ({ districts }) => {
  console.log(districts);
  return <DashboardLayout />;
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const api = create({ baseURL: "https://covid19.health.gov.mw/api" });
  const response = await api.get<{ districts: any }>("districts/aggregates");
  let districts = [];
  if (response.ok) districts = response.data?.districts;

  return {
    props: { districts },
    revalidate: 10,
  };
};

export default Home;
