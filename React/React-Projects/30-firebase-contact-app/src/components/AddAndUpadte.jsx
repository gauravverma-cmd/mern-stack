import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";
import { db } from "../config/firebase";
import { toast } from "react-toastify";

const AddAndUpadte = ({ isOpen, onClose, isUpdate, contact }) => {

  const addContct = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Add contact successfully")
    } catch (error) {
      console.log(error);
    }
  };

  const updateContct = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Update contact successfully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={
          isUpdate
            ? {
                name: contact?.name || "",
                email: contact?.email || "",
              }
            : {
                name: "",
                email: "",
              }
        }
        onSubmit={(values) => {
          if (isUpdate) {
            updateContct(values, contact.id);
          } else {
            addContct(values);
          }
        }}
      >
        <Form className="flex flex-col gap-3">

          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field
              name="name"
              className="border px-4 py-2 capitalize text-lg font-normal"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">E-mail</label>
            <Field
              name="email"
              className="border px-4 py-2 text-lg font-normal"
            />
          </div>

          <button className="py-2 px-4 border-2 border-black self-end active:scale-95 text-lg mt-3 font-bold bg-amber-700 text-white">
            {isUpdate ? "Update" : "Add"} Contact
          </button>

        </Form>
      </Formik>
    </Modal>
  );
};

export default AddAndUpadte;