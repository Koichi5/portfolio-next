import CustomSubTitle from "@/components/sub_title";
import CustomTitle from "@/components/title";
import WelcomeImageGrid from "@/components/welcome/welcome_image_row";
import { useLocale } from "@/lib/locale/locale";
import { useTheme } from "@mui/material/styles";

function Welcome() {
  const theme = useTheme();
  const { t } = useLocale();

  return (
    <div
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
      }}
    >
      <div style={{ width: "60%", padding: "40px" }}>
        <CustomTitle text={t.WELCOME_TITLE} />
        <CustomSubTitle text={t.WELCOME_SUBTITLE} />
      </div>
      <WelcomeImageGrid />
    </div>
  );
}

export default Welcome;
