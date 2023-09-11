import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Protected from "./Components/Protected";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Protected Component={Home} />}>
            Home
          </Route>
          <Route path="about" element={<Protected Component={About}  />}>
            About
          </Route>
          <Route path="login" element={<Login />}>
            Login
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
