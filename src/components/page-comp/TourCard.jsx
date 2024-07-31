import { BiImages } from "react-icons/bi"; 
import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";


const TourCard = ({ item, index }) => {
    const navigate = useNavigate()
    function setTourDetail() {
        navigate(`/packeges/${item.slug}-${item.id}`)
    }

    const checkIndex = index % 2 === 0

    function checkItemRating(count) {
        const rateArrow = []
        for (let i = 1; i <= 5; i++) {
            if (i <= +count?.toFixed()) {
                if (i - 0.4 >= count) {
                    rateArrow.push(0.5)
                } else rateArrow.push(1)
            } else rateArrow.push(0)
        }

        return rateArrow
    }

    const rateArrow = checkItemRating(item?.rating)

    if (!item) {
        return (
            <div className={`mt-[20px] flex bg-gray-100 rounded-md animate-pulse justify-between ${!checkIndex ? 'md:flex-row-reverse' : 'md:flex-row'} gap-3 p-[10px] border-t-[1px] border-gray-200 flex-col`}>
                <div className='flex-1'>
                    <div className='border-[1px] border-gray-500 rounded-md h-[300px] w-full flex items-center justify-center text-[25px] animate-pulse'>
                        <BiImages />
                    </div>
                </div>
                <div className='flex-[2] flex flex-col justify-between'>
                    <h2 className="text-[24px] font-bold text-gray-800">Loading ...</h2>
                    <p>Description</p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1 text-orange-400 text-[20px]">
                            <span>0</span>

                            {[0, 0, 0, 0, 0].map((item, index) => {
                                switch (item) {
                                    case 1:
                                        return (
                                            <AiFillStar key={index} />
                                        )
                                    case 0.5:
                                        return (
                                            <FaStarHalfAlt key={index} />
                                        )
                                    case 0:
                                        return (
                                            <AiOutlineStar key={index} />
                                        )
                                }
                            })}
                        </div>
                        <div className="flex justify-end items-center gap-2">
                            <span>Per Person /</span>
                            <span className="font-bold text-[20px] text-orange-500">price... $</span>
                        </div>
                    </div>

                    <div className={`flex ${!checkIndex ? 'justify-start' : 'justify-end'} items-center`}>
                        <button disabled className="flex justify-between items-center gap-2 py-[10px] px-[20px] border-[2px] border-orange-500 rounded-full hover:bg-orange-200 active:scale-95 text-orange-500">
                            View Detail
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={`mt-[20px] flex justify-between ${!checkIndex ? 'md:flex-row-reverse' : 'md:flex-row'} gap-3 p-[10px] border-t-[1px] border-gray-200 flex-col`}>
            <div className='flex-1'>
                <img src={item.images[0]} className='rounded-md object-cover h-[300px] w-full' alt="" />
            </div>
            <div className='flex-[2] flex flex-col justify-between'>
                <h2 className="text-[24px] font-bold text-gray-800">{item.title}</h2>
                <p>{item.details}</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-orange-400 text-[20px]">
                        <span>{item.rating}</span>

                        {rateArrow.map((item, index) => {
                            switch (item) {
                                case 1:
                                    return (
                                        <AiFillStar key={index} />
                                    )
                                case 0.5:
                                    return (
                                        <FaStarHalfAlt key={index} />
                                    )
                                case 0:
                                    return (
                                        <AiOutlineStar key={index} />
                                    )
                            }
                        })}
                    </div>
                    <div className="flex justify-end items-center gap-2">
                        <span>Per Person /</span>
                        <span className="font-bold text-[20px] text-orange-500">{item.price}$</span>
                    </div>
                </div>

                <div className={`flex ${!checkIndex ? 'justify-start' : 'justify-end'} items-center`}>
                    <button onClick={setTourDetail} className="flex justify-between items-center gap-2 py-[10px] px-[20px] border-[2px] border-orange-500 rounded-full hover:bg-orange-200 active:scale-95 text-orange-500">
                        View Detail
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TourCard