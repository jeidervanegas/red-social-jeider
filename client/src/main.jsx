import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { AuthProvider } from './context/Auth'
import {BrowserRouter as Router} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Toaster/>
    <Router>
     <App/>
    </Router>
  </AuthProvider>
)
