import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBook, fetchGenres } from '../store/books/bookSlice';
import buildFormData from '../util';

const FormSell = () => {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const [form, setForm] = useState({
    title: '',
    author: '',
    publication_year: '',
    editorial_id: '',
    editorial_name: '',
    images: {
      cover: {},
      extra: [],
    },
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const bookData = buildFormData(form);
    dispatch(createBook(bookData));
    setImagePreview(null);

    setForm({
      title: '',
      author: '',
      publication_year: '',
      editorial_id: '',
      editorial_name: '',
      images: {
        cover: {},
        extra: [],
      },
    });
  };

  const handleUploadCover = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const imagePreviewURL = URL.createObjectURL(file);
    setImagePreview(imagePreviewURL);

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
    <div className='flex flex-row '>
      <div className='flex flex-col justify-content items-center m-3 w-2/4'>
        <div className='flex flex-col justify-center items-center p-4 m-2 border-solid border border-blue-500 rounded-xl'>
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
            datos:
          </p>
        </div>
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
              name='publication_year'
              value={form.publication_year}
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
              name='editorial'
              value={form.editorial_name}
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
                onChange={handleUploadCover}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
            <div className='flex flex-row m-2'>
              <label className='mr-16'>Contratapa</label>
              <input
                type='file'
                onChange={handleUploadExtraImages}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
            <div className='flex flex-row m-2'>
              <label className='mr-16'>Lomo</label>
              <input
                type='file'
                onChange={handleUploadExtraImages}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
            <div className='flex flex-row m-2'>
              <label className='mr-16'>Lomo abierto por la mitad</label>
              <input
                type='file'
                onChange={handleUploadExtraImages}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
          </div>

          <p className='max-w-2xl p-2 m-4'>
            Evaluaremos tu libro y te responderemos en las próximas 48hs. En
            caso de que tu libro cumpla con los requisitos, te enviaremos una
            confirmación junto al crédito para utilizar en nuestra plataforma.
            En caso de estar de acuerdo, nos encargaremos de retirar el libro,
            sin costo adicional para vos.
          </p>
          <button
            type='submit'
            className='bg-blue-500 p-3 hover:bg-blue-600 text-white font-semibold rounded-md'
          >
            Enviar información
          </button>
        </form>
      </div>

      <div className=' w-5/12 fixed right-4 max-h-fit '>
        <h1 className='font-bold text-4xl text-black text-center p-4 m-2'>
          Tu libro
        </h1>
        <div className=' text-black bg-blue-300 bg-opacity-10 text-base rounded-xl pl-2 p-2 h-5/6 bg-transparent border shadow-lg outline-none flex flex-col items-center justify-center'>
          <h2 className='font-bold text-3xl'>{form.title}</h2>
          <h3 className='text-xl'>{form.author}</h3>
          <h3>{form.publication_year}</h3>
          <h3>{form.editorial}</h3>
          {imagePreview && (
            <img
              src={imagePreview}
              alt='Vista previa de la tapa'
              className='max-w-xs'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FormSell;
