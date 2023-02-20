import React from 'react'
import Link from 'next/link'
import profile from '@/assets/images/png/profile.png'
import cardPoint from '@/assets/images/svg/loyalty-points.svg'
import Image from 'next/image'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'


export default function AccountInfo() {
  return (
    <>
    <Navbar/>
      <div className="container mt-10">
        <div className="flex flex-col lg:flex-row">
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

          {/* form card */}
          <div className="card w-full mt-5 lg:mt-0 bg-base-100 rounded-lg ml-0 lg:ml-4 shadow-md">
            <div className="card-body">

              {/* button switch action */}
              <div className="flex border-b-2 border-solid border-gray-300">
                <Link href="/account-information">
                  <button className='btn lg:-ml-4 btn-link text-black no-underline'>Account Settings</button>
                </Link>
                <Link href='/order-history'>
                  <button className='btn btn-link text-black no-underline'>Order History</button>
                </Link>
              </div>

              {/* form section*/}
              <form action="" className='mt-10'>
                <h2 className="card-title border-b-2 border-solid border-gray-200 py-5">Detail Information</h2>

                {/* firstname input */}
                <div className="flex justify-between mt-10">
                  <div className="form-control w-full max-w-sm mr-5">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input type="text" placeholder="Write your first name" className="input input-bordered w-full max-w-sm mr-5" />
                  </div>

                  {/* lastname input */}
                  <div className="form-control w-full max-w-sm">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input type="text" placeholder="Write your last name" className="input input-bordered w-full max-w-sm" />
                  </div>
                </div>

                <div className="flex justify-between mt-5">
                  <div className="form-control w-full max-w-sm mr-5">
                    <label className="label">
                      <span className="label-text">E-mail</span>
                    </label>
                    <input type="text" placeholder="Write your E-mail" className="input input-bordered w-full max-w-sm mr-5" />
                  </div>

                  {/* lastname input */}
                  <div className="form-control w-full max-w-sm">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input type="text" placeholder="Write your phone number" className="input input-bordered w-full max-w-sm" />
                  </div>
                </div>
                {/* end */}

                {/* account and privacy section */}
                <h2 className="card-title border-b-2 border-solid border-gray-200 py-5">Detail Information</h2>

                {/* new password input */}
                <div className="flex justify-between mt-10">
                  <div className="form-control w-full max-w-sm mr-5">
                    <label className="label">
                      <span className="label-text">New Password</span>
                    </label>
                    <input type="password" placeholder="Write your password" className="input input-bordered w-full max-w-sm mr-5" />
                  </div>

                  {/* lastname input */}
                  <div className="form-control w-full max-w-sm">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm your passwrod" className="input input-bordered w-full max-w-sm" />
                  </div>
                </div>

                {/* button section */}
                <div className='py-10'>
                  <button type='submit' className='btn btn-primary btn-block'>Update Changes</button>
                </div>

                {/* end */}
              </form>


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
      <Footer/>
    </>
  )
}
