import { Link } from 'react-router-dom';
import {
  getBookshelf,
  selectBookshelf,
  selectBookshelfStatus,
  selectBookshelfError,
  deleteBookFromShelf,
} from '../../store/books/bookshelvesSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../icons/Loader/Loader';
//hola
const Carrousel = ({ bookshelf }) => {
console.log("BookShelf: ", bookshelf);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getBookshelf(bookshelf.id));
}, [dispatch]);


// //   Bookshelf viene así
// //   {
// //     "id": "2b727cc3-0e05-4d85-8ff6-7970e6098a44",
// //     "name": "Todos",
// //     "created": false,
// //     "book_shelves_id": "487d3bc3-bd6d-4212-bd58-faa54b9f8041"
// //   }
// //   const dispatch = useDispatch();
// //   const bookshelfBooks = useSelector(selectBookshelf);
// //   console.log('bookshelfBooks', bookshelfBooks);
// //   const status = useSelector(selectBookshelfStatus);
// //   const error = useSelector(selectBookshelfError);

// //   console.log('book_shelf_category_id', book_shelf_category_id);
  
// //   useEffect(() => {
// //    const fetchData = book_shelf_categories.map((shelf) => dispatch(getBookshelf(shelf.id)));
// //     dispatch(getBookshelf(book_shelf_category_id));
// //   }, [dispatch, book_shelf_category_id]);
// //   useEffect(() => {
// //     Mapea tus book_shelf_categories a un array de promesas
// //     const fetchRequests = book_shelf_categories.map((shelf) =>
// //         dispatch(getBookshelf(shelf.id))
// //     );
// //     console.log('fetchRequest', fetchRequests);
// //     Usa Promise.all() para esperar a que todas las promesas se resuelvan 
// //     Promise.all(fetchRequests)
// //         .then((results) => {
// //             `results` contiene las respuestas de todas tus solicitudes
// //             const result = results.map(result => result.payload)
// //             console.log(result);
// //         })
// //         .catch((error) => {
// //             console.error("Error fetching bookshelves: ", error.messages);
// //         });
// // }, [dispatch, book_shelf_categories]);

// //   const handleDelete = (book_shelf_category_id, id) => {

// //   }
return <h1>{bookshelf.name}</h1>
  // return (
  //   <div>
  //     {status === 'loading' ? (
  //       <Loader />
  //     ) : (
  //       <div className='flex items-center justify-start mt-8 ml-12'>
  //         <div>
  //           <div className='h-96 w-11/12 mb-20 flex flex-col justify-center pb-1 pl-24 border border-none rounded-xl shadow-xl'>
  //             <p className='font-bold text-blue-500 text-2xl'>
  //               {book_shelf_categories.name}
  //             </p>
  //             <div className='max-[640px]:flex-wrap h-96 w-11/12 gap-3 my-2 flex min-[640px]:overflow-x-scroll'>
  //               {bookshelfBooks?.map((book, index) => {
  //                 console.log('book map', book);
  //                 return (
  //                   <div key={book.id}>
  //                     {/* <button onClick={handleDelete}>x</button> */}
  //                     <Link to={`/detail/${book.id}`} key={index}>
  //                       <div className='h-72 w-36 text-sm my-4'>
  //                         <img
  //                           className='h-48 w-40 object-fill'
  //                           src={book.images.cover}
  //                         />
  //                         <h2>{book.author}</h2>
  //                         <h2 className='font-bold'>{book.title}</h2>
  //                       </div>
  //                     </Link>
  //                   </div>
  //                 );
  //               })}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
};
export default Carrousel;
