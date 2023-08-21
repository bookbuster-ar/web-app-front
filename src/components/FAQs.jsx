import { useState } from 'react';
import Up from '../icons/ArrowUp';
import Down from '../icons/ArrowDown';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: '¿Cómo funciona Bookbuster?',
      answer:
        'Siendo parte de la comunidad Bookbuster a través de la suscripción experimentas una nueva forma de leer en múltiples formatos, opciones de compra y recomendaciones. También podés usar Bookbuster como una librería on line tradicional para obtener tu libro físico nuevo o usado. ',
    },
    {
      question: '¿Cómo empiezo a ser parte de la Comunidad Bookbuster?',
      answer:
        'Si sos parte de la comunidad Bookbuster vas a poder alquilar y vender libros físicos a través de la librería on line, comprar libros nuevos y usados. Acceder a los formatos de audiolibros y libros digitales sin límites. Además de recibir recomendaciones exclusivas y promociones. Empezá a leer de una forma diferente y suscríbete.',
    },
    {
      question: '¿Cómo regalar una suscripción?',
      answer:
        'Elegí cuántos meses de suscripción quieres regalar, dejanos el correo electrónico de la persona a la que deseas enviar el regalo ¡Y listo!',
    },
    {
      question: '¿Cómo alquilar un libro?',
      answer:
        'Fíjate qué libro te gusta. Si está disponible te aparecerá la opción de alquiler. Podrás tenerlo durante 40 días. Luego de ese tiempo podrás comprarlo o devolverlo para poder adquirir otro.',
    },
    {
      question: '¿Cómo vender un libro?',
      answer:
        'Accedé al formulario de venta de libros. Bookbuster aceptará la venta y tendrás créditos para poder obtener otros libros de la librería.',
    },
  ];

  return (
    <div className='w-screen py-16'>
      {questions.map((faq, index) => (
        <div
          key={index}
          className='border p-4 shadow-lg mx-auto w-4/5 '
          style={{ overflowY: 'auto' }}
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
