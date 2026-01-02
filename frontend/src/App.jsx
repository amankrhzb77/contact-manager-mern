import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("https://contact-manager-mern-ey69.onrender.com/api/contacts");

        setContacts(res.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
  <div style={{ width: "100%", maxWidth: "600px" }}>
    <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
      Contact Manager
    </h2>

    <ContactForm refreshContacts={() => {}} />
    <ContactList contacts={contacts} />
  </div>
);


}

export default App;
