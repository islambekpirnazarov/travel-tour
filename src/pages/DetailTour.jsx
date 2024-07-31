import { CgSpinnerAlt } from "react-icons/cg"; 
import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MainContext } from '../context/context'
import Slider from 'react-slick'
import ArrowButton from '../components/page-comp/ArrowButton'

import { getDestinationData, getTourData } from '../resource/requestAxios'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FaStarHalfAlt } from 'react-icons/fa'

const DetailTour = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const params = useParams()
    const { state, dispatch } = useContext(MainContext)
    useEffect(() => {
        getDestinationData('https://travels-db.onrender.com/destinations', dispatch)
        getTourData('https://travels-db.onrender.com/offers', dispatch)
    }, [])

    const selectTour = state.offers?.find(item => `${item.slug}-${item.id}` === params.slug)

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

    const rateArrow = checkItemRating(selectTour?.rating)
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <ArrowButton />,
        prevArrow: <ArrowButton />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 728,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className='container mt-[20px]'>
            <div className='text-center text-[30px] text-orange-400 font-bold my-[10px]'>{selectTour?.title}</div>
            <div className='mb-[60px]'>
                {state.isOfferLoading ?
                    <div className="flex items-center justify-center text-[40px] h-[250px] text-orange-600 animate-spin">
                        <CgSpinnerAlt />
                    </div>
                 :
                    <Slider {...settings}>
                        {selectTour?.images?.map(item => (
                            <div key={selectTour?.id} className='flex items-center gap-[20px] h-[250px] rounded-md overflow-hidden'>
                                <img src={item} className='h-full w-full object-cover' alt="" />
                            </div>
                        ))}
                    </Slider>}
            </div>
            <div>
                <p className='font-medium'>{selectTour?.details}</p>
            </div>
            <div className='flex items-center justify-between my-[20px]'>
                <div className='flex items-center gap-3'>
                    <div className='text-orange-400 font-medium text-[18px]'>{selectTour?.rating}</div>
                    <div className='flex items-center gap-1 text-orange-400'>
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
                </div>
                <div className='text-[20px] text-orange-400 font-bold'>{selectTour?.price}$</div>
            </div>
            <div className='flex justify-center'>
                <Link to={`/book/${selectTour?.destinationId}-${selectTour?.id}`}>
                    <button className='py-[10px] px-[15px] font-semibold bg-orange-400 hover:bg-orange-600 rounded-md text-white active:scale-95'>Book Now</button>
                </Link>
            </div>
        </div>
    )
}

export default DetailTour