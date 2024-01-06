import { styled } from "@mui/material";

interface TitleProps {
  text: string;
}

const CustomTitle = styled("span")(({ theme }) => ({
  fontFamily: "Chogokuboso-Gothic",
  fontSize: "0.6rem",
  borderBottom: "1px solid rgba(32, 36, 53, 0.741)",
  textDecorationColor: "#FFFFFF",
  paddingBottom: "1.0rem",
  letterSpacing: "0.2rem",
}));

function Title(props: TitleProps) {
  return (
    <div style={{ paddingTop: 40, paddingBottom: 40 }}>
      <h1 style={{ textAlign: "left" }}>
        <CustomTitle>{props.text}</CustomTitle>
      </h1>
    </div>
  );
}

export default Title;
