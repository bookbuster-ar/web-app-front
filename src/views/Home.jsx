import { Link } from "react-router-dom";
import image1 from "../assets/Home1.png";
import image2 from "../assets/Home2.png";
import image3 from "../assets/Home3.png";

const Home = () => {
  return (
    <div>
      <div className="bg-red-300 h-screen flex flex-col items-center justify-center space-y-12">
        <div>
          <h1 className="font-bold text-4xl">
            Desafiá los límites de los lectura con Bookbuster
          </h1>
        </div>
        <div className="w-2/5 text-center ">
          <h3 className="font-bold text-white">
            Encontrá historias atrapantes de la manera que vos quieras.
            Descargá, alquilá, comprá y vendé libros en tu nueva librería
            online.
          </h3>
        </div>
        <div className="flex flex-col space-y-4 w-56 items-center justify-center">
          <Link to={"/home/library"}>
            <button className="bg-blue-500 p-3 hover:bg-blue-600 text-white font-semibold rounded-md">
              Explorar la librería
            </button>
          </Link>
          <button className="w-32 bg-blue-500 p-3 hover:bg-blue-600 text-white font-semibold rounded-md">
            Suscribirme
          </button>
        </div>
      </div>

      <div className="bg-white text-black h-screen flex justify-center items-center">
        <div className="h-96 w-9/12 flex text-xl">
          <div className="w-3/5 h-full p-14 space-y-6">
            <div>
              <h1 className="font-bold text-3xl">
                Recomendaciones personalizadas
              </h1>
            </div>
            <div className="font-sans text-lg">
              <p>
                Brindamos recomendaciones personalizadas que coincidan con tus
                intereses. Además, contamos con expertos en el rubro a la hora
                de publicar reseñas oficiales.
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center h-full w-full">
            <img src={image1} alt="Imagen" className="max-w-lg" />
          </div>
        </div>
      </div>

      <div className="bg-white text-black h-screen flex justify-center items-center">
        <div className="h-96 w-4/5 flex text-xl">
          <div className="h-full p-9 space-y-6">
            <div>
              <h1 className="font-bold text-3xl">
                Descargá, alquilá, comprá o vendé libros
              </h1>
            </div>
            <div className="font-sans text-lg">
              <p>
                Accedé a una amplia gama de libros que se pueden descargar,
                alquilar, vender o comprar. Todos nuestros libros cuentan con un
                sello de calidad que te garantiza su perfecto estado.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center h-full w-full">
            <img src={image2} alt="Imagen2" className="max-w-lg" />
          </div>
        </div>
      </div>

      <div className="bg-white text-black h-screen flex justify-center items-center">
        <div className="h-96 w-4/5 flex text-xl">
          <div className="h-full p-9 space-y-6">
            <div>
              <h1 className="font-bold text-3xl">
                Una librería tradicional, en un entorno digital
              </h1>
            </div>
            <div>
              <p className="w-9/12">
                Desde tu hogar, explorá nuestra colección de libros y disfrutá
                de la sensación de descubrimiento y exploración que disfrutarías
                en una librería física.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center h-full w-full">
            <img src={image3} alt="Imagen3" className="max-w-xl" />
          </div>
        </div>
      </div>

      <div className="bg-white h-screen flex items-center justify-center">
        <div className="bg-red-300 w-screen h-4/5 flex flex-col items-center justify-center space-y-12">
          <div>
            <h1 className="font-bold text-2xl">¿No encontrás lo que buscas?</h1>
          </div>
          <div className="w-2/5 text-center ">
            <h2 className="font-bold text-2xl">
              Asesorate con nuestros libreros, o recorré nuestro catálogo.
            </h2>
          </div>
          <div className="flex flex-col space-y-4 w-56 items-center justify-center">
            <Link to={"/home/library"}>
              <button className="bg-blue-500 p-3 hover:bg-blue-600 text-white font-semibold rounded-md">
                Explorar la librería
              </button>
            </Link>
            <button className="bg-blue-500 p-3 hover:bg-blue-600 text-white font-semibold rounded-md">
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
