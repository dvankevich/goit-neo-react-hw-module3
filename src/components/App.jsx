import "./App.css";
import ContactForm from "./ContactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import { useEffect, useState } from "react";

import contactsInit from "../contacts.json";

function App() {
    const [contacts, setContacts] = useState(() => {
        return (
            JSON.parse(window.localStorage.getItem("contacts")) ?? contactsInit
        );
    });

    useEffect(() => {
        window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
    }, [contacts]);

    console.log(contacts);
    console.log(contacts[0]);

    return (
        <>
            <div>
                <h1>Phonebook</h1>
                <ContactForm />
                <SearchBox />
                <ContactList contacts={contacts} />
            </div>
        </>
    );
}

export default App;
