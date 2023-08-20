import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postReview } from '../../store/reviews/reviewsSlice';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage';
import { selectReviewsError } from '../../store/reviews/reviewsSlice';

const INITIAL_FORM_STATE = {
  content: '',
  rating: 0,
  reaction: '',
};

const reactions = [
  {
    name: '😍 Me lo devoré',
    id: 'mld',
    color: 'bg-pinkbook',
    hover: 'hover:bg-pink-400',
    text: 'text-bluebook',
  },
  {
    name: '💤 Me costó terminarlo',
    id: 'mct',
    color: 'bg-bluebook',
    hover: 'hover:bg-blue-800',
    text: 'text-white',
  },
  {
    name: '✈️ Para viajar',
    id: 'pv',
    color: 'bg-redbook',
    hover: 'hover:bg-red-700',
    text: 'text-yellowbook',
  },
  {
    name: '🤩 Soy Fan',
    id: 'sf',
    color: 'bg-bluebook',
    hover: 'hover:bg-blue-800',
    text: 'text-yellowbook',
  },
  {
    name: '💧 Preparate para llorar',
    id: 'ppl',
    color: 'bg-pinkbook',
    hover: 'hover:bg-pink-400',
    text: 'text-redbook',
  },
  {
    name: '💕 Romántico',
    id: 'rom',
    color: 'bg-yellowbook',
    hover: 'hover:bg-yellow-400',
    text: 'text-bluebook',
  },
  {
    name: '💖 Adorable',
    id: 'ado',
    color: 'bg-redbook',
    hover: 'hover:bg-red-700',
    text: 'text-white',
  },
  {
    name: '🤚 Ni fu ni fa',
    id: 'nfnf',
    color: 'bg-yellowbook',
    hover: 'hover:bg-yellow-400',
    text: 'text-bluebook',
  },
  {
    name: '🌟 Profundo',
    id: 'pro',
    color: 'bg-bluebook',
    hover: 'hover:bg-blue-800',
    text: 'text-pinkbook',
  },
  {
    name: '🎀 Para regalar',
    id: 'pp',
    color: 'bg-orangebook',
    hover: 'hover:bg-orange-700',
    text: 'text-yellowbook',
  },
  {
    name: '💀 Espeluznante',
    id: 'esp',
    color: 'bg-pinkbook',
    hover: 'hover:bg-pink-400',
    text: 'text-bluebook',
  },
  {
    name: '💪 Justo en el blanco',
    id: 'jeeb',
    color: 'bg-orangebook',
    hover: 'hover:bg-orange-700',
    text: 'text-white',
  },
  {
    name: '😎 Adictivo',
    id: 'adi',
    color: 'bg-yellowbook',
    hover: 'hover:bg-yellow-400',
    text: 'text-bluebook',
  },
  {
    name: '☀️ Perfecto para la playa',
    id: 'pplp',
    color: 'bg-orangebook',
    hover: 'hover:bg-orange-700',
    text: 'text-white',
  },
  {
    name: '💡 He aprendido mucho',
    id: 'hap',
    color: 'bg-redbook',
    hover: 'hover:bg-red-700',
    text: 'text-white',
  },
];

const FormAddReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [showError, setShowError] = useState(false);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const ratingHandler = (event) => {
    const parsedRating = parseInt(event.target.value, 10); // Añade el radix 10 por buena práctica
    setForm((prevState) => ({ ...prevState, rating: parsedRating }));
  };

  const reactionHandler = (event) => {
    event.preventDefault();
    let newReaction = event.target.value;
    if (form.reaction === '') {
      setForm((prevState) => ({
        ...prevState,
        reaction: newReaction,
      }));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      !localStorage.getItem('session_id') ||
      !localStorage.getItem('user_id')
    ) {
      setShowError(true); // Set the state to show the error message
      return;
    }

    let newReview = { ...form };
    dispatch(postReview({ newReview, id })); //ya se q no es necesario pero si no me aparecía en consola q se borraba antes del post
    setForm(INITIAL_FORM_STATE);
  };

  return (
    <div>
      {showError && (
        <ErrorMessage
          message={'Es necesario iniciar sesión para crear una reseña'}
        />
      )}
      <form
        onSubmit={submitHandler}
        className='flex flex-col justify-center p-6 shadow-lg rounded-lg w-9/12'
      >
        <label htmlFor='content'></label>
        <textarea
          name='content'
          id='content'
          value={form.content}
          onChange={changeHandler}
          placeholder='Anotá unas líneas'
          className='bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-300 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-gray-300'
        ></textarea>
        <div className='flex '>
          <input
            value='1'
            name='rating'
            id='star1'
            type='radio'
            onClick={ratingHandler}
            className='hidden'
          />
          <label
            htmlFor='star1'
            className='text-3xl float-right cursor-pointer transition-colors duration-300 text-gray-300 hover:text-blue-600'
          >
            ★
          </label>
          <input
            value='2'
            name='rating'
            id='star2'
            type='radio'
            onClick={ratingHandler}
            className='hidden'
          />
          <label
            htmlFor='star2'
            className='text-3xl float-right cursor-pointer transition-colors duration-300 text-gray-300 hover:text-blue-600'
          >
            ★
          </label>
          <input
            value='3'
            name='rating'
            id='star3'
            type='radio'
            onClick={ratingHandler}
            className='hidden'
          />
          <label
            htmlFor='star3'
            className='text-3xl float-right cursor-pointer transition-colors duration-300 text-gray-300 hover:text-blue-600'
          >
            ★
          </label>
          <input
            value='4'
            name='rating'
            id='star4'
            type='radio'
            onClick={ratingHandler}
            className='hidden'
          />
          <label
            htmlFor='star4'
            className='text-3xl float-right cursor-pointer transition-colors duration-300 text-gray-300 hover:text-blue-600'
          >
            ★
          </label>
          <input
            value='5'
            name='rating'
            id='star5'
            type='radio'
            onClick={ratingHandler}
            className='hidden'
          />
          <label
            htmlFor='star5'
            className='text-3xl float-right cursor-pointer transition-colors duration-300 text-gray-300 hover:text-blue-600'
          >
            ★
          </label>
        </div>
        <div>
          {reactions.map((reaction) => {
            return (
              <button
                key={reaction.id}
                value={reaction.id}
                className={`m-2 border-none  ${reaction.color} ${reaction.text} font-bold px-4 py-2 m-2 transition duration-500 ease select-none ${reaction.hover} focus:outline-none focus:shadow-outline focus:ring focus:ring-blue-300`}
                onClick={reactionHandler}
              >
                {reaction.name}
              </button>
            );
          })}
        </div>

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

export default FormAddReview;
