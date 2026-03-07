import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import useDisclosure from "../hooks/useDisclosure";
import AddAndUpadte from "./AddAndUpadte";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact deleted successfully ")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-yellow-700 rounded-2xl m-4 flex items-center justify-between py-3 px-6">
        <i className="fa-solid fa-user invert text-2xl w-8"></i>

        <div className="text-white flex flex-col items-start ml-[40%] font-bold text-lg flex-1 px-4">
          <h2 className="capitalize text-2xl">{contact.name}</h2>
          <h3>{contact.email ? contact.email : "No Email Found"}</h3>
        </div>

        <div className="flex gap-5 text-2xl w-16 justify-end">
          <i
            onClick={onOpen}
            className="fa-solid fa-pen-to-square invert active:scale-110 cursor-pointer"
          ></i>

          <i
            onClick={() => deleteContact(contact.id)}
            className="fa-solid fa-trash-can invert active:scale-110 cursor-pointer"
          ></i>
        </div>
      </div>

      <AddAndUpadte isUpdate contact={contact} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;