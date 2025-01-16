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
    <div className='super_nav min-w-full fixed top-[-3px] z-10 '>
      <nav className='flex justify-between md:justify-evenly items-center bg-lime-50 p-2 h-16 shadow-md' >
        <div className="logo relative mr-10 rounded-full w-14 bg-blue-300  h-14 flex justify-center items-center">
            <img  className=' duration-1000 w-full h-full rounded-full object-cover' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/122305813/original/a091d109740ab886828d56f5959dcc0eae571176/professional-shopping-logo-design.jpg" alt="" />
            <span className='absolute text-xl top-3 left-[60px]   font-semibold'>Shopify</span>
        </div>
        <div className="menu  hidden md:flex md:w-auto lg:w-[45%] justify-center items-center">
            <ul className='flex space-x-6'>
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
        <div className="flex gap-4 items-center">
          <button
            onClick={HandleShowLogForm}
            className="login-btn px-6 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg"
          >
            Log In
          </button>
          <div
            className="relative pr-2 cursor-pointer"
            onClick={handleShowBag}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="absolute top-0 right-0 w-5 h-5 bg-red-400 text-white flex items-center justify-center rounded-full text-sm">
              0
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 cursor-pointer md:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={HandleBarClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
      <LoginForm show={showLog} setShowForm={setShowLog}/>
      <Bag open={showbag} setOpen={setShowbag}/>
      <MyDrawer open={openbar} setOpen={setOpenbar}/>
      {/* <Modalforshopview IsShow={show} IssetShow={setShow} Fullscreen={fullscreen}/> */}
     
    </div>
  )
}

export default Navbar
