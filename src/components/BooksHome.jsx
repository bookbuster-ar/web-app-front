import { Link } from 'react-router-dom';

export function ListOfBooks({ books }) {
  return (
    <ul className='grid grid-cols-4 gap-5'>
      {books.map((book) => (
        <Link to={`/detail/${book.id}`}>
          <li key={book.id}>
            <img
              src={book.images.cover}
              alt={book.title}
              className='h-72 w-3/4 object-cover'
            />
            <p className='text-xs'>{book.author}</p>
            <h3 className='font-semibold text-sm'>{book.title}</h3>
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
