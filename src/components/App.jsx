import "./App.css";
import ContactForm from "./ContactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import { useEffect, useState } from "react";

import contactsInit from "../contacts.json";

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

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox search={searchStr} handleSearch={setSearchStr} />
        {searchStr === "" ? (
          <ContactList contacts={contacts} deleteContact={deleteContact} />
        ) : (
          <ContactList
            contacts={contacts.filter((contact) => {
              return contact.name
                .toLowerCase()
                .includes(searchStr.toLowerCase());
            })}
            deleteContact={deleteContact}
          />
        )}
      </div>
    </>
  );
}

export default App;
