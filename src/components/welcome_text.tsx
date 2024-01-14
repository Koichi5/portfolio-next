import { styled } from "@mui/material/styles";

interface WelcomeTextProps {
  text: string;
}

const CustomWelcomeText = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529",
  textAlign: "left",
  fontFamily: "serif",
  fontWeight: "bold",
  fontSize: 30,
  paddingTop: 150,
  paddingBottom: 40,
}));

function WelcomeText(props: WelcomeTextProps) {
  return <CustomWelcomeText>{props.text}</CustomWelcomeText>;
}

export default WelcomeText;
