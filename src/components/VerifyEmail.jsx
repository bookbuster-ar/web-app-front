import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'; // No necesitamos useLocation

import {
  verifyUserEmail,
  selectStatusVerified,
  setRedirectPath,
  unsetEmailStatus
} from '../store/user/authSlice';

const EMAIL_STATES = {
  NULL: 'null',
  VERIFIED: 'verified',
  EXISTING: 'existing',
  NOT_VERIFIED: 'not-verified',
};

const VerifyEmail = () => {
  const [emailVerified, setEmailVerified] = useState(EMAIL_STATES.NULL);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const statusVerified = useSelector(selectStatusVerified);

  const handlerVerifyEmail = () => {
    if (!localStorage.getItem('session_id')) {
      dispatch(setRedirectPath(location.pathname))
      navigate('/login');
    } else {
      dispatch(verifyUserEmail());
    }
  };

  useEffect(() => {
    dispatch(unsetEmailStatus())
  },[])

  useEffect(() => {

    switch (statusVerified) {
      case 201:
        setEmailVerified(EMAIL_STATES.VERIFIED);
        break;
      case 409:
        setEmailVerified(EMAIL_STATES.EXISTING);
        break;
      case 500:
        setEmailVerified(EMAIL_STATES.NOT_VERIFIED);
        break;
      default:
        setEmailVerified(EMAIL_STATES.NULL);
    }
  }, [statusVerified]);

  const renderMessage = () => {
    if (!localStorage.getItem('session_id')) {
      return <p>Recuerda que tienes que estar logueado para verificarte</p>;
    }

    switch (emailVerified) {
      case EMAIL_STATES.NULL:
        return <p>Presiona el botón para verificar el email.</p>;
      case EMAIL_STATES.VERIFIED:
        return <h1>Email Verificado!</h1>;
      case EMAIL_STATES.EXISTING:
        return <h1>El email ya ha sido verificado!</h1>;
      case EMAIL_STATES.NOT_VERIFIED:
      default:
        return <h1>El email no pudo ser verificado!</h1>;
    }
  };

  return (
    <div className='flex flex-col items-center gap-2 bg-bluebook max-w-sm mx-auto text-white p-4 border rounded-md mt-20 '>
      <h1 className='font-bold '>Verificación de Email</h1>
      <button
        className='text-bluebook bg-white border rounded py-2 px-6 font-bold hover:bg-sky-200 transform ease-in duration-150'
        onClick={handlerVerifyEmail}
      >
        Verificar
      </button>
      {renderMessage()}
    </div>
  );
};

export default VerifyEmail;
