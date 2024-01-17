import { styled } from "@mui/material/styles";

interface ContestsTextProps {
    text: string;
  }

  const CustomContestsText = styled("div")(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529",
    textAlign: "left",
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 150,
    paddingBottom: 40,
  }));

function ContestsText(props: ContestsTextProps) {
    return <CustomContestsText>{props.text}</CustomContestsText>;
  }

  export default ContestsText;
