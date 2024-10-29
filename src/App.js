import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUpp from "./pages/SignUpp";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <header className="Home">
        <h1>Kufana App 1</h1>
        <Menu />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUpp" element={<SignUpp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
