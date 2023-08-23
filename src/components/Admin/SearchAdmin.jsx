import { useState, useEffect } from 'react';
import Search from '../../icons/Search';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllUsers,
  getUserByName
} from '../../store/user/adminSlice';
import DeleteIcon from '../../icons/Delete'

const SearchAdmin = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleDelete = () => {
    setSearch('')
  }

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  };

  useEffect(() => {
    if(search) {
      dispatch(getUserByName(search))
      return;
    }
    dispatch(getAllUsers())
  }, [dispatch, search])

  return (
    <div>
      <div className='space-x-2 flex items-center my-9 ml-15 justify-center'>
        <Search />
        <input
          type='text'
          value={search}
          placeholder='Buscá por nombre'
          onChange={handleChange}
          name='search'
          className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
        />
        <div onClick={handleDelete}>
        {search && <DeleteIcon/>}
        </div>
      </div>
      <br />
      
    </div>
  );
};

export default SearchAdmin;
