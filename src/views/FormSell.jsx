import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBook, fetchGenres } from '../store/books/bookSlice';
import { selectAllGenres, selectGenreStatus } from '../store/books/bookSlice';

const FormSell = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectAllGenres);
  const genreStatus = useSelector(selectGenreStatus);
  const [ imagePreview, setImagePreview ] = useState(null);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const [form, setForm] = useState({
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
      cover: {},
      extra: [], //arreglo de objetos
    },
  });

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
        cover: {},
        extra: [], //arreglo de objetos
      },
    });
  };

  const handleUploadCover = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const imagePreviewURL = URL.createObjectURL(file);
    setImagePreview(imagePreviewURL)

    setForm((prevForm) => ({
      ...prevForm,
      images: {
        ...prevForm.images,
        cover: file,
      },
    }));
  };

  const handleUploadExtraImages = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      images: {
        ...prevForm.images,
        extra: [...prevForm.images.extra, file],
      },
    }));
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

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col justify-content items-center m-3 w-2/4'>
        <h1 className='font-bold text-4xl text-black text-center'>
          ¿Cómo venderle tus libros a Bookbuster?
        </h1>
        <h2>Bookbuster es una plataforma de novedades editoriales.</h2>
        <h2>
          Para vender tu libro a la plataforma, debe cumplir los siguientes
          requisitos:
        </h2>
        <p>• El libro debe haberse publicado en los últimos 15 años.</p>
        <p>
          • No debe estar marcado, ni faltarle páginas, ni tener daños que
          impidan su correcta lectura.
        </p>
        <p>
          Si tu libro cumple con estos requisitos, completá los siguientes
          datos:{' '}
        </p>
        <form className='flex flex-col justify-content items-center m-3'>
          <label>Título del libro</label>
          <input
            type='text'
            name='title'
            onChange={changeHandler}
            value={form.title}
            className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
          />

          <label>Autor</label>
          <input
            type='text'
            name='author'
            value={form.author}
            onChange={changeHandler}
            className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
          />

          <label>Año de publicación</label>
          <input
            type='number'
            name='publication_year'
            value={form.publication_year}
            min={`${currentYear}` - 14}
            max={`${currentYear}`}
            onChange={changeHandler}
            className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
          />

          <label>Editorial</label>
          <input
            type='text'
            name='editorial'
            value={form.editorial}
            onChange={changeHandler}
            className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
          />

          <label>Colección (opcional)</label>
          <input
            type='text'
            name='editorial_collection'
            value={form.editorial_collection}
            onChange={changeHandler}
            className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
          />

          <label>Géneros</label>
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

          <h2>Géneros Seleccionados</h2>
          <div>
            {form.genres &&
              form.genres?.map((gen) => (
                <button
                  className='text-black text-base rounded-md pl-2  p-2  bg-transparent border outline-none'
                  key={gen.id}
                  onClick={() => deleteSelection(gen)}
                >
                  {gen.name}
                </button>
              ))}
          </div>

          <label>Sinopsis</label>
          <input
            type='text'
            name='synopsis'
            value={form.synopsis}
            onChange={changeHandler}
            className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
          />

          <label>Cantidad de páginas</label>
          <input
            type='number'
            name='pages'
            value={form.pages}
            onChange={changeHandler}
            className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
          />

          <label>Idioma</label>
          <input
            type='text'
            name='language'
            value={form.language}
            onChange={changeHandler}
            className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
          />

          <label>Tamaño</label>
          <input
            type='text'
            name='size'
            value={form.size}
            onChange={changeHandler}
            className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
          />

          <label>Sugerir precio</label>
          <input
            type='text'
            name='price'
            value={form.price}
            onChange={changeHandler}
            className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
          />

          <h1>Fotos reales del libro</h1>

          <div className='flex flex-col items-center'>
            <div className='flex flex-row m-2'>
              <label className='mr-4'>Tapa</label>
              <input
                type='file'
                onChange={handleUploadCover}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
            <div className='flex flex-row m-2'>
              <label className='mr-4'>Contratapa</label>
              <input
                type='file'
                onChange={handleUploadExtraImages}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
            <div className='flex flex-row m-2'>
              <label className='mr-4'>Lomo</label>
              <input
                type='file'
                onChange={handleUploadExtraImages}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
            <div className='flex flex-row m-2'>
              <label className='mr-4'>Lomo abierto por la mitad</label>
              <input
                type='file'
                onChange={handleUploadExtraImages}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
          </div>

          <p>
            Evaluaremos tu libro y te responderemos en las próximas 48hs. En
            caso de que tu libro cumpla con los requisitos, te enviaremos una
            confirmación junto al crédito para utilizar en nuestra plataforma.
            En caso de estar de acuerdo, nos encargaremos de retirar el libro,
            sin costo adicional para vos.{' '}
          </p>
          <button
            type='submit'
            onSubmit={submitHandler}
            className='bg-blue-500 p-3 hover:bg-blue-600 text-white font-semibold rounded-md'
          >
            Enviar información
          </button>
        </form>
      </div>

      <div className=' w-2/4'>
        <h1 className='font-bold text-4xl text-black text-center'>Tu libro</h1>
        <div className='flex items-center flex-col'>
          <h2 className='text-3xl'>{form.title}</h2>
          {imagePreview && <img src={imagePreview} alt="Vista previa de la tapa" className='max-w-xl' />}
        </div>
      </div>
    </div>
  );
};

export default FormSell;
