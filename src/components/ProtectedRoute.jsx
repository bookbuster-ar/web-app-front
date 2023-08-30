import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserAuth } from '../store/user/authSlice';
import NotFound from '../views/NotFound';
import { useEffect } from 'react';

const ProtectedRoute = ({ children, isAdminRoute = false }) => {
  const user_id = localStorage.getItem('user_id');
  const user = useSelector(selectUserAuth);
  const navigate = useNavigate();
  const userIdFromUserObject = user?.id || (user?.user && user?.user.id);
  useEffect(() => {
    if (user_id !== userIdFromUserObject) {
      navigate('/login');
    }

    if (user?.is_blocked) {
      navigate('/banned');
    }
  }, [user, navigate]);

  if (isAdminRoute && user?.role?.name !== 'Admin') {
    return <NotFound />;
  }

  return children;
};

export default ProtectedRoute;
