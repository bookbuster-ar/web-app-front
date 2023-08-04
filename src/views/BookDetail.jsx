// import React from "react";
// import { Link } from "react-router-dom";

const book = {
  title: "El principito",
  author: "Antoine de Saint-Exupéry",
  editorial: "Emecé",
  thematic: "Literatura infantil",
  publicationYear: 1943,
  publicationCountry: "Estados Unidos",
  language: "Español",
  recommendedAge: "6+",
  size: "Medio",
  image:
    "https://www.papelerabariloche.com.ar/img/p/064735/1.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
};

const BookDetail = () => {
  return (
    <div className="p-20 bg-white rounded-lg shadow-md">
      <div className="bg-gray-100 w-60 h-90 rounded-lg shadow-lg overflow-hidden align-items: center;">
        <img
          className="w-full h-full object-cover"
          src={book.image}
          alt={book.title}
        />
      </div>

      <div className="flex flex-col mt-9">
        <h1 className="text-3xl font-light text-gray-800">{book.title}</h1>
        <h2 className="text-lg text-gray-500 mt-2">by {book.author}</h2>
        <ul className="mt-4 space-y-2">
          <li className="text-sm text-gray-500">
            <span className="font-medium">Editorial:</span> {book.editorial}
          </li>
          <li className="text-sm text-gray-500">
            <span className="font-medium">Temática:</span> {book.thematic}
          </li>
          <li className="text-sm text-gray-500">
            <span className="font-medium">Año de publicación:</span>{" "}
            {book.publicationYear}
          </li>
          <li className="text-sm text-gray-500">
            <span className="font-medium">País de publicación:</span>{" "}
            {book.publicationCountry}
          </li>
          <li className="text-sm text-gray-500">
            <span className="font-medium">Idioma:</span> {book.language}
          </li>
          <li className="text-sm text-gray-500">
            <span className="font-medium">Edad recomendada:</span>{" "}
            {book.recommendedAge}
          </li>
          <li className="text-sm text-gray-500">
            <span className="font-medium">Tamaño:</span> {book.size}
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-light py-2 px-4 rounded-full">
          Ver opciones de adquisición
        </button>
      </div>

      <div className="mt-8 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-light text-gray-800">Sinopsis</h2>
        <p className="text-sm text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="mt-8 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-light text-gray-800">
          Reseñas editoriales
        </h2>
        <div className="mt-4">
          <h3 className="text-lg font-light text-gray-800">Asombroso</h3>
          <p className="text-sm text-gray-500 mt-2">
            El Principito es uno de los mejores libros que leí cuando era niña
          </p>
          <h3 className="text-md font-light text-gray-500 mt-2">
            Graciela Divaza
          </h3>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-light text-gray-800">Opiniones</h2>
        <div className="mt-4">
          <h3 className="text-lg font-light text-gray-800">
            Alfonso Rodriguez
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Acá alguien a quien le gusta la lectura dejará su opinión
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
