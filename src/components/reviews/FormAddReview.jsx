import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postReview } from '../../store/reviews/reviewsSlice';
import { useParams } from 'react-router-dom';

const INITIAL_FORM_STATE = {
  content: '',
  rating: 0,
  reaction: null,
};

const FormAddReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [form, setForm] = useState('');
  const [rating, setRating] = useState();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const ratingHandler = (value) => {
    setRating(parseInt(value));
    setForm({ ...form, rating: rating });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      !localStorage.getItem('session_id') ||
      !localStorage.getItem('user_id')
    ) {
      window.alert('Es necesario iniciar sesión para crear la reseña');
      return;
    }

    let newReview = { ...form };
    dispatch(postReview(newReview, id));
    setForm(INITIAL_FORM_STATE);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className='flex flex-col justify-center '>
        <h2 className='text-lg my-2.5'>Opinión acerca del libro</h2>
        <label htmlFor='content'></label>
        <textarea
          name='content'
          id='content'
          value={form.content}
          onChange={changeHandler}
          placeholder='Anotá unas líneas'
          className='w-96 bg-gray-200 border-none text-sm'
        ></textarea>
        <div className='inline-block'>
          <input
            value='5'
            name='rating'
            id='star5'
            type='radio'
            onClick={ratingHandler}
          />
          <label
            htmlFor='star5'
            className='float-right cursor-pointer '
          ></label>
          <input
            value='4'
            name='rating'
            id='star4'
            type='radio'
            onClick={ratingHandler}
          />
          <label htmlFor='star4'></label>
          <input
            value='3'
            name='rating'
            id='star3'
            type='radio'
            onClick={ratingHandler}
          />
          <label htmlFor='star3'></label>
          <input
            value='2'
            name='rating'
            id='star2'
            type='radio'
            onClick={ratingHandler}
          />
          <label htmlFor='star2'></label>
          <input
            value='1'
            name='rating'
            id='star1'
            type='radio'
            onClick={ratingHandler}
          />
          <label htmlFor='star1'></label>
        </div>
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

export default FormAddReview;
