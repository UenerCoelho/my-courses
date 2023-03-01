import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../template/Logo'
import Nav from '../template/Nav'
import Main from '../template/Main'
import Footer from '../template/Footer'

export default _props =>
  <div className="app">
    <Logo />
    <Nav />
    <Main icon="home" title="Iníccio" subtitle="Segundo Projeto do Capítulode react"/>
    <Footer />
  </div>