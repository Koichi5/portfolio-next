import { styled } from "@mui/material/styles";

interface AboutTitleProps {
  text: string;
}

const CustomAboutTitle = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529",
  textAlign: "left",
  fontFamily: "serif",
  fontWeight: "bold",
  fontSize: 30,
  paddingTop: 40,
  paddingBottom: 40,
}));

function AboutTitle(props: AboutTitleProps) {
    return <CustomAboutTitle>{props.text}</CustomAboutTitle>
}

export default AboutTitle;
