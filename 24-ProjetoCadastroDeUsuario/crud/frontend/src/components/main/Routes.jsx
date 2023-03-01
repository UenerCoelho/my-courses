import React from "react";
import { Routes, Route, Redirect } from 'react-router-dom'

import Home from '../home/Home'
import UserCrud from '../users/UserCrud'

export default _props => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/users" element={<UserCrud />} />
    <Route path="*" element={<Home />} />
  </Routes>
)