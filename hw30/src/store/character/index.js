import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import characterSlice from "./characterSlice"; // если store.js находится в папке store
import { fetchCharacterData, clearCharacter } from "../../store/character/characterSlice";
import store from "../store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
