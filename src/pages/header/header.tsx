// import * as React from 'react';
// import { styled } from "@mui/material/styles";
// import { Tabs } from '@mui/base/Tabs';
// import { TabsList as BaseTabsList } from '@mui/base/TabsList';
// import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
// import { buttonClasses } from '@mui/base/Button';
// import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
// import { ThemeModeButton } from '@/components/theme_mode_button';
// import { Box, Button } from '@mui/material';

import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "@mui/material/styles/styled";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    centered
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#2CD4BF",
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  height: "30px",
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(10),
  // marginRight: theme.spacing(1),
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#2CD4BF",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#2CD4BF",
  },
}));

export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ bgcolor: "#252529", borderRadius: "50px" }}>
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="HOME"></StyledTab>
          <StyledTab label="ABOUT"></StyledTab>
          <StyledTab label="SKILLS"></StyledTab>
          <StyledTab label="WORKS"></StyledTab>
          <StyledTab label="CONTESTS"></StyledTab>
          <StyledTab label="CONTACT"></StyledTab>
        </StyledTabs>
      </Box>
    </div>
  );
}

// function Header() {
//   return (
//     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//     <Tabs defaultValue={0}>
//       <TabsList>
// <Tab value={0}>HOME</Tab>
// <Tab value={1}>ABOUT</Tab>
// <Tab value={2}>SKILLS</Tab>
// <Tab value={3} >WORKS</Tab>
// <Tab value={4} >CONTESTS</Tab>
// <Tab value={5} >CONTACT</Tab>
//         <ThemeModeButton />
//       </TabsList>
//       <TabPanel value={0}>HOME</TabPanel>
//         <TabPanel value={1}>ABOUT</TabPanel>
//         <TabPanel value={2}>SKILLS</TabPanel>
//         <TabPanel value={3} >WORKS</TabPanel>
//         <TabPanel value={4} >CONTESTS</TabPanel>
//         <TabPanel value={5} >CONTACT</TabPanel>
//     </Tabs>
//     </Box>
//   );
// }

// const grey = {
//   50: '#F3F6F9',
//   100: '#E5EAF2',
//   200: '#DAE2ED',
//   300: '#C7D0DD',
//   400: '#B0B8C4',
//   500: '#9DA8B7',
//   600: '#6B7A90',
//   700: '#434D5B',
//   800: '#303740',
//   900: '#1C2025',
// };

// const Tab = styled(BaseTab)`
// variant="text"
//   font-family: 'IBM Plex Sans', sans-serif;
//   cursor: pointer;
//   // font-size: 0.875rem;
//   // font-weight: 600;
//   background-color: transparent;
//   width: 100%;
//   padding: 10px 12px;
//   margin: 6px;
//   border-bottom: 0.25rem solid green;
//   // border-radius: 50px;
//   display: flex;
//   justify-content: center;

//   // &:hover {
//   //   color: green;
//   // }

//   // &:focus {
//   //   color: #fff;
//   //   outline: 3px solid green};
//   // }

//   &.${tabClasses.selected} {
//     color: green;
//   }

//   &.${buttonClasses.disabled} {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// const TabPanel = styled(BaseTabPanel)(
//   ({ theme }) => `
//   width: 100%;
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-size: 0.875rem;
//   padding: 20px 12px;
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//   border-radius: 12px;
//   opacity: 0.6;
//   `,
// );

// const TabsList = styled(BaseTabsList)(
//   ({ theme }) => `
//   min-width: 400px;
//   background-color: #252529;
//   border-radius: 50px;
//   margin-bottom: 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   align-content: space-between;
//   // box-shadow: 0px 5px 5px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
//   `,
// );

// // function Header() {
// //   return (
// //     <CustomHeaderRootDiv>
// //       <AppBar position="static" color="transparent">
// //         <Toolbar>
// //           {/* <CustomHeaderTitle>
// //             <p color="inherit">Koichi&apos;s Portfolio</p>
// //           </CustomHeaderTitle> */}
// //           <Button>
// //             <a href="#">HOME</a>
// //           </Button>
// //           <Button>
// //             <a href="#about">ABOUT</a>
// //           </Button>
// //           <Button>
// //             <a href="#skills">SKILLS</a>
// //           </Button>
// //           <Button>
// //             <a href="#works">WORKS</a>
// //           </Button>
// //           <Button>
// //             <a href="#contests">CONTESTS</a>
// //           </Button>
// //           <Button>
// //             <a href="#contact">CONTACT</a>
// //           </Button>
// //           <ThemeModeButton />
// //         </Toolbar>
// //       </AppBar>
// //     </CustomHeaderRootDiv>
// //   );
// // }

// export default Header;
