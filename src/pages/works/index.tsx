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
        <CustomTitle text={"Mobile developer working primarily with Flutter"} />
        <CustomSubTitle
          text={
            "I am a software engineering student from Japan, primarily focused on mobile app development. This portfolio compiles my experiences from internships and contests I have participated in."
          }
        />
      </div>
      <WorksCardGrid />
    </div>
  );
}

export default Works;
