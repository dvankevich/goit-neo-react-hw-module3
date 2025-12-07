import Contact from "../Contact/Contact";
const ContactList = ({ contacts }) => {
    console.log(contacts);
    console.log(contacts[0]);

    return (
        <>
            <h2>Contact List</h2>
            <ul>
                <Contact contact={contacts[0]} />
            </ul>
        </>
    );
};

export default ContactList;
