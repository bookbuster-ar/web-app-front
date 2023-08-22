import { useState, useEffect } from 'react';
import Search from '../../icons/Search';
import { Users } from '../Admin/UserList';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllUsers,
  selectUsersStatus,
  getAllUsers,
  getUserByName
} from '../../store/user/adminSlice';

const SearchAdmin = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const usersStatus = useSelector(selectUsersStatus);
  const users = useSelector(selectAllUsers);

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  };

  const handleSubmit = (search) => {
    dispatch(getUserByName(search));
  };

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])
  console.log(usersStatus);

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
        <button
          className='bg-bluebook hover:bg-blue-700 shadow-lg text-white rounded-lg py-1 px-4'
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      <br />
      <div className='flex justify-center'>
        <div>
          {usersStatus === 'loading' ? <p>Cargando usuarios...</p> : null}
          {usersStatus === 'failed' ? <p>Ocurrió un error</p> : null}
          {search && <Users users={users} />}
        </div>
      </div>
    </div>
  );
};

export default SearchAdmin;
