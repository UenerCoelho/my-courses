import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
// import Saudacao from './componentes/Saudacao'
// import Multi, { BoaNoite } from './componentes/Multiplos'
// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// ReactDOM.render(<Primeiro />, document.getElementById('root'))
// ReactDOM.render(<BomDia nome='Catia'/>, document.getElementById('root'))

ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva" >
      <Filho nome="Pedro"></Filho>
      <Filho nome="Paulo"></Filho>
      <Filho nome='Carla'></Filho>
    </Pai>
  </div>
  , document.getElementById('root'))
