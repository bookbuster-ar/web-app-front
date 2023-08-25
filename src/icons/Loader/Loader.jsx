import './Loader.css'; // Importa los estilos

const Loader = () => {
  return (
    <div className="relative w-8 h-8 loader">
      <div className="loader-child bg-bluebook"></div>
      <div className="loader-child bg-bluebook"></div>
      <div className="loader-child bg-bluebook"></div>
      <div className="loader-child bg-bluebook"></div>
      <div className="loader-child bg-bluebook"></div>
    </div>
  );
};

export default Loader;
