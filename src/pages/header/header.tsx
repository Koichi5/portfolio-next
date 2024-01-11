import { ThemeModeButton } from "@/components/theme_mode_button";
import { AppBar, Button, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomHeaderRootDiv = styled("div")(({ theme }) => ({
  flexGrow: 1,
}));

const CustomHeaderTitle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  textAlign: "left",
  fontWeight: "bold",
}));

function Header() {
  return (
    <CustomHeaderRootDiv>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <CustomHeaderTitle>
            <p color="inherit">Koichi&apos;s Portfolio</p>
          </CustomHeaderTitle>
          <Button>
            <a href="#">HOME</a>
          </Button>
          <Button>
            <a href="#about">ABOUT</a>
          </Button>
          <Button>
            <a href="#skills">SKILLS</a>
          </Button>
          <Button>
            <a href="#works">WORKS</a>
          </Button>
          <Button>
            <a href="#contests">CONTESTS</a>
          </Button>
          <Button>
            <a href="#contact">CONTACT</a>
          </Button>
          <ThemeModeButton />
        </Toolbar>
      </AppBar>
    </CustomHeaderRootDiv>
  );
}

export default Header;
