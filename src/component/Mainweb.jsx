import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Men from './Men'
import Product from './Product'
import Women from './Women'
import Kid from './Kid'
import Footer from './Footer'
import Allproduct from './Allproduct'
const Mainweb = () => {
  return (   
    <div className=' overflow-visible flex justify-center items-center flex-col'>
       <BrowserRouter >
        <Navbar/>
       <div className="content w-[100%] flex justify-center items-center flex-col ">
       <Routes>
          <Route path='/' element={<Product/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/kid' element={<Kid/>}/>
          <Route path='/all-product' element={<Allproduct/>}/>
        </Routes>
       </div>
        <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default Mainweb
