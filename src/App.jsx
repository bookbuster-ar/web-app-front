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
  Banned,
} from './views/index';
import NavBar from './components/NavBar';
import LogInAndSignIn from './components/LogInAndSignIn';
import VerifyEmail from './components/VerifyEmail';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedRouteBannedUser from './components/ProtectedRoutesBannedUser';
import About from './views/About';
import { useLocation } from 'react-router-dom';
import ModalMessage from './components/ModalMessage';
import { useDispatch, useSelector } from 'react-redux';
import { hideNotification } from './store/notifications/notificationsSlice';

function App() {
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
        />
      )}
      {location.pathname !== '/admin' && <NavBar />}
      <Routes>
        <Route path='/' element={<ProtectedRouteBannedUser><Home /></ProtectedRouteBannedUser>} />
        <Route path='/login' element={<LogInAndSignIn />} />
        <Route path='/library' element={<ProtectedRouteBannedUser><Library /></ProtectedRouteBannedUser>} />
        <Route path='/detail/:id' element={<ProtectedRouteBannedUser><BookDetail /></ProtectedRouteBannedUser>} />
        <Route path='/search' element={<ProtectedRouteBannedUser><Search /></ProtectedRouteBannedUser>} />

        <Route path='/recommendation' element={<ProtectedRouteBannedUser><Recommendation /></ProtectedRouteBannedUser>} />
        <Route path='/subscription' element={<ProtectedRouteBannedUser><Subscription /></ProtectedRouteBannedUser>} />
        <Route path='/library/genre/:id' element={<ProtectedRouteBannedUser><Genre /></ProtectedRouteBannedUser>} />
        <Route path='/VerifyEmail' element={<ProtectedRouteBannedUser><VerifyEmail /></ProtectedRouteBannedUser>} />
        <Route path='/gift' element={<ProtectedRouteBannedUser><Gift /></ProtectedRouteBannedUser>} />
        <Route path='/sellbook' element={<ProtectedRouteBannedUser><SellOrRent /></ProtectedRouteBannedUser>} />
        <Route path='/banned' element={<Banned />}/>
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
        <Route path='*' element={<ProtectedRouteBannedUser><NotFound /></ProtectedRouteBannedUser>} />
      </Routes>
    </div>
  );
}

export default App;
