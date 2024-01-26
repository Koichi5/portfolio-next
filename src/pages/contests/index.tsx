import CustomTitle from "@/components/title";
import ContestCardGrid from "./contests_card_grid";
import { useTheme } from "@mui/material/styles";
import CustomSubTitle from "@/components/sub_title";
import { useLocale } from "@/lib/locale/locale";

const Contests = () => {
  const theme = useTheme();
  const { t } = useLocale();

  return (
    <div
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
      }}
    >
      <div style={{ width: "60%", padding: "40px" }}>
        <CustomTitle text={t.CONTESTS_TITLE} />
        <CustomSubTitle text={t.CONTESTS_SUBTITLE} />
      </div>
      <ContestCardGrid />
    </div>
  );
};

export default Contests;
