import React from 'react'
import '../../css/mystyle.scss'
import profil from '../../assets/profil.png'
import maevagilles from '../../assets/maevagilles.png'
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";

export default function Social() {
  return (
    <div class="flex justify-center space-x-3">

                        <a href="https://www.linkedin.com/in/maeva-gilles" target="_blank" rel="noopener noreferrer">
                            <span className="socialbtn text-[#0866C2] hover:bg-[#0866C2] hover:text-gray-300">
                                <FaLinkedinIn size={30} />
                            </span>
                        </a>
                        <a href="https://github.com/MaevaGilles" target="_blank" rel="noopener noreferrer">
                            <span className="socialbtn text-[#20ae69] hover:bg-[#20ae69] hover:text-gray-100">
                                <AiFillGithub size={30} />
                            </span>
                        </a>

                    
                        <a href="https://discordapp.com/users/992414540945965066" target="_blank" rel="noopener noreferrer">
                            <span className="socialbtn text-[#5560E6] hover:bg-[#5560E6] hover:text-gray-300">
                                <FaDiscord size={30} />
                            </span>
                        </a>


                    </div>
  )
}
