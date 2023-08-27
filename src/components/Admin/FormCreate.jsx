import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllGenres,
  selectGenreStatus,
  createBook,
  fetchGenres,
} from '../../store/books/bookSlice';

const FormSell = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectAllGenres);
  const genreStatus = useSelector(selectGenreStatus);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);
  const [form, setForm] = useState({
    title: '',
    author: '',
    publicationYear: '',
    editorialName: '',
    editorial_collection: '',
    genres: [],
    synopsis: '',
    pages: '',
    language: '',
    size: '',
    price: '',
    images: {
      cover: null,
      backCover: null,
      spine: null,
      inHalf: null,
    },
  });
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imagesLoaded = Object.values(form.images).filter(Boolean).length;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createBook(form));
    setForm({
      title: '',
      author: '',
      publication_year: '',
      editorial: '',
      editorial_collection: '',
      genres: [],
      synopsis: '',
      pages: '',
      language: '',
      size: '',
      price: '',
      images: {
        cover: null,
        backCover: null,
        spine: null,
        inHalf: null,
      },
    });
  };

  const selectHandler = (event) => {
    if (
      event.target.value &&
      !form.genres.some((genre) => genre.name === event.target.value)
    ) {
      const selectedGenreName = event.target.value;
      const selectedGenreID =
        event.target.options[event.target.selectedIndex].id;
      const newState = { ...form };
      newState.genres = [
        ...newState.genres,
        { id: selectedGenreID, name: selectedGenreName },
      ];
      setForm(newState);
    }
  };
  const deleteSelection = (genre) => {
    let filteredGenres = form.genres.filter((gen) => gen !== genre);
    setForm({
      ...form,
      genres: filteredGenres,
    });
  };

  const changeHandlerImage = (event) => {
    const { name } = event.target;
    const updatedImages = { ...form.images, [name]: event.target.files[0] };
    setForm({ ...form, images: updatedImages });
  };

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col justify-content items-center m-3 w-2/4'>
        <form onSubmit={submitHandler} className='flex flex-col items-end'>
          <div className='my-2'>
            <label className='mr-16 w-48 items-center'>Título del libro</label>
            <input
              type='text'
              name='title'
              onChange={changeHandler}
              value={form.title}
              className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
            />
          </div>
          <div className='my-2'>
            <label className='mr-16'>Autor</label>
            <input
              type='text'
              name='author'
              value={form.author}
              onChange={changeHandler}
              className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
            />
          </div>
          <div className='my-2'>
            <label className='mr-16'>Año de publicación</label>
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
            <label className='mr-16'>Editorial</label>
            <input
              type='text'
              name='editorialName'
              value={form.editorialName}
              onChange={changeHandler}
              className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
            />
          </div>
          <div className='my-2'>
            <label className='mr-16'>Colección (opcional)</label>
            <input
              type='text'
              name='editorial_collection'
              value={form.editorial_collection}
              onChange={changeHandler}
              className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
            />
          </div>
          <div className='my-2'>
            <label className='mr-16'>Géneros</label>
            <select name='genres' onChange={selectHandler}>
              {genreStatus === 'loading' ? (
                <option>Loading...</option>
              ) : (
                genres?.map((gen, index) => {
                  return (
                    <option
                      key={`${gen.id}-${index}`}
                      value={gen.name}
                      id={gen.id}
                    >
                      {gen.name}
                    </option>
                  );
                })
              )}
            </select>
          </div>
          <div className='my-2'>
            <h2 className='mr-16 text-center'>Géneros Seleccionados</h2>
            <div>
              {form.genres &&
                form.genres?.map((gen) => (
                  <button
                    className='text-black bg-greybook text-base rounded-md p-2 mx-1 border outline-none'
                    key={gen.id}
                    onClick={() => deleteSelection(gen)}
                  >
                    {gen.name}
                  </button>
                ))}
            </div>
          </div>
          <div className='my-2'>
            <label className='mr-16'>Sinopsis</label>
            <input
              type='text'
              name='synopsis'
              value={form.synopsis}
              onChange={changeHandler}
              className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
            />
          </div>
          <div className='my-2'>
            <label className='mr-16'>Cantidad de páginas</label>
            <input
              type='number'
              min='1'
              name='pages'
              value={form.pages}
              onChange={changeHandler}
              className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
            />
          </div>
          <div className='my-2'>
            <label className='mr-16'>Idioma</label>
            <input
              type='text'
              name='language'
              value={form.language}
              onChange={changeHandler}
              className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
            />
          </div>
          <div className='my-2'>
            <label className='mr-16'>Tamaño</label>
            <input
              type='text'
              name='size'
              value={form.size}
              onChange={changeHandler}
              className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
            />
          </div>
          <div className='my-2'>
            <label className='mr-16'>Precio</label>
            <input
              type='text'
              name='price'
              value={form.price}
              onChange={changeHandler}
              className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
            />
          </div>
          <h1 className='mr-36 font-bold'>Fotos reales del libro</h1>
          <div className='flex flex-col items-end'>
            <div className='flex flex-row m-2'>
              <label className='mr-16'>Tapa</label>
              <input
                type='file'
                name='cover'
                onChange={changeHandlerImage}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
            <div className='flex flex-row m-2'>
              <label className='mr-16'>Contratapa</label>
              <input
                type='file'
                name='backCover'
                onChange={changeHandlerImage}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
            <div className='flex flex-row m-2'>
              <label className='mr-16'>Lomo</label>
              <input
                type='file'
                name='spine'
                onChange={changeHandlerImage}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
            <div className='flex flex-row m-2'>
              <label className='mr-16'>Lomo abierto por la mitad</label>
              <input
                type='file'
                name='inHalf'
                onChange={changeHandlerImage}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
          </div>
          <button
            type='submit'
            className='bg-blue-500 p-3 hover:bg-blue-600 text-white font-semibold rounded-md'
          >
            Enviar información
          </button>
        </form>
      </div>

      <div className='h-full w-3/4 mx-auto md:3/5 lg:mr-4 lg:ml-5 lg:w-5/12 xl:mr-10'>
        <h1 className='font-bold font-roboto text-4xl text-bluebook text-center p-4 m-2'>
          TU LIBRO
        </h1>

        <div className=' text-black bg-blue-300 bg-opacity-10 text-base rounded-xl pl-2 p-2 h-5/6 bg-transparent border shadow-lg outline-none flex flex-col items-center justify-center'>
          <h2 className='font-bold text-3xl'>{form.title}</h2>
          <h3 className='text-xl'>{form.author}</h3>
          <h3>{form.publicationYear}</h3>
          <h3>{form.editorialName}</h3>
          <h3>{form.editorial_collection}</h3>
          <h3>{form.synopsis}</h3>
          <h3>{form.pages}</h3>
          <h3>{form.language}</h3>
          <h3>{form.size}</h3>
          <h3>{form.price}</h3>
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
                      className={` w-full h-full top-0 left-0 transition-opacity duration-300 ease-in-out ${
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
