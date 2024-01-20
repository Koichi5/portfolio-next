import WelcomeDetailText from "@/components/welcome/welcome_detail_text";
import WelcomeImageGrid from "@/components/welcome/welcome_image_row";
import WelcomeText from "@/components/welcome/welcome_text";
import { useTheme } from "@mui/material/styles";
import Header from "../header";
import Footer from "../footer";

function Welcome() {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
      }}
    >
      <Header />
      <div style={{ width: "60%", padding: "40px" }}>
        <WelcomeText text={"Mobile developer working primarily with Flutter"} />
        <WelcomeDetailText text="I am a software engineering student from Japan, primarily focused on mobile app development. This portfolio compiles my experiences from internships and contests I have participated in." />
      </div>
      <WelcomeImageGrid />
      <Footer />
    </div>
  );
}

export default Welcome;