import "./styles/globals.css";
import type { AppProps } from "next/app";
import { TabProvider } from "@/components/tab_context";
import { CustomThemeProvider } from "@/components/theme_context";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <Head>
        <title>Portfolio</title>
      </Head>
      <TabProvider>
        <Component {...pageProps} />
      </TabProvider>
    </CustomThemeProvider>
  );
}

export default MyApp;
