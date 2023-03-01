import './Main.css'
import React from 'react'
import Header from './Header'

export default _props =>
  <React.Fragment>
    <Header {..._props} />
    <main className="content">
      Content
    </main>
  </React.Fragment>