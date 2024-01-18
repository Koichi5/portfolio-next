import { styled } from "@mui/material/styles";

interface SkillsTextProps {
    text: string;
  }

  const CustomSkillsText = styled("div")(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529",
    textAlign: "left",
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 150,
    paddingBottom: 40,
  }));

function SkillsText(props: SkillsTextProps) {
    return <CustomSkillsText>{props.text}</CustomSkillsText>;
  }

  export default SkillsText;
