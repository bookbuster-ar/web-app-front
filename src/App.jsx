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
  SellOrRent,
  Admin2

} from './views/index';
import NavBar from './components/NavBar';
import LogInAndSignIn from './components/LogInAndSignIn';
import VerifyEmail from './components/VerifyEmail';
import ProtectedRoute from './components/ProtectedRoute';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation()
  return (
    <div>
      {location.pathname !== '/admin' && <NavBar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogInAndSignIn />} />
        <Route path='/library' element={<Library />} />
        <Route path='/detail/:id' element={<BookDetail />} />
        <Route path='/search' element={<Search />} />

        <Route path='/recommendation' element={<Recommendation />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/library/genre/:id' element={<Genre />} />
        <Route path='/VerifyEmail' element={<VerifyEmail />} />
        <Route path='/gift' element={<Gift />} />
        <Route
          path='/sellbook'
          element={
            <ProtectedRoute>
              <SellOrRent />
            </ProtectedRoute>
          }
        />
        <Route
          path='/user'
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/user/profile'
          element={
            <ProtectedRoute>
              <FormProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin'
          element={
            <ProtectedRoute isAdminRoute={false}>
              <Admin2 />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
