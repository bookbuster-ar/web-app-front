import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createRecommend } from '../../store/user/adminSlice';
import {
  fetchGenres,
  fetchGenre,
  selectSingleGenre,
  selectAllGenres,
  selectSingleGenreStatus,
} from '../../store/books/bookSlice';
const RecommendBooks = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectAllGenres);

  const booksByGenre = useSelector(selectSingleGenre);

  const status = useSelector(selectSingleGenreStatus);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedBooks, setSelectedBooks] = useState([]);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  useEffect(() => {
    if (selectedGenre) {
      dispatch(fetchGenre(selectedGenre));
    }
  }, [dispatch, selectedGenre]);

  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId);
    setSelectedBooks([]);
  };

  const handleBookSelect = (bookId) => {
    if (selectedBooks.includes(bookId)) {
      setSelectedBooks(selectedBooks.filter((id) => id !== bookId));
    } else {
      setSelectedBooks([...selectedBooks, bookId]);
    }
  };

  const handleAddRecommended = () => {
    const dataToSend = {
      booksId: selectedBooks,
      genreId: selectedGenre,
    };

    dispatch(createRecommend(dataToSend));

    setSelectedBooks([]);
  };
  return (
    <div className='flex justify-center items-center'>
      <h1 className='text-xl md:text-2xl bg-bluebook py-2 px-4 w-72 text-center text-white rounded-lg font-bold mb-4'>
        Libros Recomendados
      </h1>
      <select
        className='text-xl block mb-4 p-2 border border-gray-300 rounded'
        onChange={(e) => handleGenreChange(e.target.value)}
      >
        <option value=''>Selecciona un género</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      {selectedGenre && status === 'succeeded' && (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-11/12 cursor-pointer'>
          {booksByGenre.books.map((book) => (
            <div
              key={book.id}
              className={`p-4 border border-gray-300 rounded  ${
                selectedBooks.includes(book.id)
                  ? 'bg-blue-500 text-white transition-all duration-300 scale-105'
                  : ''
              }`}
              onClick={() => handleBookSelect(book.id)}
            >
              <h2 className='text-lg font-semibold'>{book.title}</h2>
            </div>
          ))}
        </div>
      )}
      <button
        className='mt-4 bg-bluebook text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer'
        onClick={(event) => handleAddRecommended(event.target.value)}
        disabled={selectedBooks.length === 0}
      >
        Agregar Recomendados
      </button>
    </div>
  );
};

export default RecommendBooks;
