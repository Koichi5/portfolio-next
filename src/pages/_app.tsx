import "./styles/globals.css";
import type { AppProps } from "next/app";
import { TabProvider } from "@/components/tab_context";
import { CustomThemeProvider } from "@/components/theme_context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <TabProvider>
        <Component {...pageProps} />
      </TabProvider>
    </CustomThemeProvider>
  );
}

export default MyApp;
