import React from 'react'
import ReactDOM from 'react-dom'

import Saudacao from './componentes/Saudacao'

// import Multi, { BoaNoite } from './componentes/Multiplos'
// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// ReactDOM.render(<Primeiro />, document.getElementById('root'))
// ReactDOM.render(<BomDia nome='Catia'/>, document.getElementById('root'))

ReactDOM.render(
  <div>
    <Saudacao tipo="Bom dia" nome="João" />
  </div>
  , document.getElementById('root'))
