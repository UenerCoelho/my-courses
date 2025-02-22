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
        <Navegador destino='/cliente/123' texto='Navegação #02' cor='#42a8a8'/>
        <Navegador destino='/estado' texto='Componente com Estado' cor='darkblue'/>
        <Navegador destino='/integracao' texto='Integração com API' cor='#a45b71'/>
        <Navegador destino='/estatico' texto='Conteúdo Estático' cor='#fa054a'/>

      </div>
  )
}