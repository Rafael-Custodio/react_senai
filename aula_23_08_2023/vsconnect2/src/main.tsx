import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Header/>
    <Home/>
    <Footer/>
    
  </React.StrictMode>,
)
