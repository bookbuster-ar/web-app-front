export function ListOfUsers({ users }) {
  return (
    <ul className='grid grid-cols-4 gap-5'>
      {users.map((user) => (
          <li key={user.id}>
            <img
              src={user.image}
              alt={user.name}
              className='h-72 w-3/4 object-cover'
            />
            <p className='text-xs'>{user.suscriptor}</p>
            <h3 className='font-semibold text-sm'>{user.name}</h3>
          </li>
      ))}
    </ul>
  );
}

export function NoUsersResults() {
  return <p>No se encontraron usuarios para esta búsqueda</p>;
}

export function Users({ users }) {
  const hasUsers = users?.length > 0;

  return hasUsers ? <ListOfUsers users={users} /> : <NoUsersResults />;
}
