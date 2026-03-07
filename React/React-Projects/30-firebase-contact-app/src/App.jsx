import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ContactCard from "./components/ContactCard";
import AddAndUpadte from "./components/AddAndUpadte";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";

import useDisclosure from "./hooks/useDisclosure";
import { ToastContainer } from "react-toastify";
import NoUser from "./components/NoUser";

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  const { onOpen, onClose, isOpen } = useDisclosure();

  useEffect(() => {
    const contactRef = collection(db, "contacts");

    const unsubscribe = onSnapshot(contactRef, (snapshot) => {

      const contactList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setContacts(contactList);
      setFilteredContacts(contactList);
    });

    return () => unsubscribe();
  }, []);

  const filterContact = (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value)
    );

    setFilteredContacts(filtered);
  };

  return (
    <>
      <div>
        <Navbar onOpen={onOpen} filterContact={filterContact} />

        <div>
          {contacts.length<= 0 ? <NoUser />: filteredContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>

      <AddAndUpadte isOpen={isOpen} onClose={onClose} />

      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;