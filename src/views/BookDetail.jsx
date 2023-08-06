import React from 'react';
// import Star from '../icons/Star';
// import Star from '../icons/Star';

const book = {
  title: 'El principito',
  author: 'Antoine de Saint-Exupéry',
  editorial: 'Emecé',
  thematic: 'Literatura infantil',
  publicationYear: 1943,
  publicationCountry: 'Estados Unidos',
  language: 'Español',
  recommendedAge: '6+',
  size: 'Medio',
  image:
    'https://www.papelerabariloche.com.ar/img/p/064735/1.jpeg?quality=95&width=800&height=800&mode=max&upscale=false',
};

const BookDetail = () => {
  return (
    <div className='p-8 bg-white rounded-lg shadow-md grid gap-8 grid-cols-1 md:grid-cols-3'>
      <div className='md:col-span-2'>
        <div className='bg-white h-96 rounded-lg overflow-hidden'>
          <img
            className='bg-red- 100 w-full h-full object-contain'
            src={book.image}
            alt={book.title}
          />
        </div>
      </div>

      <div className='md:col-span-1 flex flex-col justify-between'>
        <div>
          <h1 className='text-3xl font-semibold text-gray-800'>{book.title}</h1>
          <h2 className='text-lg text-gray-500 mt-2'>by {book.author}</h2>
        </div>
        <ul className='mt-4 space-y-2'>
          <li>
            <span className='font-medium'>Editorial:</span> {book.editorial}
          </li>
          <li>
            <span className='font-medium'>Temática:</span> {book.thematic}
          </li>
          <li>
            <span className='font-medium'>Año de publicación:</span>{' '}
            {book.publicationYear}
          </li>
          <li>
            <span className='font-medium'>País de publicación:</span>{' '}
            {book.publicationCountry}
          </li>
          <li>
            <span className='font-medium'>Idioma:</span> {book.language}
          </li>
          <li>
            <span className='font-medium'>Edad recomendada:</span>{' '}
            {book.recommendedAge}
          </li>
          <li>
            <span className='font-medium'>Tamaño:</span> {book.size}
          </li>
        </ul>
        <div>
          <button className='bg-blue-900 hover:bg-blue-400 text-white font-light py-2 px-4 rounded-full mt-4'>
            Ver opciones de adquisición
          </button>
        </div>
      </div>

      <div className='md:col-span-4 bg-white p-6 shadow-lg rounded-lg'>
        <h2 className='text-xl font-semibold text-gray-800'>Sinopsis</h2>
        <p className='text-sm text-gray-500 mt-2'>
          "El Principito" es una obra literaria icónica escrita por Antoine de
          Saint-Exupéry en 1943. Esta cautivadora novela es una fábula atemporal
          y filosófica que ha tocado los corazones de lectores de todas las
          edades en todo el mundo. La historia comienza con un avión piloteado
          por el autor, quien se encuentra varado en el desierto del Sahara
          después de un accidente. Allí, el protagonista se encuentra con un
          niño pequeño, el Principito, quien le pide que dibuje un cordero para
          él. Así, comienza a contar la extraordinaria historia de su encuentro
          con este ser especial. El Principito proviene de un pequeño asteroide
          llamado B-612, donde tiene una flor única y tres volcanes que siempre
          mantiene bajo control. Cansado de los caprichos de su flor y la falta
          de comprensión de los adultos a su alrededor, decide explorar otros
          planetas. En su viaje, visita varios asteroides, cada uno de los
          cuales representa una crítica a aspectos de la sociedad y la
          naturaleza humana. Finalmente, llega a la Tierra, donde conoce a un
          zorro sabio y se encuentra con varios personajes peculiares, incluido
          un geógrafo, un farolero y un rey vanidoso. A través de estos
          encuentros, el Principito reflexiona sobre la soledad, la amistad, el
          amor y la importancia de cuidar y comprender a los demás. A medida que
          avanza la historia, el Principito también descubre la existencia de un
          piloto aviador, el cual es el autor mismo. A través de sus
          conversaciones, ambos personajes aprenderán valiosas lecciones sobre
          la naturaleza humana y la importancia de mantener viva la esencia
          infantil que todos llevamos dentro. "El Principito" es una conmovedora
          obra maestra que destaca la importancia de ver el mundo con el corazón
          y valorar lo esencial e invisible a los ojos. Su mensaje universal
          sobre la inocencia y la búsqueda de significado en la vida continúa
          inspirando a generaciones, convirtiéndola en una de las obras
          literarias más queridas y leídas de todos los tiempos.
        </p>
      </div>

      <div className='md:col-span-4 p-6 rounded-lg flex flex-row'>
        <div>
          <h2 className='text-xl font-semibold text-gray-800'>
            Reseñas editoriales
          </h2>
          <div className='mt-7 ml-20 mr-60 bg-blue-100 rounded-lg p-14 shadow-md'>
            <h3 className='text-lg font-semibold text-gray-800'>Asombroso</h3>
            <p className='text-lg font-italic text-black mt-2'>
              El Principito es uno de los mejores libros que leí cuando era niña
            </p>
            <h3 className='text-md font-light text-black-500 mt-2'>
              Graciela Divaza
            </h3>
          </div>
        </div>
        <div className='mt-16 ml-1 bg-blue-100 rounded-lg p-14'>
          <h3 className='text-lg font-semibold text-gray-800'>Grandioso</h3>
          <p className='text-lg text-black mt-2'>
            El Principito es uno de los mejores libros que leí cuando era niña
          </p>
          <h3 className='text-md font-light text-black mt-2'>
            Alfredo Ramírez
          </h3>
        </div>
      </div>

      <div className='md:col-span-4 p-6 rounded-lg flex flex-row'>
        <div>
          <h2 className='text-xl font-semibold text-gray-800'>Opiniones</h2>
          <div className='mt-7 ml-20 mr-60 bg-blue-100 rounded-lg p-14 shadow-md'>
            <h3 className='text-lg font-semibold text-black'>Recomendado</h3>
            <p className='text-lg text-black mt-2'>
              El Principito es uno de los mejores libros que leí cuando era niña
            </p>
            <h3 className='text-md font-light text-black mt-2'>
              Graciela Divaza
            </h3>
          </div>
        </div>
        <div className='mt-16 ml-1 bg-blue-100 rounded-lg p-14'>
          <h3 className='text-lg font-semibold text-black'>
            Lo volvería a leer
          </h3>
          <p className='text-lg text-black mt-2'>
            El Principito es uno de los mejores libros que leí cuando era niña
          </p>
          <h3 className='text-md font-light text-black mt-2'>
            Alfredo Ramírez
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
