import CustomTitle from "@/components/title";
import WorksCardGrid from "./works_card_grid";
import { useTheme } from "@mui/material/styles";
import CustomSubTitle from "@/components/sub_title";

function Works() {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
      }}
    >
      <div style={{ width: "60%", padding: "40px" }}>
        <CustomTitle text={"My Journey as a Mobile Engineer: Internships and Development Experience"} />
        <CustomSubTitle
          text={
            "I have primarily gained experience in team development using Flutter at several companies, and in personal projects, I have developed using Flutter and Swift. Below, I have compiled a list of the applications I've released and my internship experiences."
          }
        />
      </div>
      <WorksCardGrid />
    </div>
  );
}

export default Works;
