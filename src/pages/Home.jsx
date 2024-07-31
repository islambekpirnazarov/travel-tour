import React, { useEffect } from 'react'
import FilterInputs from '../components/page-comp/FilterInputs'
import homeImg from '../images/home-img.png'
import PopularDest from '../components/section-comp/PopularDest'
import Subscribe from '../components/section-comp/Subscribe'
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='container'>
            <div className='flex-col md:flex-row flex items-center justify-between gap-10 min-h-[calc(100vh-70px)] max-h-[calc(100vh - 70px)]'>
                <div className='flex-[1.2] flex flex-col gap-[20px]'>
                    <h2 className='text-[40px] md:text-[50px] lg:text-[60px] font-[700]'>
                        <span className='underline underline-offset-8 decoration-orange-400'>Let's</span> Create Memorable Journey
                    </h2>
                    <p className='text-[14px] md:text-[16px] lg:text-[18px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officiis non, laudantium vitae animi eligendi?
                    </p>
                    <div>
                        <FilterInputs />
                    </div>
                </div>

                <div className='flex-1'>
                    <img src={homeImg} alt="" />
                </div>
            </div>

            <PopularDest/>
            <Subscribe/>
        </div>
    )
}

export default Home