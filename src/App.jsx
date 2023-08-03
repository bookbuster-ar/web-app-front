import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./views/Home";
import NavBar from "./components/navBar/navBar";
import BookDetail from "./views/BookDetail";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<BookDetail />} />
      </Routes>
    </div>
  );
}

export default App;
