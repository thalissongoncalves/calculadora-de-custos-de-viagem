import { useState, FormEvent } from 'react'
import logoImg from './assets/logo.jpg'
import carro from './assets/car.gif'
import './App.css'

interface InfoProps {
  combustivel: number;
  pedagio: number;
  total: number;
};

function App() {
  const [distancia, setDistancia] = useState(0);
  const [consumo, setConsumo] = useState(0);
  const [combustivel, setCombustivel] = useState(0);
  const [pedagio, setPedagio] = useState(0);
  const [pedagioValor, setPedagioValor] = useState(0);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();

    let custoCombustivel = (distancia / consumo) * combustivel;
    let custoPedagio = pedagio * pedagioValor;
    let total = custoCombustivel + custoPedagio;

    setInfo({
      combustivel: custoCombustivel,
      pedagio: custoPedagio,
      total: total,
    });
  }

  function formatarMoeda(valor: number) {
    let valorFormatado = valor.toLocaleString('pt-br',
      {
        style: 'currency',
        currency: 'BRL'
      }
    )

    return valorFormatado
  }

  return (
    <>
      <main className='container'>
        <img 
          className='logoImg'
          src={logoImg} 
          alt='Logotipo de um carro no posto de combustível com um relógio em cima escrito TRAVEL CALCULATOR' 
        />
        <form className='form' onSubmit={calcular}>
          <label>
            Distância (km):
            <input 
              className='input' 
              placeholder='100' 
              type='number' 
              min={0} 
              step={0.01} 
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
              step={0.01}
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
          <button type='submit' className='buttonSubmit'>
            Calcular custo total
          </button>
        </form>
        {info && Object.keys(info).length > 0 && (
          <section className='cardResultado'>
            <h2>Resumo da Viagem</h2>
            <span>Custo com combustível: {formatarMoeda(info.combustivel)}</span>
            <span>Custo com pedágios: {formatarMoeda(info.pedagio)}</span>
            <span>Custo total: {formatarMoeda(info.total)}</span>
            <img className='citroen' src={carro} alt="Carro da citroen cinza me movimento 8-bit" />
          </section>
        )}
      </main>
    </>
  )
}

export default App
