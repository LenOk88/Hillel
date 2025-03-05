import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./character/characterSlice"; // ✅ Импортируем reducer


const store = configureStore({
  reducer: {
    character: characterReducer, // ✅ Добавляем slice в store
  },
});

export default store; // ✅ Экспортируем store
