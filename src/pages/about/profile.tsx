"use client";

import SubTitle from "@/components/sub_title";
import TableItem from "@/components/table_item";
import { AboutProfile } from "@prisma/client";
import { useEffect, useState } from "react";

const AboutProfileTable = () => {
  const [aboutProfiles, setAboutProfiles] = useState<AboutProfile[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAboutProfiles = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/aboutProfiles");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAboutProfiles(data);
    } catch (error) {
      console.error("Failed to fetch about profiles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAboutProfiles();
  }, []);

  return (
    <div>
      <SubTitle text={"Profile"} />
      <table
        style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
      >
        {aboutProfiles.map((profile) => (
          <div key={profile.id}>
          <TableItem
            keyValue={profile.name}
            Value={profile.value}
            paddingBetween={230}
          />
          </div>
        ))}
      </table>
    </div>
  );
};

export default AboutProfileTable;
