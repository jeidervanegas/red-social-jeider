import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Toaster/>
    <Router>
     <App/>
    </Router>
  </AuthProvider>

)
