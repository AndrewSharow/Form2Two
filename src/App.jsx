import { useState } from "react";
import "./App.css";
import ContactsList from "./components/ContactsList/ContactsList";
import FormLite from "./components/FormLite/FormLite";
import contactTemplate from "./assets/base_contacts.json";
import FormHard from "./components/FormHard/FormHard";

function App() {
  const [contactList, setcontactList] = useState(contactTemplate);
  return (
    <>
      {/* <FormLite setcontactList={setcontactList} /> */}
      <FormHard setcontactList={setcontactList}></FormHard>
      <hr />
      <ContactsList contactList={contactList} setcontactList={setcontactList} />
    </>
  );
}

export default App;
