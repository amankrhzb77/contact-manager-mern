import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/contacts");
        setContacts(res.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Contact Manager</h2>
      <ContactForm refreshContacts={() => {}} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
