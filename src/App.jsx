import { Routes, Route } from 'react-router-dom';
import { Home, BookDetail, Library, Search } from './views/index';
import NavBar from './components/NavBar';
import LogInAndSignIn from './components/LogInAndSignIn';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogInAndSignIn />} />
        <Route path='/home/library' element={<Library />} />
        <Route path='/home/detail' element={<BookDetail />} />
        <Route path='/home/search' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
