import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"


const Home = React.lazy(() => import("./pages/Home"))
const Login = React.lazy(() => import("./pages/Login"))
const Signup = React.lazy(() => import("./pages/Signup"))
const Details = React.lazy(() => import("./pages/Details"))
const Cart = React.lazy(() => import("./pages/Cart"))
const NotFound = React.lazy(() => import("./pages/NotFound"))


function App() {
  return (
    <React.Suspense fallback={<div style={{position:"absolute", top:"50%", left:"50%"}}>Loading....</div>}>
      <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/:id' element={<Details/>} /> 
        <Route path='*' element={<NotFound/>} /> 

      </Routes>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App