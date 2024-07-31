import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MainContext } from '../context/context';
import TourCard from '../components/page-comp/TourCard';
import { getDestinationData, getTourData } from '../resource/requestAxios';


const DetailDest = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    const params = useParams()
    
    const { state, dispatch } = useContext(MainContext)
    useEffect(() => {
        getDestinationData('https://travels-db.onrender.com/destinations', dispatch)
        getTourData('https://travels-db.onrender.com/offers', dispatch)
    }, [])
    const selecDest = state.destinations?.find(item => `${item.slug}-${item.id}` === params.slug)
    const selectTour = state.offers?.filter(item => item.destinationId == selecDest?.id)
    return (
        <div className='container mt-[20px] '>
            <div className='relative mt-[10px] border-[1px] shadow-md rounded-md overflow-hidden p-[20px]'>
                <img src={selecDest?.image} alt="" className='absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full z-0' />
                <div className='relative z-10 text-white p-[20px] rounded-md backdrop-blur-[3px] bg-black bg-opacity-30'>
                    <div className='text-center text-[30px] font-bold'>
                        {selecDest?.name}
                    </div>
                    <p className='text-center'>
                        {selecDest?.description}
                    </p>
                </div>
            </div>

            <div>
                {state.isOfferLoading ?
                    [1, 2, 3].map((item, index) => (
                        <TourCard index={index} key={item} />
                    ))
                    :
                    selectTour?.map((item, index) => <TourCard key={item.id} item={item} index={index} />)}
            </div>
        </div>
    )
}

export default DetailDest