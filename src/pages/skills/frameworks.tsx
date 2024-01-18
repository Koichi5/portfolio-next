import { useEffect, useState } from "react";
import { SkillFrameworkProficiency } from "@prisma/client";
import SubTitle from "@/components/sub_title";
import TableItem from "@/components/table_item";
import { Grid } from "@mui/material";
import SkillsProficiencyCard from "@/components/skills/skills_proficiency_card";

const skillsFrameworks = [
  {
    id: 1,
    skillName: "Flutter",
    skillImagePath:
      "https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg",
    proficiency: 5,
  },
  {
    id: 2,
    skillName: "SwiftUI",
    skillImagePath: "https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png",
    proficiency: 4,
  },
  {
    id: 3,
    skillName: "Reality Composer Pro",
    skillImagePath:
      "https://developer.apple.com/assets/elements/icons/reality-composer-pro/reality-composer-pro-96x96_2x.png",
    proficiency: 2,
  },
  {
    id: 4,
    skillName: "ARKit",
    skillImagePath:
      "https://developer.apple.com/assets/elements/icons/arkit/arkit-128x128_2x.png",
    proficiency: 2,
  },
  {
    id: 5,
    skillName: "UIKit",
    skillImagePath:
      "https://img.stackshare.io/service/1107/2247444e82685c05034fc296fc331472.png",
    proficiency: 2,
  },
  {
    id: 6,
    skillName: "React",
    skillImagePath: "https://upload.wikimedia.org/wikipedia/commons/archive/a/a7/20220125121206%21React-icon.svg",
    proficiency: 3,
  },
  {
    id: 7,
    skillName: "Numpy",
    skillImagePath: "https://cdn.worldvectorlogo.com/logos/numpy-1.svg",
    proficiency: 2,
  },
  {
    id: 8,
    skillName: "Pandas",
    skillImagePath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/1200px-Pandas_mark.svg.png",
    proficiency: 2,
  },
  {
    id: 9,
    skillName: "TensorFlow",
    skillImagePath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png",
    proficiency: 2,
  },
];

const SkillsFrameworks = () => {
  // const [frameworks, setFrameworks] = useState<SkillFrameworkProficiency[]>([]);
  // const [loading, setLoading] = useState(false);

  // const fetchSkillsFrameworks = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch("/api/skillFrameworkProficiencies");
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setFrameworks(data);
  //   } catch (error) {
  //     console.error("Failed to fetch about profiles:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchSkillsFrameworks();
  // }, []);

  return (
    <Grid container spacing={2}>
      {skillsFrameworks.map((framework, index) => (
        <Grid key={framework.id} item xs={12} sm={4}>
          <SkillsProficiencyCard
            skillName={framework.skillName}
            skillImagePath={framework.skillImagePath}
            proficiency={framework.proficiency}
          />
        </Grid>
      ))}
    </Grid>
    // <div style={{ paddingBottom: 40 }}>
    //   <SubTitle text={"Frameworks & Libraries"} />
    //   <table
    //     style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
    //   >
    //     {frameworks.map((framework) => (
    //       <div key={framework.id}>
    //         <TableItem
    //           keyValue={framework.name}
    //           Value={
    //             " ★ ".repeat(framework.proficiency) +
    //             " ☆ ".repeat(5 - framework.proficiency)
    //           }
    //           paddingBetween={230}
    //         />
    //       </div>
    //     ))}
    //   </table>
    // </div>
  );
};

export default SkillsFrameworks;
