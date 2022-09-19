import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/layout/header";
import Head from "next/head";
import DistrictAggregateProvider from "../contexts/aggregates";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <DistrictAggregateProvider>
        <Component {...pageProps} />
      </DistrictAggregateProvider>
    </>
  );
}

export default MyApp;
