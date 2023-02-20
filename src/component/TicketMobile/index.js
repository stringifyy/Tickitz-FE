import React from 'react'
import Image from 'next/image'

function MobileTicket() {
    return (
        <div className='md:hidden w-full flex items-center px-6 py-12'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body p-6">
                    <div className='flex flex-col items-center border-b-2 border-dashed relative'>
                        <Image
                            className='w-[56px] mb-4'
                            alt=''
                            src={require("@/assets/icons-success.png")}/>
                        <h2 className="card-title text-2xl font-semibold">Thank You!</h2>
                        <p className='text-[#AAAAAA] mb-12 mt-3'>Your transaction was successful</p>
                        <div className='w-8 h-8 rounded-full bg-[#5F2EEA] absolute -bottom-4 -left-[42px]'></div>
                        <div className='w-8 h-8 rounded-full bg-[#5F2EEA] absolute -bottom-4 -right-[42px]'></div>
                    </div>
                    <div className="">
                        <div className='py-6'>
                            <div className='flex justify-center'>
                                <Image
                                    className='w-[60px] rotate-90'
                                    alt=''
                                    src={require("@/assets/barcode.png")}/>
                                <Image
                                    className='w-[60px] rotate-[-90deg]'
                                    alt=''
                                    src={require("@/assets/barcode.png")}/>
                                <Image
                                    className='w-[60px] rotate-90'
                                    alt=''
                                    src={require("@/assets/barcode.png")}/>
                                <Image
                                    className='w-[60px] rotate-[-90deg]'
                                    alt=''
                                    src={require("@/assets/barcode.png")}/>
                            </div>
                            <div className='flex justify-between w-full'>
                                <div className='flex flex-col mt-5 w-1/2'>
                                    <div className='mt-6'>
                                        <p className='text-sm text-[#AAAAAA] mb-2'>Movie</p>
                                        <p className='text-base font-semibold text-[#14142B]'>Spider-Man:..</p>
                                    </div>
                                    <div className='mt-6'>
                                        <p className='text-sm text-[#AAAAAA] mb-2'>Date</p>
                                        <p className='text-base font-semibold text-[#14142B]'>07 Jul</p>
                                    </div>
                                    <div className='mt-6'>
                                        <p className='text-sm text-[#AAAAAA] mb-2'>Count</p>
                                        <p className='text-base font-semibold text-[#14142B]'>3 pcs</p>
                                    </div>
                                </div>
                                <div className='flex flex-col mt-5 w-1/2 ml-8 '>
                                    <div className='mt-6'>
                                        <p className='text-sm text-[#AAAAAA] mb-2'>Time</p>
                                        <p className='text-base font-semibold text-[#14142B]'>2:00pm</p>
                                    </div>
                                    <div className='mt-6'>
                                        <p className='text-sm text-[#AAAAAA] mb-2'>Seats</p>
                                        <p className='text-base font-semibold text-[#14142B]'>C4, C5, C6</p>
                                    </div>
                                    <div className='mt-6'>
                                        <p className='text-sm text-[#AAAAAA] mb-2'>Category</p>
                                        <p className='text-base font-semibold text-[#14142B]'>PG-13</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex px-6 py-3 jutify-between rounded-lg border-2 mt-10'>
                                <p className='text-base font-semibold text-[#14142B]'>Total</p>
                                <p className='text-base font-semibold text-[#14142B] text-end'>$30.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileTicket