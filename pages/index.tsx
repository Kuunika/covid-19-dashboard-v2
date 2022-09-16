import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DashboardLayout from "../components/dashboard/dashboardLayout";
import DataCell from "../components/dashboard/dataCell";
import DataCellContainer from "../components/dashboard/dataCellContainer";

const Home: NextPage = () => {
  return <DashboardLayout />;
};

export default Home;
