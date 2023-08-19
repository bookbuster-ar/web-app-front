import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postQuote } from '../../store/quotes/quotesSlice';
import { useParams } from 'react-router-dom';

const INITIAL_FORM_STATE = {
  content: '',
};

const FormAddQuote = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [form, setForm] = useState(INITIAL_FORM_STATE);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      !localStorage.getItem('session_id') ||
      !localStorage.getItem('user_id')
    ) {
      window.alert('Es necesario iniciar sesión para crear una cita');
      return;
    }

    let newQuote = { ...form };
    dispatch(postQuote({ newQuote, id }));
    setForm(INITIAL_FORM_STATE);
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className='bg-white grid grid-cols-6 gap-2 shadow-lg rounded-xl p-6 text-sm'
      >
        {/* flex flex-col justify-center md:col-span-4 p-6 shadow-lg rounded-lg
        my-11 */}
        {/* <h2 className='text-center text-gray-400 text-xl font-bold col-span-6'>
          Cita
        </h2> */}
        <label htmlFor='content'></label>
        <textarea
          name='content'
          id='content'
          value={form.content}
          onChange={changeHandler}
          placeholder='Tu cita...'
          className='bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-300 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-gray-300'
        ></textarea>
        <button
          type='submit'
          className='bg-slate-100 stroke-slate-600 border text-gray-500 border-slate-200 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-400 hover:text-gray-500  focus:border-slate-300'
        >
          Publicar
        </button>
      </form>
    </div>
  );
};

export default FormAddQuote;
