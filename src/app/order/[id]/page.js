'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import SelecSeat from '@/component/SelectSeat'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'
import { redirect, usePathname, useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import axios from 'axios'

function OrderPage() {

    // Private route
    // const userId = JSON.parse(localStorage.getItem("@userLogin"))?.user.id;
    // const userId = Cookies.get('userId')
    // if (!userId || userId == null || userId == undefined) {
    //     redirect('/login')
    // }
    const urlApi = process.env.NEXT_PUBLIC_API_URL
    const urlImg = process.env.NEXT_PUBLIC_API_IMG
    const path = usePathname();
    const id = path.split("/")[2];
    const router = useRouter()

    // Get data from cookies and state
    const [dataLeft, setDataLeft] = useState([])
    const [dataRight, setDataRight] = useState([])
    const [chek, setChek] = useState([])
    const [dataId, setDataId] = useState([])
    const [dataIdRight, setDataIdRight] = useState([])
    const movies_time = Cookies.get('movies_time')

    const movies_name = Cookies.get('movies_name')
    const movies_date = Cookies.get('movies_date')
    const [cinemaData, setCinemaData] = useState([])
    const [cinemaPrice, setCinemaPrice] = useState([])
    Cookies.set('seats', chek)
    Cookies.set('ticket_count', chek.length)
    Cookies.set('total_payment', chek.length * parseInt(cinemaPrice))
    // Get data cinema
    useEffect(() => {
        loadCinemaData();
    }, []);

    const loadCinemaData = async () => {
        return await axios
            .get(`${urlApi}/api/v1/cinema/${id}`)
            .then((res) => {
                setCinemaData(res.data.data);
                setCinemaPrice(res.data.data.cinema_price)
                Cookies.set('movies_date', res.data.data.cinema_date)
                Cookies.set('cinema_name', res.data.data.cinema_name)
            })
            .catch((err) => console.log(err));
    };

    //handlle left
    const handleOnChek = (e, id, seatStatus) => {
        if (chek.length != 0) {
            for (let i = 0; i < chek.length + 1; i++) {
                if (chek[i] == e) {
                    // console.log('delete', e)
                    delete chek[i];
                    let data = chek.filter((item) => item != undefined)
                    setChek(data);
                    i = chek.length + 1;
                } else {
                    // console.log('add', e)
                    setChek([
                        ...chek,
                        e
                    ])
                }
            }
        } else {
            setChek([e])
        }
        if (dataId.length != 0) {
            for (let i = 0; i < dataId.length + 1; i++) {
                if (dataId[i] == id) {
                    // console.log('delete', id)
                    delete dataId[i]
                    let dataSeatId = dataId.filter((item) => item != undefined)
                    setDataId(dataSeatId)
                    i = dataId.length + 1;
                } else {
                    // console.log('add', id)
                    setDataId([
                        ...dataId,
                        id
                    ])
                }
            }
        } else {
            setDataId([id])
        }
    }

    const handleOnChekRight = (e, id, seatStatus) => {
        if (chek.length != 0) {
            for (let i = 0; i < chek.length + 1; i++) {
                if (chek[i] == e) {
                    // console.log('delete', e)
                    delete chek[i];
                    let data = chek.filter((item) => item != undefined)
                    setChek(data);
                    i = chek.length + 1;
                } else {
                    // console.log('add', e)
                    setChek([
                        ...chek,
                        e
                    ])
                }
            }
        } else {
            setChek([e])
        }
        if (dataIdRight.length != 0) {
            for (let i = 0; i < dataIdRight.length + 1; i++) {
                if (dataIdRight[i] == id) {
                    // console.log('delete', id)
                    delete dataIdRight[i]
                    let dataSeatId = dataIdRight.filter((item) => item != undefined)
                    setDataIdRight(dataSeatId)
                    i = dataIdRight.length + 1;
                } else {
                    // console.log('add', id)
                    setDataIdRight([
                        ...dataIdRight,
                        id
                    ])
                }
            }
        } else {
            setDataIdRight([id])
        }
    }

    const [status, setStatus] = useState({ status: 'true' })
    const handleSeats = () => {
        for (let i = 0; i < dataId.length; i++) {
            axios.patch(`${urlApi}/api/v1/seats_left/${dataId[i]}`, status, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                }
            })
                .then(res => {
                    console.log(res);
                    router.push('/payment')
                })
                .catch(err => {
                    console.log(err);
                })
        }
        for (let i = 0; i < dataIdRight.length; i++) {
            axios.patch(`${urlApi}/api/v1/seats_right/${dataIdRight[i]}`, status, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                }
            })
                .then(res => {
                    console.log(res);
                    router.push('/payment')
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    useEffect(() => {
        loadSeatsLeft()
        loadSeatsRight()
    }, [dataIdRight, dataId])

    const loadSeatsLeft = async () => {
        return await axios.get(`${urlApi}/api/v1/seats_left`)
            .then(res => setDataLeft(res.data.data))
            .catch((err) => console.log(err))
    }
    const loadSeatsRight = async () => {
        return await axios.get(`${urlApi}/api/v1/seats_right`)
            .then(res => setDataRight(res.data.data))
            .catch((err) => console.log(err))
    }

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
                                <h2 className="card-title">{movies_name}</h2>
                                <button className="btn btn-active btn-ghost text-xs text-[#5F2EEA] btn-sm">change movie</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex-col md:flex md:flex-row md:justify-between'>
                        <div className='md:w-[69%] w:full'>
                            {/* <p className='text-xl font-semibold mb-5 pt-12'>{dataId}</p> */}
                            <p className='text-xl font-semibold mb-5 pt-12'>Choose your seats</p>
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
                                                dataLeft
                                                    .map((item, i) => (
                                                        <input
                                                            key={i}
                                                            type="checkbox"
                                                            className={item.status == true ? `appearance-none checked:bg-[#5F2EEA] w-[11%] md:w-[10%] md:h-7 h-5 md:mr-2 mr-1 mb-2 rounded bg-red-900` : `appearance-none checked:bg-[#5F2EEA] w-[11%] md:w-[10%] md:h-7 h-5 md:mr-2 mr-1 mb-2 rounded bg-[#D6D8E7]`}
                                                            value={item.site}
                                                            onChange={(e) => handleOnChek(e.target.value, item.id, item.status)} />
                                                    ))
                                            }
                                        </div>
                                        <div className='flex justify-center flex-wrap md:w-[45%] w-[47%]'>
                                            {
                                                dataRight
                                                    .map((item, i) => (
                                                        <input
                                                            key={i}
                                                            type="checkbox"
                                                            className={item.status == true ? `appearance-none checked:bg-[#5F2EEA] w-[11%] md:w-[10%] md:h-7 h-5 md:mr-2 mr-1 mb-2 rounded bg-red-900` : `appearance-none checked:bg-[#5F2EEA] w-[11%] md:w-[10%] md:h-7 h-5 md:mr-2 mr-1 mb-2 rounded bg-[#D6D8E7]`}
                                                            value={item.site}
                                                            onChange={(e) => handleOnChekRight(e.target.value, item.id)} />
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
                                        <div className='w-6 h-6 bg-red-900 rounded mr-4'></div>
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
                                        {/* <Image src={require("@/assets/CineOne.png")} className="w-32 mb-5" alt='' /> */}
                                        <h2 className="card-title text-2xl">{cinemaData.cinema_name}</h2>
                                        <div className=' w-full py-10 border-b-[2px]'>
                                            <div className='flex w-full justify-between py-4'>
                                                <p className='text-[#6B6B6B]'>Movie selected</p>
                                                <p className=' font-semibold'>{movies_name}</p>
                                            </div>
                                            <div className='flex w-full justify-between py-4'>
                                                <p className='text-[#6B6B6B]'>{movies_date}</p>
                                                <p className=' font-semibold'>{movies_time}</p>
                                            </div>
                                            <div className='flex w-full justify-between py-4'>
                                                <p className='text-[#6B6B6B]'>One ticket price</p>
                                                <p className=' font-semibold'>{`Rp${cinemaPrice}`}</p>
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
                                            <p className='text-[#5F2EEA] text-2xl font-bold '>{`Rp${chek.length * parseInt(cinemaPrice)}`}</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary w-full mt-6 absolute bottom-0 h-12" onClick={(() => handleSeats())}>Checkout now</button>
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