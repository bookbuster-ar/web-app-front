import { Routes, Route } from 'react-router-dom';
import {
  Home,
  BookDetail,
  Library,
  Search,
  FormSell,
  Recommendation,
  Subscription,
  Genre,
  UserProfile,
  Admin,
  Gift,
  FormProfile,
} from './views/index';
import NavBar from './components/NavBar';
import LogInAndSignIn from './components/LogInAndSignIn';
import VerifyEmail from './components/VerifyEmail';
FormProfile;

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogInAndSignIn />} />
        <Route path='/home/library' element={<Library />} />
        <Route path='/detail/:id' element={<BookDetail />} />
        <Route path='/home/search' element={<Search />} />
        <Route path='/home/sellbook' element={<FormSell />} />
        <Route path='/home/recommendation' element={<Recommendation />} />
        <Route path='/home/subscription' element={<Subscription />} />
        <Route path='/home/library/genre/:id' element={<Genre />} />
        <Route path='/user' element={<UserProfile />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/gift' element={<Gift />} />
        <Route path='/user/profile' element={<FormProfile />} />
        <Route path='/VerifyEmail' element={<VerifyEmail />} />
      </Routes>
    </div>
  );
}

export default App;
