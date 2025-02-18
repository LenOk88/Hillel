import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Home() {
  const { toggleTheme } = useTheme();
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>TODO</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Додати</button>
      <button onClick={toggleTheme}>Перемикач теми</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Видалити</button> {}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
