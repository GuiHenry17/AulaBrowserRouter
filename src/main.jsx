import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Produtos from './components/Produtos'
import Ofertas from './components/Ofertas'
import './global.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/ofertas' element={<Ofertas />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)



