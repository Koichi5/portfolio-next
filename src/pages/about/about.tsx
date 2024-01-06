import Title from "@/components/title";
import AboutMyHistoryTable from "./history";
import AboutProfileTable from "./profile";

function About() {
  return (
    <div>
      <Title text="ABOUT" />
      <AboutProfileTable />
      <AboutMyHistoryTable />
    </div>
  );
}

export default About;
