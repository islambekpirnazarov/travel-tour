import { SlArrowLeft } from "react-icons/sl"; 
import { SlArrowRight } from "react-icons/sl"; 
import React from 'react'

const ArrowButton = (props) => {
    const {className, onClick} = props
    const checkBtn = className.includes('slick-prev')
  return (
    <div className={`absolute top-[50%] active:scale-95 duration-200 translate-y-[-50%] ${checkBtn ? 'left-[-3%]' : 'right-[-3%]'} z-[5] h-[40px] min-w-[40px] flex justify-center items-center text-[18px] text-white bg-orange-400 rounded-full shadow-md cursor-pointer`} onClick={onClick}>
        {checkBtn ? <SlArrowLeft /> : <SlArrowRight />}
    </div>
  )
}

export default ArrowButton