
import React, { useContext, useEffect } from 'react'
import { getDestinationData } from "../../resource/requestAxios";
import { MainContext } from "../../context/context";
import DestCard from "../page-comp/DestCard";
import Slider from 'react-slick';
import ArrowButton from '../page-comp/ArrowButton';

const PopularDest = () => {
    const { state, dispatch } = useContext(MainContext)

    useEffect(() => {
        getDestinationData('https://travels-db.onrender.com/destinations', dispatch)
    }, [])

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow : <ArrowButton/>,
        prevArrow : <ArrowButton/>,
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
        <div className='my-[60px]'>
            <div className='mb-[30px]'>
                <p className='text-[18px] font-semibold text-[#ffa03f]'>Famous Dictation!</p>
                <h3 className='text-[35px] font-bold'>Our Popular <span className='text-[#ffa03f]'>Dictations</span></h3>
            </div>
            <div className=''>
                <Slider {...settings}>
                    {state.isDestLoading ? 
                    [1, 2, 3].map(item => (
                        <DestCard key={item}/>
                    ))
                    :
                    state.destinations.map(item => (
                        <DestCard key={item.id} item={item} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default PopularDest