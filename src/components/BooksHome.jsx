import { Link } from 'react-router-dom';

export function ListOfBooks({ books }) {
  return (
    <ul className='grid grid-cols-4 gap-5'>
      {books.map((book) => (
        <Link to={`/detail/${book.id}`}>
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <img
              src={book.images.cover}
              alt={book.title}
              className='h-72 w-3/4 object-cover'
            />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export function NoBooksResults() {
  return <p>No se encontraron libros para esta búsqueda</p>;
}

export function Books({ books }) {
  const hasBooks = books?.length > 0;

  return hasBooks ? <ListOfBooks books={books} /> : <NoBooksResults />;
}
