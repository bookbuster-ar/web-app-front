import { Link } from 'react-router-dom';
import image1 from '../assets/Home1.png';
import BgRed from '../assets/BgRed.png';
import BgYellow from '../assets/BgYellow.png';
import BgPink from '../assets/BgPink.png';
import PhotoHome from '../assets/PhotoHome.png';
import PhotoHome3 from '../assets/PhotoHome3.png';
import PhotoHome5 from '../assets/PhotoHome5.png';
import PhotoHome4 from '../assets/PhotoHome4.png';
import ElementoHome4 from '../assets/ElementoHome4.png';
import IconoBoton1 from '../assets/IconoBoton1.png';
import IconoBoton2 from '../assets/IconoBoton2.png';

import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <div className='bg-white h-screen flex flex-row'>
        <div className='flex flex-col items-center justify-center '>
          <div>
            <h1 className='font-bold text-7xl text-blue-500'>DESAFIÁ</h1>
            <h1 className='font-bold text-7xl text-blue-500'>LAS NORMAS</h1>
            <h2 className='font-bold text-4xl text-pink-300'>
              de la lectura con Bookbuster
            </h2>
          </div>
          <div className='w-4/5 text-center '>
            <p className='font-bold text-blue-400 '>
              Encontrá las historias que te apasionan a tu manera. Alquilá,
              visualizá, escuchá, comprá y vendé libros en tu nueva librería on
              line.
            </p>
          </div>
          <div className='flex flex-row w-56 items-center justify-center content-center'>
            <Link to={'/home/library'}>
              <button className='bg-blue-500 p-2 hover:bg-blue-600 text-white font-semibold  w-64 m-2 flex justify-center'>
                <img src={IconoBoton2} className='mx-1' />
                Explorar la librería
              </button>
            </Link>
            <Link to={'/home/recommendation'}>
              <button className='bg-blue-500 p-2 hover:bg-blue-600 text-white font-semibold  w-64 flex justify-center '>
                <img src={IconoBoton1} className='mx-1' />
                Obtener una recomendación
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={PhotoHome} alt='Imagen' className='max-w-lg m-12' />
        </div>
      </div>
      <div
        className='bg-cover h-screen flex  bg-image'
        style={{ backgroundImage: `url(${BgRed})` }}
      >
        <div>
          <img src={image1} alt='Imagen' className='w-full h-full' />
        </div>
        <div className='w-3/5 flex text-xl flex-col justify-center'>
          <div>
            <h1 className='font-bold text-7xl text-white '>RECOMENDACIONES</h1>
            <h1 className='font-bold text-7xl text-white'>PERSONALIZADAS</h1>
          </div>

          <p className='font-sans text-lg text-white w-4/5'>
            Brindamos recomendaciones personalizadas que coincidan con tus
            intereses. Además, contamos con expertos en el rubro a la hora de
            publicar reseñas oficiales.
          </p>
        </div>
      </div>
      <div
        className='bg-cover h-screen flex bg-image'
        style={{ backgroundImage: `url(${BgYellow})` }}
      >
        <div className='w-3/5 flex text-xl flex-col justify-center m-12'>
          <h1 className='font-bold text-7xl text-blue-500'>
            COMPRÁ, VISUALIZÁ
          </h1>
          <h1 className='font-bold text-7xl text-blue-500 my-2'>
            ESCUCHÁ, ALQUILÁ O{' '}
          </h1>
          <h1 className='font-bold text-7xl text-blue-500'>VENDÉ LIBROS</h1>

          <p className='font-sans text-lg text-blue-600 w-4/5'>
            Accedé a una amplia gama de libros que se pueden leer en línea,
            escuchar, alquilar, vender o comprar. Todos nuestros libros cuentan
            con un sello de calidad que te garantiza su perfecto estado.
          </p>
        </div>
        <div>
          <img src={PhotoHome5} alt='Imagen' className='w-full h-full ' />
        </div>
      </div>
      <div
        className='bg-cover h-screen flex  bg-image'
        style={{ backgroundImage: `url(${BgPink})` }}
      >
        <div>
          <img src={PhotoHome3} alt='Imagen' className='w-full h-full' />
        </div>
        <div className='w-3/5 flex text-xl flex-col justify-center m-12'>
          <div>
            <h1 className='font-bold text-7xl text-white '>UNA LIBRERÍA</h1>
            <h1 className='font-bold text-7xl text-white'>
              TRADICIONAL, EN UN
            </h1>
            <h1 className='font-bold text-7xl text-white'>ENTORNO DIGITAL</h1>
          </div>

          <p className='font-sans text-lg text-white w-4/5'>
            Desde tu hogar, explorá nuestra colección de libros y disfrutá de la
            sensación de descubrimiento y exploración que disfrutarías en una
            librería física.
          </p>
        </div>
      </div>
      <div className='bg-white h-screen flex flex-row'>
        <div className='flex flex-col items-center justify-center w-8/12 m-12'>
          <div>
            <h1 className='font-bold text-7xl text-blue-500'>¿NO ENCONTRÁS</h1>
            <h1 className='font-bold text-7xl text-blue-500'>LO QUE BUSCÁS?</h1>
          </div>
          <div className='w-4/5 text-center '>
            <h2 className='font-bold text-blue-400 '>
              Recorré nuestro catálogo.
            </h2>
          </div>
          <div className='flex flex-row  w-56 items-center justify-center content-center'>
            <Link to={'/home/library'}>
              <button className='bg-blue-500 p-2 hover:bg-blue-600 text-white font-semibold  w-64 m-2 flex justify-center'>
                <img src={IconoBoton2} className='mx-1' />
                Explorar la librería
              </button>
            </Link>
            <Link to={'/home/recommendation'}>
              <button className='bg-blue-500 p-2 hover:bg-blue-600 text-white font-semibold  w-64 flex justify-center '>
                <img src={IconoBoton1} className='mx-1' />
                Obtener una recomendación
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={PhotoHome4}
            alt='Imagen'
            className='max-w-lg h-full absolute '
          />
          <img src={ElementoHome4} alt='Imagen' className='h-full w-full' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
