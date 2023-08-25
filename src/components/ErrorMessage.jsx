const ErrorMessage = ({ message }) => {
  return (
    <div className='bg-red-500 text-white p-3 rounded-md shadow-md w-fit'>
      {message}
    </div>
  );
};

export default ErrorMessage;
