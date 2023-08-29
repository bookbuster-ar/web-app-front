// import Footer from './Footer';
import React from 'react';
import Linkedin from '../icons/Linkedin';
import Github from '../icons/Github';
import CaroImage from '../assets/team/caro.png';
import LucasImage from '../assets/team/lucas.png';
import MiliImage from '../assets/team/milib.png';
import DavidImage from '../assets/team/david.png';
import SebaImage from '../assets/team/seba.png';
import CeleImage from '../assets/team/cele.png';
import EzeImage from '../assets/team/eze.png';
import FedeImage from '../assets/team/fede.png';
import MatiasImage from '../assets/owners/matias.png';
import DanielaImage from '../assets/owners/daniela.png';

const devs = [
  {
    name: 'David Ramos',
    role: 'Backend Developer',
    imageUrl: DavidImage,
    linkedinUrl: 'https://www.linkedin.com/in/thisisdavidramos/',
    githubUrl: 'https://github.com/itsjefferson/',
  },
  {
    name: 'Milagros Fernández Boto',
    role: 'Frontend Developer',
    imageUrl: MiliImage,
    linkedinUrl: 'https://www.linkedin.com/in/milagrosfboto/',
    githubUrl: 'https://github.com/Milifboto',
  },
  {
    name: 'Carolina Palacios',
    role: 'Backend Developer',
    imageUrl: CaroImage,
    linkedinUrl: 'https://www.linkedin.com/in/carolina-palacios-0723b726b/',
    githubUrl: 'https://github.com/CarolinaPalacios ',
  },
  {
    name: 'Lucas López',
    role: 'Frontend Developer',
    imageUrl: LucasImage,
    linkedinUrl: 'https://www.linkedin.com/in/lucaslopezdev/',
    githubUrl: 'https://github.com/lucaslopezdev',
  },
  {
    name: 'Sebastián Velázquez',
    role: 'Backend Developer',
    imageUrl: SebaImage,
    linkedinUrl:
      'https://www.linkedin.com/in/sebastian-orlando-velazquez-gonzales/',
    githubUrl: 'https://github.com/seba2803/seba2803',
  },
  {
    name: 'Federico Risetti',
    role: 'Frontend Developer',
    imageUrl: FedeImage,
    linkedinUrl: 'https://www.linkedin.com/in/federico-risetti-507567196/',
    githubUrl: 'https://github.com/risettifede',
  },
  {
    name: 'Maria Celeste Coronel',
    role: 'Backend Developer',
    imageUrl: CeleImage,
    linkedinUrl: 'https://www.linkedin.com/in/mcelestecrnl/',
    githubUrl: 'https://github.com/MCCoronel',
  },
  {
    name: 'Ezequiel Valdiviezo',
    role: 'Frontend Developer',
    imageUrl: EzeImage,
    linkedinUrl: 'https://www.linkedin.com/in/ezequiel-valdiviezo-987582247/',
    githubUrl: 'https://github.com/REValdiviezo',
  },
];

const owners = [
  { name: 'Daniela Morán',
    role: 'Founder', 
    imageUrl: DanielaImage 
  },
  {
    name: 'Matias Chahin',
    role: 'Founder',
    imageUrl: MatiasImage,
    linkedinUrl: 'https://www.linkedin.com/in/matias-chahin-3a265031/',
  },
];

export default function About() {
  return (
    <div className='flex flex-wrap bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='max-w-2xl mb-12'>
          <h2 className='text-3xl font-bold tracking-tight text-bluebook sm:text-4xl'>
            Fundadores
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'></p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
          {owners.map((owner) => (
            <div
              key={owner.name}
              className='card bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              <div className='flex items-center'>
                <img
                  className='h-20 w-20 rounded object-cover mr-5'
                  src={owner.imageUrl}
                  alt={owner.name}
                />
                <div>
                  <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>
                    {owner.name}
                  </h3>
                  <p className='text-sm font-semibold leading-6 text-indigo-600'>
                    {owner.role}
                  </p>
                  <div className='flex flex-wrap'>
                    <div className='mr-3'>
                      <Linkedin url={owner.linkedinUrl} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='max-w-2xl mb-12'>
          <h2 className='text-3xl font-bold tracking-tight text-bluebook sm:text-4xl'>
            Equipo de desarrollo
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'></p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 align-center gap-8'>
          {devs.map((person) => (
            <div
              key={person.name}
              className='card bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300'
            >
              <div className='flex items-center'>
                <img
                  className='h-20 w-20 rounded object-cover mr-5'
                  src={person.imageUrl}
                  alt={person.name}
                />
                <div>
                  <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>
                    {person.name}
                  </h3>
                  <p className='text-sm font-semibold leading-6 text-indigo-600'>
                    {person.role}
                  </p>
                  <div className='flex flex-wrap'>
                    <div className='mr-3'>
                      <Linkedin url={person.linkedinUrl} />
                    </div>
                    <div>
                      <Github url={person.githubUrl} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
