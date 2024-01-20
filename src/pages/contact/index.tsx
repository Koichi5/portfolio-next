import Title from "@/components/title";
import ContactEmailAndPhoneTable from "./email_and_phone";
import ContactOthersTable from "./others";
import Header from "../header";
import Footer from "../footer";

function Contact() {
  return (
    <div>
      <Header />
      <ContactEmailAndPhoneTable />
      <ContactOthersTable />
      <Footer />
    </div>
  );
}

export default Contact;
