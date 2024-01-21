"use client";

import { CustomThemeProvider } from "@/components/theme_context";
import Footer from "@/pages/footer";
import Header from "@/pages/header";
import { TabProvider } from "@/components/tab_context";

function Page() {
  return (
    <CustomThemeProvider>
      <TabProvider>
        <Header />
        {/* <Welcome />
      <Articles />
      <Suspense fallback={<Loading />}>
        <About />
        <Skills />
        <Works />
        <Contests />
      </Suspense> */}
        <Footer />
      </TabProvider>
    </CustomThemeProvider>
  );
}

export default Page;
