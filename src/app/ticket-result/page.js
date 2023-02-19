import React from 'react'
import Image from 'next/image'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'

function TicketResult() {
    return (
        <div>
            <Navbar/>
            <div className='bg-[#5F2EEA] w-full'>
                <div className='container'>
                    <div className='px-32 pt-16 pb-24 w-full'>
                        <div className=' bg-white w-full px-16 flex flex-col items-center rounded-lg'>
                            <p className='py-14 text-2xl font-semibold'>Proof of Payment</p>
                            <div
                                className='bg-ticket bg-cover w-[90%] h-[362px] border-2 rounded-2xl flex  py-5'>
                                <div className='pt-24 w-[68.5%] pl-14 pr-20'>
                                    <div className=''>
                                        <p className='text-sm text-[#AAAAAA] mb-2'>Movie</p>
                                        <p className='text-base font-semibold text-[#14142B]'>Spider-Man: Homecoming</p>
                                    </div>
                                    <div className='flex mt-5 justify-between'>
                                        <div className=''>
                                            <p className='text-sm text-[#AAAAAA] mb-2'>Date</p>
                                            <p className='text-base font-semibold text-[#14142B]'>Category</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-sm text-[#AAAAAA] mb-2'>Time</p>
                                            <p className='text-base font-semibold text-[#14142B]'>Category</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-sm text-[#AAAAAA] mb-2'>Category</p>
                                            <p className='text-base font-semibold text-[#14142B]'>PG-13</p>
                                        </div>
                                    </div>
                                    <div className='flex mt-5 justify-between'>
                                        <div className=''>
                                            <p className='text-sm text-[#AAAAAA] mb-2'>Date</p>
                                            <p className='text-base font-semibold text-[#14142B]'>Category</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-sm text-[#AAAAAA] mb-2'>Time</p>
                                            <p className='text-base font-semibold text-[#14142B]'>Category</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-sm text-[#AAAAAA] mb-2'>Category</p>
                                            <p className='text-base font-semibold text-[#14142B]'>PG-13</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[31.5%] pt-24 pb-5 px-5 border-dashed border-l-2'>
                                    <div className=''>
                                        <p className='text-sm text-[#AAAAAA] mb-2'>Movie</p>
                                        <p className='text-base font-semibold text-[#14142B]'>Spider-Man: Homecoming</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex flex-col mt-5 '>
                                            <div className=''>
                                                <p className='text-sm text-[#AAAAAA] mb-2'>Date</p>
                                                <p className='text-base font-semibold text-[#14142B]'>07 Jul</p>
                                            </div>
                                            <div className=''>
                                                <p className='text-sm text-[#AAAAAA] mb-2'>Count</p>
                                                <p className='text-base font-semibold text-[#14142B]'>3 pcs</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col mt-5 '>
                                            <div className=''>
                                                <p className='text-sm text-[#AAAAAA] mb-2'>Time</p>
                                                <p className='text-base font-semibold text-[#14142B]'>2:00pm</p>
                                            </div>
                                            <div className=''>
                                                <p className='text-sm text-[#AAAAAA] mb-2'>Seats</p>
                                                <p className='text-base font-semibold text-[#14142B]'>C4, C5, C6</p>
                                            </div>
                                            <div className=''>
                                                <p className='text-sm text-[#AAAAAA] mb-2'>Category</p>
                                                <p className='text-base font-semibold text-[#14142B]'>PG-13</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='py-12 flex'>
                                <button className="btn btn-outline text-[#4E4B66] mr-5">
                                    <Image src={require("@/assets/download.png")} alt="" className="w-6 mr-3"/>
                                    Download</button>
                                <button className="btn btn-outline text-[#4E4B66]">
                                    <Image src={require("@/assets/printer.png")} alt="" className="w-6 mr-3"/>
                                    Print</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default TicketResult