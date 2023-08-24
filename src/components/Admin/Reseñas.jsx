const Revision = () => {
  return (
    <div className=' w-[1340px] h-full '>
      <h1 className='bg-bluebook w-80 mx-auto mb-10 text-white rounded-lg py-2 px-4 text-center'>
        Listado de libros para revisión
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
