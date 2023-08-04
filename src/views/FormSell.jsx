const FormSell = () => {
  return (
    <div className='flex flex-col justify-content items-center m-3'>
      <h1 className='font-bold text-4xl text-black'>
        ¿Cómo venderle tus libros a Bookbuster?{' '}
      </h1>
      <h2>Bookbuster es una plataforma de novedades editoriales.</h2>
      <h2>
        Para vender tu libro a la plataforma, debe cumplir los siguientes
        requisitos:
      </h2>
      <p>• El libro debe haberse publicado en los últimos 15 años.</p>
      <p>
        • No debe estar marcado, ni faltarle páginas, ni tener daños que impidan
        su correcta lectura.
      </p>
      <p>
        Si tu libro cumple con estos requisitos, completá los siguientes datos:{' '}
      </p>
      <form className='flex flex-col justify-content items-center m-3'>
        <label>Título del libro</label>
        <input
          type='text'
          className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
        />

        <label>Autor</label>
        <input
          type='text'
          className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
        />

        <label>Año de publicación</label>
        <input
          type='number'
          className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
        />

        <h1>Fotos reales del libro</h1>
        <div className='flex flex-col items-center'>
          <div className='flex flex-row m-2'>
            <p className='mr-4'>Tapa</p>
            <button className='bg-blue-500 p-1 hover:bg-blue-600 text-white font-semibold rounded-md'>
              Cargar imagen
            </button>
          </div>
          <div className='flex flex-row m-2'>
            <p className='mr-4'>Contratapa</p>
            <button className='bg-blue-500 p-1 hover:bg-blue-600 text-white font-semibold rounded-md'>
              Cargar imagen
            </button>
          </div>
          <div className='flex flex-row m-2'>
            <p className='mr-4'>Lomo</p>
            <button className='bg-blue-500 p-1 hover:bg-blue-600 text-white font-semibold rounded-md'>
              Cargar imagen
            </button>
          </div>
          <div className='flex flex-row m-2'>
            <p className='mr-4'>Lomo abierto por la mitad</p>
            <button className='bg-blue-500 p-1 hover:bg-blue-600 text-white font-semibold rounded-md'>
              Cargar imagen
            </button>
          </div>
        </div>

        <p>
          Evaluaremos tu libro y te responderemos en las próximas 48hs. En caso
          de que tu libro cumpla con los requisitos, te enviaremos una
          confirmación junto al crédito para utilizar en nuestra plataforma. En
          caso de estar de acuerdo, nos encargaremos de retirar el libro, sin
          costo adicional para vos.{' '}
        </p>
        <button
          type='submit'
          className='bg-blue-500 p-3 hover:bg-blue-600 text-white font-semibold rounded-md'
        >
          Enviar información
        </button>
      </form>
    </div>
  );
};

export default FormSell;
