import DesafiaLasNormas from '../components/home/DesafiaLasNormas';
import Recomendaciones from '../components/home/Recomendaciones';
import InteractuaLibros from '../components/home/InteractuaLibros';
import EntornoDigital from '../components/home/EntornoDigital';
import NoEncontras from '../components/home/NoEncontras';
/* import Carousels from '../components/Carousels'; */
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <div className='h-[265px] md:h-[500px] xl:h-[920px] my-1 md:my-2 xl:my-5 flex justify-center items-end'>
        <div>
          <DesafiaLasNormas />
        </div>
      </div>
      <div className='redbook-bg-image h-[420px] md:h-[400px] lg:h-[515px] xl:h-[765px] my-1 md:my-2 xl:my-5 flex flex-col justify-end items-center md:flex-row-reverse md:items-end '>
        <Recomendaciones />
      </div>
      <div className='yellowbook-bg-image h-[415px] md:h-[380px] lg:h-[520px] xl:h-[770px] my-1 md:my-2 xl:my-5 flex flex-col justify-end items-center md:items-end'>
        <InteractuaLibros />
      </div>
      <div className='pinkbook-bg-image h-[415px] md:h-[390px] lg:h-[525px] xl:h-[760px] md:my-2 xl:my-5 flex flex-col justify-end items-center md:flex-row-reverse md:items-end'>
        <EntornoDigital />
      </div>
      <div className='h-[1350px] md:h-[900px] lg:h-[1200px] xl:h-[450px] md:my-2 xl:my-5'>
        {/* <Carousels /> */}
      </div>
      <div className='bg-greybook h-[250px] md:h-[230px] lg:h-[380px] xl:h-[460px] flex flex-col justify-end items-center md:flex-row md:items-end'>
        <NoEncontras />
      </div>
      <Footer />
    </div>
  );
};

export default Home;