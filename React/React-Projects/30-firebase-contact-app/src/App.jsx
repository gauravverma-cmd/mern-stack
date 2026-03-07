import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";

const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        const contactSnapShot = await getDocs(contactRef);
        const contactList = contactSnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log(contactList);
        setContacts(contactList);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        {contacts.map((contact) => (
          <ContactCard key={contact.key} contact={contact} />
        ))}
        {/* {contacts.map((contact) => (
          <pre key={contact.id}>{JSON.stringify(contact, null, 2)}</pre>
        ))} */}
      </div>
    </div>
  );
};

export default App;
