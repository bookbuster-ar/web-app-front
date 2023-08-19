import { useState } from 'react';

const Synopsis = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortenedText = `${text.slice(0, 300)}...`; // Asume que deseas mostrar los primeros 300 caracteres

  return (
    <div className='p-4'>
      {isExpanded ? text : shortenedText}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='text-blue-500 ml-2'
      >
        {isExpanded ? 'Menos' : 'Más'}
      </button>
    </div>
  );
};

export default Synopsis;
