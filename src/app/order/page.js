'use client'
import Data from './data.json'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import SelecSeat from '@/component/SelectSeat'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'
import { redirect } from 'next/navigation'

function OrderPage() {
    // Private route
    const userId = JSON.parse(localStorage.getItem("@userLogin"))?.user.id;
    if (!userId || userId == null || userId == undefined) {
        redirect('/login')
    }

    const [chek, setChek] = useState([])
    const handleOnChek = (e) => {
        console.log('ceheck', chek)
        if (chek.length != 0) {
            for (let i = 0; i < chek.length + 1; i++) {
                if (chek[i] == e) {
                    console.log('delete', e)
                    delete chek[i];
                    let data = chek.filter((item) => item != undefined)
                    setChek(data);
                    i = chek.length + 1;
                } else {
                    console.log('add', e)
                    setChek([
                        ...chek,
                        e
                    ])
                }
            }
        } else {
            setChek([e])
        }
    }

    useEffect(() => {
        console.log('data')
    }, [chek])

    return (
        <div>
            <Navbar />

            {/* movie selected */}
            <div className='bg-[#F5F6F8]'>
                <div className='container pb-16 md:pt-16'>
                    <div className='  hidden md:flex flex-col'>
                        <p className='text-xl font-semibold mb-5'>Movie Selected</p>
                        <div className="card card-compact w-full bg-base-100 shadow-md">
                            <div className="card-body flex flex-row justify-between">
                                <h2 className="card-title">Spider-Man: Homecoming</h2>
                                <button className="btn btn-active btn-ghost text-xs text-[#5F2EEA] btn-sm">change movie</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex-col md:flex md:flex-row md:justify-between'>
                        <div className='md:w-[69%] w:full'>
                            <p className='text-xl font-semibold mb-5 pt-12'>Choose Your Seat</p>
                            <div
                                className='bg-white shadow-md w-full px-4 md:px-32 flex flex-col items-center py-10 rounded-xl'>
                                <p className='w-full text-center mb-10 text-[#4E4B66]'>Screen</p>
                                <div className='flex w-full justify-between'>
                                    <div
                                        className='hidden md:mr-6 md:flex md:flex-col text-xl w-[5%] font-semibold'>
                                        <p className='mb-2'>A</p>
                                        <p className='mb-2'>B</p>
                                        <p className='mb-2'>C</p>
                                        <p className='mb-2'>D</p>
                                        <p className='mb-2'>E</p>
                                        <p className='mb-2'>F</p>
                                        <p className='mb-2'>G</p>
                                    </div>
                                    <div className='flex md:w-[95%] w-full justify-between'>
                                        <div className='flex flex-wrap justify-center md:w-[45%] w-[47%]'>
                                            {
                                                Data
                                                    .data
                                                    .map((item, i) => (
                                                        <input
                                                            key={i}
                                                            type="checkbox"
                                                            className="bg-[#D6D8E7] appearance-none checked:bg-blue-500 w-[11%] md:w-[10%] md:h-7 h-5 md:mr-2 mr-1 mb-2 rounded"
                                                            value={item.site}
                                                            disabled={item.status ? true : false}
                                                            onChange={(e) => handleOnChek(e.target.value)} />
                                                    ))
                                            }
                                        </div>
                                        <div className='flex justify-center flex-wrap md:w-[45%] w-[47%]'>
                                            {
                                                Data
                                                    .data2
                                                    .map((item, i) => (
                                                        <input
                                                            key={i}
                                                            type="checkbox"
                                                            className="bg-[#D6D8E7] appearance-none checked:bg-blue-500 w-[11%] md:h-7 h-5 md:w-[11%] md:mr-2 mr-1 mb-2 rounded"
                                                            value={item.site}
                                                            onChange={(e) => handleOnChek(e.target.value)} />
                                                    ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='hidden md:flex w-full justify-between pl-16 pr-10 mt-8 mb-5'>
                                    <div className='flex w-[47%]  justify-between text-lg font-semibold'>
                                        <p>1</p>
                                        <p>2</p>
                                        <p>3</p>
                                        <p>4</p>
                                        <p>5</p>
                                        <p>6</p>
                                        <p>7</p>
                                    </div>
                                    <div className='flex ml-[20%] flex w-1/2 justify-between text-lg font-semibold'>
                                        <p className='ml-2'>8</p>
                                        <p className='ml-2'>9</p>
                                        <p className='ml-2'>10</p>
                                        <p className='ml-1'>11</p>
                                        <p className=''>12</p>
                                        <p className=''>13</p>
                                        <p className=''>14</p>
                                    </div>
                                </div>
                                <div className='w-full text-start my-6 text-lg font-semibold'>Seating key</div>
                                <div
                                    className='flex flex-wrap items-center w-[90%] h-6 justify-between mb-4 md:hidden'>
                                    <div className='flex w-1/2'>
                                        <Image src={require("@/assets/Forward-Arrow.png")} className="w-6 mr-4" alt="" />
                                        <p className='font-semibold'>A - G</p>
                                    </div>
                                    <div className='flex w-1/2'>
                                        <Image
                                            src={require("@/assets/Forward-Arrow.png")}
                                            alt=""
                                            className="w-6 mr-4 rotate-[-90deg]" />
                                        <p className='font-semibold'>1 - 14</p>
                                    </div>
                                </div>
                                <div
                                    className='flex flex-wrap items-center w-[90%] h-6 justify-between md:m-0 mb-12'>
                                    <div className='flex w-1/2 md:w-1/4 mb-5 md:m-0'>
                                        <div className='w-6 h-6 bg-[#D6D8E7] rounded mr-4'></div>
                                        <p>Selected</p>
                                    </div>
                                    <div className='flex w-1/2 md:w-1/4 mb-5 md:m-0'>
                                        <div className='w-6 h-6 bg-[#5F2EEA] rounded mr-4'></div>
                                        <p>Selected</p>
                                    </div>
                                    <div className='flex w-1/2 md:w-1/4'>
                                        <div className='w-6 h-6 bg-[#F589D7] rounded mr-4'></div>
                                        <p>Love nest</p>
                                    </div>
                                    <div className='flex w-1/2 md:w-1/4'>
                                        <div className='w-6 h-6 bg-[#6E7191] rounded mr-4'></div>
                                        <p>Sold</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:flex md:flex-col md:w-[29%] md:relative hidden'>
                            <p className='text-xl font-semibold mb-5 mt-12'>Order Info</p>
                            <div className='flex flex-col justify-between w-full '>
                                <div className=" w-full bg-base-100 shadow-md rounded-xl py-3">
                                    <div className="w-full p-6 flex flex-col items-center">
                                        <Image src={require("@/assets/CineOne.png")} className="w-32 mb-5" alt='' />
                                        <h2 className="card-title text-2xl">CineOne21 Cinema</h2>
                                        <div className=' w-full py-10 border-b-[2px]'>
                                            <div className='flex w-full justify-between py-4'>
                                                <p className='text-[#6B6B6B]'>Movie selected</p>
                                                <p className=' font-semibold'>Spider-Man: Homecoming</p>
                                            </div>
                                            <div className='flex w-full justify-between py-4'>
                                                <p className='text-[#6B6B6B]'>Tuesday, 07 July 2020</p>
                                                <p className=' font-semibold'>02:00pm</p>
                                            </div>
                                            <div className='flex w-full justify-between py-4'>
                                                <p className='text-[#6B6B6B]'>One ticket price</p>
                                                <p className=' font-semibold'>$10</p>
                                            </div>
                                            <div className='flex w-full justify-between py-4'>
                                                <p className='text-[#6B6B6B]'>Seat choosed</p>
                                                <div className='flex'>
                                                    {
                                                        chek.map((item, i) => (<p key={i} className='font-semibold'>{item},
                                                        </p>))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between w-full mt-6'>
                                            <p className='text-lg font-semibold'>Total Payment</p>
                                            <p className='text-[#5F2EEA] text-2xl font-bold '>$30</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary w-full mt-6 absolute bottom-0 h-12">Checkout now</button>
                            </div>
                        </div>
                        <div className='md:hidden rounded-lg p-4 bg-white mt-8 shadow-md'>
                            <div className='flex w-full justify-between'>
                                <p className='text-[#6B6B6B] font-semibold'>Seat choosed</p>
                                <div className='flex'>
                                    {
                                        chek.map((item, i) => (<p key={i} className='font-semibold'>{item},
                                        </p>))
                                    }
                                </div>
                            </div>
                        </div>
                        <SelecSeat />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OrderPage