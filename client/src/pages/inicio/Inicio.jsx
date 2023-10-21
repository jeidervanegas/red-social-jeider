import { Link } from "react-router-dom"

import imageUser from '../images/usuario.jpg'
import imagenCerrar from '../images/cerrar.png'
import imagenPublicacion from '../images/publicacion.jpg'
import imagenPunto from '../images/punto.jpg'
import imagenlike from '../images/like.png'
import imagenComent from '../images/comentar.png'
import imagenCompartir from '../images/compartir.png'


export const Inicio = () => {
  return (
    <div className="bg-slate-100">
        <nav className='bg-blue-500 py-2 px-6 fixed w-full  '>
            <div className=' flex flex-col lg:flex-row lg:justify-between items-center'>
                <a className='font-bold text-2xl text-center md:text-start text-white italic mb-4 lg:mb-0 '>Niu<span className='text-blue-800'>MER</span></a>
                <div className='flex gap-3 flex-col lg:flex-row mb-4 lg:mb-0 '>
                <Link className='font-bold  text-sm text-white hover:text-blue-800' to={'/perfil'}>Perfil</Link>
                <Link className=' font-bold  text-sm text-white hover:text-blue-800'>Cerrar</Link>

            </div>
            </div>
        </nav> 
        
        <div className="flex flex-col justify-center items-center  pt-36 pb-10 lg:pt-14 w-11/12 md:w-4/5 lg:w-2/4 bg-white m-auto rounded-b-xl shadow-sm ">
           <p className="text-center p-3 text-blue-500 ">Publica o comparte tus ideas</p>

           <hr className=""/>

            <div className="flex gap-2  items-center justify-center w-11/12 m-auto mt-4 ">
                <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 m-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " type="text" name="" id="" placeholder="Publica cualquier cosa "/>
                <button className="text-blue-600 cursor-pointer font-bold">Publicar</button>
            </div>
            
        </div>

        <div className="h-full pb-28  w-11/12 md:w-4/5 lg:w-2/4 bg-white m-auto rounded-xl  shadow-sm mt-6">
            <div className="flex justify-between w-11/12 m-auto">
                <div className="w-12 py-4 flex gap-2  items-center text-xs text-blue-700 font-bold">
                    <img src={imageUser}/>
                    <p>Jeider Gomez</p>
                </div>
                <div className="flex justify-center items-center">
                    <img className="w-12 rounded-full cursor-pointer" src={imagenCerrar}/>
                </div>
            </div>
           <div className=" w-11/12 m-auto rounded-lg">

            <div className="h-px w-full bg-blue-500"></div>

            <div className="flex items-center gap-3 justify-between">
                <div className="flex items-center gap-3">
                    <img className="h-2 w-2 rounded-full" src={imagenPunto}/>
                    <h3  className="py-4 font-bold text-gray-800 text-xs md:text-sm">Mi nuevo curso sobre Inteligencia Artificial</h3>
                </div>


                <div className="flex text-xs text-center gap-3 text-slate-600 cursor-pointer">
                    <div className="flex ">
                        <h4>Me gusta <span className="font-bold">49</span></h4>
                    </div>
                    <div className="flex ">
                        <h4 >Comentarios <span className="font-bold">12</span></h4>
                    </div>
                </div>
            </div>

            
            <div className=" mb-4 ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem dolorum illum voluptates quod asperiores obcaecati, corrupti possimus commodi architecto impedit laborum provident quas eaque hic delectus, voluptatum quibusdam dignissimos.</p>
            </div>

            <img className="w-full h-full object-cover rounded-md" src={imagenPublicacion}/>
           </div>


           
           <div className="flex justify-around px-2 mt-4">
            <img className="h-8 w-8 hover:scale-110 transition-all cursor-pointer" src={imagenlike}/>
            <img className="h-8 w-8 hover:scale-110 transition-all cursor-pointer"  src={imagenComent}/>
            <img className="h-8 w-8 hover:scale-110 transition-all cursor-pointer"  src={imagenCompartir}/>
           </div>
           <div className="h-px w-11/12 m-auto  bg-blue-500 mt-4"></div>
           
           <div>
            <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 m-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4 " type="text" name="" id="" placeholder="Comenta lo que deseas"/>
           </div>
           
        </div>
    </div>

  )
}
