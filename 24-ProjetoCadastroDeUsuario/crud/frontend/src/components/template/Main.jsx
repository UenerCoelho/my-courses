import './Main.css'
import React from 'react'
import Header from './Header'

export default _props =>
  <React.Fragment>
    <Header {..._props} />
    <main className="content container-fluid">
      <div className="p-3 mt-3">
        {_props.children}
      </div>
    </main>
  </React.Fragment>