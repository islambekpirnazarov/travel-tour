import { BiImages } from "react-icons/bi";
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { useNavigate } from "react-router-dom";


const DestCard = ({ item }) => {
    const navigate = useNavigate()
    
    function setDetailDest() {
        navigate(`/destinations/${item.slug}-${item.id}`)
        
    }
    if (!item) {
        return (
            <div className='overflow-hidden rounded-md shadow-md relative group flex-1'>
                <div className='animate-pulse flex justify-center text-[40px] text-gray-500 items-center w-full h-[400px] object-cover group-hover:scale-125 duration-200 cursor-pointer'>
                    <BiImages />
                </div>
                <div className='p-[10px] absolute bottom-[-110px] left-0 right-0 bg-black bg-opacity-45 text-white group-hover:bottom-0 duration-300 cursor-pointer'>
                    <h2 className="text-[22px] font-semibold mb-[10px] animate-pulse">Loading...</h2>
                    <div className='flex justify-between items-center'>
                        <div className="flex items-center gap-1 text-[#ffa03f]">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <div className="flex items-center gap-1">
                            <MdLocationOn />
                            <span className="animate-pulse">country ...</span>
                        </div>

                    </div>
                    <div className="text-[14px] min-h-[100px] max-h-[100px] overflow-y-auto mt-[10px]">
                        <p>loading ....</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div onClick={setDetailDest} className='overflow-hidden rounded-md shadow-md relative group flex-1'>
            <img className='w-full h-[400px] object-cover group-hover:scale-125 duration-200 cursor-pointer' src={item.image} alt="" />
            <div className='p-[10px] absolute bottom-[-110px] left-0 right-0 bg-black bg-opacity-45 text-white group-hover:bottom-0 duration-300 cursor-pointer'>
                <h2 className="text-[22px] font-semibold mb-[10px]">{item.name}</h2>
                <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-1 text-[#ffa03f]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <div className="flex items-center gap-1">
                        <MdLocationOn />
                        <span>{item.country}</span>
                    </div>

                </div>
                <div className="text-[14px] min-h-[100px] max-h-[100px] overflow-y-auto mt-[10px]">
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default DestCard