import { Link } from 'react-router-dom';
const Results = ({ recommendedBooks }) => {
  return (
    <div className=' w-full flex-row flex-wrap text-center'>
      <h1 className='font-bold  text-2xl'>Estas son tus recomendaciones</h1>

      <div className=' w-11/12 mb-20 flex flex-col justify-center mx-6 pb-1 pl-6 border border-none rounded-xl shadow-xl'>
        <div className='max-[640px]:flex-wrap h-96 w-full gap-3 my-2 flex min-[640px] overflow-y-hidden'>
          {recommendedBooks &&
            recommendedBooks.map((book) => (
              <div
                key={book.id}
                className='flex flex-row flex-wrap w-full mt-8'
              >
                <Link to={`/detail/${book.published_book.id}`}>
                  <div className='h-60 w-36 text-sm my-4 mx-[30px]'>
                    <img
                      className='h-48 w-40 object-fill'
                      src={book.images.cover}
                    />
                    <h2>{book.author}</h2>
                    <h2>{book.title}</h2>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
