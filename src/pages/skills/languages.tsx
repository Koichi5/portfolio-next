import { useEffect, useState } from "react";
import { SkillLanguageProficiency } from "@prisma/client";
import SubTitle from "@/components/sub_title";
import TableItem from "@/components/table_item";
import { Grid } from "@mui/material";
import SkillsProficiencyCard from "@/components/skills/skills_proficiency_card";

const skillsLanguages = [
  {
    id: 1,
    skillName: "Dart",
    skillImagePath: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Dart_logo.png",
    proficiency: 5,
  },
  {
    id: 2,
    skillName: "Swift",
    skillImagePath: "https://cdn.worldvectorlogo.com/logos/swift-15.svg",
    proficiency: 4,
  },
  {
    id: 3,
    skillName: "Python",
    skillImagePath: "https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png",
    proficiency: 3,
  },
  {
    id: 4,
    skillName: "JavaScript",
    skillImagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
    proficiency: 3,
  },
  {
    id: 5,
    skillName: "TypeScript",
    skillImagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    proficiency: 3,
  },
  {
    id: 6,
    skillName: "R",
    skillImagePath: "https://download.logo.wine/logo/R_(programming_language)/R_(programming_language)-Logo.wine.png",
    proficiency: 1,
  },
  {
    id: 7,
    skillName: "Unity",
    skillImagePath: "https://cdn.sanity.io/images/fuvbjjlp/production/bd6440647fa19b1863cd025fa45f8dad98d33181-2000x2000.png",
    proficiency: 1,
  },
];

const SkillsLanguages = () => {
  // const [languages, setLanguages] = useState<SkillLanguageProficiency[]>([]);
  // const [loading, setLoading] = useState(false);

  // const fetchSkillsLanguages = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch("/api/skillLanguageProficiencies");
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setLanguages(data);
  //   } catch (error) {
  //     console.error("Failed to fetch about profiles:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchSkillsLanguages();
  // }, []);

  return (
    <Grid container spacing={2}>
      {skillsLanguages.map((language, index) => (
        <Grid key={language.id} item xs={12} sm={4}>
          <SkillsProficiencyCard
            skillName={language.skillName}
            skillImagePath={language.skillImagePath}
            proficiency={language.proficiency}
          />
        </Grid>
      ))}
    </Grid>
    // <div style={{ paddingBottom: 40 }}>
    //   <SubTitle text={"Languages"} />
    //   <table
    //     style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
    //   >
    //     {languages.map((language) => (
    //       <div key={language.id}>
    //         <TableItem
    //           keyValue={language.name}
    //           Value={
    //             " ★ ".repeat(language.proficiency) +
    //             " ☆ ".repeat(5 - language.proficiency)
    //           }
    //           paddingBetween={230}
    //         />
    //       </div>
    //     ))}
    //   </table>
    // </div>
  );
};

export default SkillsLanguages;
