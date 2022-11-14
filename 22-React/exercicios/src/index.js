import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
// import Saudacao from './componentes/Saudacao'
// import Multi, { BoaNoite } from './componentes/Multiplos'
// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// ReactDOM.render(<Primeiro />, document.getElementById('root'))
// ReactDOM.render(<BomDia nome='Catia'/>, document.getElementById('root'))

ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva" />
  </div>
  , document.getElementById('root'))
