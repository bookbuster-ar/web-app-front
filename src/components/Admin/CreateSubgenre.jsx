import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  fetchGenres,
  selectAllGenres,
  selectGenreStatus,
} from '../../store/books/bookSlice';
import { createSubgenre } from '../../store/user/adminSlice';

const CreateSubgenres = () => {
  const genres = useSelector(selectAllGenres);
  const status = useSelector(selectGenreStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [subgenreName, setSubgenreName] = useState('');
  console.log(selectedGenres);

  const handleGenreSelect = (genreId) => {
    setSelectedGenres((prevSelectedGenres) => {
      if (prevSelectedGenres.includes(genreId)) {
        return prevSelectedGenres.filter((id) => id !== genreId);
      } else {
        return [...prevSelectedGenres, genreId];
      }
    });
  };

  const handleSubgenreCreate = () => {
    if (selectedGenres.length > 0 && subgenreName) {
      dispatch(createSubgenre({ genreIds: selectedGenres, subgenreName }));
      setSubgenreName('');
      setSelectedGenres([]);
    }
  };

  return (
    <div className='my-10'>
      <h1 className='bg-bluebook w-72 mx-auto text-white rounded-lg py-2 px-4 text-center '>
        Crear nuevos Subgéneros
      </h1>
      <div className='container mx-auto'>
        <div className='h-50 w-full rounded-lg bg-white '>
          <div className='flex flex-col items-center justify-center border-b mb-10'>
            <h1 className='p-3 text-gray-700 text-lg font-bold mt-10'>
              Seleccioná uno o más géneros:
            </h1>
            <div className='space-y-2'>
              {genres.map((genre) => (
                <label key={genre.id} className='flex items-center space-x-2'>
                  <input
                    type='checkbox'
                    className='rounded text-blue-500 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                    checked={selectedGenres.includes(genre.id)}
                    onChange={() => handleGenreSelect(genre.id)}
                  />
                  <span>{genre.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className='p-3 flex items-center justify-center'>
          {selectedGenres.length > 0 && status === 'succeeded' && (
            <input
              type='text'
              value={subgenreName}
              onChange={(e) => setSubgenreName(e.target.value)}
              placeholder='Nombre del subgénero'
              className='border rounded-lg px-4 py-2 w-96 h-12 '
            />
          )}
          {selectedGenres.length > 0 && (
            <button
              onClick={handleSubgenreCreate}
              className='text-slate-800 hover:text-blue-600 text-md bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2'
            >
              Crear Subgénero
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateSubgenres;
