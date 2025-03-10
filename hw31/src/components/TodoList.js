import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTodosRequest,
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  clearTodos,
} from '../todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={() => dispatch(clearTodos())}>Clear All</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {items.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span>{todo.text}</span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
            <button onClick={() => {
              const newText = prompt('Edit todo:', todo.text);
              if (newText) dispatch(editTodo({ id: todo.id, text: newText }));
            }}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
