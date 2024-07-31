import React from 'react'

const Subscribe = () => {
    return (
        <div className='my-[100px]'>
            <div className='mx-auto w-[400px] md:w-[600px] my-[30px] text-center flex flex-col items-center justify-center gap-[30px]'>
                <h1 className='text-[40px] md:text-[50px] font-bold'>Subscribe To Get The Latest News About Us</h1>
                <p className='text-[14px] md:text-[16px] lg:text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae qui alias. Incidunt animi, ipsam alias illum atque iure nemo.</p>
            </div>
            <div className='w-[350px] sm:w-[400px] md:w-[600px] lg:w-[700px] mx-auto'>
                <form className='bg-orange-300 py-5 px-2 flex justify-between items-center rounded-md'>
                    <input type="text" placeholder='Enter Your Email' className='w-full px-[15px] py-[12px] bg-transparent placeholder:text-white font-medium outline-none text-[#fff]'/>
                    <button className='bg-orange-400 text-white px-[15px] py-[12px] rounded-md text-[17px] font-medium'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Subscribe