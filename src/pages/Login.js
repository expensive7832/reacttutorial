import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import bg from "./../images/christina-2x.jpg"
function Login() {
  return (
    <div>
      <Navbar/>
      <Banner text="Login page" img={bg}/>
    </div>

  )
}

export default Login