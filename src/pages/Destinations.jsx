import { SlArrowRight } from "react-icons/sl";
import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import destVideo from "../images/destination.mp4"
import { MainContext } from "../context/context";
import { getDestinationData } from "../resource/requestAxios";
import DestCard from "../components/page-comp/DestCard";
const Destinations = () => {
  const { state, dispatch } = useContext(MainContext)

  useEffect(() => {
    getDestinationData('https://travels-db.onrender.com/destinations', dispatch)
  }, [])
  return (
    <div className='container my-[50px]'>
      <div className='p-[20px] rounded-md shadow-md flex justify-between flex-col md:flex-row gap-3'>
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-[35px] md:text-[40px] lg:text-[50px] font-bold text-orange-500">Destinations</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut veniam eligendi aliquam facilis corrupti. Velit earum ipsum praesentium quidem! Optio aliquid pariatur esse, doloribus vel eaque iusto sit obcaecati aspernatur!</p>
          <div>
            <Link to={'/packeges'}>
              <button className="flex justify-between items-center gap-2 py-[10px] px-[20px] border-[2px] border-orange-500 rounded-full hover:bg-orange-200 active:scale-95 text-orange-500">
                <span>View All Tour Packeges</span>
                <SlArrowRight />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <video className="rounded-md" muted autoPlay loop>
            <source src={destVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="my-[50px]">
        <h2 className="text-[40px] font-bold text-center text-gray-900">All Destinations</h2>
        <div className='mt-[20px] grid gap-[20px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {state.isDestLoading ?
            [1, 2, 3, 4].map(item => (
              <DestCard key={item} />
            ))
            :
            state.destinations.map(item => (
              <DestCard key={item.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Destinations