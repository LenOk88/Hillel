import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import React from "react";

function App() {
  return (
    <div className="max-w-lg mx-auto mt-10 shadow-lg rounded-lg overflow-hidden border">
      <h1 className="text-2xl font-bold text-center p-4 bg-blue-500 text-white">TODO</h1>
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
