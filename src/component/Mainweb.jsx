import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Men from './Men'
import Product from './Product'
import Women from './Women'
import Kid from './Kid'
import Footer from './Footer'
const Mainweb = () => {
  return (   
    <div className='relative overflow-visible'>
       <BrowserRouter >
        <Navbar/>
       <div className="content">
       <Routes>
          <Route path='/' element={<Product/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/kid' element={<Kid/>}/>
        </Routes>
       </div>
        <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default Mainweb
