import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postReview } from '../../store/reviews/reviewsSlice';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage';
import { selectReviewsError } from '../../store/reviews/reviewsSlice';

import { AiFillStar } from 'react-icons/ai';

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

    let newReview = { ...form };
    dispatch(postReview({ newReview, id }));
    setForm(INITIAL_FORM_STATE);
  };

  const starList = [...Array(5)].map((ignored, i) => {
    if (i < form.rating) {
      return (
        <AiFillStar
          className='text-3xl cursor-pointer text-yellow-400'
          key={i}
          onClick={() => setForm({ ...form, rating: i + 1 })}
        />
      );
    } else {
      return (
        <AiFillStar
          className='text-3xl cursor-pointer text-gray-300 hover:text-yellow-400'
          key={i}
          onClick={() => setForm({ ...form, rating: i + 1 })}
        />
      );
    }
  });

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

        <div className='flex p-2 md:w-[530px] lg:w-[750px] xl:w-[700px]'>{...starList}</div>
        <div className=' md:w-[420px] lg:w-[560px] xl:w-[700px]'>
          {reactions.map((reaction) => {
            return (
              <button
                key={reaction.id}
                value={reaction.id}
                className={`m-2 border-none  ${reaction.color} ${reaction.text} font-bold px-4 py-2 m-2 transition duration-500 ease select-none ${reaction.hover} focus:outline-none focus:shadow-outline focus:ring focus:ring-blue-300 text-[12px] md:text-[12px] lg:text-[15px] xl:text-[15px]`}
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
