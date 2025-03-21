import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    }
  }
});

export const { addTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
});
