import { Link } from 'react-router-dom';
import FooterBook from '../assets/Footer-BookBuster.png';
import FooterSave from '../assets/Footer-Save.png';

const Footer = () => {
  return (
    <footer className='bg-bluebook h-[50px] xl:h-24 no-scroll-x'>
      <div className='h-full flex justify-center md:justify-between items-center mx-4 md:mx-6 xl:mx-8'>
        <div className='w-10 h-10 xl:w-16 xl:h-16 hover:scale-110 transition-all duration-300 hover:bg-opacity-20 hover:bg-violet-600'>
          <Link to='/about'>
            <img src={FooterBook} alt='Logo de Book Buster' />
          </Link>
        </div>
        <div className='hidden md:inline md:w-6 md:h-6 xl:h-10 xl:w-10 hover:scale-110 transition-all duration-300 hover:bg-opacity-20 hover:bg-violet-600'>
          <Link to='/about'>
            <img src={FooterSave} alt='Logo de guardado amarillo' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
