import FAQs from '../components/FAQs';

const Subscription = () => {
  return (
    <div className='flex flex-col items-center p-14'>
      <div className='text-center text-4xl mb-16'>
        <h2 className='font-bold text-black'>
          Los beneficios de ser parte de la comunidad suscripta
        </h2>
        <h3 className='font-sans text-2xl text-black text-sm'>
          Imagina un mundo donde cada página te invita a explorar más allá de lo
          convencional. Al unirte a nuestra comunidad suscripta de amantes de
          los libros, te embarcas en un viaje literario lleno de sorpresas.
          Acceso exclusivo a títulos anticipados, invitaciones a charlas íntimas
          con tus autores favoritos, y un club de lectura VIP donde tus
          opiniones dan forma a nuestra colección. Además, cada mes, un libro
          cuidadosamente seleccionado espera en tu estantería digital, una
          puerta a nuevos horizontes. Con nosotros, la lectura no es solo un
          pasatiempo, es una aventura continua que celebra la alegría de
          descubrir, aprender y conectar.
        </h3>
      </div>
      <div className='w-7/16 flex items-center'>
        <div className='bg-gray-100 flex flex-col rounded-3xl items-center mr-2 p-6 shadow-lg'>
          <div className='flex justify-center '>
            <h2 className='text-lg font-semibold mb-2'>Clásica</h2>
          </div>
          <p>Envío sin cargo en caso de compra de libros nuevos y usados.</p>
          <p>Alquilar hasta 2 libros en simultáneo.</p>
          <p>
            Podés vender tus libros usados a la plataforma para comprar nuevos.
          </p>
          <p>Acceso a catálogo exclusivo para suscriptores</p>
          <p>30 días de permanencia de libros</p>
          <div className='flex justify-center '>
            <h2 className='text-lg font-semibold mb-2 text-blue-500 mt-12'>
              ARS$2.000
            </h2>
          </div>
          <div className='flex justify-center '>
            <button className='bg-blue-500 rounded p-3 font-bold mb-4 text-white hover:bg-blue-600'>
              Suscribirse
            </button>
          </div>
          <p className='text-gray-400 text-xs text-center'>
            EL PRECIO NO INCLUYE IMPUESTOS VIGENTES EN ARGENTINA.
          </p>
        </div>

        {/* <div className='bg-gray-100 flex flex-col justify-center ml-2 p-2'>
          <div className='flex justify-center '>
            <h2 className='text-lg font-semibold mb-2'>Manija</h2>
          </div>
          <p>• Envío sin cargo en caso de compra de libros nuevos y usados.</p>
          <p>• Alquilar hasta 4 libros en simultáneo.</p>
          <p>
            • Podés vender tus libros usados a la plataforma para comprar
            nuevos.
          </p>
          <p>• Acceso a catálogo exclusivo para suscriptores</p>
          <p>• 45 días de permanencia de libros</p>
          <p>• 20% de descuento en cualquier compra o descarga de libros</p>
          <div className='flex justify-center '>
            <h2 className='text-lg font-semibold mb-2 color text-blue-500'>
              ARS$8.000
            </h2>
          </div>
          <div className='flex justify-center '>
            <button className='bg-blue-500 rounded p-3 font-bold mb-4 text-white hover:bg-blue-600'>
              Suscribirse
            </button>
          </div>
          <p className='text-gray-400 text-xs text-center'>
            EL PRECIO NO INCLUYE IMPUESTOS VIGENTES EN ARGENTINA.
          </p>
        </div> */}
      </div>

      <FAQs />
    </div>
  );
};

export default Subscription;
