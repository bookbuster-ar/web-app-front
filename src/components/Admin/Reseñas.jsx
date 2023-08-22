const Revision = () => {
  return (
    <div className=' w-[1340px] h-full '>
      <h1 className='text-center font-roboto font-bold text-bluebook my-2'>
        LISTADO DE LIBROS PARA REVISIÓN
      </h1>
      <div className='grid grid-rows-3 grid-cols-3 '>
        <div className='bg-greybook text-slate-600 text-center font-semibold'>
          Título del libro
        </div>
        <div className='bg-greybook text-gray-600 text-center font-semibold'>
          Usuario
        </div>
        <div className='bg-greybook text-gray-600 text-center font-semibold'>
          Fecha de recepción
        </div>
        <div className='bg-greybook text-gray-500 col-span-3'>
          Libro para revisión
        </div>
      </div>
    </div>
  );
};

export default Revision;
