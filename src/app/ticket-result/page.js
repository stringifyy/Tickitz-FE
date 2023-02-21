'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'
import MobileTicket from '@/component/TicketMobile'
import { redirect } from 'next/navigation'
import Cookies from 'js-cookie'
import { useReactToPrint } from 'react-to-print'

function TicketResult() {
    // Private route
    const userId = Cookies.get('userId')
    if (!userId || userId == null || userId == undefined) {
        redirect('/login')
    }

    const seats = Cookies.get('seats')
    const movies_date = Cookies.get('movies_date')
    const movies_time = Cookies.get('movies_time')
    const movies_name = Cookies.get('movies_name')
    const cinema_name = Cookies.get('cinema_name')
    const ticket_count = parseInt(Cookies.get('ticket_count'))
    const total_payment = parseInt(Cookies.get('total_payment'))

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })
    return (
        <div>
            <Navbar />
            <div className='bg-[#5F2EEA] w-full'>
                <div className='container'>
                    <div className='hidden md:flex md:flex-col px-32 pt-16 pb-24 w-full'>
                        <div className=' bg-white w-full px-16 flex flex-col items-center rounded-lg'>
                            <p className='py-14 text-2xl font-semibold'>Proof of Payment</p>

                            {/* ticket-result section */}
                            <div
                                className='bg-ticket bg-cover w-[90%] h-[362px] border-2 rounded-2xl flex  py-5'
                                ref={componentRef}>
                                <div className='pt-24 w-[68.5%] pl-14 pr-20'>
                                    <div className=''>
                                        <p className='text-sm text-[#AAAAAA] mb-2'>Movie</p>
                                        <p className='text-base font-semibold text-[#14142B]'>{movies_name}</p>
                                    </div>
                                    <div className='flex mt-5 justify-between'>
                                        <div className=''>
                                            <p className='text-sm text-[#AAAAAA] mb-2'>Date</p>
                                            <p className='text-base font-semibold text-[#14142B]'>{movies_date}</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-sm text-[#AAAAAA] mb-2'>Time</p>
                                            <p className='text-base font-semibold text-[#14142B]'>{movies_time}</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-sm text-[#AAAAAA] mb-2'>Category</p>
                                            <p className='text-base font-semibold text-[#14142B]'>PG-13</p>
                                        </div>
                                    </div>
                                    <div className='flex mt-5 justify-center'>
                                        {/* <div className=''>
                                            <p className='text-sm text-[#AAAAAA] mb-2'>Date</p>
                                            <p className='text-base font-semibold text-[#14142B]'>Category</p>
                                        </div> */}
                                        <div className=''>
                                            <p className='text-sm text-[#AAAAAA] mb-2'>Total payment</p>
                                            <p className='text-base font-semibold text-[#14142B]'>{`Rp${total_payment}`}</p>
                                        </div>
                                        {/* <div className=''>
                                            <p className='text-sm text-[#AAAAAA] mb-2'>Category</p>
                                            <p className='text-base font-semibold text-[#14142B]'>PG-13</p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className='w-[31.5%] pt-24 pb-5 px-5 pr-0 border-dashed border-l-2 flex justify-between'>
                                    <div className='flex flex-col'>
                                        <div className=''>
                                            <p className='text-sm text-[#AAAAAA] mb-2'>Movie</p>
                                            <p className='text-base font-semibold text-[#14142B]'>{movies_name}</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='flex flex-col mt-3 '>
                                                <div className=''>
                                                    <p className='text-sm text-[#AAAAAA] mb-2'>Date</p>
                                                    <p className='text-base font-semibold text-[#14142B]'>{movies_date}</p>
                                                </div>
                                                <div className=''>
                                                    <p className='text-sm text-[#AAAAAA] mb-2'>Count</p>
                                                    <p className='text-base font-semibold text-[#14142B]'>{`${ticket_count} pcs`}</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col mt-3 ml-6 '>
                                                <div className=''>
                                                    <p className='text-sm text-[#AAAAAA] mb-2'>Time</p>
                                                    <p className='text-base font-semibold text-[#14142B]'>{movies_time}</p>
                                                </div>
                                                <div className=''>
                                                    <p className='text-sm text-[#AAAAAA] mb-2'>Seats</p>
                                                    <p className='text-base font-semibold text-[#14142B]'>{seats}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col -mt-4'>
                                        <Image
                                            className='w-[60px]'
                                            alt=''
                                            src={require("@/assets/barcode.png")} />
                                        <Image
                                            className='w-[60px]'
                                            alt=''
                                            src={require("@/assets/barcode.png")} />
                                        <Image
                                            className='w-[60px]'
                                            alt=''
                                            src={require("@/assets/barcode.png")} />
                                        <Image
                                            className='w-[60px]'
                                            alt=''
                                            src={require("@/assets/barcode.png")} />
                                    </div>
                                </div>
                            </div>

                            {/* button action */}
                            <div className='py-12 flex'>
                                <button className="btn btn-outline text-[#4E4B66] mr-5">
                                    <Image src={require("@/assets/download.png")} alt="" className="w-6 mr-3" />
                                    Download</button>
                                <button className="btn btn-outline text-[#4E4B66]" onClick={handlePrint}>
                                    <Image src={require("@/assets/printer.png")} alt="" className="w-6 mr-3" />
                                    Print</button>
                            </div>
                        </div>
                    </div>
                    <MobileTicket />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TicketResult