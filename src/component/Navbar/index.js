'use client';
import Image from 'next/image';
import {Inter} from '@next/font/google';
import {useState, useEffect} from 'react';
const inter = Inter({subsets: ['latin']});
import AfterLogin from './afterLogin';
import { useRouter } from 'next/navigation';

export default function Navbar() {


    const router = useRouter()
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('@userLogin')) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    }, [])

    // const userId = JSON.parse(localStorage.getItem("@userLogin"))?.user.user_id;
    // useEffect(() => {
    //     axios
    //     .get(`http://localhost:5001/api/users/${userId}`)
    //     .then(res => {
    //         setData(res.data.data)
    //     })
    //     .catch(err => console.log(err))
    // }, [])

    return (
        <div>
            <div className='navbar bg-white shadow-xl h-[100px] md:h-[15vh] w-full p-0 m-0'>
                <div className='container'>
                    <div className='flex justify-between w-full'>
                        <div className='flex items-center'>
                            <div className='md:mr-20'>
                                <Image
                                    src='tickitz-logo.svg'
                                    alt='tickitz-logo'
                                    className=''
                                    width={120}
                                    height={31}/>
                            </div>
                            <ul className='hidden  md:flex menu menu-horizontal px-1'>
                                <li>
                                    <a>Movies</a>
                                </li>
                                <li>
                                    <a>Cinemas</a>
                                </li>
                                <li>
                                    <a>Buy Ticket</a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-row hidden md:flex'>
                            <div className='flex flex-row justify-beetwen'>
                                <div className='flex-none'>
                                    <ul className='menu menu-horizontal px-1'>
                                        <li tabIndex={0}>
                                            <a>
                                                Location
                                                <svg
                                                    className='fill-current'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='20'
                                                    height='20'
                                                    viewBox='0 0 24 24'>
                                                    <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z'/>
                                                </svg>
                                            </a>
                                            <ul className='p-2 bg-base-100'>
                                                <li>
                                                    <a>Padang</a>
                                                </li>
                                                <li>
                                                    <a>Bogor</a>
                                                </li>
                                                <li>
                                                    <a>Sumedang</a>
                                                </li>
                                                <li>
                                                    <a>Batam</a>
                                                </li>
                                                <li>
                                                    <a>Bandung</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Image src='search.svg' alt='search' className='' width={50} height={50}/>
                                        </li>
                                        {
                                            isLogin
                                                ? (
                                                    <div>
                                                        <button
                                                        onClick={()=>router.push("login")}
                                                        className='btn btn-primary mr-4 text-white'>
                                                            Log In
                                                        </button>
                                                        <button 
                                                        onClick={()=>console.log("hnjdhfjdhf")}
                                                        className='btn btn-primary mr-4 text-white'>
                                                            Sign Up
                                                        </button>
                                                    </div>
                                                )
                                                : (<AfterLogin/>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:hidden flex items-center'>
                            <Image
                                src={require("@/assets/menu-mobile.png")}
                                alt='tickitz-logo'
                                className=''
                                width={40}
                                height={40}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
