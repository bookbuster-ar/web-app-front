import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './views/Home';
import NavBar from './components/navBar/navBar';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
