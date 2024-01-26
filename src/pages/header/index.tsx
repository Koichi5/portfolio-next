import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomIconButton from "@/components/custom_icon_button";
import { ThemeModeButton } from "@/components/theme_mode_button";
import { styled, useTheme } from "@mui/material/styles";
import About from "../about";
import Articles from "../articles";
import Contests from "../contests";
import Skills from "../skills";
import Works from "../works";
import Welcome from "../welcome";
import { useTabContext } from "@/components/tab_context";
import LanguageSwitchButton from "@/components/language_switch_button";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#252529" : "white",
  border:
    theme.palette.mode === "dark" ? "solid grey 0.5px" : "solid #DCDCDC 0.5px",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0px 5px 5px grey[900]"
      : "0px 5px 5px grey[200]",
  borderRadius: "50px",
}));

interface StyledTabsProps {
  children?: React.ReactNode;
  value: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    centered
  />
))(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundImage:
      theme.palette.mode === "dark"
        ? "linear-gradient(90deg, #252529, #2CD4BF, #252529)"
        : "linear-gradient(90deg, white, #2CD4BF, white)",
  },
}));

interface StyledTabProps {
  label: string;
  value: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529",
  height: "30px",
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(10),
  "&.Mui-selected": {
    color: "#2CD4BF",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#2CD4BF",
  },
}));

export default function Header() {
  const { value, setValue } = useTabContext();
  const theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderTabContent = (value: string) => {
    switch (value) {
      case "1":
        return <Welcome />;
      case "2":
        return <About />;
      case "3":
        return <Articles />;
      case "4":
        return <Skills />;
      case "5":
        return <Works />;
      case "6":
        return <Contests />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div style={{ margin: 0 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
          padding: "40px",
        }}
      >
        <CustomIconButton
          backgroundImageUrl="https://lh3.googleusercontent.com/pw/ABLVV87QQxcXbkOrLrpMfPDNL311hkMBlZwcefuWB9lfcvRDEQog3kntHhpGiLAqbeaKFGUY8PCJV2AE6hmOn53vDdtbI0YpcZ1zua67wOuwBc6jSB21H0D36JVpp8ceQmyOxofvls04DaFL6UuOICP2i2ON=w500-h500-s-no-gm?authuser=0"
          onClick={function (): void {
            console.log("icon button clicked");
          }}
        />
        <StyledBox>
          <StyledTabs value={value} onChange={handleChange}>
            <StyledTab label="Home" value="1" />
            <StyledTab label="About" value="2" />
            <StyledTab label="Articles" value="3" />
            <StyledTab label="Skills" value="4" />
            <StyledTab label="Works" value="5" />
            <StyledTab label="Contests" value="6" />
          </StyledTabs>
        </StyledBox>
        <div style={{ display: "flex", alignContent: "center" }}>
          <LanguageSwitchButton />
          <ThemeModeButton />
        </div>
      </div>
      <div>{renderTabContent(value)}</div>
    </div>
  );
}
