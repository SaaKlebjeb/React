import React, { useEffect,useState } from "react";
import {Womencollection} from "../../public/js/Womencollection";
import {Mencollection} from "../../public/js/Mencollection";
import {Kidcollection} from "../../public/js/Kidcollection";
import AOS from "aos";
import { Topselling } from "../../public/js/Topselling";
import ProductView from "./subcomponent/ProductView";

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <div className="intro-product  flex justify-evenly flex-col md:flex-row items-center mx-auto w-[85%] md:h-[500px] h-[800px] mt-5 rounded-lg ">
        <div className="textPro w-[90%] md:w-[50%] lg:w-[35%] h-[80%] mt-[50px] flex  justify-evenly flex-col items-center p-2 ">
          <h1 className="text-intro flex flex-col">
            <span className="text-2xl">new arrival only</span>
            <span>New 👋</span>
            <span> Collection</span>
            <span className="">For Everyone</span>
          </h1>
          <button className="btn-seepro sm:w-[250px] w-[200px] h-12 rounded-full  text-white text-lg font-sans hover:scale-95 ">
            See All Products
          </button>
        </div>
        <div className="div-img w-[30%] h-[75%] ">
          <img
            alt="Oversized Cropped T-Shirts"
            src="/Image01/girlzando3.png"
            class="div-img animate-pulse-slow w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Top selling */}
      <div className="w-[85%] flex flex-col justify-between h-400px mt-[50px] mx-auto ">
        <div>
          <h1 className="relative uppercase w-[40%] md:w-[25%]  mx-auto text-2xl font-bold text-center py-3">
            top selling
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></span>
           </h1>
        </div>
       <div className="w-full flex scroll-custom scroll-smooth gap-7 overflow-x-scroll  mt-7 p-2 ">
          {/*map the card  */}
          {Topselling.map((item, index) => (
            <div key={index} data-aos="fade-up"
            data-aos-duration="700" className="relative group card w-[200px] shadow-2xl rounded-md flex-shrink-0">
              <button onClick={()=>handleQuickView(item)} className="absolute bottom-[40%] left-[10px] min-w-[90%] h-12 bg-gray-300 hidden blur-light rounded-lg group-hover:flex justify-center items-center opacity-80 text-md ">Quick View</button> 
            <img                                                                               
                className=" w-full object-cover h-[300px]"
                src={item.image}
                alt={item.title}
              />
              <div className="card-body w-full p-3">
                <div className="card-title">
                  <h3>{item.title}</h3>
                </div>
                <p className="price">{item.price}$</p>
              </div>
              <div className="w-[90%] mx-auto mb-2">
                <button className="w-full h-10 hover:scale-y-95 bg-blue-600 hover:bg-blue-700 rounded-md text-white">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Women Collection */}
      <div className="w-[85%] flex flex-col justify-between h-400px mt-[50px] mx-auto ">
        <div>
          <h1 className="relative uppercase w-[40%] md:w-[25%]  mx-auto text-2xl font-bold text-center py-3">
            women collection
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></span>
           </h1>
        </div>
       <div className="w-full flex scroll-custom scroll-smooth gap-7 overflow-x-scroll  mt-7 p-2 ">
          {/*map the card  */}
          {Womencollection.map((item, index) => (
            <div key={index} data-aos="fade-up"
            data-aos-duration="700" className="relative group card w-[200px] shadow-2xl rounded-md flex-shrink-0">
               <button onClick={()=>handleQuickView(item)}  className="absolute bottom-[40%] left-[10px] min-w-[90%] h-12 bg-gray-300 hidden blur-light rounded-lg group-hover:flex justify-center items-center opacity-80 text-md ">Quick View</button> 
              <img
                className="w-full object-cover h-[300px]"
                src={item.image}
                alt={item.title}
              />
              <div className="card-body w-full p-3">
                <div className="card-title">
                  <h3>{item.title}</h3>
                </div>
                <p className="price">{item.price}$</p>
              </div>
              <div className="w-[90%] mx-auto mb-2">
                <button className="w-full h-10 hover:scale-y-95 bg-blue-600 hover:bg-blue-700 rounded-md text-white">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Men Collection */}
      <div className="w-[85%] flex flex-col justify-between h-400px mt-[50px] mx-auto">
       <div>
          <h1 className="relative uppercase w-[40%] md:w-[25%]  mx-auto text-2xl font-bold text-center py-3">
            men collection
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></span>
          </h1>
        </div>
        <div className="w-full flex scroll-custom scroll-smooth gap-7 overflow-x-scroll  mt-7 p-2 ">
          {/*map the card  */}
          {Mencollection.map((item, index) => (
            <div key={index} data-aos="fade-up"
            data-aos-duration="700" className="relative group card w-[200px] shadow-2xl rounded-md flex-shrink-0"> 
             <button onClick={()=>handleQuickView(item)}  className="absolute bottom-[40%] left-[10px] min-w-[90%] h-12 bg-gray-300 hidden blur-light rounded-lg group-hover:flex justify-center items-center opacity-80 text-md ">Quick View</button> 
            <img                                                                               
                className="w-full object-cover h-[300px]"
                src={item.image}
                alt={item.title}
              />
              <div className="card-body w-full p-3">
                <div className="card-title">
                  <h3>{item.title}</h3>
                </div>
                <p className="price">{item.price}$</p>
              </div>
              <div className="w-[90%] mx-auto mb-2">
                <button className="w-full h-10 hover:scale-y-95 bg-blue-600 hover:bg-blue-700 rounded-md text-white">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Kid collection */}
      <div className="w-[85%] flex flex-col justify-between h-400px mt-[50px] mx-auto">
       <div>
          <h1 className="relative uppercase w-[40%] md:w-[25%]  mx-auto text-2xl font-bold text-center py-3">
            kid collection
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></span>
          </h1>
        </div>
        <div className="w-full flex scroll-custom scroll-smooth gap-7 overflow-x-scroll  mt-7 p-2 ">
          {/*map the card  */}
          {Kidcollection.map((item, index) => (
            <div key={index} data-aos="fade-up"
            data-aos-duration="700" className="relative group card w-[200px] shadow-2xl rounded-md flex-shrink-0"> 
             <button onClick={()=>handleQuickView(item)}  className="absolute bottom-[40%] left-[10px] min-w-[90%] h-12 bg-gray-300 hidden blur-light rounded-lg group-hover:flex justify-center items-center opacity-80 text-md ">Quick View</button> 
            <img                                                                               
                className="w-full object-cover h-[300px]"
                src={item.image}
                alt={item.title}
              />
              <div className="card-body w-full p-3">
                <div className="card-title">
                  <h3>{item.title}</h3>
                </div>
                <p className="price">{item.price}$</p>
              </div>
              <div className="w-[90%] mx-auto mb-2">
                <button className="w-full h-10 hover:scale-y-95 bg-blue-600 hover:bg-blue-700 rounded-md text-white">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductView open={isModalOpen} setOpen={setIsModalOpen} product={selectedProduct}  />
      )}
    </div>
  );
};

export default Product;
