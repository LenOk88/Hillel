import React from "react";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { UserItem } from "./components/UserList/UserItem";

export function App() {
  return (
    <div>
      <Form />
      <UserItem />
      <Footer />
    </div>
  );
}

export default App;

