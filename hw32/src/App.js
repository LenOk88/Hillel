import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Todo from './pages/Todo';
import SWAPI from './pages/SWAPI';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/swapi" element={<SWAPI />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
