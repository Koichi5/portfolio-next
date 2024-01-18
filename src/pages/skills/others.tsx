import { useEffect, useState } from "react";
import { SkillOtherProficiency } from "@prisma/client";
import SubTitle from "@/components/sub_title";
import TableItem from "@/components/table_item";
import { Grid } from "@mui/material";
import SkillsProficiencyCard from "@/components/skills/skills_proficiency_card";

const skillsOthers = [
  {
    id: 1,
    skillName: "Firebase",
    skillImagePath: "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png?hl=ja",
    proficiency: 4,
  },
  {
    id: 2,
    skillName: "GitHub",
    skillImagePath: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    proficiency: 4,
  },
  {
    id: 3,
    skillName: "Slack",
    skillImagePath: "https://i0.wp.com/www.vectorizando.com/wp-content/uploads/2022/04/Slack-logo-vector-11e5bdfc.png?fit=500%2C500&ssl=1",
    proficiency: 4,
  },
  {
    id: 4,
    skillName: "Figma",
    skillImagePath: "https://pbs.twimg.com/profile_images/1549810478154539008/VjgOqYAV_400x400.png",
    proficiency: 3,
  },
  {
    id: 5,
    skillName: "Canva",
    skillImagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png",
    proficiency: 3,
  },
  {
    id: 6,
    skillName: "Blender",
    skillImagePath: "https://cdn.iconscout.com/icon/free/png-256/free-blender-3521310-2944729.png",
    proficiency: 3,
  },
];

const SkillsOthers = () => {
  // const [others, setOthers] = useState<SkillOtherProficiency[]>([]);
  // const [loading, setLoading] = useState(false);

  // const fetchSkillsOthers = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch("/api/skillOtherProficiencies");
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setOthers(data);
  //   } catch (error) {
  //     console.error("Failed to fetch about profiles:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchSkillsOthers();
  // }, []);

  return (
    <Grid container spacing={2}>
    {skillsOthers.map((other, index) => (
      <Grid key={other.id} item xs={12} sm={4}>
        <SkillsProficiencyCard
          skillName={other.skillName}
          skillImagePath={other.skillImagePath}
          proficiency={other.proficiency}
        />
      </Grid>
    ))}
  </Grid>
    // <div style={{ paddingBottom: 40 }}>
    //   <SubTitle text={"Others"} />
    //   <table
    //     style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
    //   >
    //     {others.map((other) => (
    //       <div key={other.id}>
    //         <TableItem
    //           keyValue={other.name}
    //           Value={
    //             " ★ ".repeat(other.proficiency) +
    //             " ☆ ".repeat(5 - other.proficiency)
    //           }
    //           paddingBetween={230}
    //         />
    //       </div>
    //     ))}
    //   </table>
    // </div>
  );
};

export default SkillsOthers;
