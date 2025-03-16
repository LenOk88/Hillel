import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const addTask = () => {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      setError("Поле не повинно бути пустим!");
      return;
    }

    setTasks([...tasks, trimmedValue]);
    setInputValue("");
    setError("");
  };
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h1>TODO</h1>
      <input
        type="text"
        placeholder="Додати завдання.."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          if (error) setError("");
        }}
      />
      <button onClick={addTask}>Додати</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}
          <button className="clean" onClick={() => removeTask(index)} >
          Видалити
          </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
