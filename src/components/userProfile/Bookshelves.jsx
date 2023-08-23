import { useEffect, useState } from 'react';
import { getBookshelves } from '../../store/books/bookshelvesSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllBookshelves,
  createNewShelf,
} from '../../store/books/bookshelvesSlice';
import Carrousel from './Carrousel';

const INITIAL_FORM_STATE = {
  name: '',
};

const Bookshelves = () => {
  const dispatch = useDispatch();
  const bookshelves = useSelector(selectAllBookshelves);

  const book_shelves_id = bookshelves.id;
  const { book_shelf_categories } = bookshelves;

  const [form, setForm] = useState();

  useEffect(() => {
    dispatch(getBookshelves());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let name = { ...form };
    dispatch(createNewShelf({ name, book_shelves_id }));
    setForm(INITIAL_FORM_STATE);
  };

  return (
    <div>
      <h1 className='font-bold font-roboto text-5xl text-bluebook my-10 ml-6 text-center uppercase'>
        Mis estanterías
      </h1>
      <div className='ml-6 mb-10'>
        <form onSubmit={handleSubmit}>
          <h2 className='font-roboto '>Creá tu propia estantería</h2>
          <label htmlFor='name'></label>
          <input
            type='text'
            name='name'
            value={form?.name}
            placeholder='Nombre de tu estantería...'
            onChange={handleChange}
            className='bg-slate-100 text-slate-600 h-12 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-300 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-gray-300'
          />
          <button
            className='bg-bluebook text-white rounded-lg h-12 w-fit px-4 hover:bg-blue-700'
            type='submit'
          >
            Crear
          </button>
        </form>
      </div>
      <div className='flex flex-col justify-center items-center'>
        {book_shelf_categories &&
          book_shelf_categories.map((bookshelf) => (
            <div className='my-4' key={bookshelf.id}>
              <Carrousel bookshelf={bookshelf} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Bookshelves;
