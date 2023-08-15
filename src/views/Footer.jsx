import React from 'react';
import Instagram from '../icons/Instagram';
import Twitter from '../icons/Twitter';
import Facebook from '../icons/Facebook';
import { Link } from 'react-router-dom';
// import FooterIcon from '../assets/FooterIcon.png';
import FooterLogo from '../assets/FooterLogo.png';
import Bookmark from '../icons/Bookmark';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-blue-600 text-black p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center space-x-4 text-white'>
          <img src={FooterLogo} alt='Footer' />
          <a href='#' className='hover:text-pink-200'>
            Términos y Condiciones
          </a>
          <p>© {currentYear} Bookbuster</p>
        </div>
        <div className='flex items-center space-x-4 ml-x '>
          <Link
            to={'https://www.instagram.com/'}
            target='_blank'
            rel='noopener noreferrer'
            className=''
          >
            <Instagram />
          </Link>
          <Link
            to={'https://twitter.com/?lang=es'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Twitter />
          </Link>
          <Link
            to={'https://www.facebook.com/'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Facebook />
          </Link>
          <Bookmark />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
