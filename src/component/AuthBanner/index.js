import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <>
        <div className='hidden md:flex md:bg-banner md:bg-cover md:w-[60%]'>
            <div className='container h-full'>
                <div className='w-full flex flex-col justify-center items-center h-full'>
                    <Image
                        src={require("@/assets/tickitz-logo.webp")}
                        alt="logo-tickitz"
                        className='w-[90%]'/>
                    <p className='text-5xl text-white'>wait, watch, wow!</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner