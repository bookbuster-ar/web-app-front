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
} from './views/index';
import NavBar from './components/NavBar';
import LogInAndSignIn from './components/LogInAndSignIn';
import VerifyEmail from './components/VerifyEmail';
import ProtectedRoute from './components/ProtectedRoute';
import About from './views/About';
import { useLocation } from 'react-router-dom';
import ModalMessage from './components/ModalMessage';
import { useDispatch, useSelector } from 'react-redux';
import { hideNotification } from './store/notifications/notificationsSlice';

function App() {
  const location = useLocation();
  const notification = useSelector((state) => state.notifications);
  const dispatch = useDispatch();
  const location = useLocation();
  const notification = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  return (
    <div>
      {notification.isActive && (
        <ModalMessage
          message={notification.message}
          type={notification.type}
          onClose={() => dispatch(hideNotification())}
      {notification.isActive && (
        <ModalMessage
          message={notification.message}
          type={notification.type}
          onClose={() => dispatch(hideNotification())}
        />
      )}
      )}
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
        <Route path='/sellbook' element={<SellOrRent />} />
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
            <ProtectedRoute isAdminRoute={true}>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
