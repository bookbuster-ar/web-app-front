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
import SubscriptionCheckout from './views/SubscriptionCheckout.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogInAndSignIn />} />
        <Route path='/library' element={<Library />} />
        <Route path='/detail/:id' element={<BookDetail />} />
        <Route path='/search' element={<Search />} />
        <Route path='/sellbook' element={<FormSell />} />
        <Route path='/recommendation' element={<Recommendation />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/library/genre/:id' element={<Genre />} />
        <Route path='/user' element={<UserProfile />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/gift' element={<Gift />} />
        <Route path='/user/profile' element={<FormProfile />} />
        <Route path='/VerifyEmail' element={<VerifyEmail />} />
        <Route
          path='/subscriptioncheckout'
          element={<SubscriptionCheckout />}
        />
      </Routes>
    </div>
  );
}

export default App;
