import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div >
        <h1 className='text-gray'>Desafiá los límites de los lectura con Bookbuster</h1>
        <h3>
          Encontrá historias atrapantes de la manera que vos quieras. Descargá,
          alquilá, comprá y vendé libros en tu nueva librería online.
        </h3>

        <Link to={'/home/library'}>
          <button>Explorar la librería</button>
        </Link>

        <button>Suscribirme</button>
      </div>

      <div>
        <div>
          <h1>Recomendaciones personalizadas</h1>
          <p>
            Brindamos recomendaciones personalizadas que coincidan con tus
            intereses. Además, contamos con expertos en el rubro a la hora de
            publicar reseñas oficiales.
          </p>
        </div>

        <div>
          <p>imagen</p>
        </div>
      </div>

      <div>
        <div>
          <h1>Descargá, alquilá, comprá o vendé libros</h1>
          <p>
            Accedé a una amplia gama de libros que se pueden descargar,
            alquilar, vender o comprar. Todos nuestros libros cuentan con un
            sello de calidad que te garantiza su perfecto estado.
          </p>
        </div>

        <div>
          <p>imagen</p>
        </div>
      </div>

      <div>
        <div>
          <h1>Una librería tradicional, en un entorno digital</h1>
          <p>
            Desde tu hogar, explorá nuestra colección de libros y disfrutá de la
            sensación de descubrimiento y exploración que disfrutarías en una
            librería física.
          </p>
        </div>

        <div>
          <p>imagen</p>
        </div>
      </div>

      <div>
        <h1>¿No encontrás lo que buscas? </h1>
        <h2>Asesorate con nuestros libreros, o recorré nuestro catálogo.</h2>
        <Link to={'/home/library'}>
          <button>Explorar la librería</button>
        </Link>

        <button>Suscribirme</button>
      </div>
    </div>
  );
};

export default Home;
