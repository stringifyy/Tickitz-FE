


"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import profile from '@/assets/man.png'
import Image from 'next/image';
import Cookies from 'js-cookie';


function AfterLogin() {
  // const userId = JSON.parse(localStorage.getItem("@userLogin"))?.user.id;
  const userId = Cookies.get('userId')
  const urlApi = process.env.NEXT_PUBLIC_API_URL
  const urlImg = process.env.NEXT_PUBLIC_API_IMG
  const router = useRouter()
  const [image, setImage] = useState('')
  const [imageStatus, setImageStatus] = useState('')

  const onLogout = () => {
    // localStorage.removeItem('@userLogin')
    Cookies.remove('userId')
    Cookies.remove('userRole')
    Cookies.remove('seats')
    Cookies.remove('movies_time')
    Cookies.remove('ticket_count')
    Cookies.remove('cinema_name')
    Cookies.remove('movies_name')
    Cookies.remove('movies_date')
    Cookies.remove('total_payment')
    router.push("/")
    window.location.reload()
  }

  useEffect(() => {
    axios
      .get(`${urlApi}/api/v1/auth/users/${userId}`)
      .then(res => {
        setImage(`${urlImg}/${res.data.data.profile_image}`)
        setImageStatus(res.data.data.profile_image)
      })
      .catch(err => console.log(err))
  }, [])
  const isImg = () => {
    if (imageStatus === null || imageStatus === undefined || imageStatus === 'null') {
      return (
        <Image src={profile} height={250} width={250} alt='' />
      )
    } else {
      return (
        <Image src={image} height={250} width={250} alt='' />
      )
    }
  }
  return (
    <div>
      <li>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              {isImg()}
              {/* <img src={image} height={250} width={250} alt='' /> */}
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-40 absolute -bottom-[170px] items-center'
          >
            <li>
              <button
                key="1"
                onClick={() => router.push("account-information")}
                className='btn btn-ghost'>Profile</button>
            </li>
            <li>
              <button
                className='btn btn-ghost'>Setting</button>
            </li>
            <li>
              <button
                key="1"
                onClick={onLogout}
                className='btn btn-ghost'>Logout</button>
            </li>
          </ul>
        </div>
      </li>
    </div>
  );
}

export default AfterLogin;
