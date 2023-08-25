// import Footer from './Footer';
import React from 'react';
import Linkedin from '../icons/Linkedin';
import Github from '../icons/Github';

const devs = [
  {
    name: 'David Ramos',
    role: 'Backend Developer',
    imageUrl:
      'https://media.licdn.com/dms/image/D4E03AQEU3mJP8KJjjA/profile-displayphoto-shrink_800_800/0/1689306079777?e=1698278400&v=beta&t=RTwSmNbqsvG8vTljy7pDs8SDn400rTMfflGL-c2rn0Y',
    linkedinUrl: 'https://www.linkedin.com/in/thisisdavidramos/',
    githubUrl: 'https://github.com/itsjefferson/',
  },
  {
    name: 'Milagros Fernández Boto',
    role: 'Frontend Developer',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQH_kTMu_E1ElQ/profile-displayphoto-shrink_400_400/0/1661197436976?e=1698278400&v=beta&t=YnhABNZNHLhkYexL4hFup3YKfMhZjK3QFB1KQXfabkk',
    linkedinUrl: 'https://www.linkedin.com/in/milagrosfboto/',
    githubUrl: 'https://github.com/Milifboto',
  },
  {
    name: 'Carolina Palacios',
    role: 'Backend Developer',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D35AQHQ132e79IcAg/profile-framedphoto-shrink_400_400/0/1683759360267?e=1693429200&v=beta&t=VdVpA4IsUpflyl1RqRCEvN7uM271-I7bg0M0UJsGeWk',
    linkedinUrl: 'https://www.linkedin.com/in/carolina-palacios-0723b726b/',
    githubUrl: 'https://github.com/CarolinaPalacios ',
  },
  {
    name: 'Lucas López',
    role: 'Frontend Developer',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQFhvisXma5piA/profile-displayphoto-shrink_800_800/0/1663540281165?e=1698278400&v=beta&t=hkESlQyeUhBzSlKYDM0g9pFSG69-S7hkbhZPL439PkM',
    linkedinUrl: 'https://www.linkedin.com/in/lucaslopezdev/',
    githubUrl: 'https://github.com/lucaslopezdev',
  },
  {
    name: 'Sebastián Velázquez',
    role: 'Backend Developer',
    imageUrl:
      'https://media.licdn.com/dms/image/D5635AQFWT5IWOq61Qg/profile-framedphoto-shrink_800_800/0/1690245887750?e=1693429200&v=beta&t=wDU0up4X5fSTYN1VGyLbczbdM6r_ifMc9XazVEBCQ0Y',
    linkedinUrl:
      'https://www.linkedin.com/in/sebastian-orlando-velazquez-gonzales/',
    githubUrl: 'https://github.com/seba2803/seba2803',
  },
  {
    name: 'Federico Risetti',
    role: 'Frontend Developer',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQEhJFk92UEAOw/profile-displayphoto-shrink_400_400/0/1692876918716?e=1698278400&v=beta&t=vmig3Hxh8JrMvuMvbHZ1ytV3eKvObShIiJGlQjWihSg',
    linkedinUrl: 'https://www.linkedin.com/in/federico-risetti-507567196/',
    githubUrl: 'https://github.com/risettifede',
  },
  {
    name: 'Maria Celeste Coronel',
    role: 'Backend Developer',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQHdbrweyMgTEg/profile-displayphoto-shrink_800_800/0/1683552568069?e=1698278400&v=beta&t=on77OWUef1i25IBJtl7cWesDL52p_o3PAqgrP3kWIhI',
    linkedinUrl: 'https://www.linkedin.com/in/mcelestecrnl/',
    githubUrl: 'https://github.com/MCCoronel',
  },
  {
    name: 'Ezequiel Valdiviezo',
    role: 'Frontend Developer',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D35AQG8GkOm3HkPSw/profile-framedphoto-shrink_800_800/0/1690173976004?e=1693429200&v=beta&t=ydAuoT_fQdTb87KpMPebvcgYf_3kpiyYMf5e3pfvnrc',
    linkedinUrl: 'https://www.linkedin.com/in/ezequiel-valdiviezo-987582247/',
    githubUrl: 'https://github.com/REValdiviezo',
  },
];

const owners = [
  { name: 'Daniela Morán', role: 'Editora' },
  { name: 'Matias Chain', role: 'CEO Project' },
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
              <div className='flex flex-col items-center gap-y-2'>
                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>
                  {owner.name}
                </h3>
                <p className='text-sm font-semibold leading-6 text-indigo-600'>
                  {owner.role}
                </p>
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
