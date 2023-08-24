import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserAuth } from '../store/user/authSlice';
import NotFound from '../views/NotFound';
import { useEffect } from 'react';

const ProtectedRoute = ({ children, isAdminRoute = false }) => {
  const user_id = localStorage.getItem('user_id')
  const user = useSelector(selectUserAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user_id !== user?.id) {
      navigate('/login');
    }
  }, [user, navigate]);
  console.log(user);

  if (isAdminRoute && user.role.name !== 'Admin') {
    return <NotFound />;
  }

  return children;
};

export default ProtectedRoute;
