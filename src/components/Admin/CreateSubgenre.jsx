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

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [subgenreName, setSubgenreName] = useState('');

  const handleGenreSelect = (genreId) => {
    setSelectedGenre(genreId);
  };

  const handleSubgenreCreate = () => {
    if (selectedGenre && subgenreName) {
      dispatch(createSubgenre({ genreId: selectedGenre, subgenreName }));
      setSubgenreName('');
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
              Seleccioná un género:
            </h1>
            <select
              value={selectedGenre}
              onChange={(e) => handleGenreSelect(e.target.value)}
              className='border rounded-lg px-4 py-2 mx-3 w-1/3 text-gray-700 text-lg cursor-pointer'
            >
              <option value=''>Seleccionar género...</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
            <div />
          </div>
        </div>
        <div className='p-3 flex items-center justify-center'>
          {selectedGenre && status === 'succeeded' && (
            <input
              type='text'
              value={subgenreName}
              onChange={(e) => setSubgenreName(e.target.value)}
              placeholder='Nombre del subgénero'
              className='border rounded-lg px-4 py-2 w-96 h-12 '
            />
          )}
          {selectedGenre && (
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
