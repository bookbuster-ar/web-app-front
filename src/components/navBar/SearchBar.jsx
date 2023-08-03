const SearchBar = () => {

  const handlerSearch = () => {
    alert('Simulamos que se busca algo mi rey')
  }

  return (
    <div className='space-x-2 flex items-center ml-15'>
      <input type='text' placeholder="Buscá tu próximo libro" 
      className='text-black text-base rounded-xl pl-2 w-72 bg-transparent border border-red-600 outline-none'/>
      <button onClick={handlerSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
