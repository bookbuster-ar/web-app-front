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
import BookCheckout from './views/BookCHeckout';
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
        <Route
          path='/subscriptioncheckout'
          element={<SubscriptionCheckout />}
        />
        <Route path='/bookcheckout' element={<BookCheckout />} />
      </Routes>
    </div>
  );
}

export default App;
