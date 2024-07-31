import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail, MdLocationPin } from 'react-icons/md'
import ContactUs from '../components/page-comp/ContactUs'

const Contact = () => {
  return (
    <div className='container mt-[20px]'>
      <h2 className='text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] text-orange-500 font-bold'>Contact</h2>
      <hr className='border-gray-500' />

      <div className='flex justify-between items-center gap-3 my-[30px] flex-col md:flex-row'>
        <div className='flex-1'>
          <ul className='flex flex-col justify-center gap-[20px]'>
            <li className='flex items-center gap-[7px] text-[16px] xl:text-[18px] text-[500] font-medium'>
              <div className='text-[22px] text-white p-[10px] flex items-center justify-center bg-orange-500 rounded-full'>
                <MdLocationPin />
              </div>
              <span className='font-semibold'>Any Ware, Any Rod, Xyz(123456)</span>
            </li>
            <li className='flex items-center gap-[7px] text-[16px] xl:text-[18px] text-[500] font-medium'>
              <div className='text-[22px] text-white p-[10px] flex items-center justify-center bg-orange-500 rounded-full'>
                <AiFillPhone />
              </div>
              <span className='font-semibold'>+91 9876543210</span>
            </li>
            <li className='flex items-center gap-[7px] text-[16px] xl:text-[18px] text-[500] font-medium'>
              <div className='text-[22px] text-white p-[10px] flex items-center justify-center bg-orange-500 rounded-full'>
                <MdEmail />
              </div>
              <span className='font-semibold'>axy@gmail.com</span>
            </li>

          </ul>
        </div>
        <div className='flex-1'>
          <ContactUs/>
        </div>
      </div>
    </div>
  )
}

export default Contact