"use client";
import Welcome from "@/pages/welcome/welcome";
import About from "@/pages/about/about";
import Skills from "@/pages/skills/skills";
import Contact from "@/pages/contact/contact";
import Works from "@/pages/works/works";
import Contests from "@/pages/contest/contest";
import Header from "@/pages/header/header";
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";
import Loading from "@/app/loading";

function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div style={{ padding: 50 }}>
        <Header />
        <Welcome />
        <Suspense fallback={<Loading />}>
          <About />
          <Skills />
          <Works />
          <Contests />
          <Contact />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default Home;
