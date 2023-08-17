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

    let newReview = { ...form };
    dispatch(postQuote({ newQuote, id })); //ya se q no es necesario pero si no me aparecía en consola q se borraba antes del post
    setForm(INITIAL_FORM_STATE);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2 className='text-lg my-2.5'>Cita</h2>
        <label htmlFor='content'></label>
        <textarea
          name='content'
          id='content'
          value={form.content}
          onChange={changeHandler}
          placeholder='Anotá unas líneas'
          className='w-96 bg-gray-200 border-none text-sm'
        ></textarea>

        <button
          type='submit'
          className='bg-blue-500 p-3 hover:bg-blue-600 text-white font-semibold rounded-md w-96'
        >
          Publicar
        </button>
      </form>
    </div>
  );
};

export default FormAddQuote;
