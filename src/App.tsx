import { useState } from 'react'
import logoImg from './assets/logo.jpg'
import './App.css'

interface InfoProps {
  distancia: number;
  consumo: number;
  combustivel: number;
  pedagio: number;
  pedagioValor: number;
}

function App() {
  const [distancia, setDistancia] = useState(0);
  const [consumo, setConsumo] = useState(0);
  const [combustivel, setCombustivel] = useState(0);
  const [pedagio, setPedagio] = useState(0);
  const [pedagioValor, setPedagioValor] = useState<number>();
  const [info, setInfo] = useState<InfoProps>();

  return (
    <>
      <header>
        <img 
          className='logoImg'
          src={logoImg} 
          alt="Logotipo de um carro no posto de combustível com um relógio em cima escrito TRAVEL CALCULATOR" 
        />
      </header>
      <main>
        <form className='form'>
          <label>
            Distância (km):
            <input 
              className='input' 
              placeholder='100' 
              type='number' 
              min={0} 
              step={1} 
              required 
              value={distancia}
              onChange={ (e) => setDistancia(Number(e.target.value)) }
            />
          </label>
          <label>
            Consumo médio do veículo (km/l):
            <input 
              className='input' 
              placeholder='40' 
              type='number' 
              min={0} 
              step={1} 
              required 
              value={consumo} 
              onChange={ (e) => setConsumo(Number(e.target.value)) }
            />
          </label>
          <label>
            Preço do combustível (R$):
            <input 
              className='input' 
              placeholder='6,20' 
              type='number' 
              min={0} 
              step={0.01} 
              required 
              value={combustivel} 
              onChange={ (e) => setCombustivel(Number(e.target.value)) }
            />
          </label>
          <label>
            Quantidade de pedágios:
            <input 
              className='input' 
              placeholder='2' 
              type='number' 
              min={0} 
              step={1} 
              required 
              value={pedagio}
              onChange={ (e) => setPedagio(Number(e.target.value)) }
            />
          </label>
          {pedagio > 0 && (
            <label>
              Valor de cada pedágio (R$):
              <input 
                className='input' 
                placeholder='1,50' 
                type='number' 
                min={0} 
                step={0.01} 
                required 
                value={pedagioValor} 
                onChange={ (e) => setPedagioValor(Number(e.target.value)) }
              />
            </label>
          )}
        </form>
      </main>
    </>
  )
}

export default App
