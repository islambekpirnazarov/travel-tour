import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import React, { useRef } from 'react'

const FilterInputs = () => {
    const selectCont1 = useRef()
    const selectCont2 = useRef()
    const selectCont3 = useRef()
    function showContent(id) {
        switch (id) {
            case 1:
                selectCont1.current.classList.toggle('hidden')
                selectCont2.current.classList.add('hidden')
                selectCont3.current.classList.add('hidden')
                break
            case 2:
                selectCont2.current.classList.toggle('hidden')
                selectCont1.current.classList.add('hidden')
                selectCont3.current.classList.add('hidden')
                break
            case 3:
                selectCont3.current.classList.toggle('hidden')
                selectCont1.current.classList.add('hidden')
                selectCont2.current.classList.add('hidden')
                
                break
        }
    }
    return (
        <div className='flex items-center justify-between gap-2 p-[30px] rounded-[15px] shadow-md'>
            <div className='flex justify-center items-center gap-5'>
                <div  className="flex flex-col gap-1 relative">
                    <div onClick={() => showContent(1)} className="flex items-center gap-2 cursor-pointer">
                        <span className="text-[17px] font-bold">Location</span> <span><IoIosArrowDown /></span>
                    </div>
                    <p className="text-[13px] text-gray-500">Lakshadweep</p>
                    <div ref={selectCont1} className="hidden absolute bottom-0 translate-y-[100%] left-0 bg-white shadow-md p-[10px] rounded-md min-w-[200px] z-[10]">
                        <div className="p-[7px] shadow-sm text-nowrap cursor-pointer active:scale-95">   Paris</div>
                        <div className="p-[7px] shadow-sm text-nowrap cursor-pointer active:scale-95">New York</div>
                        <div className="p-[7px] shadow-sm text-nowrap cursor-pointer active:scale-95">  London</div>
                    </div>
                </div>
                <div  className="flex flex-col gap-1 relative">
                    <div onClick={() => showContent(2)} className="flex items-center gap-2 cursor-pointer">
                        <span className="text-[17px] font-bold">Date</span> <span><IoIosArrowDown /></span>
                    </div>
                    <p className="text-[13px] text-gray-500">2024-04-04</p>
                    <div ref={selectCont2} className="hidden absolute bottom-0 translate-y-[100%] left-0 bg-white shadow-md p-[10px] rounded-md min-w-[200px] z-[10]">
                        <input type="date" />
                    </div>
                </div>
                <div  className="flex flex-col gap-1 relative">
                    <div onClick={() => showContent(3)} className="flex items-center gap-2 cursor-pointer">
                        <span className="text-[17px] font-bold">Price</span> <span><IoIosArrowDown /></span>
                    </div>
                    <p className="text-[13px] text-gray-500">500$</p>
                    <div ref={selectCont3} className="hidden absolute bottom-0 translate-y-[100%] left-0 bg-white shadow-md p-[10px] rounded-md min-w-[200px] z-[10]">
                        <input type="number" />
                    </div>
                </div>
            </div>
            <div>
                <button className='bg-[#ffa03f] text-white rounded-md flex justify-center items-center w-[40px] h-[40px]'>
                    <BiSearch />
                </button>
            </div>
        </div>
    )
}

export default FilterInputs