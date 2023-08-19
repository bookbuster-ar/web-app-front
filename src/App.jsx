import { Routes, Route } from 'react-router-dom';
import {
  Home,
  BookDetail,
  Library,
  Search,
  Recommendation,
  Subscription,
  Genre,
  UserProfile,
  Admin,
  Gift,
  FormProfile,
  NotFound,
  SubscriptionCheckout,
  SellOrRent,
} from './views/index';
import NavBar from './components/NavBar';
import LogInAndSignIn from './components/LogInAndSignIn';
import VerifyEmail from './components/VerifyEmail';


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
        <Route path='/sellbook' element={<SellOrRent />} />
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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
