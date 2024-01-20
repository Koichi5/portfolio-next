import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";

interface FooterStyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
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
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
            <FooterStyledTab label="HOME"></FooterStyledTab>
            <FooterStyledTab label="ABOUT"></FooterStyledTab>
            <FooterStyledTab label="SKILLS"></FooterStyledTab>
            <FooterStyledTab label="WORKS"></FooterStyledTab>
            <FooterStyledTab label="CONTESTS"></FooterStyledTab>
            <FooterStyledTab label="CONTACT"></FooterStyledTab>
          </FooterStyledTabs>
        </div>
      </div>
    </div>
  );
}
