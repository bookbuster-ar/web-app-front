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
  console.log(genres);

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
          <div className='flex items-center justify-center border-b'>
            <div className='p-3 text-gray-700 text-lg font-bold  my-10'>
              Género:
            </div>
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
        <div className='p-3 flex '>
          {selectedGenre && status === 'succeeded' && (
            <input
              type='text'
              value={subgenreName}
              onChange={(e) => setSubgenreName(e.target.value)}
              placeholder='Nombre del subgénero'
              className='border rounded-l-lg px-4 py-2 w-full w-1/3 '
            />
          )}
          {selectedGenre && subgenreName && (
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
