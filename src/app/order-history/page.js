import React from 'react'
import Link from 'next/link'
import cardPoint from '@/assets/images/svg/loyalty-points.svg'
import Image from 'next/image'
// import image
import profile from '@/assets/images/png/profile.png'
import cineone from '@/assets/images/svg/cineone21.svg'
import ebuid from '@/assets/images/svg/ebuid.svg'
import AccountInfo from '../account-information/page'
import { redirect } from 'next/navigation'
import Cookies from 'js-cookie'
// import AccountInfo from ''

export default function OrderHistory() {
  // Private route
  // const userId = JSON.parse(localStorage.getItem("@userLogin"))?.user.id;
  const userId = Cookies.get('userId')
  if (!userId || userId == null || userId == undefined) {
    redirect('/login')
  }
  return (
    <>
      <div className="container mt-10">
        <div className="flex flex-col lg:flex-row">

          {/* card photo */}
          <div className="flex flex-col">
            <div className="card w-full lg:w-80 bg-base-100 rounded-lg shadow-md">
              <div className="card-body">
                <div className="flex justify-between font-semibold">
                  <h2 className="">Info</h2>
                  <Link href="">Edit</Link>
                </div>
                <div className='flex flex-col lg:flex-col justify-center items-center'>
                  <label htmlFor="my-modal-4">
                    <Image src={profile} alt="profile" htmlFor="" />
                  </label>
                  <h2 className='font-bold'>Firman Subagja</h2>
                  <p className='text-gray-500'>Moviegoers</p>
                </div>
              </div>
            </div>

            {/* card loyalty point */}
            <div className="card w-full lg:w-80 bg-base-100 rounded-lg mt-1 shadow-md">
              <div className="card-body ">
                <div className='font-semibold'>
                  <h2>Loyalty Points</h2>
                </div>
                <div className='flex flex-row lg:flex-col justify-center'>
                  <Image src={cardPoint} alt="Card Point" />
                </div>
              </div>
            </div>
          </div>
          {/* end */}

          {/* history card */}
          <div className="card w-full mt-5 lg:mt-0 bg-base-100 rounded-lg ml-0 lg:ml-4 shadow-md">
            <div className="card-body">
              {/* <Image src={requirre("@/")}/> */}

              {/* button switch action */}
              <div className="flex border-b-2 border-solid border-gray-300">

                {/* navbar action */}
                <Link href="/account-information">
                  <button className='btn lg:-ml-4 btn-link text-black no-underline'>Account Settings</button>
                </Link>
                <Link href='/order-history'>
                  <button className='btn btn-link text-black no-underline'>Order History</button>
                </Link>
              </div>

              {/* history card */}
              {[1, 2, 3].map(() => {
                return (
                  <>
                    <div className="card w-full bg-white border-2 rborder-solid border-gray-200 rounded-xl mt-5">
                      <div className="card-body">
                        <span className='text-gray-400'>Tuesday, 07 July 2020 - 04:30pm</span>
                        <div className='flex justify-between'>
                          <div>
                            <h2 className="card-title">Spider-mega</h2>
                          </div>
                          <figure>
                            <Image src={cineone} alt="Movies Place" />
                          </figure>
                        </div>

                        {/* button */}
                        <div className="card-actions justify-between border-t-2 border-solid border-gray-300 py-4">
                          <button className="btn btn-success">Buy Now</button>
                          <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn">
                              Show Detail
                              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                              <li><a>Item 1</a></li>
                              <li><a>Item 2</a></li>
                            </ul>
                          </div>
                        </div>
                        {/* end */}
                      </div>
                    </div>
                  </>
                )
              })}



            </div>
          </div>
          {/* end */}
        </div>
      </div>

      {/* modal */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="relative" htmlFor="">
          <div className='flex flex-col justify-center items-center'>
            <div className="avatar">
              <div className="w-56 rounded-full">
                <Image src={profile} alt="profile" />
              </div>
            </div>
          </div>
        </label>
      </label>
    </>
  )
}
