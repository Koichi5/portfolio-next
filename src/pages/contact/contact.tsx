import Title from "@/components/title";
import ContactEmailAndPhoneTable from "./email_and_phone";
import ContactOthersTable from "./others";

function Contact() {
    return (
      <div>
        <Title text="CONTACT" />
        <ContactEmailAndPhoneTable />
        <ContactOthersTable />
      </div>
    );
  }

  export default Contact;