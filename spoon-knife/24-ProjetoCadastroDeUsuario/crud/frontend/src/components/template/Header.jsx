import './Header.css'
import React from 'react'

export default _props =>
  <header className="header d-none d-sm-flex flex-column">
    <h1 className="mt-3">
      <i className={`fa fa-${_props.icon}`}></i> {_props.title}
    </h1>
    <p className="lead text-muted">{_props.subtitle}</p>
  </header>