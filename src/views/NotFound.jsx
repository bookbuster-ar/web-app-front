import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-bluebook">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página no encontrada</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Lo siento, no pudimos encontrar la página que buscas.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to='/'>
            <button
              className="rounded-md bg-bluebook px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Volver al Home
            </button>
            </Link>
            <button className="text-sm font-semibold text-gray-900">
              Contactanos si crees que se trata de un error <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
