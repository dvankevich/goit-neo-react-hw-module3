import { FaUserSecret } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { TiDelete } from "react-icons/ti";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
    return (
        <>
            <h3>Contact card</h3>
            <p>{contact.id}</p>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
        </>
    );
};

export default Contact;
