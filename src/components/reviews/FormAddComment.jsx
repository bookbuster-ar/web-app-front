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
      <form onSubmit={submitHandler}>
        <h2 className='text-lg my-2.5'>Comentar</h2>
        <label htmlFor='comment'></label>
        <textarea
          name='comment'
          id='comment'
          value={form.comment}
          onChange={changeHandler}
          placeholder='Comentá lo que pensás'
          className='w-96 bg-gray-200 border-none text-sm'
        ></textarea>
        <button
          type='submit'
          className='bg-blue-500 p-3 hover:bg-blue-600 text-white font-semibold rounded-md'
        >
          Publicar
        </button>
      </form>
    </div>
  );
};

export default FormAddComment;
