import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid'
const BookingForm = ({ dest, tour }) => {
    const {id} = useParams()
    const [destId, setDestId] = useState()
    const selectTour = tour?.filter(item => item.destinationId ==  destId )

    const pathId = id?.split('-')
    
          
    useEffect(() => { setDestId( pathId[0] || dest[0]?.id ) }, [id || dest])

    function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const bookingData = {
            id: uuidv4(),
            ...Object.fromEntries(formData.entries())
        }
        {
            (
                async function () {
                    try {
                        const res = await axios.post('https://travels-db.onrender.com/users', bookingData)
                        console.log(res.data)
                        toast.success('You request has been processed succsesfully', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        e.target.reset()
                    } catch (err) {
                        console.log(err);
                        toast.error('Error', { 
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                }
            )()
        }
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='mt-[20px] flex flex-col gap-5'>
                <div className='flex items-center justify-between gap-3 flex-col md:flex-row'>
                    <div className='flex-1'>
                        <label className='text-[18px] font-semibold' htmlFor="user-name">Your Name:</label>
                        <input required name='userName' className='py-[7px] px-[15px] w-full text-[16px] border-orange-400 border-[2px] rounded-md focus:border-orange-700 outline-none' type="text" id='user-name' placeholder='Your Name' />
                    </div>
                    <div className='flex-1'>
                        <label className='text-[18px] font-semibold' htmlFor="email">Email:</label>
                        <input required name='email' className='py-[7px] px-[15px] w-full text-[16px] border-orange-400 border-[2px] rounded-md focus:border-orange-700 outline-none' type="email" id='email' placeholder='Your Email' />
                    </div>
                </div>

                <div>
                    <label className='text-[18px] font-semibold' htmlFor="phone-number">Your Phone Number:</label>
                    <input required name='phoneNumber' className='py-[7px] px-[15px] w-full text-[16px] border-orange-400 border-[2px] rounded-md focus:border-orange-700 outline-none' type="number" id='phone-number' placeholder='Your Phone Number' />
                </div>

                <div>
                    <label className='text-[18px] font-semibold' htmlFor="destination">Destination:</label>
                    <select name='destinationId' value={ destId} onChange={(e) => setDestId(e.target.value)} id="destination" className='py-[7px] px-[15px] w-full text-[16px] border-orange-400 border-[2px] rounded-md focus:border-orange-700 outline-none'>
                        {dest?.map(item => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}

                    </select>
                </div>

                <div>
                    <label className='text-[18px] font-semibold' htmlFor="tour">Tour:</label>
                    <select defaultValue={pathId[1]} name="tourId" id="tour" className='py-[7px] px-[15px] w-full text-[16px] border-orange-400 border-[2px] rounded-md focus:border-orange-700 outline-none'>
                        {selectTour?.map(item => (
                            <option key={item.id} value={item.id}>{item.title}</option>
                        ))}
                    </select>
                </div>

                <div className='flex justify-end'>
                    <button className='py-[10px] px-[15px] font-semibold bg-orange-400 hover:bg-orange-600 rounded-md text-white active:scale-95'>Send Book</button>
                </div>
            </div>
            <ToastContainer />
        </form>
    )
}

export default BookingForm