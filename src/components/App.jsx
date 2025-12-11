import "./App.css";
import ContactForm from "./ContactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import { useEffect, useState } from "react";

import contactsInit from "../contacts.json";
import { useDebounce } from "../hooks/useDebounce.js";

function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("saved-contacts")) ?? contactsInit
    );
  });

  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (id) => {
    setContacts((prevContactList) =>
      prevContactList.filter((contact) => contact.id !== id)
    );
  };

  const addContact = (contact) => {
    setContacts((prevContactList) => {
      return [...prevContactList, contact];
    });
  };

  const debouncedSearchStr = useDebounce(searchStr, 300);
  const filteredContacts = debouncedSearchStr
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(debouncedSearchStr.toLowerCase())
      )
    : contacts;

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox search={searchStr} handleSearch={setSearchStr} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
