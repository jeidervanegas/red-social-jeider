


import {Routes, Route} from 'react-router-dom'

import { Login } from './pages/login/Login'
import { Perfil } from './pages/perfil/Perfil'
import { Registro } from './pages/registro/Registro'
import { Inicio } from './pages/inicio/Inicio'
import { RecuperarPassword } from './pages/RecuperarPassword'



export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/register' element={<Registro/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/recoverpassword' element={<RecuperarPassword/>}/>
        

      </Routes>
      
      
      
      
      
      
    </div>
  )
}
