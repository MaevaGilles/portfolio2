import React from 'react'
import Social from '../elements/Social'
import maevagilles from '../../assets/maevagilles.png'

export default function about() {
    return (

        <div class="lg:rounded-2xl ">

            <div class="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
                <div class="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
                    <div class="lg:hidden">
                        <div class="w-full mb-6 lg:mb-0 mx-auto relative backdrop-blur-sm bg-white/50 text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                            <img src={maevagilles} class="shadow-lg shadow-gray-500 w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] bg-gradient-to-r from-[#d3ac94e9]  to-[#206c85e1] " alt="about avatar"></img>
                            <div class="pt-[100px] pb-8">
                                <h2 class="mt-6 mb-1 text-[26px] font-bold"> Maëva GILLES </h2>
                                <h3 class="mb-4 text-[#000000] font-semibold inline-block px-5 py-1.5 rounded-lg dark:text-[#333333]">Développeuse web full stack junior</h3>

                                <Social />

                                <div class="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                                    <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">

                                        <span class="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                                            <i class="fa-solid fa-mobile-screen-button"></i>
                                        </span>
                                        <div class="text-left ml-2.5">
                                            <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Phone </p>
                                            <p class="dark:text-white">+123 456 7890</p>
                                        </div>
                                    </div>

                                    <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                                        <span class="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                                            <i class="fa-solid fa-envelope-open-text"></i>
                                        </span>
                                        <div class="text-left ml-2.5">
                                            <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Email </p>
                                            <p class="dark:text-white">example@mail.com</p>
                                        </div>
                                    </div>

                                    <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                                        <span class="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                                            <i class="fa-solid fa-location-dot"></i>
                                        </span>
                                        <div class="text-left ml-2.5">
                                            <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Location </p>
                                            <p class="dark:text-white">Hong kong china</p>
                                        </div>
                                    </div>

                                    <div class="flex py-2.5">
                                        <span class="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                                            <i class="fa-solid fa-calendar-days"></i>
                                        </span>
                                        <div class="text-left ml-2.5">
                                            <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Birthday </p>
                                            <p class="dark:text-white">May 27, 1990</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='col-span-12 lg:col-span-8 hidden md:block my-div'>
                <div className='lg:rounded-2xl bg-white'>
                    <div className=" w-[60%] ml-auto ml-24 absolute inset-x-0 top-[40%] backdrop-blur-sm bg-white/50 text-center rounded-[20px]  h-[80%]   mb-10 rounded-[16px] bg-white mr-10 mt-10">


                        <h2 className='titre2'>A propos de moi</h2>
                        <div className='pcontent'>
                        <p className='pcontent'>Hello !
                            Je m'appelle Maëva GILLES. Je suis  dévellopeuse fullstack junior, passionnée par l'apprentissage de nouvelles compétences, les chats et Metallica.
                        </p>
                        <p className='pcontent'>Diplômée d'un <b>Master en digital marketing et e-business</b> depuis 2019, j'exerce à mon compte depuis 2018 des missions très variées dans le numérique 
                            <ul className='text-left'>
                             <li>Réalisation de Worpress</li>
                             <li>Gestion de communication</li>
                             <li>Graphisme</li>
                             <li>Stratégie digitale</li>
                             <li>Rédaction de contenu</li>
                             <li>...</li>
                             </ul>
                             </p>
                        <p className='pcontent'>Le gout du Challenge m'a aussi amené a co-ouvrir une salle de sport en pleine période de Covid (SPOILER: Nous sommes rentables et employons 8 personnes).</p>
                        <p>En 2022 j'ai décidé d'approfondir mes compétences en me spécialisant dans le dévellopement web full stack.</p>
                        <p>J'ai donc suivi le parcour de dévellopeur ++ de l'école The Hacking Project</p>
                        </div>    

                       
                    </div></div>
            </div>

        </div>







    )
}
