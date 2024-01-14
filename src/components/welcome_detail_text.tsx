import { styled } from "@mui/material/styles";

interface WelcomeTextProps {
  text: string;
}

const CustomWelcomeDetailText = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529",
  textAlign: "left",
  fontFamily: "serif",
  fontSize: 20,
  paddingBottom: 40,
}));

function WelcomeDetailText(props: WelcomeTextProps) {
  return <CustomWelcomeDetailText>{props.text}</CustomWelcomeDetailText>;
}

export default WelcomeDetailText;
