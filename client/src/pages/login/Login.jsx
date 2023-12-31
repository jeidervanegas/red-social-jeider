

import { Link } from 'react-router-dom'

export const Login = () => {
  

  return (
    <div className='h-vh'>
      <nav className='bg-blue-500 py-2 px-6 '>
        <div className='flex justify-between items-center'>
        <a className='font-bold text-2xl text-center md:text-start text-white italic '>Niu<span className='text-blue-800'>MER</span></a>
        <div className='flex gap-3'>
          <a className='font-bold  text-sm text-white'>Nosotros</a>
          <a className='font-bold  text-sm text-white'>Descargar App</a>
        </div>
        </div>
      </nav>
      <main>
        <form >
        {/* {//inciar session} */}
          <h2 className="text-center p-4 uppercase text-2xl text-blue-700 mt-20">
            Inicia Sessión
          </h2>
          <div className="bg-gray-100 w-11/12 md:w-3/5 lg:w-4/12 m-auto p-4 shadow-md rounded-lg mb-10">
            <div>
              <label
                className="block mb-2 font-bold text-gray-600"
                htmlFor="correo-session"
              >
              
              </label>
              <input
                id="correo-session"
                className="mb-2 w-full p-2 rounded-md"
                type="text"
                placeholder="Ingresa tu correo"
                name="email"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-bold text-gray-600"
                htmlFor="password"
              >
             
              </label>
              <input
                id="password"
                className="mb-2 w-full p-2 rounded-md"
                type="text"
                placeholder="Define tu contraseña"
                name="password"
              />
              <div className='flex justify-end gap-2'>


                <button className="bg-blue-600 hover:bg-blue-700 py-2 px-8 mt-2 uppercase font-bold text-white cursor-pointer rounded-md">
                  Ingresar
                </button>
              </div>
            </div>
          </div>
      </form>
      </main>

  
      <div className=' w-11/12 md:w-3/5 lg:w-4/12 m-auto bg-blue-100 flex justify-between p-4 rounded-lg'>
          <Link className='text-blue-600 hover:text-blue-800 transition-colors font-bold' to={'/registro'}>Crea una cuenta</Link>
          <Link to={'/recuperarPassword'} className='text-slate-600 font-bold hover:text-slate-700 transition-colors '>Olvidé mi contraseña</Link>
      </div>

      <footer className='bg-gray-200 absolute w-full bottom-0 p-4'>
            <ul className='m-0 p-0'>
              <li className='text-sm mb-2 text-slate-500 text-center'>Español(España) ingles(US) Francais(France) Portugués(Brasil) Español(España) ingles(US) Francais(France) Portugués(Brasil)</li>
              <li className='h-px w-full bg-slate-300'></li>
              <li>1</li>

            </ul>
           
        </footer>
    </div>

    
  )
}
