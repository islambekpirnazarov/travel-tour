import { CgSpinnerAlt } from "react-icons/cg"; 
import React, { useContext, useEffect } from 'react'
import BookingForm from '../components/page-comp/BookingForm'
import { MainContext } from '../context/context'
import { getDestinationData, getTourData } from '../resource/requestAxios'

const Book = () => {
  const { state, dispatch } = useContext(MainContext)

  useEffect(() => {
    getDestinationData('https://travels-db.onrender.com/destinations', dispatch)
    getTourData('https://travels-db.onrender.com/offers', dispatch)
  }, [])
  
  return (
    <div className='container my-[20px]'>
      <h2 className='text-[30px] sm:text-[35px] md:text-[40px] text-orange-500 font-bold'>
        Book Your Favourite Trip
      </h2>
      <hr className='border-gray-500' />

      {state.isDestLoading && state.isOfferLoading ?
        <div className="flex justify-center items-center h-[40vh] text-[50px] text-orange-600 animate-spin">
          <CgSpinnerAlt />
        </div>
        :
        <BookingForm dest={state.destinations} tour={state.offers}/>}
    </div>
  )
}

export default Book