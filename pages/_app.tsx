import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/layout/header";
import Head from "next/head";
import {
  DashboardProvider,
  DistrictAggregateProvider,
  TabSelectionProvider,
} from "../contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DashboardProvider>
        <TabSelectionProvider>
          <DistrictAggregateProvider>
            <Header />
            <Component {...pageProps} />
          </DistrictAggregateProvider>
        </TabSelectionProvider>
      </DashboardProvider>
    </>
  );
}

export default MyApp;
