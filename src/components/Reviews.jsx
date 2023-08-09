import { useState } from 'react';

const Reviews = () => {
  const [activeTab, setActiveTab] = useState(0);

  const opiniones = [
    {
      name: 'Juan Pérez',
      title: 'Producto Increíble',
      content: '¡Este producto es fantástico!',
    },
    {
      name: 'María González',
      title: 'Lo compraría de nuevo',
      content: 'Recomiendo este producto ampliamente.',
    },
    {
      name: 'Carlos Rodríguez',
      title: 'Satisfecho',
      content: 'Estoy satisfecho con mi compra.',
    },
    {
      name: 'Juan Pérez',
      title: 'Producto Increíble',
      content: '¡Este producto es fantástico!',
    },
    {
      name: 'María González',
      title: 'Lo compraría de nuevo',
      content: 'Recomiendo este producto ampliamente.',
    },
    {
      name: 'Carlos Rodríguez',
      title: 'Satisfecho',
      content: 'Estoy satisfecho con mi compra.',
    },
  ];

  const reseñasEditoriales = [
    {
      name: 'Ana López',
      title: 'Reseña Profesional 1',
      content: 'Un análisis profundo de este producto revela...',
    },
    {
      name: 'Pedro Martínez',
      title: 'Opinión de Experto',
      content: 'Desde un punto de vista profesional, este producto...',
    },
    {
      name: 'Sofía Ramírez',
      title: 'Análisis Editorial',
      content: 'Tras una cuidadosa consideración, nuestro equipo encuentra...',
    },
    {
      name: 'Ana López',
      title: 'Reseña Profesional 1',
      content: 'Un análisis profundo de este producto revela...',
    },
    {
      name: 'Pedro Martínez',
      title: 'Opinión de Experto',
      content: 'Desde un punto de vista profesional, este producto...',
    },
    {
      name: 'Sofía Ramírez',
      title: 'Análisis Editorial',
      content: 'Tras una cuidadosa consideración, nuestro equipo encuentra...',
    },
  ];

  const reviewsToDisplay = activeTab === 0 ? opiniones : reseñasEditoriales;

  return (
    <div className='border rounded overflow-hidden shadow-lg p-6'>
      <div className='border-b'>
        <ul className='flex'>
          <li className='flex-1'>
            <button
              onClick={() => setActiveTab(0)}
              className={`w-full py-2 text-center ${
                activeTab === 0
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-400'
              }`}
              aria-current='true'
            >
              Opiniones
            </button>
          </li>
          <li className='flex-1'>
            <button
              onClick={() => setActiveTab(1)}
              className={`w-full py-2 text-center ${
                activeTab === 1
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-400'
              }`}
            >
              Reseñas Editoriales
            </button>
          </li>
        </ul>
      </div>
      <div className='p-6'>
        {reviewsToDisplay.map((review, index) => (
          <div key={index}>
            <h5 className='text-xl font-semibold mb-4'>{review.title}</h5>
            <p className='mb-2 text-gray-600'>{review.name}</p>
            <p className='mb-4 text-gray-700'>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
