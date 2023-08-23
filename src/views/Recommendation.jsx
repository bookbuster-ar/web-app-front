import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllGenres, selectGenreStatus } from '../store/books/bookSlice';
import {
  getRecommendedBooks,
  selectRecommendedBooks,
} from '../store/books/recommendedBookSlice';
import { fetchGenres } from '../store/books/bookSlice';
import { useState } from 'react';
import Results from '../components/Results';

const Recommendation = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectAllGenres);
  const genreStatus = useSelector(selectGenreStatus);

  const recommendedBooks = useSelector(selectRecommendedBooks);

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [pages, setPages] = useState('');
  const [author_nationality, setAuthor_nationality] = useState();
  const [format, setFormat] = useState('');
  const [showResults, setShowResults] = useState(false);

  //estamos haciendo estados locales para cada valor porque queremos setearlos y luego mandarlos al dispatch(getRecommendedbook({format, bla, bla,}))

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  //CAMBIARLO, GENEROS NO ES UN SELECT OPTIONS, SON BOTONES, HAY QUE PASAR LOS GENEROS COMO STRINGS SEPARADOS POR UNA COMA
  //HACER IUN ARRAY Y LUEGO OCN UN JOIN LO JUNTAMOS ASÍ: Ciencia,Narrativa,Poesía pachamama

  const handleResults = () => {
    const selectedGenresString = selectedGenres.join(',');
    setShowResults(true);
    dispatch(
      getRecommendedBooks({
        format,
        pages,
        author_nationality,
        genres: selectedGenresString,
      })
    );
  };

  const handleSelectGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((name) => name !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleSelectPages = (event) => {
    const pages =
      event.target.options[event.target.selectedIndex].getAttribute('name');
    setPages(pages);
  };

  const handleSelectAuthor_nationality = (event) => {
    const author_nationality =
      event.target.options[event.target.selectedIndex].getAttribute('name');
    setAuthor_nationality(author_nationality);
  };

  const handleSelectFormat = (event) => {
    const format =
      event.target.options[event.target.selectedIndex].getAttribute('name');
    setFormat(format);
  };

  return (
    <div>
      <div className='text-center h-52 flex justify-center items-center'>
        <div className='mt-10 mb-16'>
          <h2 className='font-bold font-roboto text-5xl text-bluebook  ml-6 text-center uppercase'>
            ¿Qué libro estás buscando?
          </h2> 
        </div>
      </div>

      <div className='grid grid-cols-2 '>
        <div className='mx-auto  flex flex-col items-center text-center'>
          <div className=' ml-20  w-4/5'>
            <h2 className='text-2xl font-bold mb-2'>
              ¿Qué formato de libro buscas?
            </h2>
            {/* <input type='text' className="rounded"/> */}
            <select
              className='w-80 h-10 border border-gray-400 rounded-lg'
              onChange={handleSelectFormat}
            >
              <option></option>
              <option id='2' name='Nuevo'>
                Nuevo
              </option>
              <option id='3' name='Usado'>
                Usado
              </option>
              <option id='1' name='Digital'>
                Digital
              </option>
              <option id='4' name='Alquiler'>
                Alquiler
              </option>
              <option id='5' name='Indistinct'>
                Indistinto
              </option>
              <option id='6' name='Audiolibro'>
                Audiolibro
              </option>
            </select>
          </div>
          <br />
          <div className='h-28 w-3/5 ml-20'>
            <h2 className='text-2xl font-bold mb-2'>
              ¿Tenés tiempo para leer algo largo o preferís un libro corto?
            </h2>
            {/* <input type='text' className="rounded"/> */}
            <select
              className='w-80 h-10 border border-gray-400 rounded-lg'
              onChange={handleSelectPages}
            >
              <option></option>
              <option id='1' name='0to50pages'>
                Máximo 50 páginas
              </option>
              <option id='2' name='50to100pages'>
                Entre 50 y 100 páginas
              </option>
              <option id='3' name='100to200pages'>
                Entre 100 y 200 páginas
              </option>
              <option id='4' name='GreaterThan200pages'>
                Más de 200 páginas
              </option>
              <option id='5' name='Indistinct'>
                Indistinto
              </option>
            </select>
          </div>
          <br />
          <div className='h-28 w-2/5 ml-20'>
            <h2 className='text-2xl font-bold mb-2'>
              ¿Preferís autores de qué partes del mundo?
            </h2>
            {/* <input type='text' className="rounded"/> */}
            <select
              className='w-80 h-10 border border-gray-400 rounded-lg'
              onChange={handleSelectAuthor_nationality}
            >
              <option></option>
              <option id='1' name='Latinoamericans'>
                Latioamérica
              </option>
              <option id='2' name='Others'>
                Otros
              </option>
              <option id='3' name='Indistinct'>
                Indistinto
              </option>
            </select>
          </div>
          <br />

          <br />
          <div className='ml-20 w-4/5 '>
            <h2 className='text-2xl font-bold mb-2'>
              Elegí los géneros que te gustan:
            </h2>
            <br />
            <div className='flex flex-wrap gap-3 justify-center'>
              {genreStatus === 'loading' ? (
                <p>Loading...</p>
              ) : (
                genres?.map((genre, index) => (
                  <button
                    key={index}
                    className='flex justify-center items-center p-2 border border-blue-500 rounded-lg w-auto active:text-white focus:outline-none active:bg-blue-500'
                    onClick={() => handleSelectGenre(genre.name)}
                  >
                    {genre.name}
                  </button>
                ))
              )}
            </div>
          </div>

          <div className=' flex justify-center items-center h-40'>
            <button
              className='bg-blue-500 rounded-lg p-3 ml-16 text-white focus:bg-blue-700'
              onClick={handleResults}
            >
              CONTINUAR
            </button>
          </div>
        </div>
        <div className='mx-auto'>
          <div
            className={` w-[600px] rounded-x1  ${
              showResults ? 'block' : 'hidden'
            }`}
          >
            <Results recommendedBooks={recommendedBooks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
