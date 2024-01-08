"use client";
import Welcome from "@/pages/welcome/welcome";
import About from "@/pages/about/about";
import Skills from "@/pages/skills/skills";
import Contact from "@/pages/contact/contact";
import Works from "@/pages/works/works";
import Contests from "@/pages/contest/contest";
import Header from "@/pages/header/header";

function Home() {
  return (
    <div style={{padding: 50}}>
      <Header />
      <Welcome />
      <About />
      <Skills />
      <Works />
      <Contests />
      <Contact />
    </div>
  );
}

export default Home;
