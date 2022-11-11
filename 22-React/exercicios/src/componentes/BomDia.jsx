import React from 'react'

/* Método 1 a 'DIV' vai gerar um element no html
  export default props => 
    <div>
      <h1>Bom dia {props.nome}!</h1>
      <h2>Até breve {props.nome}!</h2>
    </div>
*/

// Método 2 = Este método não elementos adjacentes do html
export default props => 
  <React.Fragment>
    <h1>Bom dia {props.nome}!</h1>
    <h2>Até breve {props.nome}!</h2>
  </React.Fragment>
