import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./components/Update";
import Home from "./components/Home";
import Register from "./components/Register";
import Header from "./components/Header";
import Login from "./components/Login";
import CreateEvent from "./components/CreateEvent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/view" element={<Home />} />
          <Route path="/edit" element={<Update />} />
          <Route path="*" element={<>404 Page Not Found</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
