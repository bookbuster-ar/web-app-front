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
    <div className='bg-white h-screen flex justify-center space-y-12'>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Search;
