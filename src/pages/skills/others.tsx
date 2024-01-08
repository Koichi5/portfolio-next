import { useEffect, useState } from "react";
import { SkillOtherProficiency } from "@prisma/client";
import SubTitle from "@/components/sub_title";
import TableItem from "@/components/table_item";

const SkillsOthers = () => {
  const [others, setOthers] = useState<SkillOtherProficiency[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSkillsOthers = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/skillOtherProficiencies");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setOthers(data);
    } catch (error) {
      console.error("Failed to fetch about profiles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkillsOthers();
  }, []);

  return (
    <div style={{ paddingBottom: 40 }}>
      <SubTitle text={"Others"} />
      <table
        style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
      >
        {others.map((other) => (
          <div key={other.id}>
            <TableItem
              keyValue={other.name}
              Value={
                " ★ ".repeat(other.proficiency) +
                " ☆ ".repeat(5 - other.proficiency)
              }
              paddingBetween={230}
            />
          </div>
        ))}
      </table>
    </div>
  );
};

export default SkillsOthers;
