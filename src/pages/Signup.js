import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import bg from "./../images/jenny-2x.jpg"
function Signup() {
  return (
   <div>
     <Navbar/>
     <Banner text="Signup Page" img={bg} />
   </div>

  )
}

export default Signup