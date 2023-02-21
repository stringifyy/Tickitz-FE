"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import profile from '@/assets/man.png'
import cardPoint from '@/assets/images/svg/loyalty-points.svg'
import Image from 'next/image'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirect } from 'next/navigation'
import Cookies from 'js-cookie'

export default function AccountInfo() {
  // Private route
  // const userId = JSON.parse(localStorage.getItem("@userLogin"))?.user.id;
  const userId = Cookies.get('userId')
  if (!userId || userId == null || userId == undefined) {
    redirect('/login')
  }

  const [dataUser, setDataUser] = useState([]);

  // GET USER DATA WITH AXIOS
  const url = process.env.NEXT_PUBLIC_API_URL
  // const userLogin = Cookies.get('userLogin')

  // const [userData, setUserData] = useState([])
  const [imageCurrent, setImageCurrent] = useState('')
  const [imagePreview, setImagePreview] = useState('')
  const [imageStatus, setImageStatus] = useState('')
  const [image, setImage] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    axios
      .get(`${url}/api/v1/auth/users/${userId}`)
      .then(res => {
        setDataUser(res.data.data)
        setImageCurrent(`${url}/uploads/images/${res.data.data.profile_image}`)
        setImageStatus(res.data.data.profile_image)
      })
      .catch(err => console.log(err))
  }, [])

  const onImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImage(file)
    setImagePreview(URL.createObjectURL(file))
  }

  const handleSubmit = () => {
    const body = new FormData();
    body.append('name', `${firstName} ${lastName}`);
    body.append('email', email);
    body.append('phone', phone);
    body.append('profile_image', image);

    axios.patch(`${url}/api/v1/auth/users/${userId}`, body, {
      method: 'PATCH',
      headers: {
        'Content-type': 'multipart/form-data',
      }
    })
      .then(res => {
        console.log(res);
        toast.success("Edit profile success!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch(err => {
        console.log(err);
        toast.error("Sorry, something was wrong", {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      })
  }

  const isImg = () => {
    if (imageStatus === null || imageStatus === undefined || imageStatus === 'null') {
      return (
        <>
          {imagePreview ? <Image src={imagePreview} width={200} height={200} className='w-[200px] h-[200px]' alt='profile' /> : <Image src={profile} width={200} height={200} className='w-[200px] h-[200px]' alt='profile' />}
        </>
      )
    } else {
      return (
        <>
          {imagePreview ? <Image src={imagePreview} width={200} height={200} className='w-[200px] h-[200px]' alt='profile' /> : <Image src={imageCurrent} width={200} height={200} className='w-[200px] h-[200px]' alt='profile' />}
        </>
      )
    }
  }
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="container mt-10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col">
            <div className="card w-full lg:w-80 bg-base-100 rounded-lg shadow-md">
              <div className="card-body">
                <div className="flex justify-between font-semibold">
                  <h2 className="cursor-pointer">Info</h2>
                  <h2 className='cursor-pointer' onClick={() => document.querySelector(".input-field").click()}>Edit</h2>
                  <input type='file' className='input-field' multiple hidden onChange={(e) => onImageUpload(e)} />
                </div>
                <div className='flex flex-col lg:flex-col justify-center items-center'>
                  <label htmlFor="my-modal-4">
                    {isImg()}
                    {/* {imagePreview ? <Image src={imagePreview} width={200} height={200} className='w-[200px] h-[200px]' alt='profile' /> : <Image src={imageCurrent} width={200} height={200} className='w-[200px] h-[200px]' alt='profile' />} */}
                  </label>
                  <h2 className='font-bold'>{dataUser?.name}</h2>
                  <p className='text-gray-500'>{dataUser?.phone}</p>
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
                  <Image src={require("@/assets/loyalti-point.jpeg")} alt="Card Point" />
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
              <div action="" className='mt-10'>
                <h2 className="card-title border-b-2 border-solid border-gray-200 py-5">Detail Information</h2>

                {/* firstname input */}
                <div className="flex justify-between mt-10">
                  <div className="form-control w-full max-w-sm mr-5">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text" placeholder="Write your first name" className="input input-bordered w-full max-w-sm mr-5" />
                  </div>

                  {/* lastname input */}
                  <div className="form-control w-full max-w-sm">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input
                      type="text" placeholder="Write your last name" className="input input-bordered w-full max-w-sm"
                      onChange={(e) => setLastName(e.target.value)} />
                  </div>
                </div>

                <div className="flex justify-between mt-5">
                  <div className="form-control w-full max-w-sm mr-5">
                    <label className="label">
                      <span className="label-text">E-mail</span>
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="text" placeholder="Write your E-mail" className="input input-bordered w-full max-w-sm mr-5" />
                  </div>

                  {/* lastname input */}
                  <div className="form-control w-full max-w-sm">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      type="text" placeholder="Write your phone number" className="input input-bordered w-full max-w-sm" />
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
                    <input
                      // onChange={(e)=>setFormUser({
                      //   ...formUser,
                      //   password:e.target.value
                      // })} 
                      type="password" placeholder="Write your password" className="input input-bordered w-full max-w-sm mr-5" />
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
                  <button className='btn btn-primary btn-block' onClick={handleSubmit}>Update Changes</button>
                </div>

                {/* end */}
              </div>


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
      <Footer />
    </>
  )
}
