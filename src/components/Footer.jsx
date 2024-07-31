import { MdEmail } from "react-icons/md"; 
import { AiFillPhone } from "react-icons/ai"; 
import { MdLocationPin } from "react-icons/md"; 
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='mt-[100px] py-[30px] bg-orange-400 text-white'>
            <div className='container flex justify-between'>
                <div className="flex-1 flex flex-col gap-[15px]">
                    <h2 className="text-[24px] font-bold">TravelToors</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tenetur deserunt hic laudantium ex modi delectus corporis error eius natus.</p>
                    <div className="flex items-center gap-[10px] text-[25px]">
                        <CgFacebook />
                        <FaLinkedinIn />
                        <BsTwitter />
                    </div>
                </div>
                <div className="flex-1 hidden md:flex flex-col items-center">
                    <h2 className="text-[24px] font-bold">Services</h2>
                    <ul className=' gap-[30px]'>
                        <li className='text-[16px] xl:text-[18px] text-[500] font-medium'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className='text-[16px] xl:text-[18px] text-[500] font-medium'>
                            <Link to={'/destinations'}>Destinations</Link>
                        </li>
                        <li className='text-[16px] xl:text-[18px] text-[500] font-medium'>
                            <Link to={'/packeges'}>Packeges</Link>
                        </li>
                        <li className='text-[16px] xl:text-[18px] text-[500] font-medium'>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 hidden md:block">
                    <h2 className="text-[24px] font-bold">Contact</h2>
                    <ul className=' gap-[30px]'>
                        <li className='flex items-center gap-[7px] text-[16px] xl:text-[18px] text-[500] font-medium'>
                            <MdLocationPin />
                            <span>Any Ware, Any Rod, Xyz(123456)</span>
                        </li>
                        <li className='flex items-center gap-[7px] text-[16px] xl:text-[18px] text-[500] font-medium'>
                            <AiFillPhone />
                            <span>+91 9876543210</span>
                        </li>
                        <li className='flex items-center gap-[7px] text-[16px] xl:text-[18px] text-[500] font-medium'>
                            <MdEmail />
                            <span>axy@gmail.com</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="text-center text-[18px] font-medium mt-[15px]">
                traveltoor@2024 all right reserve
            </div>
        </div>
    )
}

export default Footer