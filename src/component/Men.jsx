
import React,{useEffect,useState} from 'react'
import AOS from 'aos'
import { Onlymen } from '../../public/js/Onlymen'
import ProductView from './subcomponent/ProductView';

const Men = () => {
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
      <div className='w-[100%] md:w-[90%] h-[350px] mx-auto mt-10 shadow-2xl'>
        <img className='rounded-xl object-cover w-full h-full' src="https://thecollectionindia.com/cdn/shop/collections/Slider_Banner.png?v=1720686052" alt="" />
      </div>
        <div className='w-[100%] scrollbar-y p-2 gap-x-8 gap-y-5  mx-auto  flex flex-wrap justify-center items-center mt-[70px] h-auto overflow-y-auto '>
            {
              Onlymen.map((item,index)=>(
                <div key={index} data-aos="zoom-out-down"  data-aos-duration="1200" className="relative  group card w-auto shadow-lg rounded-md flex-shrink-0 ">
                  <button onClick={()=>handleQuickView(item)} className="absolute bottom-[40%] left-[10px] min-w-[90%] h-12 bg-gray-300 hidden blur-light rounded-lg group-hover:flex justify-center items-center opacity-80 text-md ">Quick View</button> 
                <img                                                                               
                    className=" w-[220px] sm:w-[250px] object-cover md:h-[350px] h-[350px]"
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
              ))
            }
             {selectedProduct && (
        <ProductView open={isModalOpen} setOpen={setIsModalOpen} product={selectedProduct}  />
        )}
        </div> 
      </div>
  )
}

export default Men
