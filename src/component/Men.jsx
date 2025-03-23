
import {useEffect,useState} from 'react'
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
    <div className='w-full mx-auto '>
      <div className='w-[90%] h-[350px] mx-auto mt-[90px] shadow-2xl overflow-hidden'>
        <img className='rounded-xl object-cover w-full h-full' src="https://thecollectionindia.com/cdn/shop/collections/Slider_Banner.png?v=1720686052" alt="" />
      </div>
        <div className='w-[90%] scrollbar-y  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mt-[100px] px-32 sm:p-0 '>
            {
              Onlymen.map((item,index)=>(
                <div key={index} data-aos="zoom-out-down"  data-aos-duration="1000" className="relative w-full   group card shadow-lg rounded-md  overflow-hidden ">
                  <button onClick={()=>handleQuickView(item)} className="absolute bottom-[40%] left-[10px] min-w-[90%] h-12 bg-gray-300 hidden blur-light rounded-lg group-hover:flex justify-center items-center opacity-80 text-md">Quick View</button> 
                <img                                                                               
                    className="w-full object-cover sm:h-auto"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="card-body w-full p-3 text-center flex flex-col justify-between">
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
