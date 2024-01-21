import CustomTitle from "@/components/title";
import ContestCardGrid from "./contests_card_grid";
import { useTheme } from "@mui/material/styles";
import CustomSubTitle from "@/components/sub_title";

const Contests = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
      }}
    >
      <div style={{ width: "60%", padding: "40px" }}>
        <CustomTitle
          text={"Mobile developer working primarily with Flutter"}
        />
        <CustomSubTitle
          text={
            "I am a software engineering student from Japan, primarily focused on mobile app development. This portfolio compiles my experiences from internships and contests I have participated in."
          }
        />
      </div>
      <ContestCardGrid />
    </div>
  );
};

export default Contests;
