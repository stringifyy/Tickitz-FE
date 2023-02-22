'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'
import MobileTicket from '@/component/TicketMobile'
import { redirect, usePathname } from 'next/navigation'
import Cookies from 'js-cookie'
import { useReactToPrint } from 'react-to-print'
import axios from 'axios'

function TicketResult() {
    // Private route
    const userId = Cookies.get('userId')
    if (!userId || userId == null || userId == undefined) {
        redirect('/login')
    }

    const url = process.env.NEXT_PUBLIC_API_URL
    const path = usePathname();
    const idUserHistory = path.split("/")[2];
    const [historyDetail, setHistoryDetail] = useState('')

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    useEffect(() => {
        axios
            .get(`${url}/api/v1/history/${idUserHistory}`)
            .then(res => {
                setHistoryDetail(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Navbar />
            <div className='bg-[#5F2EEA] w-full mt-[-2rem]'>
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
                                        <p className='text-base font-semibold text-[#14142B]'>{historyDetail.movies_name}</p>
                                    </div>
                                    <div className='flex mt-5 justify-between'>
                                        <div className=''>
                                            <p className='text-sm text-[#AAAAAA] mb-2'>Date</p>
                                            <p className='text-base font-semibold text-[#14142B]'>{historyDetail.movies_date}</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-sm text-[#AAAAAA] mb-2'>Time</p>
                                            <p className='text-base font-semibold text-[#14142B]'>{historyDetail.movies_time}</p>
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
                                            <p className='text-base font-semibold text-[#14142B]'>{`Rp${historyDetail.total_payment}`}</p>
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
                                            <p className='text-base font-semibold text-[#14142B]'>{historyDetail.movies_name}</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='flex flex-col mt-3 '>
                                                <div className=''>
                                                    <p className='text-sm text-[#AAAAAA] mb-2'>Date</p>
                                                    <p className='text-base font-semibold text-[#14142B]'>{historyDetail.movies_date}</p>
                                                </div>
                                                <div className=''>
                                                    <p className='text-sm text-[#AAAAAA] mb-2'>Count</p>
                                                    <p className='text-base font-semibold text-[#14142B]'>{`${historyDetail.ticket_count} pcs`}</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col mt-3 ml-6 '>
                                                <div className=''>
                                                    <p className='text-sm text-[#AAAAAA] mb-2'>Time</p>
                                                    <p className='text-base font-semibold text-[#14142B]'>{historyDetail.movies_time}</p>
                                                </div>
                                                <div className=''>
                                                    <p className='text-sm text-[#AAAAAA] mb-2'>Seats</p>
                                                    <p className='text-base font-semibold text-[#14142B]'>{historyDetail.seats}</p>
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
                                <label className="btn btn-outline text-[#4E4B66] mr-5" htmlFor="my-modal-3">
                                    <Image src={require("@/assets/download.png")} alt="" className="w-6 mr-3" />
                                    Download</label>

                                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                {/* Modal start */}
                                <div className="modal">
                                    <div className="modal-box relative">
                                        <label
                                            htmlFor="my-modal-3"
                                            className="btn btn-sm btn-circle absolute right-2 top-2"
                                        >
                                            ✕
                                        </label>
                                        <h3 className="text-lg font-bold">Sorry this feature not available for now</h3>
                                        <p className="py-4">You can print the payment receipt by click the print button beside!</p>
                                        <h1 className='text-[30px] font-semibold text-center'>Thank You</h1>
                                    </div>
                                </div>
                                {/* Modal End */}
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