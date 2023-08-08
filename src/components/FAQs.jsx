import { useState } from 'react';
import Up from '../icons/ArrowUp';
import Down from '../icons/ArrowDown';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    { question: '¿Pregunta 1?', answer: 'Respuesta a la pregunta 1.' },
    { question: '¿Pregunta 2?', answer: 'Respuesta a la pregunta 2.' },
    { question: '¿Pregunta 3?', answer: 'Respuesta a la pregunta 3.' },
    { question: '¿Pregunta 4?', answer: 'Respuesta a la pregunta 4.' },
  ];

  return (
    <div className='space-y-2 p-16'>
      {questions.map((faq, index) => (
        <div
          key={index}
          className='border p-4 rounded-md shadow-lg min-w-custom '
        >
          <div
            onClick={() => setOpenIndex(index === openIndex ? null : index)}
            className='cursor-pointer flex justify-between items-center'
          >
            <p className='text-lg font-semibold'>{faq.question}</p>
            <span>{openIndex === index ? <Down /> : <Up />}</span>
          </div>
          {openIndex === index && (
            <p className='mt-2 text-gray-600'>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
