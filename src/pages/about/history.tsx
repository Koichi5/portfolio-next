"use client";

import SubTitle from "@/components/material_ui/sub_title";
import TableItem from "@/components/material_ui/table_item";
import { AboutMyHistory } from "@prisma/client";
import { useEffect, useState } from "react";

const AboutMyHistoryTable = () => {
  const [aboutMyHistories, setAboutMyHistories] = useState<AboutMyHistory[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  const fetchAboutMyHistories = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/aboutMyHistories");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAboutMyHistories(data);
    } catch (error) {
      console.error("Failed to fetch about my histories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAboutMyHistories();
  }, []);

  return (
    <div style={{ paddingBottom: 40 }}>
      <SubTitle text={"My History"} />
      <table
        style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
      >
        {aboutMyHistories.map((myHistory) => (
          <div key={myHistory.id}>
            <TableItem
              keyValue={myHistory.date}
              Value={myHistory.value}
              paddingBetween={230}
            />
          </div>
        ))}
      </table>
    </div>
  );
};

export default AboutMyHistoryTable;
