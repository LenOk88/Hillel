import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodos, addTodo, deleteTodo, toggleTodo, editTodo, clearCompleted } from './actions/todoActions';

const App = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const handleAdd = (text) => {
    const newTodo = { text, completed: false };
    dispatch(addTodo(newTodo));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = (id, text) => {
    dispatch(editTodo(id, text));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <h1>Todo List</h1>
      {}
      <button onClick={() => handleAdd('New Todo')}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span onClick={() => handleToggle(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
              {todo.text}
            </span>
            <button onClick={() => handleEdit(todo.id, 'Updated Text')}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={handleClearCompleted}>Clear Completed</button>
    </div>
  );
};

export default App;
