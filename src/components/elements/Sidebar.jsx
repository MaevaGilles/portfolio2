import React from 'react'
import '../../css/mystyle.scss'
import Social from './Social'
import maevagilles from '../../assets/maevagilles.png'
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineMail} from "react-icons/hi";
import { HiOutlineMapPin} from "react-icons/hi2";
import { RiNumber2, RiNumber7} from "react-icons/ri";
import { FaBirthdayCake} from "react-icons/fa";

export default function sidebar() {
    return (
        <div className='col-span-12 lg:col-span-4 hidden lg:block'>
            <div className=" w-[25%] mr-auto ml-24 absolute inset-x-0 top-[20%] backdrop-blur-sm bg-white/50 text-center rounded-[20px]  h-[100%]   mb-10 rounded-[16px] bg-white mr-10 mt-10 ">
                <img src={maevagilles} class="shadow-lg shadow-gray-500 w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] bg-gradient-to-r from-[#1db1a2e9]  to-[#211243dd] " alt="about avatar"></img>

                <div class="pt-[100px] pb-8">
                    <h2 class="mt-6 mb-1 text-[26px] font-bold"> Maëva GILLES </h2>
                    <h3 class="mb-4 text-[#000000] font-semibold inline-block px-5 py-1.5 rounded-lg dark:text-[#333333]">
                        Développeuse web full stack junior </h3>
                    <Social />

                    <div class="p-7 rounded-2xl mt-7 bg-[#ffffffd6] m-4">
                        <a href="tel:+33634691678">
                            <div class="flex border-b dark:border-[#17c3b5]  pb-2.5">
                        <span class="socialbtn bg-[#42aec1] shadow-md">
                                <FiSmartphone className='text-[#ffffff] color' />
                            </span>
                            <div class="text-left ml-2.5">
                                <p class="text-xs text-[#1e1e1e] font-semibold "> Téléphone </p>
                                <p className='darktext'>+33 6 34 69 16 78</p>
                            </div>
                        </div>
                        </a>
                        <a href="mailto:maevagilles-web@gotmail.fr">
                            <div class="flex border-b border-[#1ebfa7] dark:border-[#1ea7bf] py-2.5">
                        <span class="socialbtn bg-[#d9a165] shadow-md">
                                <HiOutlineMail className='text-[#ffffff] color' />
                            </span>
                            <div class="text-left ml-2.5">
                                <p class="text-xs text-[#1e1e1e] font-semibold"> Email </p>
                                <p class="darktext">maevagilles-web@hotmail.fr</p>
                            </div>
                        </div></a>
                        <div class="flex border-b border-[#E3E3E3] dark:border-[#1ea7bf] py-2.5">
                        <span class="socialbtn bg-[#39a874] shadow-md">
                                <HiOutlineMapPin className='text-[#ffffff] color' />
                            </span>
                            <div class="text-left ml-2.5">
                                <p class="text-xs text-[#1e1e1e] font-semibold"> Lieux </p>
                                <p class="darktext">France</p>
                            </div>
                        </div>
                        <div class="flex py-2.5">
                        <span class="socialbtn bg-[#b881ba] shadow-md">
                                <RiNumber2 className='text-[#ffffff] color' />
                                <RiNumber7 className='text-[#ffffff] color' />

                            </span>
                            <div class="text-left ml-2.5">
                                <p class="text-xs text-[#1e1e1e] font-semibold"> Date de naissance </p>
                                <p class="darktext">3 août 1995</p>
                            </div>
                        </div>
                    </div>
                    <button class="dowanload-btn">
                            <img class="mr-3" src="./images/icons/dowanload.png" alt="icon"></img> Download CV </button>
                </div>





            </div>
        </div>

    )
}
