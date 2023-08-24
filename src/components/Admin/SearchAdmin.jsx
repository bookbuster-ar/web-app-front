import { useState, useEffect } from 'react';
import Search from '../../icons/Search';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllUsers,
  setSortOrder,
  getUserByName,
  selectUserRoleStatus
} from '../../store/user/adminSlice';
import DeleteIcon from '../../icons/Delete'

const SearchAdmin = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const userRoleStatus = useSelector(selectUserRoleStatus)

  const handleDelete = () => {
    setSearch('')
  }

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  };

  const handleSortOrderChange = (event) => {
    dispatch(setSortOrder(event.target.value));
    if (search) {
      dispatch(getUserByName(search));
    } else {
      dispatch(getAllUsers());
    }
  };

  useEffect(() => {
    if(search) {
      dispatch(getUserByName(search))
      return;
    }

    dispatch(getAllUsers())
  }, [dispatch, search, userRoleStatus])

  return (
    <div>
      <div className='space-x-2 flex flex-wrap gap-y-4 items-center my-9 ml-15 justify-center'>
        <Search />
        <input
          type='text'
          value={search}
          placeholder='Buscá por nombre'
          onChange={handleChange}
          name='search'
          className='text-black text-sm md:text-md rounded-md pl-2 w-40 md:w-60 lg:w-80 xl:w-96 p-2  bg-transparent border outline-none'
        />
        <button onClick={handleDelete}>
        {search && <DeleteIcon/>}
        </button>
        <select className='rounded-md w-60 md:w-72 lg:w-80 xl:w-96' onChange={handleSortOrderChange}>
          <option value="name">Ordenar por nombre</option>
          <option value="date">Ordenar por fecha de registro</option>
        </select>
      </div>
      <br />
      
    </div>
  );
};

export default SearchAdmin;
