import { styled } from "@mui/material/styles";

interface WorksTextProps {
    text: string;
  }

  const CustomWorksText = styled("div")(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529",
    textAlign: "left",
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 150,
    paddingBottom: 40,
  }));

function WorksText(props: WorksTextProps) {
    return <CustomWorksText>{props.text}</CustomWorksText>;
  }

  export default WorksText;
