import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/store';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Додати задачу..."
        className="inputForm"
      />
      <button type="submit" className="buttonForm">Додати</button>
    </form>
  );
};

export default TodoForm;
