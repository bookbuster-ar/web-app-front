const genres = [
  'Bienestar y salud',
  'Ciencia',
  'Feminismos y LGBTIQ',
  'Historia y Política',
  'Infatil-Niños',
  'Música',
  'Narrava',
  'No ficción',
  'Pensamientos y Filosofía',
  'Poesía',
  'Relatos breves',
  'Teatro',
];

const colorClasses = {
  0: 'bg-red-400',
  1: 'bg-yellow-400',
  2: 'bg-green-400',
  3: 'bg-blue-400',
  4: 'bg-indigo-400',
  5: 'bg-purple-400',
  6: 'bg-pink-400',
  7: 'bg-gray-400',
  8: 'bg-yellow-600',
  9: 'bg-green-600',
  10: 'bg-blue-400',
  11: 'bg-lime-400',
};

const Library = () => {
  return (
    <div className='bg-white h-screen flex flex-col items-center justify-center '>
      <h1 className='font-bold text-4xl m-6'>Explorá la librería</h1>
      <div className='flex flex-row flex-wrap m-6'>
        {genres.map((genre, index) => (
          <div
            className={`w-36 h-36 ${colorClasses[index]} m-2 rounded-2xl flex justify-center text-gray-50 cursor-pointer`}
          >
            {genre}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;