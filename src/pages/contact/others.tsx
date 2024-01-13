"use client";

import SubTitle from "@/components/material_ui/sub_title";
import TableItem from "@/components/material_ui/table_item";
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
              keyValue={other.contact_name}
              Value={
                <a
                  href={other.account_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{other.accout_name}
                </a>
              }
              paddingBetween={230}
            />
          </div>
        ))}
      </table>
    </div>
  );
};

export default ContactOthersTable;
