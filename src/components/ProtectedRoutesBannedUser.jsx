import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserAuth } from '../store/user/authSlice';
import NotFound from '../views/NotFound';
import { useEffect } from 'react';

const ProtectedRouteBannedUser = ({ children, isAdminRoute = false }) => {
  const user = useSelector(selectUserAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.is_blocked) {
      navigate('/banned'); 
    }
  }, [user, navigate]);

  if (isAdminRoute && user?.role?.name !== 'Admin') {
    return <NotFound />;
  }

  return children;
};

export default ProtectedRouteBannedUser;
