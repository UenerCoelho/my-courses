import React from 'react'
import ReactDOM from 'react-dom'

import Multi, { BoaNoite } from './componentes/Multiplos'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// ReactDOM.render(<Primeiro />, document.getElementById('root'))
// ReactDOM.render(<BomDia nome='Catia'/>, document.getElementById('root'))

ReactDOM.render(
  <div>
    <Multi.BoaTarde nome='Ana' />
    <BoaNoite nome='Bia' />
  </div>
  , document.getElementById('root'))
