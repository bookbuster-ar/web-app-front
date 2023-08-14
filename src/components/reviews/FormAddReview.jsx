import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postReview } from '../../store/reviews/reviewsSlice';
import { useParams } from 'react-router-dom';

const INITIAL_FORM_STATE = {
  content: '',
  rating: 0,
  reaction: '',
};

const reactions = [
  { name: 'Me lo devoré', id: 'mld', color: 'bg-red-300' },
  { name: 'Me costó terminarlo', id: 'mct', color: 'bg-blue-500' },
  { name: 'Para viajar', id: 'pv', color: 'bg-green-500' },
  { name: 'Soy Fan', id: 'sf', color: 'bg-red-600' },
  { name: 'Preparate para llorar', id: 'ppl', color: 'bg-yellow-400' },
  { name: 'Romántico', id: 'rom', color: 'bg-red-300' },
  { name: 'Adorable', id: 'ado', color: 'bg-yellow-400' },
  { name: 'Ni fu ni fa', id: 'nfnf', color: 'bg-red-300' },
  { name: 'Profundo', id: 'pro', color: 'bg-green-500' },
  { name: 'Para regalar', id: 'pp', color: 'bg-blue-500' },
  { name: 'Espeluznante', id: 'esp', color: 'bg-red-600' },
  { name: 'Justo en el blanco', id: 'jeeb', color: 'bg-yellow-400' },
  { name: 'Adictivo', id: 'adi', color: 'bg-red-300' },
  { name: 'Perfecto para la playa', id: 'pplp', color: 'bg-green-500' },
  { name: 'He aprendido mucho', id: 'hap', color: 'bg-blue-500' },
];

const FormAddReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [form, setForm] = useState(INITIAL_FORM_STATE);

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

  const submitHandler = async (event) => {
    event.preventDefault();

    if (
      !localStorage.getItem('session_id') ||
      !localStorage.getItem('user_id')
    ) {
      window.alert('Es necesario iniciar sesión para crear la reseña');
      return;
    }

    let newReview = { ...form };
    await dispatch(postReview({ newReview, id })); //ya se q no es necesario pero si no me aparecía en consola q se borraba antes del post
    setForm(INITIAL_FORM_STATE);
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className='flex flex-col justify-center md:col-span-4 p-6 shadow-lg rounded-lg my-11'
      >
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
                className={`m-2 border-none  ${reaction.color} text-white px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline focus:ring focus:ring-blue-300`}
                onClick={reactionHandler}
              >
                {reaction.name}
              </button>
            );
          })}
        </div>

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

export default FormAddReview;
