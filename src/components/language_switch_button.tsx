import TranslateIcon from "@mui/icons-material/Translate";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { styled, useTheme } from "@mui/material/styles";
import Link from "next/link";

const DarkLanguageIcon = styled(TranslateIcon)(({ theme }) => ({
  strokeWidth: 0.5,
  color: "#2CD4BF",
}));

const LightLanguageIcon = styled(TranslateIcon)(({ theme }) => ({
  strokeWidth: 0.5,
  color: "#252529",
}));

const CustomLanguageLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "inherit",
  }));

export default function LanguageSwitchButton() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ alignSelf: "center" }}>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {theme.palette.mode === "dark" ? (
          <DarkLanguageIcon />
        ) : (
          <LightLanguageIcon />
        )}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <CustomLanguageLink href="/" locale="ja" passHref>
            日本語
          </CustomLanguageLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <CustomLanguageLink href="/" locale="en" passHref>
            English
          </CustomLanguageLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
