import React from "react";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { UserItem } from "./components/UserList/UserItem";
import { useSelector } from "react-redux";

export function App() {
  const data = useSelector(store => store.character.data)
  return (
    <div>
      <Form />
      <UserItem data={data} />
      <Footer />
    </div>
  );
}

export default App;

