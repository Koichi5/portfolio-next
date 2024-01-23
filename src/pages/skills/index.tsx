import { styled, useTheme } from "@mui/material/styles";
import SkillsLanguages from "./languages";
import SkillsFrameworks from "./frameworks";
import SkillsOthers from "./others";
import Divider from "@mui/material/Divider";
import CustomTitle from "@/components/title";
import CustomSubTitle from "@/components/sub_title";

const CustomDivider = styled(Divider)(({ theme }) => ({
  marginLeft: "50px",
  backgroundColor: theme.palette.mode === "dark" ? "grey" : "#DCDCDC",
}));

const CustomSkillTitle = styled("p")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "grey" : "#A1A1AA",
  paddingBottom: "20px",
}));

const CustomSkillWrapper = styled("div")(() => ({
  padding: " 20px 40px 40px 40px",
}));

function Skills() {
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
      }}
    >
      <div style={{ width: "60%", padding: "40px" }}>
        <CustomTitle text={"My Skills and Proficiency"} />
        <CustomSubTitle
          text={
            "A comprehensive overview of my skills in mobile app development, specializing in Flutter and Swift, alongside my capabilities in web development and Python implementation. "
          }
        />
      </div>
      <div style={{ display: "flex", paddingBottom: "40px" }}>
        <CustomDivider orientation="vertical" variant="middle" flexItem />
        <CustomSkillWrapper>
          <CustomSkillTitle>Languages</CustomSkillTitle>
          <SkillsLanguages />
        </CustomSkillWrapper>
      </div>
      <div style={{ display: "flex", paddingBottom: "40px" }}>
        <CustomDivider orientation="vertical" variant="middle" flexItem />
        <CustomSkillWrapper>
          <CustomSkillTitle>Frameworks</CustomSkillTitle>
          <SkillsFrameworks />
        </CustomSkillWrapper>
      </div>
      <div style={{ display: "flex", paddingBottom: "40px" }}>
        <CustomDivider orientation="vertical" variant="middle" flexItem />
        <CustomSkillWrapper>
          <CustomSkillTitle>Others</CustomSkillTitle>
          <SkillsOthers />
        </CustomSkillWrapper>
      </div>
    </div>
  );
}

export default Skills;
