import Navegador from '../components/Navegador'

export default function Inicio(){
  return ( 
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexWrap:'wrap',
        height:'100vh',

      }}>
        {/* <h1>Início</h1> */}
        <Navegador destino='/estiloso' texto='Estiloso'/>
        <Navegador destino='/exemplo' texto='Exemplo' cor='darkviolet'/>
        <Navegador destino='/navegacao' texto='Navegação #01' cor='darkgreen'/>

      </div>
  )
}