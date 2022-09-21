import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/layout/header";
import Head from "next/head";
import { DistrictAggregateProvider, TabSelectionProvider } from "../contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <TabSelectionProvider>
        <DistrictAggregateProvider>
          <Component {...pageProps} />
        </DistrictAggregateProvider>
      </TabSelectionProvider>
    </>
  );
}

export default MyApp;
