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
          text={"Showcase of Hackathons and Plan Contests"}
        />
        <CustomSubTitle
          text={
            "I have participated in hackathons and business plan contests, winning awards in some of them. Below is a summary of these experiences."
          }
        />
      </div>
      <ContestCardGrid />
    </div>
  );
};

export default Contests;
