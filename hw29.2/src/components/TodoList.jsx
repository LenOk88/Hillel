import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <ul className="ulList">
        
        <p>TODOS</p>
        <hr></hr>
      {todos.map(todo => (
        <li key={todo.id} className="liList">{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
