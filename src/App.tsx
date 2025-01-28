import { useState } from 'react'
import logoImg from './assets/logo.jpg'
import './App.css'

function App() {

  return (
    <>
      <header>
        <img 
          className='logoImg'
          src={logoImg} 
          alt="Logotipo de um carro no posto de combustível com um relógio em cima escrito TRAVEL CALCULATOR" 
        />
      </header>
    </>
  )
}

export default App
