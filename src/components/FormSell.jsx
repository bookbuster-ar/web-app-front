import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createBook,
  selectBookStatus,
  setStatus,
} from '../store/books/bookSlice';
import buildFormData from '../util';
// import OrangeLines from '../assets/home/desafia/OrangeLines.png';
import Loader from '../icons/Loader/Loader';

const INITIAL_FORM_STATE = {
  title: '',
  author: '',
  publicationYear: '',
  editorialName: '',
  images: {
    cover: null,
    backCover: null,
    spine: null,
    inHalf: null,
  },
};

const FormSell = () => {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const status = useSelector(selectBookStatus);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const dispatch = useDispatch();

  const currentYear = new Date().getFullYear();
  const imagesLoaded = Object.values(form.images).filter(Boolean).length;

  // Handlers
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const changeHandlerImage = (event) => {
    const { name } = event.target;
    const updatedImages = { ...form.images, [name]: event.target.files[0] };
    setForm({ ...form, images: updatedImages });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const bookData = buildFormData(form);
    dispatch(createBook(bookData));
    // setForm(INITIAL_FORM_STATE);
  };

  const isValidForm = () => {
    return (
      form.title &&
      form.author &&
      form.publicationYear &&
      form.editorialName &&
      form.images.cover &&
      form.images.backCover &&
      form.images.spine &&
      form.images.inHalf
    );
  };

  if (status === 'loading') {
    return (
      <div className='h-screen flex items-center justify-center'>
        <Loader />
      </div>
    );
  }

  if (status === 'succeeded') {
    return (
      <div className='h-screen flex items-center justify-center'>
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen'>
            <div className='bg-white rounded-lg shadow-lg p-6 animate__animated animate__zoomIn'>
              <div className='flex items-center justify-center mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-green-300 mr-2'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M17.707,4.293c0.391,0.391,0.391,1.023,0,1.414l-9,9c-0.391,0.391-1.023,0.391-1.414,0l-5-5c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L8,12.586l8.293-8.293C16.684,3.902,17.316,3.902,17.707,4.293z'
                  />
                </svg>
                <h2 className='text-lg font-medium text-gray-900'>
                  ¡Envío Exitoso!
                </h2>
              </div>
              <p className='text-sm text-gray-500 mb-4'>
                Tu libro fue enviado para revisión. En las próximas 24 h nos
                pondremos en contacto con vos para confirmar el estado de tu
                publicación
              </p>
              <div className='flex justify-center'>
                <button
                  className='bg-green-400 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
                  onClick={() => dispatch(setStatus('idle'))}
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className='h-screen flex items-center justify-center'>
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen'>
            <div className='bg-white rounded-lg shadow-lg p-6 animate__animated animate__zoomIn'>
              <div className='flex items-center justify-center mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-red-500 mr-2'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293a1 1 0 00-1.414-1.414L10 8.586 7.707 7.293z'
                  />
                </svg>
                <h2 className='text-lg font-medium text-gray-900'>
                  ¡Error en el envío!
                </h2>
              </div>
              <p className='text-sm text-gray-500 mb-4'>
                ¡No fue posible enviar tu libro a Bookbuster! Verifica: <br />
                <br />- Estar logeado en tu cuenta
                <br /> -Tener una suscripción activa a Bookbuster <br /> <br />
              </p>
              <div className='flex justify-center'>
                <button
                  className='bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2'
                  onClick={() => dispatch(setStatus('idle'))}
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='flex flex-col justify-content items-center m-3 w-2/4 mx-auto'>
        <div className='flex flex-col justify-center  p-4 m-2 mx-auto'>
          {/* <div className='hidden md:absolute md:inline'>
            <img
              className='md:h-10 md:ml-80 md:-mt-16 lg:h-14 lg:ml-[400px] lg:-mt-20 xl:h-14 xl:ml-[10px] xl:-mt-[150px]'
              src={OrangeLines}
              alt='Lineas naranjas horizontales'
            />
          </div> */}
          <h1 className='font-bold font-roboto text-5xl text-bluebook my-6 text-center'>
            ¿CÓMO VENDERLE TUS LIBROS A BOOKBUSTER?
          </h1>
          <h2>
            Bookbuster es una plataforma de novedades editoriales. Para vender
            tu libro a la plataforma, debe cumplir los siguientes requisitos:
          </h2>
          <p className=' font-bold text-bluebook'>
            • El libro debe haberse publicado en los últimos 15 años.
          </p>
          <p className=' font-bold text-bluebook'>
            • No debe estar marcado, ni faltarle páginas, ni tener daños que
            impidan su correcta lectura.
          </p>
          <p>
            Si tu libro cumple con estos requisitos, completá los siguientes
            datos:
          </p>
          <p className='bg-red-300 w-fit p-1 rounded-md text-sm'>
            Todo campo que contenga <b className='text-red-600'>*</b> es de
            carácter obligatorio
          </p>
        </div>
        <form onSubmit={submitHandler} className='flex flex-col items-end'>
          <div className='my-2'>
            <label className='mr-16 w-48'>
              Título del libro <b className='text-red-500'>*</b>
            </label>
            <input
              type='text'
              name='title'
              onChange={changeHandler}
              value={form.title}
              className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
            />
          </div>

          <div className='my-2'>
            <label className='mr-16'>
              Autor <b className='text-red-500'>*</b>
            </label>
            <input
              type='text'
              name='author'
              value={form.author}
              onChange={changeHandler}
              className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
            />
          </div>

          <div className='my-2'>
            <label className='mr-16'>
              Año de publicación <b className='text-red-500'>*</b>
            </label>
            <input
              type='number'
              name='publicationYear'
              value={form.publicationYear}
              min={`${currentYear}` - 14}
              max={`${currentYear}`}
              onChange={changeHandler}
              className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
            />
          </div>

          <div className='my-2'>
            <label className='mr-16 '>
              Editorial <b className='text-red-500'>*</b>
            </label>
            <input
              type='text'
              name='editorialName'
              value={form.editorialName}
              onChange={changeHandler}
              className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
            />
          </div>

          <h1 className='mr-36 font-bold text-gray-600'>
            Fotos reales del libro
          </h1>

          <div className='flex flex-col items-end'>
            <div className='flex flex-row m-2'>
              <label className='mr-16'>
                Tapa <b className='text-red-500'>*</b>
              </label>
              <input
                type='file'
                name='cover'
                onChange={(e) => changeHandlerImage(e)}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
            <div className='flex flex-row m-2'>
              <label className='mr-16'>
                Contratapa <b className='text-red-500'>*</b>
              </label>
              <input
                type='file'
                name='backCover'
                onChange={(e) => changeHandlerImage(e)}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
            <div className='flex flex-row m-2'>
              <label className='mr-16'>
                Lomo <b className='text-red-500'>*</b>
              </label>
              <input
                type='file'
                name='spine'
                onChange={(e) => changeHandlerImage(e)}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
            <div className='flex flex-row m-2'>
              <label className='mr-16'>
                Lomo abierto por la mitad <b className='text-red-500'>*</b>
              </label>
              <input
                type='file'
                name='inHalf'
                onChange={(e) => changeHandlerImage(e)}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
          </div>

          <p className='p-4 m-2 '>
            Evaluaremos tu libro y te responderemos en las próximas 48hs. En
            caso de que tu libro cumpla con los requisitos, te enviaremos una
            confirmación junto al crédito para utilizar en nuestra plataforma.
            En caso de estar de acuerdo, nos encargaremos de retirar el libro,
            sin costo adicional para vos.
          </p>
          <button
            type='submit'
            disabled={!isValidForm()}
            className={`font-bold font-roboto py-4 px-4 my-3 self-center ${
              isValidForm()
                ? 'bg-bluebook hover:bg-blue-800 text-white'
                : 'bg-gray-400 text-black'
            }`}
          >
            ENVIAR INFORMACIÓN
          </button>
        </form>
      </div>

      <div className=' w-5/12 ml-10 max-h-fit'>
        <h1 className='font-bold font-roboto text-4xl text-bluebook text-center p-4 m-2'>
          TU LIBRO
        </h1>

        <div className=' text-black bg-blue-300 bg-opacity-10 text-base rounded-xl pl-2 p-2 h-5/6 bg-transparent border shadow-lg outline-none flex flex-col items-center justify-center'>
          <h2 className='font-bold text-3xl'>{form.title}</h2>
          <h3 className='text-xl'>{form.author}</h3>
          <h3>{form.publicationYear}</h3>
          <h3>{form.editorialName}</h3>
          <div
            id='book-carousel'
            className='relative w-full'
            data-carousel='slide'
          >
            <div className='relative h-56 overflow-hidden rounded-lg md:h-96 aspect-w-3 aspect-h-4'>
              {Object.values(form.images).map(
                (image, index) =>
                  image && (
                    <div
                      key={index}
                      className={`absolute w-full h-full top-0 left-0 transition-opacity duration-300 ease-in-out ${
                        index === activeImageIndex
                          ? 'opacity-100 visible'
                          : 'opacity-0 invisible'
                      }`}
                    >
                      <img
                        src={URL.createObjectURL(image)}
                        className='object-cover object-center w-full h-full'
                        alt={`Vista previa del libro ${image.name}`}
                      />
                    </div>
                  )
              )}
            </div>
            <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
              {Object.values(form.images).map(
                (image, index) =>
                  image && (
                    <button
                      key={index}
                      type='button'
                      className={`w-3 h-3 rounded-full ${
                        index === activeImageIndex ? 'bg-blue-500' : ''
                      }`}
                      aria-current={
                        index === activeImageIndex ? 'true' : 'false'
                      }
                      aria-label={`Slide ${index + 1}`}
                      onClick={() => setActiveImageIndex(index)}
                    ></button>
                  )
              )}
            </div>
            {imagesLoaded > 1 && (
              <button
                type='button'
                className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
                data-carousel-prev
                onClick={() => {
                  if (activeImageIndex > 0) {
                    setActiveImageIndex(activeImageIndex - 1);
                  }
                }}
              >
                <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                  <svg
                    className='w-4 h-4 text-white dark:text-gray-800'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 6 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 1 1 5l4 4'
                    />
                  </svg>
                  <span className='sr-only'>Previous</span>
                </span>
              </button>
            )}

            {imagesLoaded > 1 && (
              <button
                type='button'
                className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
                data-carousel-next
                onClick={() => {
                  if (
                    activeImageIndex <
                    Object.values(form.images).filter(Boolean).length - 1
                  ) {
                    setActiveImageIndex(activeImageIndex + 1);
                  }
                }}
              >
                <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                  <svg
                    className='w-4 h-4 text-white dark:text-gray-800'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 6 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m1 9 4-4-4-4'
                    />
                  </svg>
                  <span className='sr-only'>Next</span>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSell;
