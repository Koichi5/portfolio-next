import { useEffect, useState } from "react";
import { SkillFrameworkProficiency } from "@prisma/client";
import SubTitle from "@/components/material_ui/sub_title";
import TableItem from "@/components/material_ui/table_item";

const SkillsFrameworks = () => {
  const [frameworks, setFrameworks] = useState<SkillFrameworkProficiency[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSkillsFrameworks = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/skillFrameworkProficiencies");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFrameworks(data);
    } catch (error) {
      console.error("Failed to fetch about profiles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkillsFrameworks();
  }, []);

  return (
    <div style={{ paddingBottom: 40 }}>
      <SubTitle text={"Frameworks & Libraries"} />
      <table
        style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
      >
        {frameworks.map((framework) => (
          <div key={framework.id}>
            <TableItem
              keyValue={framework.name}
              Value={
                " ★ ".repeat(framework.proficiency) +
                " ☆ ".repeat(5 - framework.proficiency)
              }
              paddingBetween={230}
            />
          </div>
        ))}
      </table>
    </div>
  );
};

export default SkillsFrameworks;
