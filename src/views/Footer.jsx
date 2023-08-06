import React from 'react';
import Instagram from '../icons/Instagram';
import Twitter from '../icons/Twitter';
import Facebook from '../icons/Facebook';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-800 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <a href='#' className='hover:text-blue-500'>
            Términos y Condiciones
          </a>
          <p>© {currentYear} Bookbuster</p>
        </div>
        <div className='flex items-center space-x-4 ml-x'>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
