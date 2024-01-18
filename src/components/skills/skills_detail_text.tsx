import { styled } from "@mui/material/styles";

interface SkillsTextProps {
  text: string;
}

const CustomSkillsDetailText = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529",
  textAlign: "left",
  fontFamily: "serif",
  fontSize: 20,
  paddingBottom: 40,
}));

function SkillsDetailText(props: SkillsTextProps) {
  return <CustomSkillsDetailText>{props.text}</CustomSkillsDetailText>;
}

export default SkillsDetailText;
