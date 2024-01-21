import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled, useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import About from "../about";
import Articles from "../articles";
import Contests from "../contests";
import Skills from "../skills";
import Welcome from "../welcome";
import Works from "../works";
import { useTabContext } from "@/components/tab_context";

interface FooterStyledTabsProps {
  children?: React.ReactNode;
  value: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const FooterStyledTabs = styled((props: FooterStyledTabsProps) => (
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

interface FooterStyledTabProps {
  label: string;
  value: string;
}

const FooterStyledTab = styled((props: FooterStyledTabProps) => (
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

export default function Footer() {
  const {value, setValue} = useTabContext();
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
    <div>
      <Divider variant="middle" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
          padding: "40px",
        }}
      >
        <div>
          <FooterStyledTabs value={value} onChange={handleChange}>
            <FooterStyledTab label="Home" value="1" />
            <FooterStyledTab label="About" value="2" />
            <FooterStyledTab label="Articles" value="3" />
            <FooterStyledTab label="Skills" value="4" />
            <FooterStyledTab label="Works" value="5" />
            <FooterStyledTab label="Contests" value="6" />
          </FooterStyledTabs>
        </div>
      </div>
    </div>
  );
}
