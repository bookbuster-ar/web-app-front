import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postComment } from '../../store/reviews/reviewsSlice';
import { useParams } from 'react-router-dom';

const INITIAL_FORM_STATE = {
  comment: '',
};

const FormAddComment = ({ reviewId }) => {
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
      window.alert('Es necesario iniciar sesión para comentar');
      return;
    }

    let newComment = { ...form };
    dispatch(postComment({ newComment, id, reviewId }));
    setForm(INITIAL_FORM_STATE);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className='my-6'>
        <h2 className='text-sm text-gray-800 '>Comentar</h2>
        <div className='flex justify-start items-center'>
          <label htmlFor='comment'></label>
          <textarea
            name='comment'
            id='comment'
            value={form.comment}
            onChange={changeHandler}
            placeholder='Comentá lo que pensás'
            className='w-full bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-gray-300 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-gray-300'
          ></textarea>
          <button
            type='submit'
            className='bg-slate-100 stroke-slate-600 border text-gray-500 border-slate-200 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-400 hover:text-gray-500  focus:border-slate-300'
          >
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddComment;
