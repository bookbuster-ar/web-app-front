import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import NavBar from "./components/navBar/navBar";
import LogInAndSignIn from "./components/LogInAndSignIn/LogInAndSignIn";
import Library from "./views/Library";
import BookDetail from "./views/BookDetail";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogInAndSignIn />} />
        <Route path="/home/library" element={<Library />} />
        <Route path="/home/detail" element={<BookDetail />} />
      </Routes>
    </div>
  );
}

export default App;
