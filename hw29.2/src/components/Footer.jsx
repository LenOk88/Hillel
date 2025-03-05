import { useSelector } from 'react-redux';

const Footer = () => {
  const todosCount = useSelector(state => state.todos.length);

  return (
    <footer className="p-4 bg-gray-100 text-center">
      Загальна кількість задач: {todosCount}
    </footer>
  );
};

export default Footer;
