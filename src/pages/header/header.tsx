import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "@mui/material/styles/styled";
import CustomIconButton from "@/components/custom_icon_button";
import { ThemeModeButton } from "@/components/theme_mode_button";
import { useTheme } from "@mui/material/styles";

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
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
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
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
        padding: "40px"
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
          <StyledTab label="HOME"></StyledTab>
          <StyledTab label="ABOUT"></StyledTab>
          <StyledTab label="SKILLS"></StyledTab>
          <StyledTab label="WORKS"></StyledTab>
          <StyledTab label="CONTESTS"></StyledTab>
          <StyledTab label="CONTACT"></StyledTab>
        </StyledTabs>
      </StyledBox>
      <ThemeModeButton />
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
