import WorksText from "@/components/works/works_text";
import WorksCardGrid from "./works_card_grid";
import { useTheme } from "@mui/material/styles";
import WorksDetailText from "@/components/works/works_detail_text";
import Header from "../header";
import Footer from "../footer";

function Works() {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
      }}
    >
      <Header />
      <div style={{ width: "60%", padding: "40px" }}>
        <WorksText text={"Mobile developer working primarily with Flutter"} />
        <WorksDetailText
          text={
            "I am a software engineering student from Japan, primarily focused on mobile app development. This portfolio compiles my experiences from internships and contests I have participated in."
          }
        />
      </div>
      <WorksCardGrid />
      <Footer />
    </div>
  );
}

export default Works;
