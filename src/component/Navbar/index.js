'use client';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] });
import AfterLogin from './afterLogin';

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {/* start navbar */}
      <div className='navbar bg-white shadow-xl h-[15vh] w-[100vw] flex flex-row justify-around '>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Image
                src='tickitz-logo.svg'
                alt='tickitz-logo'
                className=''
                width={150}
                height={200}
              />
            </li>
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

        <div className='flex flex-row'>
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
                      viewBox='0 0 24 24'
                    >
                      <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
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
                  <Image
                    src='search.svg'
                    alt='search'
                    className=''
                    width={50}
                    height={50}
                  />
                </li>
                {isLogin ? (
                  <AfterLogin />
                ) : (
                  <div>
                    <button className='btn btn-primary mr-4 text-white'>
                      Log In
                    </button>
                    <button className='btn btn-primary mr-4 text-white'>
                      Sign Up
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end header */}
    </>
  );
}
