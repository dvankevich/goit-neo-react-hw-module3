import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
