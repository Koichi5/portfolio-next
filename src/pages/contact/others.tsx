"use client";

import SubTitle from "@/components/sub_title";
import TableItem from "@/components/table_item";
import { ContactOthers } from "@prisma/client";
import { useEffect, useState } from "react";

const ContactOthersTable = () => {
  const [others, setOthers] = useState<ContactOthers[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchContactOthers = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/contactOthers");
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
    fetchContactOthers();
  }, []);

  return (
    <div>
      <SubTitle text={"Others"} />
      <table
        style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
      >
        {others.map((other) => (
          <div key={other.id}>
          <TableItem
            keyValue={other.contactName}
            Value={<a href={other.accountUrl} target="_blank"
            rel="noopener noreferrer" style={{color: "black"}}>@{other.accoutName}</a>}
            paddingBetween={150}
          />
          </div>
        ))}
      </table>
    </div>
  );
};

export default ContactOthersTable;
