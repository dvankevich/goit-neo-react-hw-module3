import { FaUserSecret } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { TiDelete } from "react-icons/ti";
import css from "./Contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <>
      <li className={css.contactCard}>
        <div className={css.nameNumber}>
          <div className={css.contactField}>
            <FaUserSecret className={css.icon} />
            <p>{contact.name}</p>
          </div>
          <div className={css.contactField}>
            <GiRotaryPhone className={css.icon} />
            <p>{contact.number}</p>
          </div>
        </div>
        <button
          className={css.btn}
          type="button"
          onClick={() => deleteContact(contact.id)}
        >
          <TiDelete className={css.icon} />
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
