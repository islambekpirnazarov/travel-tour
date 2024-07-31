import { CgClose } from "react-icons/cg"; 
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <header className='h-[70px] flex items-center'>
            <div className="container">
                <div className='flex items-center justify-between gap-1'>
                    <div>
                        <Link>
                            <span className='font-[700] text-[24px]'>Travel<span className='primary'>Toor</span></span>
                        </Link>
                    </div>
                    <nav>
                        <ul className='hidden md:flex items-center gap-[30px]'>
                            <li className='text-[16px] xl:text-[18px] text-[500] hover:text-[#ffa03f]'>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li className='text-[16px] xl:text-[18px] text-[500] hover:text-[#ffa03f]'>
                                <Link to={'/destinations'}>Destinations</Link>
                            </li>
                            <li className='text-[16px] xl:text-[18px] text-[500] hover:text-[#ffa03f]'>
                                <Link to={'/packeges'}>Packeges</Link>
                            </li>
                            <li className='text-[16px] xl:text-[18px] text-[500] hover:text-[#ffa03f]'>
                                <Link to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex items-center justify-end gap-2">
                        <Link to={'/book'}>
                            <button className='btn btn-primary text-nowrap'>
                                Book now
                            </button>
                        </Link>
                        <div onClick={() => setShowMenu(prev => prev ? !prev : !prev)} className="bock md:hidden text-[20px] cursor-pointer p-[5px] hover:bg-gray-200 rounded-sm" >
                            {showMenu ? <CgClose /> : <AiOutlineMenu />}
                        </div>
                    </div>
                    <div className={`fixed top-0 ${showMenu ? 'left-0' : 'left-[-100%]'} bottom-0 w-[250px] bg-white shadow-md z-[10] flex justify-center items-center duration-300`}>
                        <ul className='flex flex-col justify-center items-center gap-[30px]'>
                            <li onClick={() => setShowMenu(false)} className='text-[16px] xl:text-[18px] text-[500] hover:text-[#ffa03f]'>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li onClick={() => setShowMenu(false)} className='text-[16px] xl:text-[18px] text-[500] hover:text-[#ffa03f]'>
                                <Link to={'/destinations'}>Destinations</Link>
                            </li>
                            <li onClick={() => setShowMenu(false)} className='text-[16px] xl:text-[18px] text-[500] hover:text-[#ffa03f]'>
                                <Link to={'/packeges'}>Packeges</Link>
                            </li>
                            <li onClick={() => setShowMenu(false)} className='text-[16px] xl:text-[18px] text-[500] hover:text-[#ffa03f]'>
                                <Link to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header