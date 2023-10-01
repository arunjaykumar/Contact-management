import { useState } from "react";
import "./App.css";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import Header from "./Components/Header";
import uuid4 from "uuid4";

function App() {
  const [contact, setContect] = useState([]);

  const addContact = (data) => { 
    setContect([...contact, {id: uuid4(), data}]); //uuid4 gives a uniq id to every contact list'
  };

  const contactRemove = (id) => {
    const updateList = contact.filter((value) => {
      return value.id !== id;
    });
    setContect(updateList);
  };
  return (
    <div className="App">
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contact={contact} contactRemove={contactRemove} />
    </div>
  );
}

export default App;
