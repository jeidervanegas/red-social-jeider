

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

export const RecuperarPassword = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const email = formData.get('email')
    const password = formData.get('password')

    try {
      const respuesta = await fetch('http://localhost:3100/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          email,
          password
        })
      })

      const data = await respuesta.json()
      if (!respuesta.ok) {
        throw new Error(data)
      }

      localStorage.setItem('access-token', data['access-token'])

      navigate('/perfil')
    } catch (error) {
      toast.error(error.msg)
      console.log(error)
    }
  }

  return (
    <div className='h-vh'>
      <nav className='bg-blue-500 py-2 px-6 '>
        <div className='flex justify-between items-center'>
        <a className='font-bold text-2xl text-center md:text-start text-white italic'>Niu<span className='text-blue-800'>MER</span></a>
        <div className='flex gap-2'>
          <a className='font-bold  text-sm text-white'>Nosotros</a>
          <a className='font-bold  text-sm text-white'>App</a>
        </div>
        </div>
      </nav>
      <main>
        <form onSubmit={handleSubmit}>
        {/* {//inciar session} */}
          <h2 className="text-center p-4 uppercase text-2xl text-blue-700 mt-20">
          Recupera tu cuenta
          </h2>
          <div className="bg-gray-100 w-11/12 md:w-3/5 lg:w-4/12 m-auto p-4 shadow-md rounded-lg mb-10">
            <div>
              <label
                className="block mb-2  text-gray-600"
                htmlFor="correo-session"
              >
               Introduce tu correo electrónico o número de móvil para buscar tu cuenta.
              </label>
              <input
                id="correo-session"
                className="mb-2 w-full p-2 rounded-md"
                type="text"
                placeholder="Ingresa tu correo"
                name="email"
              />
            </div>
            <div className='flex justify-end gap-2'>
            <Link to={'/'}>
                <button className="bg-slate-500 hover:bg-blue-700 py-2 px-8 mt-2 uppercase font-bold text-white cursor-pointer rounded-md">
                Cancelar
                </button>
            </Link>
              <button className="bg-blue-600 hover:bg-blue-700 py-2 px-8 mt-2 uppercase font-bold text-white cursor-pointer rounded-md">
                Buscar
              </button>
            </div>
          </div>
      </form>

      </main>


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
