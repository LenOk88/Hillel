import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, CLEAR_COMPLETED, LOAD_TODOS, SET_TODOS } from './types';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: { id, text },
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});

export const loadTodos = () => ({
  type: LOAD_TODOS,
});
export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});
