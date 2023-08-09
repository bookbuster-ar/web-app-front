import './Loader.css'; // Importa los estilos

const Loader = () => {
  return (
    <div className="relative w-8 h-8 loader">
      <div className="loader-child bg-gray-800"></div>
      <div className="loader-child bg-gray-800"></div>
      <div className="loader-child bg-gray-800"></div>
      <div className="loader-child bg-gray-800"></div>
      <div className="loader-child bg-gray-800"></div>
    </div>
  );
};

export default Loader;
