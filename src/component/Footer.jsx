import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faYoutube,faTiktok } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className=" w-full gap-6 grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white items-center sm:h-[500px] lg:h-[400px] h-[980px] bg-black mt-5">
      <div className="min-w-[22%] p-3  flex flex-col text-center items-center  h-auto">
        <h1 className="font-bold text-2xl">FOLLOW US</h1>
        <ul className="mt-4">
          <li className="py-1">
            <a className="block text-lg font-bold " href="javascript:void(0)">
              <FontAwesomeIcon className="hover:text-blue-600 mr-4" icon={faFacebook} />
               Facebook
            </a>
          </li>
          <li className="py-1">
            <a className="block text-lg font-bold " href="javascript:void(0)">
            <FontAwesomeIcon className="hover:text-red-500 mr-4"  icon={faInstagram} />
              Instagram
            </a>
          </li>
          <li className="py-1">
            <a className="block text-lg font-bold " href="javascript:void(0)">
            <FontAwesomeIcon className="hover:text-white mr-4"  icon={faTiktok} />
              Tik Tok
            </a>
          </li>
          <li className="py-1">
            <a className="block text-lg font-bold " href="javascript:void(0)">
            <FontAwesomeIcon className="hover:text-red-700 mr-4"  icon={faYoutube} />
              Youtube
            </a>
          </li>
        </ul>
      </div>
      <div className="min-w-[22%] p-3 mt-2 flex flex-col text-center items-center  h-auto">
        <h1 className="font-bold text-2xl">CUSTOMER SERVICE</h1>
        <ul className="mt-4">
          <li className="py-1">
            <a className="block text-lg font-bold " href="javascript:void(0)">
              Online Exchange Policy
            </a>
          </li>
          <li className="py-1">
            <a className="block text-lg font-bold " href="javascript:void(0)">
              Privacy Policy
            </a>
          </li>
          <li className="py-1">
            <a className="block text-lg font-bold " href="javascript:void(0)">
              FAQs & Guides
            </a>
          </li>
          <li className="py-1">
            <a className="block text-lg font-bold " href="javascript:void(0)">
              Programs
            </a>
          </li>
        </ul>
      </div>
      <div className="min-w-[22%] p-3 mt-2 flex flex-col text-center items-center  h-auto">
        <h1 className="font-bold text-2xl">CONTACT US</h1>
        <ul className="mt-4">
          <li className="py-1">
            <a className="block text-lg font-bold " href="javascript:void(0)">
              Info@shopify.com.kh
            </a>
          </li>
          <li className="py-1">
            <a className="block text-lg font-bold " href="javascript:void(0)">
              (+855)055 88 245
            </a>
          </li>
          <li className="py-1">
            <a className="block text-lg font-bold " href="javascript:void(0)">
              (+855)097 88 345
            </a>
          </li>
          <li className="py-1">
            <a className="block text-lg font-bold " href="javascript:void(0)">
              Telegram@Shopify
            </a>
          </li>
        </ul>
      </div>
      <div className="min-w-[22%] p-3 mt-2  flex flex-col text-center items-center  h-auto">
        <h1 className="font-bold text-2xl">WE ACCEPT</h1>
        <ul className="mt-4 flex flex-col items-center">
          <li className="py-1">
            <a className="block text-lg font-bold " href="javascript:void(0)">
              <img className="w-[100px] h-[100px] " src="https://www.hellotech.com/guide/wp-content/uploads/2020/05/HelloTech-qr-code-1024x1024.jpg" alt="QR code to download the Shopify app" />
            </a>
          </li>
          <li className="py-1"><a className="block text-lg font-bold " href="javascript:void(0)">Download Shopify APP here!</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
