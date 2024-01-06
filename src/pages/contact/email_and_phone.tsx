"use client";

import SubTitle from "@/components/sub_title";
import TableItem from "@/components/table_item";
import { ContactEmailAndPhone } from "@prisma/client";
import { useEffect, useState } from "react";

const ContactEmailAndPhoneTable = () => {
  const [emailAndPhones, setEmailAndPhones] = useState<ContactEmailAndPhone[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchContactEmailAndPhone = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/contactEmailAndPhone");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setEmailAndPhones(data);
    } catch (error) {
      console.error("Failed to fetch about profiles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContactEmailAndPhone();
  }, []);

  return (
    <div>
      <SubTitle text={"Email & Phone"} />
      <table
        style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
      >
        {emailAndPhones.map((emailAndPhone) => (
          <div key={emailAndPhone.id}>
          <TableItem
            keyValue={emailAndPhone.name}
            Value={emailAndPhone.value}
            paddingBetween={230}
          />
          </div>
        ))}
      </table>
    </div>
  );
};

export default ContactEmailAndPhoneTable;
