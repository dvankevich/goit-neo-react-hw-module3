import Contact from "../Contact/Contact";
const ContactList = ({ contacts }) => {
    console.log(contacts);
    console.log(contacts[0]);

    return (
        <>
            <h2>Contact List</h2>
            <Contact contact={contacts[0]} />
        </>
    );
};

export default ContactList;
