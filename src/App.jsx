import { useState } from "react";
// import { Formik, Form, Field } from "formik";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import initialContacts from "./contacts.json";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm addContact={(newContact) => setContacts([...contacts, newContact])} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
};

export default App;
