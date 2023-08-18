import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBook, fetchGenres, getEditorials, selectEditorials } from '../store/books/bookSlice';
import buildFormData from '../util';
import debounce from 'just-debounce-it';
import { normalizeString } from '../util/normalizeString';

const INITIAL_FORM_STATE = {
  title: '',
  author: '',
  publication_year: '',
  editorial_id: '',
  editorial_name: '',
  images: {
    cover: null,
    extra: [null, null, null],
  },
};

const IMAGE_TYPES = {
  backCover: 0,
  spine: 1,
  openSpine: 2,
};

const FormSell = () => {
  const [filteredEditorials, setFilteredEditorials] = useState([]);
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const editorials = useSelector(selectEditorials)

  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();

  // Handlers
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const editorialChangeHandler = (event) => {
    const value = event.target.value;
    setForm({ ...form, editorial_name: value });
    if (value.length >= 3) debouncedGetEditorial(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let updatedForm = { ...form };
    const existingEditorial = editorials.find(
      (e) =>
        normalizeString(e.name) === normalizeString(updatedForm.editorial_name)
    );

    if (existingEditorial) {
      updatedForm.editorial_id = existingEditorial.id;
      updatedForm.editorial_name = '';
    } else {
      updatedForm.editorial_id = null;
    }

    const bookData = buildFormData(updatedForm);
    dispatch(createBook(bookData));

    setForm(INITIAL_FORM_STATE);
  };

  const handleUploadCover = (event) => {
    event.preventDefault();
    const file = event.target.files[0];

    setForm((prevForm) => ({
      ...prevForm,
      images: {
        ...prevForm.images,
        cover: file,
      },
    }));
  };

  const handleUploadExtraImages = (type) => (event) => {
    event.preventDefault();
    const file = event.target.files[0];

    setForm((prevForm) => {
      const extraImages = [...prevForm.images.extra];

      if (type === 'backCover') extraImages[0] = file;
      if (type === 'spine') extraImages[1] = file;
      if (type === 'openSpine') extraImages[2] = file;

      return {
        ...prevForm,
        images: {
          ...prevForm.images,
          extra: extraImages,
        },
      };
    });
  };

  const debouncedGetEditorial = useCallback(
    debounce((editorial) => {
      if (editorial) {
        const normalizedInput = normalizeString(editorial);
        const matches = editorials.filter((e) =>
          normalizeString(e.name).includes(normalizedInput)
        );
        setFilteredEditorials(matches);
      } else {
        setFilteredEditorials([]);
      }
    }, 500),
    []
  );

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(getEditorials())
  }, [dispatch]);

  const images = [
    { label: 'Tapa', image: form.images.cover },
    { label: 'Contratapa', image: form.images.extra[IMAGE_TYPES.backCover] },
    { label: 'Lomo', image: form.images.extra[IMAGE_TYPES.spine] },
    {
      label: 'Lomo abierto por la mitad',
      image: form.images.extra[IMAGE_TYPES.openSpine],
    },
  ];

  return (
    <div className='flex flex-row '>
      <div className='flex flex-col justify-content items-center m-3 w-2/4'>
        <div className='flex flex-col justify-center items-center p-4 m-2 border-solid border border-blue-500 rounded-xl'>
          <h1 className='font-bold text-4xl text-center text-bluebook'>
            ¿Cómo venderle tus libros a Bookbuster?
          </h1>
          <h2>Bookbuster es una plataforma de novedades editoriales.</h2>
          <h2>
            Para vender tu libro a la plataforma, debe cumplir los siguientes
            requisitos:
          </h2>
          <p>El libro debe haberse publicado en los últimos 15 años.</p>
          <p>
            No debe estar marcado, ni faltarle páginas, ni tener daños que
            impidan su correcta lectura.
          </p>
          <p>
            Si tu libro cumple con estos requisitos, completá los siguientes
            datos:
          </p>
        </div>
        <form onSubmit={submitHandler} className='flex flex-col items-end'>
          <div className='my-2'>
            <label className='mr-16 w-48 items-center '>Título del libro</label>
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
              name='editorial_name'
              value={form.editorial_name}
              onChange={editorialChangeHandler}
              className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
            />
            {filteredEditorials.length > 0 && (
              <div>
                {filteredEditorials.map((e) => (
                  <div
                    className='flex justify-center m-1 text-white border rounded-xl bg-blue-300 cursor-pointer '
                    key={e.id}
                    onClick={() => {
                      setForm({
                        ...form,
                        editorial_id: e.id,
                        editorial_name: e.name,
                      });
                      setFilteredEditorials([]);
                    }}
                  >
                    {e.name}
                  </div>
                ))}
              </div>
            )}
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
                onChange={handleUploadExtraImages('backCover')}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
            <div className='flex flex-row m-2'>
              <label className='mr-16'>Lomo</label>
              <input
                type='file'
                onChange={handleUploadExtraImages('spine')}
                className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
              />
            </div>
            <div className='flex flex-row m-2'>
              <label className='mr-16'>Lomo abierto por la mitad</label>
              <input
                type='file'
                onChange={handleUploadExtraImages('openSpine')}
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
        <h1 className='font-bold text-4xl text-blue-500 text-center p-4 m-2'>
          Tu libro
        </h1>
        <div className=' text-black bg-blue-300 bg-opacity-10 text-base rounded-xl pl-2 p-2 h-5/6 bg-transparent border shadow-lg outline-none flex flex-col items-center justify-center'>
          <h2 className='font-bold text-3xl'>{form.title}</h2>
          <h3 className='text-xl'>{form.author}</h3>
          <h3>{form.publication_year}</h3>
          <h3>{form.editorial_name}</h3>
          {images.map(
            (imgData, index) =>
              imgData.image && (
                <div key={index} className='flex flex-col items-center'>
                  <h4>{imgData.label}</h4>
                  <img
                    src={URL.createObjectURL(imgData.image)}
                    alt={`Vista previa de ${imgData.label}`}
                    className='max-w-xs'
                  />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default FormSell;
