import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ContactCard from "./components/ContactCard";
import AddAndUpadte from "./components/AddAndUpadte";

import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";

import useDisclosure from "./hooks/useDisclosure";
 import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const { onOpen, onClose, isOpen } = useDisclosure();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        onSnapshot(contactRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setContacts(contactList);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <>
      <div>
        <Navbar onOpen={onOpen} />

        <div>
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>

      <AddAndUpadte isOpen={isOpen} onClose={onClose} />
      <ToastContainer 
       position="bottom-center"
      />
    </>
  );
};

export default App;
