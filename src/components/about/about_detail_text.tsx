import { styled } from "@mui/material/styles";

interface AboutDetailTextProps {
  text: string;
}

const CustomAboutDetailText = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529",
  textAlign: "left",
  fontFamily: "serif",
  fontSize: 20,
  paddingBottom: 40,
}));

function AboutDetailText(props: AboutDetailTextProps) {
  return <CustomAboutDetailText>{props.text}</CustomAboutDetailText>
}

export default AboutDetailText;
