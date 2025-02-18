import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import { ThemeProvider } from "./context/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { useTheme } from "./context/ThemeContext";
import "./App.css";


function App() {
  return (
    <ThemeProvider>
        <header>
          <nav>
            <Link to="/">Головна</Link>
            <Link to="/about">Про мене</Link>
            <Link to="/contacts">Контакти</Link>
          </nav>
        </header>
        <div className="app">
        <main>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </ErrorBoundary>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
