import React, { useState } from 'react'
import '../../css/mystyle.scss'
import {AiOutlineUser, AiOutlineFile} from 'react-icons/ai'
import { VscTools } from "react-icons/vsc";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [active, setActive] = useState(0);
  const handleNav = () => {
    setNav(!nav);
  };
    return (
        <div>
          <FaHamburger size={0} onClick={handleNav} className='m-6 p-8 absolute top-4 right-4 z-[99] md:hidden  bg-white rounded-full '/>
          {
          nav ? (
           <div className='fixed w-full h-screen backdrop-blur-sm bg-gradient-to-r from-[#d3ac94e9]  to-[#206c85e1]  flex flex-col justify-center items-center z-20 md:hidden'>
            
            <a href='/' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200'>
              <AiOutlineUser size={20}/>
              <span className='pl-4'>Qui suis-je ?</span>
            </a>

            <a href='Cv' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200'>
              <AiOutlineFile size={20}/>
              <span className='pl-4'>Mon CV</span>
            </a> 
            
            <a href='works' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200'>
              <VscTools size={20}/>
              <span className='pl-4'>Projets réalisés</span>
            </a>

            <a href='contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200'>
              <IoChatbubblesOutline size={20}/>
              <span className='pl-4'>Me contacter</span>
            </a>
          </div>
          ) : (
            ''
          )}
  
  <div class="col-span-12 lg:col-span-8 hidden lg:block h-screen sticky top-44">
  <header class="lg:w-[45%] h-[144px] hidden lg:block p-[30px] absolute inset-x-0 top-[20%] ml-auto  mb-10 rounded-[16px] backdrop-blur-sm bg-white/70 mr-10">
                    <nav className="hidden lg:block">
                        <ul className=" flex justify-center items-center flex space-x-4">
                            <li> <a className="menu-item bg-[#1db1a2e9] shadow-md shadow-gray-500 hover:bg-gradient-to-r from-[#1db1a2e9]  to-[#411c9f] hover:text-[#ffffff]" href="/">
                                    <AiOutlineUser size={20}/>
                                    <h1 className='text-center '>Maëva</h1> </a></li>
                            <li> <a className="menu-item bg-[#ffffff] shadow-md shadow-gray-500 hover:bg-gradient-to-r from-[#1db1a2e9]  to-[#411c9f] hover:text-[#ffffff]" href="/cv">
                                    <AiOutlineFile size={20}/>
                                    <h1 className='text-center '>CV </h1></a></li>
                            <li> <a className="menu-item bg-[#ffffff] shadow-md shadow-gray-500 hover:bg-gradient-to-r from-[#1da7b1e9]  to-[#411c9f] hover:text-[#ffffff]" href="/works">
                                    
                                    <VscTools size={20}/>
                                    <h1 className='text-center '>Travaux</h1> </a></li>
                            <li><a className="menu-item bg-[#ffffff] shadow-md shadow-gray-500 hover:bg-gradient-to-r from-[#1db1a2e9]  to-[#411c9f] hover:text-[#ffffff]" href="/contact">
                                    <IoChatbubblesOutline size={20}/>
                                    <h1 className='text-center '>Contacter</h1>
                                    </a>
                            </li>
                        </ul>
                    </nav>
  </header>
</div>
</div>









      );
};
export default Navbar