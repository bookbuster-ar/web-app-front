import SearchBar from '../components/SearchBar';

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

const Search = () => {
  return (
    <div className='bg-white  h-screen flex flex-col items-center space-y-12'>
      <div>
        <SearchBar />
      </div>
      <div className='flex flex-col align-items'>
        {genres.map((genre) => (
          <div className='text-black text-base rounded-md pl-2 w-96 bg-transparent flex justify-center border outline-none m-1 p-2 hover:border-blue-600 hover:text-blue-600 cursor-pointer'>
            {genre}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;