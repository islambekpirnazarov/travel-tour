import React from 'react'

const ContactUs = () => {
    return (
        <div className="p-[20px] border-[1px] rounded-md shadow-md">
            <h2 className='text-[24px] font-bold text-orange-500 my-[10px]'>Get In Touch With Contact Us</h2>
            <form className='flex flex-col gap-4'>
                <div className='flex items-center justify-between gap-3 flex-col md:flex-row'>
                    <div className='flex-1'>
                        <label className='text-[18px] font-semibold' htmlFor="user-name">Your Name:</label>
                        <input className='py-[7px] px-[15px] w-full text-[16px] border-orange-400 border-[2px] rounded-md focus:border-orange-700 outline-none' type="text" id='user-name' placeholder='Your Name' />
                    </div>
                    <div className='flex-1'>
                        <label className='text-[18px] font-semibold' htmlFor="email">Email:</label>
                        <input className='py-[7px] px-[15px] w-full text-[16px] border-orange-400 border-[2px] rounded-md focus:border-orange-700 outline-none' type="email" id='email' placeholder='Your Email' />
                    </div>
                </div>
                <div>
                    <label className='text-[18px] font-semibold' htmlFor="message">Message:</label>
                    <textarea rows='8' className='resize-none py-[7px] px-[15px] w-full text-[16px] border-orange-400 border-[2px] rounded-md focus:border-orange-700 outline-none' name="" id="message" placeholder='Message'></textarea>
                </div>
                <div className='flex justify-end'>
                    <button className='py-[10px] px-[15px] font-semibold bg-orange-400 hover:bg-orange-600 rounded-md text-white active:scale-95'>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactUs