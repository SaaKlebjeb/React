import React,{useState} from 'react'
import {Link,useLocation} from 'react-router-dom'
import MyDrawer from "./subcomponent/MyDrawer";
import Bag from './subcomponent/Bag';
import LoginForm from './subcomponent/LoginForm';
//import Modalforshopview from './subcomponent/Modalforshopview';
const Navbar = () => {
  const [openbar,setOpenbar]=useState(false)
  const HandleBarClick=()=>{
    setOpenbar(true)
  }
  const [showbag, setShowbag] = useState(false);
  function handleShowBag() {
    setShowbag(true);
  }
  const [showLog,setShowLog]=useState(false)
  const HandleShowLogForm=()=>{
    setShowLog(true)
  }
const location=useLocation();
  return (
    <div>
      <nav className='flex sticky z-1000 top-0 justify-between md:justify-evenly items-center h-auto bg-lime-50 p-2 ' >
        <div className="logo relative mr-10 rounded-full w-14 bg-blue-300  h-14 flex justify-center items-center">
            <img  className=' duration-1000 w-full h-full rounded-full object-cover' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/122305813/original/a091d109740ab886828d56f5959dcc0eae571176/professional-shopping-logo-design.jpg" alt="" />
            <span className='absolute text-xl top-3 left-[60px]   font-semibold'>Shopify</span>
        </div>
        <div className="menu  h-full md:flex hidden md:w-[50%] lg:w-[45%] w-[50%] justify-center items-center">
            <ul className='flex list-unstyled w-full h-full mx-auto'>
                <Link to="/"><li className=' relative group  py-2 md:mx-5 mx-3 text-lg uppercase hover:text-yellow-700' >products
                <span className={`absolute  left-0 bottom-0  h-[2px] bg-yellow-700 transition-all duration-300 group-hover:w-full ${location.pathname==='/'? 'underline':''}`}></span></li>
                </Link>
                <Link to="/men"><li className='relative group  py-2 md:mx-5 mx-3 text-lg uppercase hover:text-yellow-700'>men
                <span className={`absolute  left-0 bottom-0  h-[2px] bg-yellow-700 transition-all duration-300 group-hover:w-full ${location.pathname==='/men'? 'underline':''}`}></span></li>
                </Link>
                <Link to="/women"><li  className='relative group  py-2 md:mx-5 mx-3 text-lg uppercase hover:text-yellow-700'> women
                <span  className={`absolute  left-0 bottom-0  h-[2px] bg-yellow-700 transition-all duration-300 group-hover:w-full ${location.pathname==='/women'? 'underline':''}`}></span></li>
                </Link>
               <Link to="/kid"> <li  className='relative group  py-2 md:mx-5 mx-3 text-lg uppercase hover:text-yellow-700'>kid
               <span  className={`absolute  left-0 bottom-0  h-[2px] bg-yellow-700 transition-all duration-300 group-hover:w-full ${location.pathname==='/kid'? 'underline':''}`}></span></li>
               </Link>
            </ul>
        </div>
        <div className='w-[40%] sm:w-[35%] md:w-[25%] gap-2 justify-between sm:justify-evenly flex items-center p-1'>
            <button onClick={HandleShowLogForm} className="login-btn min-w-24 h-12 sm:min-w-28 rounded-lg bg-transparent hover:scale-100 hover:text-white text-blue-500 border-2 border-blue-500 text-md">LOG IN</button>
           <div className='group relative pr-2 min-w-[50px] '>
           <svg xmlns="http://www.w3.org/2000/svg" onClick={handleShowBag}  className='svg w-9 h-9 ml-3 hover:scale-110 sm:w-8 sm:h-8 md:w-9 md:h-9  hover:cursor-pointer' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          
          <span className='count absolute w-[20px] flex justify-center items-center h-[20px] top-[0] right-[0] bg-red-400 font-semibold text-md  rounded-full'>0</span>
           </div>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={HandleBarClick} className='bar hover:cursor-pointer hover:scale-110 w-8 h-8  md:w-10  md:h-10 md:hidden' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
           </svg>
        </div>
      </nav>
      <Bag open={showbag} setOpen={setShowbag}/>
      <MyDrawer open={openbar} setOpen={setOpenbar}/>
      {/* <Modalforshopview IsShow={show} IssetShow={setShow} Fullscreen={fullscreen}/> */}
      <LoginForm show={showLog} setShowForm={setShowLog}/>
    </div>
  )
}

export default Navbar
