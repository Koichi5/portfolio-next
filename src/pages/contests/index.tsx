import ContestCardGrid from "./contests_card_grid";
import { useTheme } from "@mui/material/styles";
import ContestsText from "@/components/contests/contests_text";
import ContestsDetailText from "@/components/contests/contests_detail_text";
import Header from "../header";
import Footer from "../footer";

const Contests = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
      }}
    >
      <Header />
      <div style={{ width: "60%", padding: "40px" }}>
        <ContestsText
          text={"Mobile developer working primarily with Flutter"}
        />
        <ContestsDetailText
          text={
            "I am a software engineering student from Japan, primarily focused on mobile app development. This portfolio compiles my experiences from internships and contests I have participated in."
          }
        />
      </div>
      <ContestCardGrid />
      <Footer />
    </div>
  );
};

export default Contests;
