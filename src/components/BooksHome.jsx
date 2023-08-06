export function ListOfBooks({books}) {
  return(
    <ul className="grid grid-cols-4 gap-5">
      {books.map((book) => (
        <li key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <img src={book.images.cover} alt={book.title} className='h-72 w-3/4 object-cover' />
        </li>
      ))}
    </ul>
  )
}

export function NoBooksResults () {
  return <p>No se encontraron libros para esta busqueda</p>
}

export function Books({ books }) {
  const hasBooks = books?.length > 0;

  return hasBooks ? <ListOfBooks books={books} /> : <NoBooksResults />
}