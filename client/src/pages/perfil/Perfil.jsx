import imagenUsuario from '../images/usuario.jpg'
import { Link } from 'react-router-dom'
import imagenContacto from '../images/perfil/contacto.png'
import imagenreferecnias from '../images/perfil/referencias.png'
import imagenreRedes from '../images/perfil/redes.png'
import imagenCarga from '../images/perfil/carga.png'
import { useAuth } from '../../hooks/useAuth'

function Loading() {
  return (
    <h1>Cargando...</h1> 
  ) 
}

export const Perfil = () => {
  const { user } = useAuth()


  if (user === undefined) return (
    <Loading /> // placeholder: pagina de carga (precargador)
  ) 
  
  if (user === null) return (
    <h1>No ha iniciado sesion</h1> // aqui recomiendo redirecionar al Log In. (La logica para hacerlo esta en tu imaginacion xd)
  )

  console.log(user)

  return (
    <div className='bg-slate-100'>
      <nav className='bg-blue-500 py-2 px-6 mb-8  fixed w-full '>
          <div className='flex flex-col lg:flex-row lg:justify-between items-center '>
            <a className='font-bold text-2xl text-center md:text-start text-white italic '>Niu<span className='text-blue-800'>MER</span></a>
            <div className='flex gap-3 flex-col lg:flex-row mb-4 lg:mb-0 '>
             <Link className='font-bold  text-sm text-white' to={'/inicio'}>Inicio</Link>
              <a className='font-bold  text-sm text-white'>Cerrar</a>

            </div>
          </div>
      </nav> 
    
     <div className='w-11/12 m-auto  flex flex-col md:flex-row md:gap-8 pt-36 md:pt-36 lg:pt-20'>

        <div className=' bg-white  mb-8 h-full  lg:w-1/4 rounded-xl '>
          
          <div className='bg-gradient-to-t from-slate-500 to-blue-400 py-4 rounded-t-xl mb-8'>
            <img 
            className='w-40 rounded-full  m-auto '
              src={imagenUsuario} 
              alt="imagen usuario" 
            />
          </div>


          <div className=''>
            <div className='text-center mb-8'></div>
              <h2 className='text-slate-600 font-bold uppercase'>{user.name}</h2>
              <p className='text-slate-500'>Profesional en <span>Desarrollo de software</span></p>
            </div>

            <div className='text-center mb-8'>
              <img className='w-8 m-auto mb-2' src={imagenContacto}/>
              <h2 className='text-slate-600 font-bold uppercase'>Contácto</h2>
              <p className='text-slate-500 mb-4'>Telefono: <span className='block'>(+57) 3153005679</span> </p>
              <p className='text-slate-500 mb-4'>Correo: <span className='block'>JeiderG@gmail.com</span> </p>
              <p className='text-slate-500'>Sitio Web: <span className='block'>www:https://todoweb.com</span> </p>
            </div>

            <div className="h-px w-11/12 m-auto bg-blue-500 mb-8"></div>

            <div className='text-center mb-8'>
              <img className='w-8 m-auto mb-2' src={imagenreferecnias}/>
              <h2 className='text-slate-600 font-bold uppercase'>Referencias</h2>
              <p className='text-slate-500 mb-4'>Campus Virtual S.A: <span className='block'>(+57) 3153005679</span> </p>
              <p className='text-slate-500 mb-4'>Campus Virtual S.A: <span className='block'>(+57) 3153005679</span> </p>
              
            </div>

            <div className="h-px w-11/12 m-auto bg-blue-500 mb-8"></div>            

            <div className='text-center mb-8'>
              <img className='w-8 m-auto mb-2' src={imagenreRedes}/>
              <h2 className='text-slate-600 font-bold uppercase'>Redes Sociales</h2>
              <p className='text-slate-500 mb-4'>Facebook <span className='block'>@jeiderdev</span> </p>
              <p className='text-slate-500 mb-4'>Instagram <span className='block'>@jeiderdev</span> </p>

              
            </div>

            <div className="h-px w-11/12 m-auto bg-blue-500 mb-8"></div>

          </div>

        </div>

        <div className=' flex flex-col gap-8  rounded-xl  md:w-3/4'>
          
          <div className='bg-white  text-slate-700  rounded-xl flex ' >
            
            <div className='w-11/12 m-auto flex flex-col pb-8'>
              <h3 className=' text-slate-600 font-bold uppercase text-center mt-5 mb-2'>¿Qué tipo de persona soy?</h3>
              <p className='mb-2 '>Me considero una persona profesional y respnsable, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas, quam ipsa dolorum cupiditate eum beatae, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas, quam ipsa dolorum cupiditate eum beatae 
              </p>
              <p className='mb-2 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas, quam ipsa dolorum cupiditate eum beatae, sunt placeat architecto deleniti fuga ut. Possimus voluptates eum eos qui perspiciatis, aliquam totam!</p>
            </div>
          </div>

          <div className='flex gap-8 flex-col lg:flex-row'>

            <div className='bg-white  text-slate-700  rounded-xl flex lg:w-2/4' >
              <ul className='w-3/4 m-auto flex flex-col pb-8 list-disc'>
                <h3 className=' text-slate-600 font-bold uppercase text-center mt-5 mb-2'>Mis estudios</h3>
                <li className='mb-4 '>2015 <span>Carrera tecnolócia en desarrollo de software y aplicativos móviles</span> 
                <span className='block text-slate-500 font-bold'>Institución de educacion superior Politécnico Internacional</span>
                </li>
                <li className='mb-4 '>2018 <span>Capacitacion Seminario sobre inteligencia artifical -europa-</span> 
                <span className='block text-slate-500 font-bold'>School web Espain</span>
                </li>
                <li className='mb-4 '>2010 <span>Curso intensivo de CSS3 y HTML5</span> 
                <span className='block text-slate-500 font-bold'>sytem plus - cursos S-A</span>
                </li>
                <li className='mb-4 '>2010 <span>Curso intensivo de CSS3 y HTML5</span> 
                <span className='block text-slate-500 font-bold'>sytem plus - cursos S-A</span>
                </li>

              </ul>
            </div>

            <div className='bg-white  text-slate-700  rounded-xl flex lg:w-2/4 ' >
              <div className='bg-white  text-slate-700  rounded-xl  w-full ' >
                <ul className='w-3/4 m-auto flex flex-col item pb-8 '>
                  <h3 className=' text-slate-600 font-bold uppercase text-center mt-5 mb-2'>Mis habilidades</h3>
                  <div></div>
                  <li className=' font-bold text-slate-500 mb-4'>Javascript </li>
                  <span className='h-2 w-full bg-blue-500 mb-4'></span> 
                  <li className=' font-bold text-slate-500 mb-4'>React JS </li>
                  <span className='h-2 w-1/2 bg-blue-500 mb-4'></span> 
                  <li className=' font-bold text-slate-500 mb-4'>Node JS </li>
                  <span className='h-2 w-3/4 bg-blue-500 mb-4'></span> 

                </ul>
              </div>
            </div>
            
          </div>

          <div className='bg-white  text-blue-700  rounded-xl flex '>
            <p >sdfsdfsdf</p>
          </div>

        </div>
     </div>
  )
}
