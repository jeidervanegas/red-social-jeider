
import { Link, useNavigate } from 'react-router-dom'

import React from 'react'
import { toast } from 'react-hot-toast'
import Axios from'axios'
import { useAuth } from '../../hooks/useAuth'

export const Registro = () => {
const { setUser } = useAuth()
const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const email = formData.get('email');
    const name = formData.get('name');
    const phone = formData.get('phone');
    const password = formData.get('password');

    Axios.post('http://localhost:6001/register', {
      email,
      name,
      phone,
      password
    })
    //la data es la info que llega del servidot (api)
    .then(data => {
      setUser(data.newUser)
      navigate('/inicio')
    })
    .catch(error => toast.error(error.msg || error.message))
  }

  

  return (
    <>
      <nav className='bg-blue-500 py-2 px-6 '>
        <div className='flex justify-between items-center'>
            <a className='font-bold text-2xl text-center md:text-start text-white italic'>Niu<span className='text-blue-800'>MER</span></a>
          <div className='flex gap-2'>
            <a className='font-bold  text-sm text-white'>Nosotros</a>
            <a className='font-bold  text-sm text-white'>App</a>
          </div>
        </div>
      </nav>
      <h1 className="text-center mt-20 p-4 uppercase text-2xl text-blue-700">
        Crea tu cuenta
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 w-11/12 md:w-4/12 m-auto p-4 shadow-lg rounded-lg mb-10"
      >
        <div>
 
          <label
            className="block mb-2 font-bold text-gray-600"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            id="nombre"
            className="mb-2 w-full p-2 rounded-md"
            type="text"
            placeholder="Escribe tu nombre"
            name='name'
          />
        </div>
        <div>
          <label className="block mb-2 font-bold text-gray-600" htmlFor="email">
            Correo
          </label>
          <input
            id="email"
            className="mb-2 w-full p-2 rounded-md"
            type="email"
            placeholder="Escribe tu Email"
            name='email'
          />
        </div>
        <div>
          <label
            className="block mb-2 font-bold text-gray-600"
            htmlFor="telefono"
          >
            Telefono
          </label>
          <input
            id="telefono"
            className="mb-2 w-full p-2 rounded-md"
            type="number"
            placeholder="Escribe tu Telefono"
            name='phone'
          />
        </div>
        <div>
          <label
            className="block mb-2 font-bold text-gray-600"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            id="password"
            className="mb-2 w-full p-2 rounded-md"
            type="text"
            placeholder="Define tu contraseña"
            name='password'
          />
        </div>
        <div className='flex justify-end gap-2'>
          <Link className="bg-slate-500 hover:bg-blue-700 py-2 px-8 mt-2 uppercase font-bold text-white cursor-pointer rounded-md" to={'/'}>
          Cancelar
          </Link>
          <button  className="bg-blue-600 hover:bg-blue-700 py-2 px-8 mt-2 uppercase font-bold text-white cursor-pointer rounded-md">
              Enviar
          </button>          
        </div>
      </form>
    </>
  )
}
