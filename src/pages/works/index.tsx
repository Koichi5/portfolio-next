import CustomTitle from "@/components/title";
import WorksCardGrid from "./works_card_grid";
import { useTheme } from "@mui/material/styles";
import CustomSubTitle from "@/components/sub_title";
import { useLocale } from "@/lib/locale/locale";

function Works() {
  const theme = useTheme();
  const { t } = useLocale();

  return (
    <div
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
      }}
    >
      <div style={{ width: "60%", padding: "40px" }}>
        <CustomTitle text={t.WORKS_TITLE} />
        <CustomSubTitle text={t.WORKS_SUBTITLE} />
      </div>
      <WorksCardGrid />
    </div>
  );
}

export default Works;
