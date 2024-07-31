
import React, { useContext, useEffect } from 'react'
import { SlArrowRight } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import packegesVideo from "../images/packeges.mp4"
import { MainContext } from '../context/context'
import { getTourData } from '../resource/requestAxios'
import TourCard from "../components/page-comp/TourCard";
const Packeges = () => {
  const { state, dispatch } = useContext(MainContext)

  useEffect(() => {
    getTourData('https://travels-db.onrender.com/offers', dispatch)
  }, [])
  
  return (
    <div className='container mt-[20px] '>
      <div className='p-[20px] rounded-md shadow-md flex justify-between flex-col md:flex-row gap-3'>
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-[35px] md:text-[40px] lg:text-[50px] font-bold text-orange-500">Tour Packeges</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut veniam eligendi aliquam facilis corrupti. Velit earum ipsum praesentium quidem! Optio aliquid pariatur esse, doloribus vel eaque iusto sit obcaecati aspernatur!</p>
          <div>
            <Link to={'/book'}>
              <button className="flex justify-between items-center gap-2 py-[10px] px-[20px] border-[2px] border-orange-500 rounded-full hover:bg-orange-200 active:scale-95 text-orange-500">
                <span>Book Now</span>
                <SlArrowRight />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <video className="rounded-md" muted autoPlay loop>
            <source src={packegesVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className='mt-[50px]'>
        <h2 className='text-center text-[35px] font-bold text-gray-900'>All Tour Packeges</h2>

        <div className='mt-[20px]'>
          {state.isOfferLoading ? 
          [1, 2, 3].map((item, index) => (
            <TourCard index={index} key={item}/>
          ))
          :
          state.offers?.map((item,index) => <TourCard key={item.id} item={item} index={index}/>)}
        </div>
      </div>
    </div>
  )
}

export default Packeges