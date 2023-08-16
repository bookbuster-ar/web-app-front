import FooterBook from '../assets/Footer-BookBuster.png'
import FooterSave from '../assets/Footer-Save.png'

const Footer = () => {
  return (
    <footer className='bg-bluebook h-[50px] xl:h-24'>
      <div className='h-full flex justify-center md:justify-between items-center mx-4 md:mx-6 xl:mx-8'>
        <div className='w-10 h-10 xl:w-16 xl:h-16'>
          <img src={FooterBook} alt="Logo de Book Buster" />
        </div>
        <div className='hidden md:inline md:w-6 md:h-6 xl:h-10 xl:w-10'>
          <img src={FooterSave} alt="Logo de guardado amarillo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;