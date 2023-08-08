import { Link } from 'react-router-dom';
import GirlImage from '../assets/girl.jpg';
import image1 from '../assets/Home1.png';
import image2 from '../assets/Home2.png';
import image3 from '../assets/Home3.png';
import image4 from '../assets/Home4.jpg';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <div
        className='bg-cover h-screen flex flex-col items-center justify-center space-y-12 bg-image'
        style={{ backgroundImage: `url(${GirlImage})` }}
      >
        <div>
          <h1 className='font-bold text-4xl text-white'>
            Desafiá los límites de los lectura con Bookbuster
          </h1>
        </div>
        <div className='w-2/5 text-center '>
          <h3 className='font-bold text-white '>
            Encontrá historias atrapantes de la manera que vos quieras.
            Descargá, alquilá, comprá y vendé libros en tu nueva librería
            online.
          </h3>
        </div>
        <div className='flex flex-row  w-56 items-center justify-center content-center'>
          <Link to={'/home/library'}>
            <button className='bg-blue-500 p-3 hover:bg-blue-600 text-white font-semibold rounded-md w-64 m-2'>
              Explorar la librería
            </button>
          </Link>
          <Link to={'/home/recommendation'}>
            <button className='bg-blue-500 p-3 hover:bg-blue-600 text-white font-semibold rounded-md w-64 m-2'>
              Obtener una recomendación
            </button>
          </Link>
        </div>
      </div>

      <div className='bg-white text-black h-screen flex justify-center items-center'>
        <div className='h-96 w-4/5 flex text-xl'>
          <div className='h-full p-9 space-y-6'>
            <div>
              <h1 className='font-bold text-3xl'>
                Recomendaciones personalizadas
              </h1>
            </div>
            <div className='font-sans text-lg'>
              <p>
                Brindamos recomendaciones personalizadas que coincidan con tus
                intereses. Además, contamos con expertos en el rubro a la hora
                de publicar reseñas oficiales.
              </p>
            </div>
          </div>
          <div className='flex justify-end items-center h-full w-full'>
            <img src={image1} alt='Imagen' className='max-w-lg' />
          </div>
        </div>
      </div>

      <div className='bg-white text-black h-screen flex justify-center items-center'>
        <div className='h-96 w-4/5 flex text-xl'>
          <div className='h-full p-9 space-y-6'>
            <div>
              <h1 className='font-bold text-3xl'>
                Descargá, alquilá, comprá o vendé libros
              </h1>
            </div>
            <div className='font-sans text-lg'>
              <p>
                Accedé a una amplia gama de libros que se pueden descargar,
                alquilar, vender o comprar. Todos nuestros libros cuentan con un
                sello de calidad que te garantiza su perfecto estado.
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center h-full w-full'>
            <img src={image2} alt='Imagen2' className='max-w-lg' />
          </div>
        </div>
      </div>

      <div className='bg-white text-black h-screen flex justify-center items-center'>
        <div className='h-96 w-4/5 flex text-xl'>
          <div className='h-full p-9 space-y-6'>
            <div>
              <h1 className='font-bold text-3xl'>
                Una librería tradicional, en un entorno digital
              </h1>
            </div>
            <div>
              <p className='w-9/12'>
                Desde tu hogar, explorá nuestra colección de libros y disfrutá
                de la sensación de descubrimiento y exploración que disfrutarías
                en una librería física.
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center h-full w-full'>
            <img src={image3} alt='Imagen3' className='max-w-xl' />
          </div>
        </div>
      </div>

      <div
        className='bg-cover h-screen flex flex-col items-center justify-center space-y-12 bg-image'
        style={{ backgroundImage: `url(${image4})` }}
      >
        <div className=' w-screen h-4/5 flex flex-col items-center justify-center space-y-12'>
          <div>
            <h1 className='font-bold text-2xl text-white'>
              ¿No encontrás lo que buscás?
            </h1>
          </div>
          <div className='w-2/5 text-center '>
            <h2 className='font-bold text-2xl text-white'>
              Recorré nuestro catálogo.
            </h2>
          </div>
          <div className='flex flex-col space-y-4 w-56 items-center justify-center'>
            <Link to={'/home/library'}>
              <button className='bg-blue-500 p-3 hover:bg-blue-600 text-white font-semibold rounded-md'>
                Explorar la librería
              </button>
            </Link>
            <Link to={'/home/recommendation'}>
              <button className='bg-blue-500 p-3 hover:bg-blue-600 text-white font-semibold rounded-md w-64'>
                Obtener una recomendación
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
