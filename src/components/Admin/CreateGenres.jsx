import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNewGenreStatus, createGenre } from '../../store/user/adminSlice';

const CreateGenres = () => {
  const dispatch = useDispatch();
  const newGenreStatus = useSelector(selectNewGenreStatus);

  const [newGenreName, setNewGenreName] = useState('');

  const handleCreateGenre = () => {
    if (newGenreName.trim() !== '') {
      dispatch(createGenre({ name: newGenreName }));
      setNewGenreName('');
    }
  };
  return (
    <div className='my-10'>
      <h1 className='bg-bluebook w-60 mx-auto text-white rounded-lg py-2 px-4 text-center'>
        Crear nuevos Géneros
      </h1>
      <div className='container mx-auto'>
        <div className='h-50 w-full rounded-lg bg-white mt-20'>
          <div className='flex items-center justify-between border-b mt-3'>
            <div className='p-3 text-gray-700 text-lg font-bold'>Género</div>
            <input
              type='text'
              value={newGenreName}
              onChange={(e) => setNewGenreName(e.target.value)}
              className='p-5 text-gray-700 text-lg border-b w-full mr-3 rounded-lg'
              placeholder='Nuevo género'
            />

            <button
              onClick={handleCreateGenre}
              className='text-slate-800 h-13 hover:text-blue-600 text-md bg-white hover:bg-slate-100 border border-slate-200 rounded-lg font-medium px-4 py-2 '
            >
              Crear Género
            </button>
          </div>
          {newGenreStatus === 'loading' && <p>Loading...</p>}
          {newGenreStatus === 'succeeded' && <p>Género creado!</p>}
          {newGenreStatus === 'failed' && <p>Error creando género .</p>}
        </div>
      </div>
    </div>
  );
};

export default CreateGenres;
