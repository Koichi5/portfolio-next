import Title from "@/components/title";
import SkillsLanguages from "./languages";
import SkillsFrameworks from "./frameworks";
import SkillsOthers from "./others";

function Skills() {
  return (
    <div>
      <Title text="SKILLS" />
      <SkillsLanguages />
      <SkillsFrameworks />
      <SkillsOthers />
    </div>
  );
}

export default Skills;
