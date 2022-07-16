import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Store from './Store'
import Thanku from './Thanku'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/store' element={<Store/>}></Route>
            <Route path='/thanks' element={<Thanku/>}></Route>
           
        </Routes>
    </div>
  )
}

export default Routers