import React, { useState } from 'react';
import ResponsiveMenu from '../icons/ResponsiveMenu';
import { Link } from 'react-router-dom';

/* ICONS */
import BannedIcon from '../icons/admin/Banned';
import SubscribersIcon from '../icons/admin/Subscribers';
import UsersIcon from '../icons/admin/Users';
import RevisionIcon from '../icons/admin/Revision';
import RecommendedIcon from '../icons/admin/Recommended';
import GenresIcon from '../icons/admin/Genres';
import SubgenresIcon from '../icons/admin/Subgenres';
import VendidosIcon from '../icons/admin/Vendidos';
import TransactionsIcon from '../icons/admin/Transactions';
import AddStockIcon from '../icons/admin/AddStock';
import HomeIcon from '../icons/admin/Home';

/* COMPONENTS */
import Usuarios from '../components/Admin/Usuarios';
import Subscribers from '../components/Admin/Subscribers';
import Baneados from '../components/Admin/Baneados';
import Revision from '../components/Admin/Reseñas';
import ModalMessage from '../components/ModalMessage';

const Admin2 = () => {
  const menus = [
    { name: 'Usuarios', icon: UsersIcon },
    { name: 'Suscriptores', icon: SubscribersIcon },
    { name: 'Baneados', icon: BannedIcon },
    { name: 'Revisión y publicación', icon: RevisionIcon, margin: true },
    { name: 'Recomendados', icon: RecommendedIcon},
    { name: 'Generos', icon: GenresIcon },
    { name: 'Subgeneros', icon: SubgenresIcon },
    { name: 'Vendidos', icon: VendidosIcon, margin: true },
    { name: 'Transacciones', icon: TransactionsIcon },
    { name: 'Agregar Stock', icon: AddStockIcon },
  ];
  const [open, setOpen] = useState(true);
  const [activeView, setActiveView] = useState(1);

  return (
    <section className='flex gap-6 min-h-screen relative'>
      <div
        className={`sticky top-0 z-10 bg-bluebook h-screen ${
          open ? 'w-56' : 'w-16'
        } duration-500 text-gray-100 px-4`}
      >
        <div
          className='py-3 flex justify-end cursor-pointer'
          onClick={() => setOpen(!open)}
        >
          <ResponsiveMenu classN={'w-6 h-6 md:w-11 md:h-12 text-yellowbook'} />
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
          {menus?.map((menu, i) => (
            <div
              onClick={() => setActiveView(i + 1)}
              key={i}
              className={` ${
                menu?.margin && 'mt-5'
              } group flex items-center text-sm gap-3.5 font-medium p-2 -mr-1 rounded-md hover:bg-blue-800 `}
            >
              <div>{React.createElement(menu?.icon)}</div>
              <h2
                style={{
                  transitionDelay: `${i}00ms`,
                }}
                className={`whitespace-pre duration-300 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && 'hidden'
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </div>
          ))}
          <Link to='/'>
            <div className='flex mt-16 text-sm gap-3.5 font-medium p-2 -mr-1 rounded-md hover:bg-blue-800 '>
              <div>
                <HomeIcon />
              </div>
              <h2
                style={{
                  transitionDelay: `1000ms`,
                }}
                className={`whitespace-pre duration-300 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                Home
              </h2>
              <h2
                className={`${
                  open && 'hidden'
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                Home
              </h2>
            </div>
          </Link>
        </div>
      </div>
      <div className='m-3 text-xl text-gray-900 font-semibold w-full'>
        <div>
          <div className={activeView === 1 ? 'block' : 'hidden'}>
            <Usuarios />
          </div>
          <div className={activeView === 2 ? 'block' : 'hidden'}>
            <Subscribers/>
          </div>
          <div className={activeView === 3 ? 'block' : 'hidden'}>
            <Baneados/>
          </div>
          <div className={activeView === 4 ? 'block' : 'hidden'}>
            <Revision />
          </div>
          <div className={activeView === 5 ? 'block' : 'hidden'}>
            <h1>Recomendados</h1>
          </div>
          <div className={activeView === 6 ? 'block' : 'hidden'}>
            <h1>Géneros</h1>
          </div>
          <div className={activeView === 7 ? 'block' : 'hidden'}>
            <h1>Subgéneros</h1>
          </div>
          <div className={activeView === 8 ? 'block' : 'hidden'}>
            <h1>Libros vendidos</h1>
          </div>
          <div className={activeView === 9 ? 'block' : 'hidden'}>
            <h1>Transacciones</h1>
          </div>
          <div className={activeView === 10 ? 'block' : 'hidden'}>
            <h1>Stock</h1>
          </div>
        </div>
      {/* <ModalMessage status={401} message={'Saca la mano de ahi carajo'} /> */}
      </div>
    </section>
  );
};

export default Admin2;
