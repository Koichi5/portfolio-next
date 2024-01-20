import { styled, useTheme } from "@mui/material/styles";
import SkillsLanguages from "./languages";
import SkillsFrameworks from "./frameworks";
import SkillsOthers from "./others";
import SkillsText from "@/components/skills/skills_text";
import SkillsDetailText from "@/components/skills/skills_detail_text";
import Divider from "@mui/material/Divider";

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
        <SkillsText text={"Mobile developer working primarily with Flutter"} />
        <SkillsDetailText
          text={
            "I am a software engineering student from Japan, primarily focused on mobile app development. This portfolio compiles my experiences from internships and contests I have participated in."
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
