import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserAuth } from '../store/user/authSlice';
import NotFound from '../views/NotFound';
import { useEffect } from 'react';

const ProtectedRoute = ({ children, isAdminRoute = false }) => {
  const user_id = localStorage.getItem('user_id');
  const user = useSelector(selectUserAuth);
  const navigate = useNavigate();

  // Función para obtener el ID del usuario, independientemente de cómo se registró
  const getUserId = () => {
    if ('user' in user) {
      return user?.user?.id;
    }
    return user?.id;
  };

  useEffect(() => {
    const currentUserId = getUserId();
    
    if (user_id !== currentUserId) {
      navigate('/login');
      return;
    }

    if (user?.is_blocked) {
      navigate('/banned');

      return;

    }
  }, [user, navigate]);

  if (isAdminRoute && user?.role?.name !== 'Admin') {
    return <NotFound />;
  }

  return children;
};

export default ProtectedRoute;
