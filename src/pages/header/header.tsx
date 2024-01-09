// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//     textAlign: "left",
//     fontWeight: "bold",
//   },
//   button: {
// marginLeft: theme.spacing(1),
// "&:focus": {
//   outline: "none",
// },
// "&:active": {
//   boxShadow: "none",
// },
//   },
// }));

const CustomHeaderRootDiv = styled("div")(({ theme }) => ({
  flexGrow: 1,
}));

const CustomHeaderTitle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  textAlign: "left",
  fontWeight: "bold",
}));

const CustomHeaderButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  "&:focus": {
    outline: "none",
  },
  "&:active": {
    boxShadow: "none",
  },
}));

import { ThemeModeButton } from "@/components/theme_mode_button";
import { AppBar, Button, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

function Header() {
  //   const classes = useStyles();
  return (
    <CustomHeaderRootDiv>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <CustomHeaderTitle>
            <p color="inherit">Koichi's Portfolio</p>
          </CustomHeaderTitle>
          <CustomHeaderButton>
          <a href="#">HOME</a>
          </CustomHeaderButton>
          <CustomHeaderButton>
            <a href="#about">ABOUT</a>
          </CustomHeaderButton>
          <CustomHeaderButton>
            <a href="#skills">SKILLS</a>
          </CustomHeaderButton>
          <CustomHeaderButton>
            <a href="#works">WORKS</a>
          </CustomHeaderButton>
          <CustomHeaderButton>
            <a href="#contests">CONTESTS</a>
          </CustomHeaderButton>
          <CustomHeaderButton>
            <a href="#contact">CONTACT</a>
          </CustomHeaderButton>
          <ThemeModeButton />
        </Toolbar>
      </AppBar>
    </CustomHeaderRootDiv>
  );
}

export default Header;
